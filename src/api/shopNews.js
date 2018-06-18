const _news = [
    {"id": 1, "title": "Мексиканские болельщики привезли в Россию картонную фигуру друга, потому что жена не отпустила его на футбол", "content": "19 января истекло действие билля о финансировании, а полноценный бюджет на 2018 год не был принят из-за разногласий республиканцев и демократов.", "plus": 70, "minus": 50, "comment": 37, "category": "politics", "sex_material": 1},
    {"id": 2, "title": "Россияне массово подписывают петиции против пенсионной реформы. Их авторы готовят протесты во время ЧМ", "content": "Покинет ли она пост ведущей навсегда — пока точно не известно  пока точно не известно пока точно не известно пока точно не известно пока точно не известно пока точно не ...", "plus": 1700, "minus": 50, "comment": 7, "category": "economics", "sex_material": 0},
    {"id": 3, "title": "Первые работы креативных директоров: история Максима Пономарёва из Friends Moscow", "content": "Конспект колонки Джона Каррейру на Wired о корпоративной культуре в биотехнологическом стартапе Theranos, основателя которого обвинили в мошенничестве.", "plus": 180, "minus": 200, "comment": 137, "category": "society", "sex_material": 0},
    {"id": 4, "title": "«Кто не готов беспрекословно следовать за нами, может убираться отсюда»", "content": "Покинет ли она пост ведущей навсегда — пока точно не известно  пока точно не известно пока точно не известно пока точно не известно пока точно не известно пока точно не", "plus": 251, "minus": 200, "comment": 137, "category": "society", "sex_material": 1},
    {"id": 5, "title": "Американский сервис по аренде автомобилей Hertz возобновил работу в России", "content": "Сервис по аренде автомобилей Hertz возобновил работу в России после прекращения в августе 2017 года. Об этом vc.ru сообщил представитель нового мастера-франчайзи сервиса — компании «Премиум Мобилити Груп».", "plus": 230, "minus": 200, "comment": 137, "category": "society", "sex_material": 0},
    {"id": 6, "title": "Мексиканские болельщики привезли в Россию картонную фигуру друга, потому что жена не отпустила его на футбол", "content": "19 января истекло действие билля о финансировании, а полноценный бюджет на 2018 год не был принят из-за разногласий республиканцев и демократов.", "plus": 70, "minus": 50, "comment": 37, "category": "politics", "sex_material": 1},
    {"id": 7, "title": "Россияне массово подписывают петиции против пенсионной реформы. Их авторы готовят протесты во время ЧМ", "content": "Покинет ли она пост ведущей навсегда — пока точно не известно  пока точно не известно пока точно не известно пока точно не известно пока точно не известно пока точно не ...", "plus": 1700, "minus": 50, "comment": 7, "category": "economics", "sex_material": 0},
    {"id": 9, "title": "Первые работы креативных директоров: история Максима Пономарёва из Friends Moscow", "content": "Конспект колонки Джона Каррейру на Wired о корпоративной культуре в биотехнологическом стартапе Theranos, основателя которого обвинили в мошенничестве.", "plus": 180, "minus": 200, "comment": 137, "category": "society", "sex_material": 0},
    {"id": 9, "title": "«Кто не готов беспрекословно следовать за нами, может убираться отсюда»", "content": "Покинет ли она пост ведущей навсегда — пока точно не известно  пока точно не известно пока точно не известно пока точно не известно пока точно не известно пока точно не", "plus": 251, "minus": 200, "comment": 137, "category": "society", "sex_material": 1},
    {"id": 10, "title": "Американский сервис по аренде автомобилей Hertz возобновил работу в России", "content": "Сервис по аренде автомобилей Hertz возобновил работу в России после прекращения в августе 2017 года. Об этом vc.ru сообщил представитель нового мастера-франчайзи сервиса — компании «Премиум Мобилити Груп».", "plus": 230, "minus": 200, "comment": 137, "category": "society", "sex_material": 0}
  ]
  
  export default {
    // getNews (category, cb) {
    //   setTimeout(() => {
    //     cb( _news.filter(function(item) {
    //         return item.category == category;
    //       }))
    //   }, 100)
    // },
    getNews (category, range, switchAge, cb) {
      setTimeout(() => {
        cb( _news.filter(function(item) {
          if (!switchAge) {
            return ( (item.plus - item.minus ) > range && (item.sex_material == switchAge) && (item.category == category || category == ''))
          } else return ( (item.plus - item.minus ) > range && (item.category == category || category == ''))
            
            // return  (item.plus - item.minus ) > range
          }))
      }, 100)
      },
  
    buyProducts (_news, cb, errorCb) {
      setTimeout(() => {
        // simulate random checkout failure.
        (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
          ? cb()
          : errorCb()
      }, 100)
    }
  }