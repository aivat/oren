<template>
  <div class="left-menu" id="leftMenu">
      <div class="left-menu-header">
          <!-- <a href="/" class="header-logo-href header-logo-href-close header-logo-href-left"> -->
            <div class="orenburg-online-wrap">
              <div class="orenburg-online">
                ORENBURG.
              </div>
              <div class="orenburg-online-online">
                ONLINE
              </div>
            </div>
          <!-- </a> -->
      </div>
      <div class="left-menu-content">
          <div class="left-menu-wrap">
              <h3 class="left-menu-wrap-caption">Новости</h3>
              <ul class="left-menu-wrap-list">	
                  <li v-on:click="setCategory('politics')">
                    <!-- <a href="#" class="left-menu-wrap-list-href"> -->
                      
                    <router-link to="/news/politics" class="left-menu-wrap-list-href" active-class="left-menu-wrap-list-href-active">
                      <div class="left-menu-wrap-list-href-svg">
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"/>
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                      </div>
                      <div class="left-menu-wrap-list-href-label">
                        Политика
                      </div>
                    <!-- </a> -->
                    </router-link>				
                  </li>
                  <li v-on:click="setCategory('economics')">
                    <!-- <a href="#" class="left-menu-wrap-list-href"> -->
                    <router-link to="/news/economics" class="left-menu-wrap-list-href" active-class="left-menu-wrap-list-href-active">
                      <div class="left-menu-wrap-list-href-svg">
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"/>
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
                        </svg>
                      </div>
                      <div class="left-menu-wrap-list-href-label">
                        Происшествия
                      </div>
                    <!-- </a>	 -->
                    </router-link>
                  </li>
                  <li v-on:click="setCategory('society')">
                    <router-link to="/news/society" class="left-menu-wrap-list-href" active-class="left-menu-wrap-list-href-active">
                    <!-- <a href="#" class="left-menu-wrap-list-href"> -->
                    <div class="left-menu-wrap-list-href-svg">
                      <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                      </svg>
                    </div>
                      <div class="left-menu-wrap-list-href-label">
                      Общество
                      </div>
                    <!-- </a>	 -->
                    </router-link>
                  </li>
                  <li>
                    <a href="#" class="left-menu-wrap-list-href">
                      <div class="left-menu-wrap-list-href-svg">
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"/>
                          <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
                        </svg>
                      </div>
                      <div class="left-menu-wrap-list-href-label">
                        Спорт
                      </div>
                    </a>	
                  </li>
                  <li>
                    <a href="#" class="left-menu-wrap-list-href">
                      <div class="left-menu-wrap-list-href-svg">
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"/>
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                      </div>
                      <div class="left-menu-wrap-list-href-label">
                        Здоровье
                      </div>
                    </a>	
                  </li>
                  <li>
                    <a href="#" class="left-menu-wrap-list-href">
                      <div class="left-menu-wrap-list-href-svg">
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"/>
                          <path d="M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z"/>
                        </svg>
                      </div>
                      <div class="left-menu-wrap-list-href-label">
                        Hi-Tech
                      </div>
                    </a>	
                  </li>
                  <li>
                    <a href="#" class="left-menu-wrap-list-href">
                      <div class="left-menu-wrap-list-href-svg">
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                          <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                      </div>
                      <div class="left-menu-wrap-list-href-label">
                        Авто
                      </div>
                    </a>	
                  </li>
                  <li>
                    <a href="#" class="left-menu-wrap-list-href">
                      <div class="left-menu-wrap-list-href-svg">
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                          <path  d="M16.23,18L12,15.45L7.77,18L8.89,13.19L5.16,9.96L10.08,9.54L12,5L13.92,9.53L18.84,9.95L15.11,13.18L16.23,18M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                        </svg>
                      </div>
                      <div class="left-menu-wrap-list-href-label">
                        Звезды
                      </div>
                    </a>	
                  </li>	
                  <li>
                    <a href="#" class="left-menu-wrap-list-href">
                      <div class="left-menu-wrap-list-href-svg">
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0zm21.02 19c0 1.1-.9 2-2 2h-14c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14z" fill="none"/>
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z"/>
                        </svg>
                      </div>
                      <div class="left-menu-wrap-list-href-label">
                        Разное
                      </div>
                    </a>	
                  </li>
                  </ul>
                </div>
      </div>
        <div class="left-menu-content">
          <div class="left-menu-wrap left-menu-wrap-best">
            <h3 class="left-menu-wrap-caption ">Лучшие</h3>
              <ul class="left-menu-wrap-list best">
                <li>
                  <!-- <a href="#" class="left-menu-wrap-list-href"> -->
                  <router-link to="/hot" class="left-menu-wrap-list-href" active-class="left-menu-wrap-list-href-active">
                    <div class="left-menu-wrap-list-href-svg">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px"
                          height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                      <g id="Bounding_Boxes">
                          <g id="ui_x5F_spec_x5F_header_copy_2">
                          </g>
                          <path fill="none" d="M0,0h24v24H0V0z"/>
                      </g>
                      <g id="Rounded">
                          <path d="M17.09,4.56c-0.7-1.03-1.5-1.99-2.4-2.85c-0.35-0.34-0.94-0.02-0.84,0.46c0.19,0.94,0.39,2.18,0.39,3.29
                              c0,2.06-1.35,3.73-3.41,3.73c-1.54,0-2.8-0.93-3.35-2.26c-0.1-0.2-0.14-0.32-0.2-0.54C7.17,5.97,6.62,5.84,6.38,6.21
                              C6.2,6.48,6.03,6.75,5.87,7.04C4.68,9.08,4,11.46,4,14c0,4.42,3.58,8,8,8s8-3.58,8-8C20,10.51,18.92,7.27,17.09,4.56z M11.71,19
                              c-1.78,0-3.22-1.4-3.22-3.14c0-1.62,1.05-2.76,2.81-3.12c1.47-0.3,2.98-0.93,4.03-1.92c0.28-0.26,0.74-0.14,0.82,0.23
                              c0.23,1.02,0.35,2.08,0.35,3.15C16.51,16.85,14.36,19,11.71,19z"/>
                      </g>
                      </svg>                         
                  </div>
                  <div class="left-menu-wrap-list-href-label">
                      Лучшее
                  </div>
                  </router-link>
                  <!-- </a> -->
                </li>               
              </ul>
          </div> 
      </div>
      <div class="left-menu-content">
          <div class="left-menu-wrap left-menu-wrap-best">
            <h3 class="left-menu-wrap-caption">Настройки</h3>
              <ul class="left-menu-wrap-list">
                <li>
                  <div class="left-menu-wrap-list-href label-setting-link" v-on:click="switchNight">
                    <div class="left-menu-wrap-list-href-svg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                    </div>
                    <div class="left-menu-wrap-list-href-label label-setting">
                        Ночной режим
                    </div>
                    <div class="rande-label-wrap">
                      <div class="onoffswitch">
                        <input type="checkbox" name="switchNight" class="onoffswitch-checkbox" id="switchNight" v-model="checkedNight">
                        <label class="onoffswitch-label" for="switchNight"></label>
                      </div>
                    </div>
                  </div>	
                </li>                
                <li>
                  <div class="left-menu-wrap-list-href label-setting-link" v-on:click="switchAge">
                    <div class="left-menu-wrap-list-href-svg">
                      <span class="rande-label">18+</span>
                    </div>
                    <div class="left-menu-wrap-list-href-label label-setting">
                        Контент
                    </div>   
                    <div class="rande-label-wrap">
                      <div class="onoffswitch">
                        <input type="checkbox" name="switchAge" class="onoffswitch-checkbox" id="switchAge" v-model="rangeAge">
                        <label class="onoffswitch-label" for="switchAge"></label>
                      </div>
                    </div>
                  </div>	
                </li>
                <li class="left-menu-wrap-list-range">
                  <Range v-bind:type="getType"></Range>
                </li>
              </ul>
          </div> 
      </div>
      <div class="left-menu-footer">
        <div class="left-menu-wrap">
            <ul class="left-menu-wrap-list">
              <li>
                  <a href="#" class="left-menu-wrap-list-href">
                    <div class="left-menu-wrap-list-href-label left-menu-wrap-list-href-label-footer">
                      Войти
                    </div>
                  </a>	
              </li>
              <li>
                  <a href="#" class="left-menu-wrap-list-href">
                    <div class="left-menu-wrap-list-href-label left-menu-wrap-list-href-label-footer">
                      О Сайте
                    </div>
                  </a>	
              </li>
            </ul>                         
          </div> 
      </div>
  </div>
