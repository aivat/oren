<template>
  <div class="container" id="app">
    <AppHeader/>
    <div class="c1" id="c1">
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

export default {
  name: 'app',
  components: { SecretList, AppHeader, AppLeftMenu}  
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
 transition: all .2s ease;
}
  
.fade-enter, .fade-leave-active {
opacity: 0;
}

body {
  overflow-x: hidden;
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  height: 100%;
  background-color:rgb(241, 241, 241);
  font-family: Roboto, RobotoDraft, Helvetica, Arial;
  src: url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700');
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
  z-index: 40;
  -webkit-transform: translate(-280px,0);
  transform: translate(-280px,0);
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
  }
  .c2 {
    top: 56px;
    /* position: static; */
    position: relative;    
  }

    .c1, .c2, .c3 {
		background-color:rgb(241, 241, 241);
	}
	.c1, .c3 {
		margin-top: 10px;
	}

}


@media (min-width: 800px) {
  body {
    overflow-x: auto;
	  background-color:rgb(241, 241, 241);
  }
	.container {
		 background-color:rgb(241, 241, 241);
	}
	.c1, .c2 {
		background-color:rgb(241, 241, 241);
		
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
    }
    .c2 {
       width: 720px;
		margin-left: 0;
    }
}
  
</style>
