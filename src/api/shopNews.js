const _news = [
    {"id": 1, "title": "iPad 4 Mini", "content": "19 января истекло действие билля о финансировании, а полноценный бюджет на 2018 год не был принят из-за разногласий республиканцев и демократов.", "plus": 100, "minus": 50, "comment": 37, "category": "politics"},
    {"id": 2, "title": "H&M T-Shirt White", "content": "Покинет ли она пост ведущей навсегда — пока точно не известно  пока точно не известно пока точно не известно пока точно не известно пока точно не известно пока точно не ...", "plus": 1700, "minus": 50, "comment": 7, "category": "economics"},
    {"id": 3, "title": "Charli XCX - Sucker CD", "content": "19.9 qwe q9", "plus": 150, "minus": 200, "comment": 137, "category": "society"},
    {"id": 4, "title": "Charli XCX - Sucker CD", "content": "Покинет ли она пост ведущей навсегда — пока точно не известно  пока точно не известно пока точно не известно пока точно не известно пока точно не известно пока точно не", "plus": 150, "minus": 200, "comment": 137, "category": "society"},
    {"id": 5, "title": "Charli XCX - Sucker CD", "content": "19.9 qwe q9", "plus": 150, "minus": 200, "comment": 137, "category": "society"}
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