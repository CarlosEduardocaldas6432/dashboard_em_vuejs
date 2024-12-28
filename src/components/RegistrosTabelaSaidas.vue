<template> 

<h4>Registros</h4>  
  

<table class="table">
    <thead>
      <tr>
        <th></th>
        <th>Descrição</th>
        <th>Valor</th>
        <th>Data</th>
      </tr>
    </thead>
    <tbody id="table-body">
      <tr>
        <td class="icon-table">
          <span class="material-symbols-outlined">
            trending_down
          </span>
        </td>
        <td class="description">Conta de Luz</td>
        <td class="amount">R$ 280,00</td>
        <td class="date">20/08/2023</td>
      </tr>
    </tbody>
  </table>





</template>
    

<script setup>

    

async function gerarTabela() {
  
  const data = await getDados()
  
  const lista = data.output
  
  
  const tbody = document.getElementById("table-body")

tbody.innerHTML = ""

const result = lista.filter(item => {

  const [year , month] = item.date.split("-")
  const monthKey = `${year}-${month}`

  if (monthKey === "2023-01") {
    return item
  }
})

result.forEach(item => {

  item.dateObj = new Date(item.date)
})

result.sort((a,b) => a.dateObj - b.dateObj)

// escrevendo o HTML

result.forEach(item => {
  const row = document.createElement("tr");

  const iconCell = document.createElement("td");
  iconCell.classList.add("icon-table");
  iconCell.innerHTML = item.type === "input" 
      ? '<span class="material-symbols-outlined positive"> trending_up </span>'
      : '<span class="material-symbols-outlined negative"> trending_down </span>';
  row.appendChild(iconCell);

  const descriptionCell = document.createElement("td");
  descriptionCell.classList.add("description");
  descriptionCell.textContent = item.description;
  row.appendChild(descriptionCell);

  const amountCell = document.createElement("td");
  amountCell.classList.add("amount");
  amountCell.textContent = `${item.type === "output" ? `- R$ ${item.amount.toFixed(2)}` : `R$ ${item.amount.toFixed(2)}`}`;
  row.appendChild(amountCell);

  const date = document.createElement("td");
  date.classList.add("date");
  date.textContent = formatDate(item.date);
  row.appendChild(date);

  tbody.appendChild(row);
});




  
  
  }
  
  gerarTabela()
  

function formatDate(date){

const [year, month, day ] = date.split("-")
return `${day}/${month}/${year}`

}

  
  async function getDados(){
  
  const response = await fetch('/data.json')
  const resJson = await response.json()
  return resJson
  
  }
  
  
        
    
    
</script>
    
    
<style scoped>
    
h4{

  width: 75px;  
  margin-left: 80px;
  margin-top: 32px;
  border-bottom: solid  #4c84f6 4px;
}



.positive {
  background-color: #4ce31e;
}

.negative {
  background-color: #d80f0f;
}




.table {
  margin: 1rem auto 2rem;
  padding: 1rem;

  width: 90%;
  text-align: center;

  transition: all .3s ease;

  border-spacing: 0;

  border-radius: 20px;
  background-color: #f6f6f9;
  box-shadow:0 2rem 3rem rgba(132, 139, 200, 0.18);

  -webkit-animation: fade-in 2.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: fade-in 2.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

}

.table:hover {
  box-shadow: none;
}

.table tbody tr:hover {
  background: rgba(77, 117, 220, 0.7);
  color: #fff;

  cursor: pointer;

  transition: all .3s ease-in-out;
}

.table tbody td {
  height: 3.8rem;
  border-bottom: 1px solid rgba(132, 139, 200, 0.18);
}

.table tbody tr:last-child td {
  border-bottom: none;
}

.icon-table span {
  width: fit-content;
  padding: .75rem;


  font-size: 1rem;
  border-radius: 50%;
  color: #fff;
}


@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}



</style>