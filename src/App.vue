<template>
  <h1>Welcome to dash!</h1>
  <p>CPU Temperature: {{ cpuTemperature }}  &#x2103;</p>
  <p>GPU Model: {{ gpuInfo.controllers[0].model }} </p>
</template>

<script>
import { ref } from 'vue'
const electron = require('electron')

export default {
  name: 'App',
  setup () {
    const cpuTemperature = ref(null)
    const gpuInfo = ref(null)

    electron.ipcRenderer.on('gpu', (event, data) => {
      console.log('gpu-event', event);
      console.log('gpu-data', data)
      gpuInfo.value = data
    })

    electron.ipcRenderer.on('cpu-temperature', (event, data) => {
      console.log('cpu-temperature-event', event)
      cpuTemperature.value = data.main
    })

    return { cpuTemperature, gpuInfo }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
