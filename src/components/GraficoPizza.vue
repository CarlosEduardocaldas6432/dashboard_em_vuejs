<template> 

<div>

    <PolarArea :data="data" :options="options" style="width: 100%; height: 300px;"  />

</div>

</template>

<script>
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { PolarArea } from 'vue-chartjs'
import ConfigGraficoPizza from '../ConfigGraficoPizza.js'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

const dadosGrafico =  await ConfigGraficoPizza()


export default {
  name: 'App',
  components: { 
    PolarArea
  },
  data() {
    return {

        data: {
   labels: ["1 Quadri","2 Quadri","3 Quadri" ],
   datasets: [{
     label:"Receita",
     data: dadosGrafico,
     backgroundColor: [
       'rgb(255, 99, 132)',
       'rgb(75, 192, 192)',
       'rgb(255, 205, 86)',
       'rgb(201, 203, 207)',
       'rgb(54, 162, 235)'
     ]
   }]
   }
   
    , options: {
     responsive: true,
     maintainAspectRatio: false
   }
   
    }
  }
}

</script>


<style scoped>

div{

    
    width: 420px;
    height: 254px;
    background-color:#f6f6f9;
    border-radius: 20px;
    box-shadow: rgba(132, 139, 200, 0.18) 0px 32px 48px 0px;
}

</style>