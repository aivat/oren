<template>
    <div class="header">
        <div class="header-logo">
            <a href="/" class="header-logo-href">
                <div class="orenburg-online-wrap">
                        <div class="orenburg-online-header">
                            ORENBURG.
                        </div>
                        <div class="orenburg-online-online-header">
                            ONLINE
                        </div>
                </div>
            </a>
        </div>
        <div class="wrap-header">
            <div class="header-item header-item-gamburger">
                <a href="#" class="header-item-href">
                    <div class="gamburger">
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                        </svg>
                    </div>
                </a>
            </div>
            <div class="header-item">
                <router-link to="/news" class="header-item-href" active-class="header-item-href-active">
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>
                    <div class="header-item-text">
                        Главная
                    </div>
                </router-link>
            </div>
            <div class="header-item">
                <a href="#" class="header-item-href">
                    <div class="header-item-svg">
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </div>
                    <div class="header-item-text">
                        Лучшее
                    </div>
                </a>
            </div>
            <div class="header-item header-item-active">
                <router-link to="/secrets" class="header-item-href" active-class="header-item-href-active">
                    <div class="header-item-svg">
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" class="svg-active">
                            <circle cx="9" cy="9" r="4"/>
                            <path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"/>
                        </svg>
                    </div>
                    <div class="header-item-text header-item-text-active">
                        Подслушано
                    </div>
                </router-link>
            </div>
            <div class="header-item">
                <a href="#" class="header-item-href">
                    <div class="header-item-svg">
                        <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">    
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                        </svg>
                    </div>
                    <div class="header-item-text">
                        Оренгород
                    </div>
                </a>
            </div>
        </div>
        <div class="header-login">
            <a href="#" class="header-login-href">
                <svg class="header-login-svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                </svg>
                <div class="header-login-text">
                    Войти
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import { router } from '../main.js'

export default {
    data () {
        return {
            title: 'book',
			currentRoute: router.currentRoute.path	
        }
    }
}
</script>

<style>
.orenburg-online-wrap {
	display: flex;
	color: #009687;
/*	flex-direction: column;*/
	align-items: flex-end;
	font-weight: 500;
}
.orenburg-online {
	text-decoration: none;
/*	color: rgba(189, 196, 202, 1);*/
	color: #676767;
	color: maroon;
	padding-left: 20px;
/*	line-height: 50px;*/
}
.orenburg-online-online {
	position: relative;
	font-size: 12px;
	top: -2px;
}
.header {
    box-shadow: 0 -1px 8px rgba(0,0,0,.3);
    display: flex;
    align-items: center;
	font-size: 15px;
    color: white;
    position: fixed;
    bottom:0;
    z-index: 30;
    height: 56px;
    background-color: white;
    width: 100%;
}

.header-logo, .header-login {
	display: none;
}
.wrap-header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}

.header-item-text {
    display: none;
}

svg {
    fill: #676767;
}
.svg-active {
    fill: #db4437;
}

.header-logo-href {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    box-sizing: border-box;
	text-decoration: none;
}

.header-logo-img {
    fill: black;
}
.header-logo-text {
    /* background-image: url(img/logo_orenburg_text2.png); */
    background-repeat: no-repeat;
    height: 44px;
    width: 111px;
}
.header-logo {
    flex-basis: 180px;
}
.header-login-href svg {
    fill: currentColor;
}

@media (min-width: 500px) {
    .orenburg-online-wrap {
		color: #676767;
		font-size: 18px;
	}
	
	.orenburg-online-wrap-night {
		color: #009687;
	}

    .header {
        top: 0;
    
    }
	.header-logo, .header-login {
		display: flex;
	}
	.header {
		justify-content: space-between;
		padding: 0 20px;
		box-sizing: border-box;
	}
    .wrap-header {
        height: 100%;
		width: auto;
		flex-basis: 600px;
		justify-content: flex-start;
		padding-left: 30px;
    }
    .header-item-href {
        display: flex;
        text-decoration: none;
        align-items: center;
		color: #676767;
		height: 100%;
		width: 50px;
		justify-content: center;
		
    }
	.header-item-href:hover:not(.header-item-href-active) {
		color: #247A86;
	}
	
	.header-item-href-night:hover:not(.header-item-href-active) {
		color: #009687;
		border-top: 3px solid currentColor;
		border-bottom: 3px solid rgb(40,46,51);
	}
	.header-item-href-active {
		color: #db4437;
	}
	.header-item-href svg {
		fill: currentColor;
	}
	.header-item-active svg {
		fill: currentColor;
	}
	.header-item {
        height: 100%;
        display: flex;
        align-items: center;
        border-top: 3px solid currentColor;
		border-bottom: 3px solid currentColor;
        box-sizing: border-box;        
    }
	.header-item-text {
		font-weight: 500;
	}
    .header-item-gamburger {
        display: none;
    }
	.header-item-svg {
		height: 24px;
	}
    .header-item-active {
        border-top: 3px solid #db4437;
    }
	.header-item-text-active {
		color: #db4437;
	}
    .header-item:hover:not(.header-item-active) {
        border-top: 3px solid #247A86;
    }

	.header-logo,.header-login {
		height: 100%;
		display: flex;
		border-top: 3px solid currentColor;
		border-bottom: 3px solid currentColor;
		font-weight: 500;
		box-sizing: border-box; 
	}

	.header-login-href {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: black;
		color: #676767;
	}
	.header-login-href:hover {
		color: #247A86;
	}
	.header-login-text {
		padding-left: 5px;
	}
}

@media (min-width: 800px) {
	.wrap-header {
		justify-content: space-around;
		padding-left: 0;
	} 
	.header-item-href {
		width: auto;
    }
	.header-item-text {
        display: block;
        padding-left: 10px;
/*        color: black;    */
    }
	.header-item-text-active {
		color: #db4437;
	}
	svg {
    	fill: black;
	}
}

@media (min-width: 1050px) {
        .wrap-header {
        position: relative;
        left: -80px;
    }
}

</style>