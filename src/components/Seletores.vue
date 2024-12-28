<template> 

    <div>
       <button class="todos" @click="selecionaTodos" >Todos</button> 
       <button class="entradas" @click="selecionaEntrada"  >Entradas</button> 
       <button class="saidas" @click="selecionaSaidas" >Saídas</button> 
    </div>


    <RegistrosTabelaTodos v-if="tabelaTodos" />
    <RegistrosTabelaEntradas v-if="tabelaEntradas" />
    <RegistrosTabelaSaidas v-if="tabelasaidas" />
        
    </template>
        
<script setup>
import { ref } from 'vue';
import RegistrosTabelaTodos from './RegistrosTabelaTodos.vue';
import RegistrosTabelaEntradas from './RegistrosTabelaEntradas.vue';
import RegistrosTabelaSaidas from './RegistrosTabelaSaidas.vue';

const tabelaTodos = ref(true)
const tabelaEntradas = ref(false)
const tabelasaidas = ref(false)





        
function selecionaEntrada () {

tabelaTodos.value = false
tabelaEntradas.value = true
tabelasaidas.value = false



const entradas = document.querySelector(".entradas")
const todos = document.querySelector(".todos")
const saidas = document.querySelector(".saidas")

entradas.style.backgroundColor = "#4d75dc";
todos.style.backgroundColor = "white";
saidas.style.backgroundColor = "white";

entradas.style.color = "white";
todos.style.color = "black";
saidas.style.color = "black";
}

        
        
        
function selecionaTodos () {


  tabelaTodos.value = true
  tabelaEntradas.value = false
  tabelasaidas.value = false


const entradas = document.querySelector(".entradas")
const todos = document.querySelector(".todos")
const saidas = document.querySelector(".saidas")

entradas.style.backgroundColor = "white";
todos.style.backgroundColor = "#4d75dc";
saidas.style.backgroundColor = "white";

entradas.style.color = "black";
todos.style.color = "white";
saidas.style.color = "black";
}

        
        
        
function selecionaSaidas () {

tabelaTodos.value = false
tabelaEntradas.value = false
tabelasaidas.value = true


const entradas = document.querySelector(".entradas")
const todos = document.querySelector(".todos")
const saidas = document.querySelector(".saidas")

entradas.style.backgroundColor = "white";
todos.style.backgroundColor = "white";
saidas.style.backgroundColor = "#4d75dc";

entradas.style.color = "black";
todos.style.color = "black";
saidas.style.color = "white";
}

        
        
        
        
</script>
        
        
<style scoped>
        
  div{
    display: flex;
    width: 180px;
    height: 30px; 
    margin: auto;            
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    margin-top: 80px;

  }

  button{
      padding: 7.5px;
      border-radius: 15px;
      border: none;
      font-size: 13px;
      font-weight:600;
      color: #363949;
      background-color: white;
      transition: 0.3s;
    }
  button:hover{

    background-color: rgb(232, 232, 232);
  }

  .todos{
    cursor: pointer;
    background-color: #4d75dc;
    color: white;
  }


  .entradas{

    cursor: pointer;

  }


  .saidas{

    cursor: pointer;

  }

        
 </style>