</template>

<script>
import Range from './Range'

export default {
   components: { 
     Range 
   },
   data() {
     return {
       checkedNight: false,
       checkedAge: false
     }
   },
   computed: {
      getType() {
        if ( this.$route.name ) {
          return this.$route.name
        } else return 'news'       
      },
      rangeAge: {
        get() {
          return  this.$store.state.switchAge.switchAge
        },
        set() {
          this.$store.dispatch('setRangeAge')
          // this.$store.dispatch('getAllNews')
        }        
      }
    },
    beforeCreate() {
      this.$store.dispatch('initialiseStoreRangeAge')
    },
    methods: {
      switchNight() {
          this.checkedNight = !this.checkedNight
      },
      switchAge() {
          this.$store.dispatch('setRangeAge')
          console.log('this.$route.name=', this.$route.path)
          if ( this.getType == 'secrets' ) {
            this.$store.dispatch('getAllSecrets', 0)
          }
          if  ( this.getType == 'news' ) {
            this.$store.dispatch('getAllNews')
          }
      },
      setCategory(val) {
          this.$store.dispatch('getCategory', val)
          this.$store.dispatch('getAllNews')
      }
    }
}
</script>

<style scoped>
.orenburg-online-wrap {
	display: flex;
	/* align-items: flex-end; */
	font-weight: 700;
  /* height: 50px;
  line-height: 50px; */
  align-items: baseline;
  color: black;
  color: rgb(123,133,142);
  /* line-height: 50px; */
}
.orenburg-online {
	text-decoration: none;
	padding-left: 20px;
  color: #4285f4;
}
.orenburg-online-online {
	/* position: relative; */
	font-size: 12px;
  /* font-size: 18px; */
	/* top: 2px; */
}


