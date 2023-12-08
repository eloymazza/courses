<script setup>
const name = 'Hola Vue'
const arrayColors = ['red', 'green', 'blue']
const fruitsArray = [
  {
    name: 'manzana',
    color: 'rojo'
  },
  {
    name: 'pera',
    color: 'verde'
  },
  {
    name: 'platano',
    color: 'amarillo'
  }
]
const active = true
</script>

<template>
  <h1>{{ name.toUpperCase() }}</h1>
  <div>
    <h3>{{ arrayColors }}</h3>
    <h3 :style="`color: ${arrayColors[0]}`">I'm blue</h3>
    <h3>{{ active ? 'estoy activo' : 'estoy inactivo' }}</h3>
    <p v-if="active">Estoy activo</p>
    <p v-else>Estoy inactivo</p>
    <h2>Colores</h2>
    <ul>
      <li v-for="(color, index) in arrayColors" :key="index + color">{{ index }} - {{ color }}</li>
    </ul>
    <h2>Frutas</h2>
    <ul>
      <li v-for="(fruit, index) in fruitsArray" :key="index + fruit.name">
        <ul>
          <li v-for="(value, property, index) in fruit" :key="property">
            {{ index }} {{ property }} : {{ value }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  color: gray;
}
</style>
