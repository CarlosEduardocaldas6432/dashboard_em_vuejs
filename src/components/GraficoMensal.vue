<template> 

<div>
   
<Bar
id="my-chart-id"
:options="chartOptions"
:data="chartData" style="width: 90%; height: 90%;"
  />       


</div>



</template>
    
<script>
import { ref } from 'vue';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


const barChartValue = await tratandoDados()

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
]


export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
      labels:meses,
      datasets: [ {
          
      label: 'Balanço Mensal',
      data:barChartValue,
      backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
      
      
      } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}


async function getDados(){

const response = await fetch('/data.json')
const resJson = await response.json()
return resJson

}

// tratando os dados

 async function tratandoDados(){

  const data = await getDados()

  const juntandoDados = [...data.input, ...data.output]

  const somandoDados = juntandoDados.reduce((acc, item)  => {

    // desestruturação do array
    const [ano,mes] = item.date.split("-")
    const monthKey = `${ano}-${mes}`

    //usa chaves do mes para somar valores
    acc[monthKey] = acc[monthKey] || {input: 0, output: 0}

    // acumular valores input e output
    if(data.input.includes(item)) {

      acc[monthKey].input += item.amount

    } else {

      acc[monthKey].output += item.amount

    }

    return acc

  },{})

  // diferencia dos valores
  const resul = Object.values(somandoDados).map(({input, output}) => input - output)
  
  return resul
}




</script>
    
    
<style scoped>
    
div{
    padding: 1rem;
    width: 620px;
    height: 220px;
    background-color:#f6f6f9;
    border-radius: 20px;
    margin-left: 64px;
    box-shadow: rgba(132, 139, 200, 0.18) 0px 32px 48px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

}


 </style>