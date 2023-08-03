<template>
  <button @click="increment" />
  <div v-if="count % 2 === 0">Count:{{ count }}. Count is even</div>

  <div v-if="count % 2 !== 0">Count:{{ count }}. Count is odd</div>
</template>

<script>
import { computed, inject } from "vue";

export default {

    computed:{
        count(){
           return  this.$store.state.count
        }
    },
    methods:{
        increment(){
            return this.$store.commit('increment')
        }
    },

};
</script>
