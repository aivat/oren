<template>
  <ul>
    <li v-for="secret in secrets">
      {{ secret.id }} - {{ secret.content }}
      <br>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
    secrets: 'allSecrets',
    lastSecret: 'lastIdSecret',
    //loading: 'secretLoading',
    //error: 'secretError'
  }),
  created () {
    this.$store.dispatch('getSecrets')
  },
  methods: {
        handleScroll (event, lastSecret, loading, error) {
        // почему так высчитывается так до конца и не разобрался, но математическим путем опряделяется верно. 40 пиксей добавил, чтобы загрузка происхода еще до прокрутки до самого низа
        let scrollTop = window.pageYOffset,
            listOffsetHeight = document.body.offsetHeight,
            listScrollHeight = document.body.scrollHeight

        let diffHeight = listScrollHeight - listOffsetHeight

//        if (diffHeight <= (scrollTop+40) && !loading && !error) {
//            this.$store.dispatch('getSecrets', lastSecret)
//        }
            
         if (diffHeight <= (scrollTop+40)) {
            this.$store.dispatch('getSecrets', lastSecret)
        }
    }
  }
}
</script>
<style>
    ul {
        width: 500px;
        margin: 0 auto;
    }
</style>