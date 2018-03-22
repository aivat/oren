<template>
<div class="news">
	<ul class="news-list" v-for="secret in secrets">
		<li class="news-list-item">
			<article>
        <div class="news-list-item-footer-rating-left">
            <div class="news-list-item-footer-rating-up">
                <button class="news-list-item-footer-rating-button" title="Поставить плюсик">
                    <svg fill="#000000" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
                    </svg>
                </button>
            </div>
            <div class="news-list-item-footer-rating-count">
                {{ secret.plus - secret.minus }}
            </div>							
            <div class="news-list-item-footer-rating-down">
                <button class="news-list-item-footer-rating-button" title="Поставить минус">
                    <svg fill="#000000" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
                    </svg>										
                </button>
            </div>							
        </div>
        <header class="news-list-item-header">
          <div class="news-list-item-header-wrap">
            <div class="news-list-item-header-time">
              3 часа назад
            </div>
            <a href="#" class="news-list-item-header-author">
              <div class="news-list-item-header-author-avatar" id="avatar"></div>
              <div class="author">
                {{ secret.author }}
              </div>
            </a>	
          </div>
          <div class="news-list-item-header-menu">
            <button class="news-list-item-header-menu-href" onclick="headerMenuActionsVisible(this)">
              <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </button>
            <div class="news-list-item-header-menu-actions news-list-item-header-menu-actions-visible">
                <div class="news-list-item-header-menu-actions-triangle-right">
                    
                </div>
                <div class="news-list-item-header-menu-actions-triangle-right-transparent">
                
                </div>
                <div class="news-list-item-header-menu-actions-list">
                    <a class="news-list-item-header-menu-actions-list-item">
                        Копировать ссылку
                    </a>
                    <a class="news-list-item-header-menu-actions-list-item">
                        Пожаловаться
                    </a>  
                </div>
            </div>       
          </div>
        </header>
        <div class="news-list-item-content">
          <a href="/news-item.html" class="news-list-item-content-href">
            <div class="news-list-item-content-wrap">
            </div>
            <div class="news-list-item-content-annotation secret-list-item">
              {{ secret.content }}
            </div>								
          </a>
        </div>
        <footer class="news-list-item-footer">
          <div class="news-list-item-footer-rating">
            <div class="news-list-item-footer-rating-up">
              <button class="news-list-item-footer-rating-button" title="Поставить плюсик">
                <svg fill="#000000" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
                </svg>
              </button>
            </div>
            <div class="news-list-item-footer-rating-count">
              -1275
            </div>							
            <div class="news-list-item-footer-rating-down">
              <button class="news-list-item-footer-rating-button" title="Поставить минус">
                <svg fill="#000000" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
                </svg>										
              </button>
            </div>							
          </div>
          <div class="news-list-item-footer-wrap">
            <div class="news-list-item-footer-comments">
            <a href="#" class="news-list-item-footer-comments-href">
              <div class="news-list-item-footer-comments-svg">
                <svg fill="#000000" height="24" viewBox="0 2 24 24" width="24" xmlns="http://www.w3.org/2000/svg">    
                  <path data-brackets-id="5866" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                  </svg>
              </div>
              <div class="news-list-item-footer-comments-count">
                {{ secret.count_comment }}
              </div>
            </a>
          </div>
            <div class="news-list-item-footer-comments">
            <a href="#" class="news-list-item-footer-comments-href">
              <div class="news-list-item-footer-comments-svg">
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/>
                </svg>						
              </div>
              <div class="news-list-item-footer-comments-count">
                {{ secret.views }}
              </div>
            </a>
          </div>
          </div>
        </footer>
      </article>
    </li>                        
  </ul>
</div>               
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
    secrets: 'allSecrets',
    lastSecret: 'lastIdSecret',
    loading: 'secretLoading',
    error: 'secretError'
  }),
  created () {
    this.$store.dispatch('getSecrets', 0),
    window.addEventListener('scroll', this.handleScroll)
  },
  	destroyed () {
	  		window.removeEventListener('scroll', this.handleScroll)
	},
  methods: {
        handleScroll (event) {
        // почему так высчитывается так до конца и не разобрался, но математическим путем опряделяется верно. 40 пиксей добавил, чтобы загрузка происхода еще до прокрутки до самого низа
        let scrollTop = window.pageYOffset,
        //listOffsetHeight = document.body.offsetHeight,
        listScrollHeight = document.body.scrollHeight
        let listOffsetHeight = document.documentElement.clientHeight
        let diffHeight = listScrollHeight - listOffsetHeight
        console.log(diffHeight)
        console.log(scrollTop)
        console.log(listScrollHeight)
        console.log(listOffsetHeight)
//        if (diffHeight <= (scrollTop+40) && !loading && !error) {
//            this.$store.dispatch('getSecrets', lastSecret)
//        }
            
         if (diffHeight <= (scrollTop+200) && !this.loading && !this.error) {
            this.$store.dispatch('getSecrets', this.lastSecret)
            console.log('йцуывава = '+ this.lastSecret);
        }
    }
  }
}
</script>
<style>
    /* ul {
        width: 500px;
        margin: 0 auto;
    } */

    .news {
    color: rgba(0,0,0,0.87);
}
.news p {
	font-size: 18px;
	font-weight: 400;
	line-height: 28.8px;
	margin: 14 0;
}

