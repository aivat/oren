<template>
  <div>
    <div>
     Тут будет инстаграмм 
             <div class="wrap" v-for="item in secrets" >
          <p class="ftw100"> id:<b>{{ item}}</b> </p>
          <p class="ftw300"></p>

        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: { 
    ...mapGetters({
    secrets: 'instorens'
    })
  },
  created () {
    this.$store.dispatch('getInstorens', 0),
    window.addEventListener('scroll', this.handleScroll)
  },
}
</script>

<style scoped>
</style>