<template>
  <div id="canvas"></div>
</template>
<script setup>
// import { onMounted, nextTick } from 'vue'
// import pizzaDiagram from './resources/pizza-collaboration.xml'
// import BpmnViewer from 'bpmn-js'
// import axios from 'axios'
// onMounted(() => {
//   nextTick(async () => {
//     const { data } = await axios.get('/pizza-collaboration.xml')
//     console.log(data)
//     var viewer = new BpmnViewer({
//       container: '#canvas'
//     })
//     console.log(pizzaDiagram)
//     viewer
//       .importXML(data)
//       .then(function (result) {
//         const { warnings } = result

//         console.log('success !', warnings)

//         viewer.get('canvas').zoom('fit-viewport')
//       })
//       .catch(function (err) {
//         const { warnings, message } = err

//         console.log('something went wrong:', warnings, message)
//       })
//   })
// })
</script>