.news-list {
	margin-left: 0;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
/*    align-items: center;*/
}

.news-list-item {
    background-color: white;
	list-style-type: none;
	border-radius: 5px;
	padding: 10px 10px;
	margin: 0 5px;
	margin-bottom: 5px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
   
/*    margin-left: 180px;*/
}

.news-list-item-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.news-list-item-header-wrap {
	display: flex;
	font-size: 12px;
	align-items: center;
	color: rgb(129, 129, 129);
}

.news-list-item-header-menu {
	height: 24px;
}

.news-list-item-header-time {
	margin-right: 10px;
}

.news-list-item-header-author {
	display: flex;
	text-decoration: none;
	color: inherit;
	align-items: center;
}

.news-list-item-header-author:hover {
	color: #247A86;
}

.news-list-item-header-author-avatar {
	display: inline-block;
	
    width: 16px;
    height: 16px;
	/* background-image: url(img/site/orenday.ico); */
	margin-right: 5px;
}

.news-list-item-header-menu-href svg {
	fill: #bdc4ca;
}

.news-list-item-header-menu-href,
.news-list-item-header-menu-href:active,
.news-list-item-header-menu-href:focus {
	outline: none;
	border: none;
	padding: 0;
/*	background-color: white;*/
    background-color: inherit;
	height: 24px;
	fill: rgb(129, 129, 129);
    cursor: pointer;
}
.news-list-item-header-menu-actions {
    position: relative;
    display: none;
}

.news-list-item-header-menu-actions-visible {
    display: block;
}

.news-list-item-header-menu-actions-list {
    display: flex;
    flex-direction: column;
/*    flex-basis: 150px;*/
    position: absolute;
    font-size: 14px;
    border: 1px solid rgba(189, 196, 202, 0.5);
    padding: 4px 0;
    border-radius: 4px;
    right: 24px;
    top: -30px;
    width: 160px;
    background-color: white;
}

.news-list-item-header-menu-actions-list-item {
    display: flex;
    padding: 5px 10px;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
}

.news-list-item-header-menu-actions-list-item:hover {
    background-color: rgba(189, 196, 202, 0.15);
}

.news-list-item-header-menu-actions-triangle-right {
    position: absolute;
   	width: 0;
	height: 0;
	border-top: 4px solid transparent;
	border-left: 8px solid rgba(189, 196, 202, 1);
	border-bottom: 4px solid transparent; 
    background-color: white;
    top: -21px;
    right: 16px;
}

.news-list-item-header-menu-actions-triangle-right-transparent {
    position: absolute;
   	width: 0;
	height: 0;
	border-top: 4px solid transparent;
	border-left: 8px solid white;
	border-bottom: 4px solid transparent; 
    top: -21px;
    right: 17px;
    z-index: 10;
}

.news-list-item-content {
	margin-top: 10px;
}
.news-list-item-content-href {
	text-decoration: none;
	color: inherit;
}

.news-list-item-content-wrap {
	display: flex;
    justify-content: space-between;
}
.news-list-item-content-wrap-heading {
	font-size: 20px;
	margin: 0;
	padding-right: 15px;
/*    color: rgba(0,0,0,0.87);*/
    font-weight: 400;
    line-height: 28px;
}
.news-list-item-content-wrap-picture img {
    border-radius: 30px;
}
.news-list-item-content-annotation {
	margin-top: 6px;
	margin-bottom: 10px;
	font-size: 14px;
	line-height: 20px;
	font-weight: 400;
}

.news-list-item-footer {
	display: flex;
	justify-content: space-between;
	color: #676767;
}

.news-list-item-footer-wrap {
	display: flex;
}
.news-list-item-footer-rating {
	display: flex;
	align-items: center;
}

.news-list-item-footer-rating-left {
	display: none;
}