.c1 {
/*    box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2);*/
}
.c1.open {
    box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2);
}

.header-logo-href.header-logo-href-left {
/*    justify-content: flex-end;*/
	text-decoration: none;
	height: 48px;
}

.header-logo-text.header-logo-text-left {
    position: relative;
    left: 10px;
}
.left-menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* The main point: */
    overflow-y: auto;
    /* Optional but highly reccomended: enables momentum scrolling on iOS */
    -webkit-overflow-scrolling: touch;
/*    top: -10px;*/
}

.left-menu-header {
/*
    rgba(189, 196, 202, 0.1);
    #bdc4ca;
*/
    /* height: 50px; */
    display: flex;
    align-content: center;
    padding: 25px 0;
    border-bottom: 1px solid rgba(189, 196, 202, 0.5);
	  margin-bottom: 10px;
}

.left-menu-wrap:last-child {
    border-bottom: 1px solid rgba(189, 196, 202, 0.5);
}

.left-menu-footer>.left-menu-wrap {
    border-bottom: none;
}
.left-menu-wrap-caption {
  display: none;
    padding: 10px 20px;
/*    background-color: rgba(189, 196, 202, 0.1);*/
    font-size: 15px;
    border-radius: 0 18px 18px 0;
    /* font-weight: 600; */
    margin-top: 0;
    margin-bottom: 0;
	color: rgba(0,0,0,0.7);
	opacity: .85;
	font-weight: 700;
	background-color: rgba(189, 196, 202, 0.2);
  background-color: rgba(66, 133, 244, 0.15);
  /* background-color: rgba(66,133,244,0.149); */
  color: #4285f4;
}


.left-menu-wrap-list {
    margin: 0;
    padding: 0;
    padding-bottom: 10px;
    font-size: 14px;
	font-weight: 500; 
/*	opacity: .85;*/
}
.left-menu-wrap-best {
  margin-top: 10px;
  padding-bottom: 10px;
}
.left-menu-wrap-list>li {
    list-style-type: none;
    display: block;
/*    padding: 10px 40px;*/
}
.best {
  padding-bottom: 0;
}
.left-menu-wrap-list-href {
	display: flex;
	text-decoration: none;
    outline: none;
    cursor: pointer;
    padding: 0 0px 0 20px;
	color: rgba(0,0,0,1);
    color: rgba(0,0,0,0.87);
    color: #656565;
	color: #757575;
  color:rgb(60, 64, 67);
 
      color: #676767;
    color: rgb(123,133,142);
       /* color: #000; */
    font-size: 14px;
    height: 48px;
    font-weight: 700;
    opacity: 1;
    line-height: 50px;
    border-radius: 0 24px 24px 0;
    overflow: hidden;
    display: flex;
    -webkit-transition: background-color .3s cubic-bezier(0,0,0.2,1);
    transition: background-color .3s cubic-bezier(0,0,0.2,1);
      -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently */
    -webkit-tap-highlight-color: rgba(0,0,0,0); 
    -webkit-tap-highlight-color: transparent;    
}

