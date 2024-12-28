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
  
  
  export default  async function GraficoPizza() {
 
    const ChartValue = await tratandoDados()
    const grupos =[]
    const tamanhoGrupo = 4
    
    for(let i = 0; i < ChartValue.length; i += tamanhoGrupo){
    
        const grupo = ChartValue.slice(i,i + tamanhoGrupo)
        const SomarGrupo = grupo.reduce((acc, valor) => acc + valor, 0)
    
        grupos.push(SomarGrupo)
    }   

    return grupos
}
