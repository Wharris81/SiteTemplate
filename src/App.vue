<template>
  <v-app id="app">
    <body style="height:100%;width:100%;">
    <router-view></router-view>
    </body>
  </v-app>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
html, body {
  height: 100%;
}
</style>