.left-menu-wrap-list-href:hover:not(.label-setting-link) {
	/* background-color: #e7e7e7;
  background-color: rgba(66, 133, 244, 0.15); */
  color: #247A86;
  color: #4285f4;
}
.left-menu-wrap-list-href:hover:not(.label-setting-link) .left-menu-wrap-list-href-svg {
    color: #247A86;
    color: #4285f4;
    color: rgba(66, 133, 244, 1);
}
.label-setting-link {
   border-radius: 0;
}
.label-setting-link:active {
  /* background-color: rgba(66, 133, 244, .15); */
  background:rgba(66,133,244,0.149);
  color: rgba(66, 133, 244, 1);
}
.label-setting-link:active .left-menu-wrap-list-href-svg {
  color: rgba(66, 133, 244, 1);
}
.left-menu-wrap-list-href-active {
  border-radius: 0 24px 24px 0;
  color: rgba(66, 133, 244, 1);
  background:rgba(66,133,244,0.149);
}
.left-menu-wrap-list-href-active .left-menu-wrap-list-href-svg {
  color: rgba(66, 133, 244, 1);
}
.left-menu-wrap-list-href-svg {
	font-weight: 300;
    width: 24px;
    padding-right: 22px;
    height: inherit;
    flex: none;
    color: rgba(0, 0, 0, 0.25);
    color: rgb(123,133,142);
/*    color: #757575;*/
}


.left-menu-wrap-list-href-svg>svg {
	margin-top: 12px;
/*    color: #757575;*/
    fill: currentColor;
/*    stroke: currentColor;*/
/*    fill:none;*/
}

/*
.left-menu-wrap-list-href-svg>svg>path:last-child {
    stroke: currentColor;
    stroke-width: 0;
}
*/
.left-menu-wrap-list-href-label {
	white-space: nowrap; 
    overflow: hidden;
	text-overflow: ellipsis;
	flex: auto;
  /* font-weight: 700; */
/*    color: rgba(0,0,0,0.87);*/
}

.left-menu-wrap-list-href-label:hover{
/*    color: #247A86;*/
}

.left-menu-wrap-list-href-label-footer {
	color: rgba(0,0,0,0.54);
}

.left-menu-wrap-list-range {
    padding: 0 0 0 20px;
	color: rgba(0,0,0,0.54);
    height: 48px;
    font-weight: 400;
    line-height: 50px;
    border-radius: 2px;
    display: flex;
}
.onoffswitch {
    position: relative; width: 35px;
    -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;
    /* display: flex;
    align-items: center; */
}
.onoffswitch-checkbox {
    display: none;
}
.onoffswitch-label {
    display: block; overflow: hidden; cursor: pointer;
    height: 12px; padding: 0; line-height: 12px;
    border: 0px solid #ddd; border-radius: 12px;
    background-color: #ddd;
    transition: background-color 0.3s ease-in;
}
.onoffswitch-label:before {
    content: "";
    display: block; width: 16px; margin: 0px;  height: 16px;
    background: #FFFFFF;
    position: absolute; top: -4px; bottom: 0;
    right: 17px;
    border: 2px solid #ddd; 
	border-radius: 50%;
    transition: all 0.3s ease-in 0s; 
}
.onoffswitch-checkbox:checked + .onoffswitch-label {
    background-color: rgba(36, 122, 134, .15);
    background-color: rgba(66, 133, 244, .15);
}
.onoffswitch-checkbox:checked + .onoffswitch-label:before {
   border-color: #247A86;
   background: #247A86;
   background: rgba(66, 133, 244, 1);
   border-color: rgba(66, 133, 244, 1);
}
.onoffswitch-checkbox:checked + .onoffswitch-label:before {
    right: 0px; 
}
.rande-label {
  font-weight: 700;
}
.rande-label-wrap {
  display: flex;
  align-items: center;
  margin-right: 25px;
  /* margin-left: 75px; */
}
.label-setting {
  display: inline-block;
  /* cursor: default; */
}
/* .label-setting-link {
  cursor: default;
}
.label-setting-link svg{
  cursor: default;
}
.rande-label {
  cursor: default;
} */
@media (min-width: 500px) {
    .header-logo-href-close {
        display: none;
    }
    .left-menu {
        position: static;
    }
    .left-menu-header {
      display: none;
        border: none;
        padding: 0;
    }
	.orenburg-online-wrap {
		color: #676767;
		font-size: 18px;
	}
	
	.orenburg-online-wrap-night {
		color: #009687;
	}
  .label-setting {
    /* padding-right: 45px; */
  }
  .rande-label-wrap {
    margin-right: 0px;
  }
}

@media (min-width: 1050px) {
	.left-menu {
		width: 250px;
	}
  .rande-label-wrap {
    margin-right: 10px;
  }
  .left-menu-wrap-list-href {
    font-weight: 500;
  }
}
</style>