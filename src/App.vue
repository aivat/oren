<template>
  <div class="container" id="app">
    <AppHeader/>
    <div class="c1" id="c1" v-bind:class="{ open: isOpen, sticky: isActive}" v-bind:style="styleObject">
      <AppLeftMenu/>
    </div>
    <div class="c2">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
      </transition>
    </div>
    <div class="c3">
    </div>
  </div>
</template>

<script>
import SecretList from './components/SecretList'
import AppHeader from './components/AppHeader'
import AppLeftMenu from './components/AppLeftMenu'
import { mapGetters} from 'vuex'
// import 'C:\OSPanel\domains\orenburg.io\script'

export default {
  name: 'app',
  data () {
    return {
      detecting: false, 
      isActive: false,
      started: false, 
      leftPage: false, 
      rightPage: false, 
      openMenuLeft: false, 
      startedScrollLeftMenu: false,
      x: 0, y: 0, newX: 0, newY: 0, delta: 0,
      touch: null, 
      newTouch: null,
      styleObject: {
        top: '56px'
      },
      lastScrollTop: 0,
      scrollingUp: false,
      scrollingDown: true,
      lastScrollTopSticky: 56
    }
  },
  computed: {
      isOpen() {  
        console.log('qwe', this.$store.getters.getIsActiveMenu)
          return this.$store.getters.getIsActiveMenu
      },
      getstyleObject() {
        top: '56px'
      }
  },
  components: { 
    SecretList,
    AppHeader,
    AppLeftMenu
  },
  created () {
    window.addEventListener('touchstart', this.handleTouchStart, { passive: false }),
    window.addEventListener('touchmove', this.handleTouchMove, { passive: false }),
    window.addEventListener('touchend', this.handleTouchEnd, { passive: false }),
    window.addEventListener('scroll', this.handleScroll)
    // window.addEventListener('touchstart', this.handleTouchStart),
    // window.addEventListener('touchmove', this.handleTouchMove),
    // window.addEventListener('touchend', this.handleTouchEnd)
  },
  destroyed () {
    window.removeEventListener('touchstart', this.handleTouchStart),
    window.removeEventListener('touchmove', this.handleTouchMove),
    window.removeEventListener('touchend', this.handleTouchEnd),
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {
    // почему так высчитывается так до конца и не разобрался, но математическим путем опряделяется верно. 40 пиксей добавил, чтобы загрузка происхода еще до прокрутки до самого низа
    let scrollTop = window.pageYOffset
    // let listOffsetHeight = document.body.offsetHeight
    let listScrollHeight = document.body.scrollHeight
    let listOffsetHeight = document.documentElement.clientHeight
    // let diffHeight = listScrollHeight - listOffsetHeight
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    let deff = scrollTop - listOffsetHeight

    if (this.lastScrollTop > scrollTop && !this.scrollingUp && deff > 0) {
      this.scrollingUp = true
      this.styleObject.top = deff + 'px'
      this.lastScrollTopSticky = deff
      
    }
    if (this.lastScrollTop > scrollTop) {
      if ( scrollTop < this.lastScrollTopSticky ) {
        this.isActive = true
        this.styleObject.top = 56 + 'px'
        this.scrollingDown = false
      }
      
    }

    if (this.lastScrollTop < scrollTop && !this.scrollingDown) {
      this.scrollingUp = false
      this.scrollingDown = true
      // if ( scrollTop > this.lastScrollTopSticky ) {
        this.isActive = false
        // this.lastScrollTopSticky = this.lastScrollTopSticky - 56
        this.styleObject.top = scrollTop + 'px'
      // }
      
    }
    // let diffHeight = scrollHeight - listOffsetHeight
    // console.log('diffHeight=',diffHeight)
    // console.log('scrollTop=',scrollTop)
    // console.log('scrollHeight=',scrollHeight)
    // console.log('listOffsetHeight=',listOffsetHeight)
//        if (diffHeight <= (scrollTop+40) && !loading && !error) {
//            this.$store.dispatch('getSecrets', lastSecret)
//        }

        console.log('scrollTop = '+ scrollTop)
        console.log('listOffsetHeight = '+ listOffsetHeight)
      // if (diffHeight <= (scrollTop+200) && !this.loading && !this.error) {
      //   this.$store.dispatch('getAllSecrets', this.lastSecret)
      //   console.log('йцуывава = '+ this.lastSecret);
      // }
      this.lastScrollTop =  scrollTop
    },
    openMenu () {
        this.$store.dispatch('openMenu', true)
    },
    closeMenu () {
        this.$store.dispatch('openMenu', false)
    }, 
    handleTouchStart(event) {
      if (event.touches.length != 1 || this.started) {
          return;
      }
      this.detecting = true;
      this.touch = event.changedTouches[0];
      console.log(this.touch);
      this.x = this.touch.pageX;
      this.y = this.touch.pageY;
      if (this.isOpen) {
          if (this.x > 251 ) {
              event.preventDefault()
              // this.isActive = false

              this.closeMenu()
              // closeMenu();
          } else {
              //event.preventDefault();
          }
      }
    },
    handleTouchMove(event) {
      if (!this.started && !this.detecting && !this.startedScrollLeftMenu) {
        return
      }

      this.newTouch = event.changedTouches[0];
      this.newX = this.newTouch.pageX;
      this.newY = this.newTouch.pageY;

      if (this.detecting) {
        this.detect(event);
      }

      if (this.started) {
        this.draw(event);
      }
    },
    detect() {
      /*
        Получаем сохраненное ранее касание из changedTouches. Если среди касаний нет нашего, значит, пользователь коснулся экрана еще одним пальцем. На это касание реагировать не надо
      */ 
      if (event.touches.length != 1){
            console.log('event.changedTouches=', event.changedTouches);
        return;
      }
      /*
        Самым простым способом определения того, хотел ли пользователь перелистнуть страницу, является сравнение смещений пальца по осям. 
        Если смещение больше по оси х, чем по у, значит, пользователь листает.
      */
      if (Math.abs(this.x - this.newX) >= Math.abs(this.y - this.newY)){
        /*
          Если не отменить поведение по умолчанию, то второго touchmove может и не быть (например, в Android). Поэтому необходимо определить swipe с первого раза и отменить поведение по умолчанию – скроллинг страницы
        */
        event.preventDefault();
        // Запоминаем, что началось перелистывание
        this.started = true;
      } else {
            //event.preventDefault();
            this.startedScrollLeftMenu = true;
            //console.log("startedScrollLeftMenu22=", startedScrollLeftMenu);
            //console.log("openMenuLeft22=",openMenuLeft);
        }

      // В любом случае заканчиваем определение, т.к. шанс определить у нас один
      this.detecting = false;
    },
    draw() {
      /*
        Отменяем поведение по умолчанию, дабы в дальнейшем срабатывали обработчики touchmove и не срабатывал скролл
      */
      event.preventDefault();

      /*
        Получаем сохраненное ранее касание из changedTouches. Если среди касаний нет нашего, значит, пользователь коснулся экрана еще одним пальцем. На это касание реагировать не надо
      */
      if (event.touches.length != 1){
            console.log('даdraw');
        return;
      }

      /*
        Вычисляем смещение пальца относительно исходных координат касания.
        На эту величину надо сместить страницу, чтобы она «следовала» за пальцем
      */
      this.delta = this.x - this.newX;
        console.log('delta=', this.delta);
      /*
        Если листать некуда, делим смещение на некоторую величину для создания визуального эффекта «сопротивления движению» страницы.
        Таким образом, даем пользователю понять, что дальше страниц нет
      */
      if (this.delta > 0 && !this.leftPage || this.delta < 0 && !this.rightPage){
        this.delta = this.delta / 5;
      }

      // Отрисовываем смещение, о чем чуть позже
    //	moveTo(delta);
    },
    handleTouchEnd(event) {
      if (!this.started){
        return;
    }
    
    event.preventDefault();
    this.started = false;
    this.startedScrollLeftMenu = false;
    if (this.delta > 0) {
        this.openMenuLeft = false;
        // this.isActive = false
        this.closeMenu()
        // closeMenu();
    } else {
        this.openMenuLeft = true;
        // this.isActive = true;
        this.openMenu()
        // openMenu();
    }
    
    this.x, this.y, this.newX, this.newY, this.delta = 0;
    console.log('delta2=', this.delta);
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700');
.fade-enter-active, .fade-leave-active {
 transition: all .2s ease;
}
  
.fade-enter, .fade-leave-active {
opacity: 0;
}
.touchAct {
  pointer-events: none;
}
body {
  overflow-x: hidden;
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  height: 100%;
  background-color:rgb(241, 241, 241);
  /* src: url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700'); 
  font-family: 'Open Sans',sans-serif; */
  font-family: Roboto, RobotoDraft, Helvetica, Arial;
  /* src: url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700'); */
  
}

.container {
  display: block;
}


.c1, .c3 {
  position: fixed;
  width: 280px;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden; 
  -webkit-transition: -webkit-transform 0.4s ease-out;
  transition: transform 0.4s ease-out;
  z-index: 1;
}

.c1 {
  /*
  Using translate3d as a trick to improve performance on older versions of Chrome
  See: http://aerotwist.com/blog/on-translate3d-and-layer-creation-hacks/
  #perfmatters
  */
  width: 86vw;
  z-index: 40;
  /* -webkit-transform: translate(-280px,0);
  transform: translate(-280px,0); */
    -webkit-transform: translate(-86vw,0);
  transform: translate(-86vw,0);
  background-color: white;
}

.c2 {
    width: 100%;
    position: absolute;
    background-color: white;
    margin-bottom: 56px;
}

.c3 {
    left: 100%;
    position: fixed;
    background-color: white;
}

.c1.open {
    -webkit-transform: translate(0,0);
    transform: translate(0,0);
    box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2);
}

.c3.open {
    -webkit-transform: translate(-280px,0);
    transform: translate(-280px,0);
}



.c2, .c3 {
		background-color:rgb(241, 241, 241);
	}

@media (min-width: 500px) {
  /* If the screen is wider then 500px, use Flexbox */
  .container {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row nowrap;
    flex-flow: row nowrap;
  }
  .c1 {
    top: 56px;
    position: relative;
    -webkit-transition: none 0s ease-out;
    transition: none 0s ease-out;
    -webkit-transform: translate(0,0);
    transform: translate(0,0);
      z-index: 0;
    width: 280px;
  }
  .c2 {
    top: 56px;
    /* position: static; */
    position: relative;  
    /* width:  600px;  */
  }

    .c1, .c2, .c3 {
		background-color:rgb(241, 241, 241);
	}
	.c1, .c3 {
		margin-top: 10px;
	}
.sticky {
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;

  /* top: 56px; */
}
}


@media (min-width: 800px) {
  body {
    overflow-x: auto;
	  /* background-color:rgb(250, 250, 250); */
    background-color: rgb(255, 255, 255);
    /* background-color: rgba(255, 255, 255, 0.596); */
  }
	.container {
		 /* background-color:rgba(241, 241, 241, 0.815); */
     background-color: rgb(255, 255, 255);

     /* background-color:rgb(250, 250, 250); */
	}
	.c1, .c2 {
		/* background-color:rgb(241, 241, 241); */
    background-color: rgb(255, 255, 255);
    /* background-color:rgb(250, 250, 250); */
		
	}
	.news-list-item {
		background-color: white;
	}
	.c2 {
		margin-left: 20px;
	}
  .c3 {
    top: 56px;
    position: relative;
    left: auto;
    -webkit-transition: none 0s ease-out;
    transition: none 0s ease-out;
    -webkit-transform: translate(0,0);
    transform: translate(0,0);
  }
}
@media (min-width: 1300px) {
    .container {
        justify-content: center;
        /* justify-content: space-between; */
    }
    .c1 {
      margin-right: 40px;
    }
    .c2 {
       width: 720px;
		  margin-left: 0;
    }
}
  
</style>
