<template>
  <div>
    <div>
        Скоро будут тут исключительно новости
        <div class="wrap" v-for="item in 5">
          <p class="ftw100">Политика Происшествия Спорт 100</p>
          <p class="ftw300">Политика Происшествия Спорт 300</p>
          <p class="ftw400">Политика Происшествия Спорт 400</p>
          <p class="ftw500">Политика Происшествия Спорт 500</p>
          <p class="ftw700">Политика Происшествия Спорт 700</p>
        </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.wrap {
  background-color: #fff;
  border-radius: 4px;
  margin: 15px 4px;
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
