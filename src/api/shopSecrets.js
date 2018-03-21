/**
 * Mocking client-server processing
 */
const _secrets = [
  {"id": 1, "content": "\"Странная\", — подумала я, когда она проходила мимо. Девушка лет 30, в заляпанном пуховике, надетым поверх желтого домашнего халата. \"Красивая\", — подумала я, когда она села в электричке напротив меня. Она сверлила взглядом парня с дредами, а потом, когда он ушёл, пересела и стала так же, не отводя взгляда, смотреть на седоватого мужчину. Он замешкался, поправляя свою кепку. А я просто сижу, просто наблюдаю, мне не жаль ее, она не выглядит как больной человек, она просто красивая со своими странностями. ", "id_author": 2519, "author": "admin", "plus": 113, "minus": 646, "views": 98, "count_comment": 125, "sex_ material": 0, "date_of_creat": "2018-03-04 14:13:31"},
  {"id": 2, "content": "Бесят инженеры! Ничего нормального не могут придумать, причём ни наши, ни забугорные. Вот взять хоть автомобиль. Вот и красивый, и мощный, навороты там всякие. Вот почему подогрев жопы придумали, а систему, чтоб за колесом вот этой вот дурацкой глыбы льда не было, не придумали! Ну машины же... Ну, не один миллион некоторые стоят, а глыба эта есть у всех до одной! Р. S. Я тоже инженер.", "id_author": 5362, "author": "aivat", "plus": 582, "minus": 646, "views": 1999, "count_comment": 5, "sex_ material": 0, "date_of_creat": "2018-03-04 14:13:31"},
  {"id": 3, "content": "Я не сторонник отношений, в которых люди несчастны. Неважно: дети, дом, машина. Может, потому я и живу счастливо, не теряя времени. Моя бывшая — мать моего ребёнка. Развод произошёл очень быстро, просто понял сразу после рождения сына, что не люблю ее. Как-то пришёл после работы и в очередной раз на скривлённое лицо бывшей отреагировал: \"Милая, я хочу развестись!\" Но! С ребёнком я помогаю: три раза в неделю я забираю пацана к себе, всю одежду покупаю я и кормим малого тоже в основном на свои деньги. С бывшей отношения никакие, но до сих пор я не могу обьяснить феномен, в котором она постит себе на стену всякую херню типа «сунул-вышел и пропал». Злюсь нереально, что сын подрастёт и будет слушать эту херню про меня!", "id_author": 29, "author": "ayna_iman", "plus": 1879, "minus": 696, "views": 8, "count_comment": 1789, "sex_ material": 1, "date_of_creat": "2018-03-04 14:13:31"},
  {"id": 4, "content": "\"Странная\", — подумала я, когда она проходила мимо. Девушка лет 30, в заляпанном пуховике, надетым поверх желтого домашнего халата. \"Красивая\", — подумала я, когда она села в электричке напротив меня. Она сверлила взглядом парня с дредами, а потом, когда он ушёл, пересела и стала так же, не отводя взгляда, смотреть на седоватого мужчину. Он замешкался, поправляя свою кепку. А я просто сижу, просто наблюдаю, мне не жаль ее, она не выглядит как больной человек, она просто красивая со своими странностями. ", "id_author": 2519, "author": "admin", "plus": 113, "minus": 646, "views": 98, "count_comment": 125, "sex_ material": 0, "date_of_creat": "2018-03-04 14:13:31"},
  {"id": 5, "content": "Бесят инженеры! Ничего нормального не могут придумать, причём ни наши, ни забугорные. Вот взять хоть автомобиль. Вот и красивый, и мощный, навороты там всякие. Вот почему подогрев жопы придумали, а систему, чтоб за колесом вот этой вот дурацкой глыбы льда не было, не придумали! Ну машины же... Ну, не один миллион некоторые стоят, а глыба эта есть у всех до одной! Р. S. Я тоже инженер.", "id_author": 5362, "author": "aivat", "plus": 582, "minus": 646, "views": 1999, "count_comment": 5, "sex_ material": 0, "date_of_creat": "2018-03-04 14:13:31"},
  {"id": 6, "content": "Я не сторонник отношений, в которых люди несчастны. Неважно: дети, дом, машина. Может, потому я и живу счастливо, не теряя времени. Моя бывшая — мать моего ребёнка. Развод произошёл очень быстро, просто понял сразу после рождения сына, что не люблю ее. Как-то пришёл после работы и в очередной раз на скривлённое лицо бывшей отреагировал: \"Милая, я хочу развестись!\" Но! С ребёнком я помогаю: три раза в неделю я забираю пацана к себе, всю одежду покупаю я и кормим малого тоже в основном на свои деньги. С бывшей отношения никакие, но до сих пор я не могу обьяснить феномен, в котором она постит себе на стену всякую херню типа «сунул-вышел и пропал». Злюсь нереально, что сын подрастёт и будет слушать эту херню про меня!", "id_author": 29, "author": "ayna_iman", "plus": 1879, "minus": 696, "views": 8, "count_comment": 1789, "sex_ material": 1, "date_of_creat": "2018-03-04 14:13:31"},
  {"id": 7, "content": "\"Странная\", — подумала я, когда она проходила мимо. Девушка лет 30, в заляпанном пуховике, надетым поверх желтого домашнего халата. \"Красивая\", — подумала я, когда она села в электричке напротив меня. Она сверлила взглядом парня с дредами, а потом, когда он ушёл, пересела и стала так же, не отводя взгляда, смотреть на седоватого мужчину. Он замешкался, поправляя свою кепку. А я просто сижу, просто наблюдаю, мне не жаль ее, она не выглядит как больной человек, она просто красивая со своими странностями. ", "id_author": 2519, "author": "admin", "plus": 113, "minus": 646, "views": 98, "count_comment": 125, "sex_ material": 0, "date_of_creat": "2018-03-04 14:13:31"},
  {"id": 8, "content": "Бесят инженеры! Ничего нормального не могут придумать, причём ни наши, ни забугорные. Вот взять хоть автомобиль. Вот и красивый, и мощный, навороты там всякие. Вот почему подогрев жопы придумали, а систему, чтоб за колесом вот этой вот дурацкой глыбы льда не было, не придумали! Ну машины же... Ну, не один миллион некоторые стоят, а глыба эта есть у всех до одной! Р. S. Я тоже инженер.", "id_author": 5362, "author": "aivat", "plus": 582, "minus": 646, "views": 1999, "count_comment": 5, "sex_ material": 0, "date_of_creat": "2018-03-04 14:13:31"},
  {"id": 9, "content": "Я не сторонник отношений, в которых люди несчастны. Неважно: дети, дом, машина. Может, потому я и живу счастливо, не теряя времени. Моя бывшая — мать моего ребёнка. Развод произошёл очень быстро, просто понял сразу после рождения сына, что не люблю ее. Как-то пришёл после работы и в очередной раз на скривлённое лицо бывшей отреагировал: \"Милая, я хочу развестись!\" Но! С ребёнком я помогаю: три раза в неделю я забираю пацана к себе, всю одежду покупаю я и кормим малого тоже в основном на свои деньги. С бывшей отношения никакие, но до сих пор я не могу обьяснить феномен, в котором она постит себе на стену всякую херню типа «сунул-вышел и пропал». Злюсь нереально, что сын подрастёт и будет слушать эту херню про меня!", "id_author": 29, "author": "ayna_iman", "plus": 1879, "minus": 696, "views": 8, "count_comment": 1789, "sex_ material": 1, "date_of_creat": "2018-03-04 14:13:31"},
  {"id": 10, "content": "\"Странная\", — подумала я, когда она проходила мимо. Девушка лет 30, в заляпанном пуховике, надетым поверх желтого домашнего халата. \"Красивая\", — подумала я, когда она села в электричке напротив меня. Она сверлила взглядом парня с дредами, а потом, когда он ушёл, пересела и стала так же, не отводя взгляда, смотреть на седоватого мужчину. Он замешкался, поправляя свою кепку. А я просто сижу, просто наблюдаю, мне не жаль ее, она не выглядит как больной человек, она просто красивая со своими странностями. ", "id_author": 2519, "author": "admin", "plus": 113, "minus": 646, "views": 98, "count_comment": 125, "sex_ material": 0, "date_of_creat": "2018-03-04 14:13:31"},
  {"id": 11, "content": "Бесят инженеры! Ничего нормального не могут придумать, причём ни наши, ни забугорные. Вот взять хоть автомобиль. Вот и красивый, и мощный, навороты там всякие. Вот почему подогрев жопы придумали, а систему, чтоб за колесом вот этой вот дурацкой глыбы льда не было, не придумали! Ну машины же... Ну, не один миллион некоторые стоят, а глыба эта есть у всех до одной! Р. S. Я тоже инженер.", "id_author": 5362, "author": "aivat", "plus": 582, "minus": 646, "views": 1999, "count_comment": 5, "sex_ material": 0, "date_of_creat": "2018-03-04 14:13:31"},
  {"id": 12, "content": "Я не сторонник отношений, в которых люди несчастны. Неважно: дети, дом, машина. Может, потому я и живу счастливо, не теряя времени. Моя бывшая — мать моего ребёнка. Развод произошёл очень быстро, просто понял сразу после рождения сына, что не люблю ее. Как-то пришёл после работы и в очередной раз на скривлённое лицо бывшей отреагировал: \"Милая, я хочу развестись!\" Но! С ребёнком я помогаю: три раза в неделю я забираю пацана к себе, всю одежду покупаю я и кормим малого тоже в основном на свои деньги. С бывшей отношения никакие, но до сих пор я не могу обьяснить феномен, в котором она постит себе на стену всякую херню типа «сунул-вышел и пропал». Злюсь нереально, что сын подрастёт и будет слушать эту херню про меня!", "id_author": 29, "author": "ayna_iman", "plus": 1879, "minus": 696, "views": 8, "count_comment": 1789, "sex_ material": 1, "date_of_creat": "2018-03-04 14:13:31"},
  {"id": 13, "content": "\"Странная\", — подумала я, когда она проходила мимо. Девушка лет 30, в заляпанном пуховике, надетым поверх желтого домашнего халата. \"Красивая\", — подумала я, когда она села в электричке напротив меня. Она сверлила взглядом парня с дредами, а потом, когда он ушёл, пересела и стала так же, не отводя взгляда, смотреть на седоватого мужчину. Он замешкался, поправляя свою кепку. А я просто сижу, просто наблюдаю, мне не жаль ее, она не выглядит как больной человек, она просто красивая со своими странностями. ", "id_author": 2519, "author": "admin", "plus": 113, "minus": 646, "views": 98, "count_comment": 125, "sex_ material": 0, "date_of_creat": "2018-03-04 14:13:31"},
  {"id": 14, "content": "Бесят инженеры! Ничего нормального не могут придумать, причём ни наши, ни забугорные. Вот взять хоть автомобиль. Вот и красивый, и мощный, навороты там всякие. Вот почему подогрев жопы придумали, а систему, чтоб за колесом вот этой вот дурацкой глыбы льда не было, не придумали! Ну машины же... Ну, не один миллион некоторые стоят, а глыба эта есть у всех до одной! Р. S. Я тоже инженер.", "id_author": 5362, "author": "aivat", "plus": 582, "minus": 646, "views": 1999, "count_comment": 5, "sex_ material": 0, "date_of_creat": "2018-03-04 14:13:31"},
  {"id": 15, "content": "Я не сторонник отношений, в которых люди несчастны. Неважно: дети, дом, машина. Может, потому я и живу счастливо, не теряя времени. Моя бывшая — мать моего ребёнка. Развод произошёл очень быстро, просто понял сразу после рождения сына, что не люблю ее. Как-то пришёл после работы и в очередной раз на скривлённое лицо бывшей отреагировал: \"Милая, я хочу развестись!\" Но! С ребёнком я помогаю: три раза в неделю я забираю пацана к себе, всю одежду покупаю я и кормим малого тоже в основном на свои деньги. С бывшей отношения никакие, но до сих пор я не могу обьяснить феномен, в котором она постит себе на стену всякую херню типа «сунул-вышел и пропал». Злюсь нереально, что сын подрастёт и будет слушать эту херню про меня!", "id_author": 29, "author": "ayna_iman", "plus": 1879, "minus": 696, "views": 8, "count_comment": 1789, "sex_ material": 1, "date_of_creat": "2018-03-04 14:13:31"}
]
var arr = ["Почему", "надо", "учить", "JavaScript", "Почему", "надо", "учить","Почему", "надо", "учить", "JavaScript", "Почему", "надо", "учить","Почему", "надо", "учить", "JavaScript", "Почему", "надо", "учить","Почему", "надо", "учить", "JavaScript", "Почему", "надо", "учить","Почему", "надо", "учить", "JavaScript", "Почему", "надо", "учить"];
export default {
  getSecrets (cb) {
    setTimeout(() => cb(_secrets), 100)
  },
    
//  getAllSecrets (lastSecret, cb) {
//    setTimeout(() => cb(_secrets.slice(lastSecret, lastSecret+10)), 100)
//  }
    
getAllSecrets (lastSecret, cb) {
    setTimeout(() => cb(
       arr.slice(lastSecret, lastSecret+10) 
    ), 100)
  }
}