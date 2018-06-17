const _news = [
    {"id": 1, "title": "iPad 4 Mini", "content": "19 января истекло действие билля о финансировании, а полноценный бюджет на 2018 год не был принят из-за разногласий республиканцев и демократов.", "plus": 100, "minus": 50, "comment": 37, "category": "politics"},
    {"id": 2, "title": "H&M T-Shirt White", "content": "Покинет ли она пост ведущей навсегда — пока точно не известно  пока точно не известно пока точно не известно пока точно не известно пока точно не известно пока точно не ...", "plus": 1700, "minus": 50, "comment": 7, "category": "economics"},
    {"id": 3, "title": "Первые работы креативных директоров: история Максима Пономарёва из Friends Moscow", "content": "Конспект колонки Джона Каррейру на Wired о корпоративной культуре в биотехнологическом стартапе Theranos, основателя которого обвинили в мошенничестве.", "plus": 150, "minus": 200, "comment": 137, "category": "society"},
    {"id": 4, "title": "«Кто не готов беспрекословно следовать за нами, может убираться отсюда»", "content": "Покинет ли она пост ведущей навсегда — пока точно не известно  пока точно не известно пока точно не известно пока точно не известно пока точно не известно пока точно не", "plus": 150, "minus": 200, "comment": 137, "category": "society"},
    {"id": 5, "title": "Американский сервис по аренде автомобилей Hertz возобновил работу в России", "content": "Сервис по аренде автомобилей Hertz возобновил работу в России после прекращения в августе 2017 года. Об этом vc.ru сообщил представитель нового мастера-франчайзи сервиса — компании «Премиум Мобилити Груп».", "plus": 150, "minus": 200, "comment": 137, "category": "society"}
  ]
  
  export default {
    // getNews (category, cb) {
    //   setTimeout(() => {
    //     cb( _news.filter(function(item) {
    //         return item.category == category;
    //       }))
    //   }, 100)
    // },
    getNews (category, cb) {
      setTimeout(() => {
        cb( _news.filter(function(item) {
            return item.category == category;
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