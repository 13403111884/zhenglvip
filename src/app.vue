<template>
  <div>
    <router-link :to="{ name: 'A' }" v-text="'to A'"/>
    <router-link :to="{ name: 'B' }" v-text="'to B'"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {}
}
</script>
