<template>
  <div>
    <div>
        Скоро будут тут исключительно новости
        <div class="wrap" v-for="item in news" :key="item.id">
          <p class="ftw100"> id:<b>{{ item.id }}</b> {{ item.title }}</p>
          <p class="ftw300">{{ item.content }}</p>
          <p class="ftw400">{{ item.category }}</p>
          <p class="ftw500"></p>
          <p class="ftw700">sex_material: {{ item.sex_material}}</p>
          <p class="ftw700">plus-minus: {{ item.plus - item.minus}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    news: state => state.news.all
  }),
  methods: mapActions('cart', [
    'addProductToCart'
  ]),
  created () {
    this.$store.dispatch('getAllNews', 'economics')
  }
}
</script>

<style scoped>
.wrap {
  background-color: #fff;
  border-radius: 4px;
  margin: 5px 5px;
  padding: 10px 15px;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
}
.ftw100 {
  font-weight: 100;
}
.ftw300 {
  font-weight: 300;
}
.ftw400 {
  font-weight: 400;
}
.ftw500 {
  font-weight: 500;
}
.ftw700 {
  font-weight: 700;
}
</style>