.news-list-item-footer-comments-href {
	display: flex;
}
.news-list-item-footer-rating-up, .news-list-item-footer-rating-down {
	height: 32px;
}
.news-list-item-footer-rating-button {
	display: flex;
	align-items: center;
	justify-content: center;
}

.news-list-item-footer-rating-button svg {
	fill: #bdc4ca;
}
.news-list-item-footer-rating-button,
.news-list-item-footer-rating-button:active,
.news-list-item-footer-rating-button:focus {
	outline: none;
	border: none;
	padding: 0;
/*	background-color: white;*/
    background-color: inherit;
	height: 32px;
	border: 1px solid #eff2ec;
/*	border: 1px solid currentColor;*/
	border-radius: 4px;
	cursor: pointer;
}

.news-list-item-footer-rating-button-night {
	border: 1px solid rgb(24,25,29);
}
.news-list-item-footer-rating-up>button:hover {
	background-color: rgb(138, 200, 88);
	border: 1px solid rgb(138, 200, 88);
	transition: background-color, border 200ms;
    transition-property: background-color, border;
    transition-duration: 200ms;
    transition-timing-function: initial;
    transition-delay: initial;
}

.news-list-item-footer-rating-up>button:active {
	background-color: white;
	border: 1px solid rgb(138, 200, 88);
}

.news-list-item-footer-rating-up>button svg:active {
	fill: rgb(138, 200, 88);
}

.news-list-item-footer-rating-button svg:hover {
	fill: white;
	transition: fill 200ms;
    transition-property: fill;
    transition-duration: 200ms;
    transition-timing-function: initial;
    transition-delay: initial;
}

.news-list-item-footer-rating-down>button:hover {
	background-color: #db4437;
	border: 1px solid #db4437;
	transition: background-color, border 200ms;
    transition-property: background-color, border;
    transition-duration: 200ms;
    transition-timing-function: initial;
    transition-delay: initial;
}

.news-list-item-footer-rating-down>button:active {
	background-color: white;
	border: 1px solid #db4437;
}

.news-list-item-footer-rating-down>button svg:active {
	fill: #db4437;
}

.news-list-item-footer-rating-count {
	color: #db4437;
	margin: 0 5px;
	line-height: 32px;
	font-weight: 700;
}

.news-list-item-footer-comments {
	display: flex;
	align-items: center;
}

.news-list-item-footer-comments:first-child {
	margin-right: 15px;
}
.news-list-item-footer-comments-href {
	text-decoration: none;
	color: #bdc4ca;
	display: flex;
/*	border: 1px solid #eff2ec;*/
/*	align-items: center;*/
	padding: 4px 5px;
	border-radius: 4px;
/*	background-color: #eff2ec;*/
}

.news-list-item-footer-comments-href:hover {
	background-color: rgba(189, 196, 202, 0.1);
	color: #909498;
}

.news-list-item-footer-comments-svg {
	height: 24px;
}

.news-list-item-footer-comments-count {
/*	line-height: 32px;*/
	margin-left: 5px;
	font-size: 16px;
	font-weight: 300;
}
.news-list-item-footer-comments-svg svg {
	fill: currentColor;
}

@media (min-width: 500px) {
/*
	.news-list-item:hover {
		box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	}
*/
	.news-list-item {
		border-radius: 2px;
		margin-bottom: 20px;
        box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);      
	}
    .news-list-item-header-menu-actions-list {
        font-size: 12px;
        width: 150px;
    }
    .news-list-item-footer-rating-button,
	.news-list-item-footer-rating-button:active,
	.news-list-item-footer-rating-button:focus {
		border-radius: 2px;
	}


}

@media (min-width: 1280px) {
    .wrap-header {
        position: relative;
        left: -80px;
    }
    
    article {
        position: relative;
    }
    
    .news-list {
        align-items: center;
    }
    .news-list-item {
        width: 600px;
        margin-left: 50px;
		padding: 15px 20px;
    }
    .news-list-item-footer-rating-left {
        display: flex;
        position: absolute;
        left: -80px;
        flex-direction: column;
        top: -10px;
        align-items: center;
    }
    
    .news-list-item-footer-rating {
        display: none;
    }
    .news-list-item-footer {
        justify-content: flex-end;
    }
}

@media (min-width: 1400px) {
        .news-list-item {
        margin-left: 0;
    }
}

.secret-list-item {
	font-size: 16px;
	line-height: 24px;
}

@media (min-width: 1280px) {
	.secret-list-item {
		font-size: 18px;
		font-weight: 400;
		line-height: 28.8px;
	}
}
</style>