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
                <a class="header-item-href link-gamburger" v-on:click="openMenu()">
                    <div class="gamburger">
                        <!-- <svg fill="#000000" height="26" viewBox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                        </svg> -->
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 -1 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                        </svg> -->
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                            <path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg> -->
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px"
                            height="24px" viewBox="0 -3 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                        <g id="Bounding_Boxes">
                            <path fill="none" d="M0,0h24v24H0V0z"/>
                        </g>
                        <g id="Rounded">
                            <path d="M4,18h16c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,17.55,3.45,18,4,18z M4,13h16c0.55,0,1-0.45,1-1
                                v0c0-0.55-0.45-1-1-1H4c-0.55,0-1,0.45-1,1v0C3,12.55,3.45,13,4,13z M3,7L3,7c0,0.55,0.45,1,1,1h16c0.55,0,1-0.45,1-1v0
                                c0-0.55-0.45-1-1-1H4C3.45,6,3,6.45,3,7z"/>
                        </g>
                        </svg>

                    </div>
                </a>
            </div>
            <div class="header-item">
                <router-link to="/" class="header-item-href" active-class="header-item-href-active" exact>
                    <!-- <svg fill="#000000" height="26" viewBox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg> -->
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px"
                            height="28px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                        <g id="Header_x2F_BG" display="none">
                            <rect x="-314" y="-446" display="inline" fill="#F1F1F2" width="520" height="520"/>
                        </g>
                        <g id="Bounding_Boxes">
                            <g id="ui_x5F_spec_x5F_header_copy_3">
                            </g>
                            <path fill="none" d="M0,0h24v24H0V0z"/>
                        </g>
                        <g id="Rounded">
                            <g id="ui_x5F_spec_x5F_header_copy_5">
                            </g>
                            <path d="M10,19v-5h4v5c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1v-7h1.7c0.46,0,0.68-0.57,0.33-0.87L12.67,3.6
                                c-0.38-0.34-0.96-0.34-1.34,0l-8.36,7.53C2.63,11.43,2.84,12,3.3,12H5v7c0,0.55,0.45,1,1,1h3C9.55,20,10,19.55,10,19z"/>
                        </g>
                        <g id="Sharp" display="none">
                            <g id="ui_x5F_spec_x5F_header_copy_4" display="inline">
                            </g>
                            <path display="inline" d="M10,20v-6h4v6h5v-8h3L12,3L2,12h3v8H10z"/>
                        </g>
                        <g id="Outline" display="none">
                            <g id="ui_x5F_spec_x5F_header" display="inline">
                            </g>
                            <path id="XMLID_1_" display="inline" d="M12,5.69l5,4.5V12v6h-2v-4v-2h-2h-2H9v2v4H7v-6v-1.81L12,5.69 M12,3L2,12h3v8h6v-6h2v6h6
                                v-8h3L12,3L12,3z"/>
                        </g>
                        <g id="Duotone" display="none">
                            <g id="ui_x5F_spec_x5F_header_copy_2" display="inline">
                            </g>
                            <g display="inline">
                                <path d="M12,3L2,12h3v8h6v-6h2v6h6v-8h3L12,3z M17,18h-2v-6H9v6H7v-7.81l5-4.5l5,4.5V18z"/>
                                <polygon opacity="0.3" points="7,10.19 7,18 9,18 9,12 15,12 15,18 17,18 17,10.19 12,5.69 		"/>
                            </g>
                        </g>
                        <g id="Fill" display="none">
                            <g id="ui_x5F_spec_x5F_header_copy" display="inline">
                            </g>
                            <path display="inline" d="M10,20v-6h4v6h5v-8h3L12,3L2,12h3v8H10z"/>
                        </g>
                        <g id="nyt_x5F_exporter_x5F_info" display="none">
                        </g>
                        </svg>
                    <div class="header-item-text">
                        Главная
                    </div>
                </router-link>
            </div>
            <div class="header-item">
                <router-link to="/hot" class="header-item-href" active-class="header-item-href-active">
                    <div class="header-item-svg">
                        <!-- <svg fill="#000000" height="22" viewBox="0 -2 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg> -->
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px"
                            height="24px" viewBox="0 -2 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
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
                    <div class="header-item-text">
                        Лучшее
                    </div>
                </router-link>
            </div>
            <div class="header-item">
                <router-link to="/secrets" class="header-item-href" active-class="header-item-href-active">
                    <div class="header-item-svg">
                        <!-- <svg fill="#000000" height="24" viewBox="0 -2 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="9" cy="9" r="4"/>
                            <path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"/>
                        </svg> -->
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px"
                            height="24px" viewBox="0 -2 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                        <g id="Header_x2F_BG" display="none">
                            <rect x="-270" y="-270" display="inline" fill="#F1F1F2" width="520" height="520"/>
                        </g>
                        <g id="Bounding_Boxes">
                            <g id="ui_x5F_spec_x5F_header_copy_3" display="none">
                            </g>
                            <path fill="none" d="M0,0h24v24H0V0z"/>
                        </g>
                        <g id="Rounded">
                            <g id="ui_x5F_spec_x5F_header_copy_5" display="none">
                            </g>
                            <g>
                                <circle cx="9" cy="9" r="4"/>
                                <path d="M9,15c-2.67,0-8,1.34-8,4v1c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1v-1C17,16.34,11.67,15,9,15z"/>
                                <path d="M15.47,7.77c0.32,0.79,0.32,1.67,0,2.46c-0.19,0.47-0.11,1,0.25,1.36l0.03,0.03c0.58,0.58,1.57,0.46,1.95-0.27
                                    c0.76-1.45,0.76-3.15-0.02-4.66c-0.38-0.74-1.38-0.88-1.97-0.29l-0.01,0.01C15.36,6.76,15.28,7.3,15.47,7.77z"/>
                                <path d="M19.18,2.89L19.18,2.89c-0.4,0.4-0.46,1.02-0.13,1.48c1.97,2.74,1.96,6.41-0.03,9.25c-0.32,0.45-0.25,1.07,0.14,1.46
                                    l0.03,0.03c0.49,0.49,1.32,0.45,1.74-0.1c2.75-3.54,2.76-8.37,0-12.02C20.51,2.44,19.67,2.4,19.18,2.89z"/>
                            </g>
                        </g>
                        <g id="Sharp" display="none">
                            <g id="ui_x5F_spec_x5F_header_copy_4">
                            </g>
                            <g display="inline">
                                <circle cx="9" cy="9" r="4"/>
                                <path d="M9,15c-2.67,0-8,1.34-8,4v2h16v-2C17,16.34,11.67,15,9,15z"/>
                                <path d="M15.08,7.05c0.84,1.18,0.84,2.71,0,3.89l1.68,1.69c2.02-2.02,2.02-5.07,0-7.27L15.08,7.05z"/>
                                <path d="M20.07,2l-1.63,1.63c2.77,3.02,2.77,7.56,0,10.74L20.07,16C23.97,12.11,23.98,6.05,20.07,2z"/>
                            </g>
                        </g>
                        <g id="Outline" display="none">
                            <g id="ui_x5F_spec_x5F_header">
                            </g>
                            <g display="inline">
                                <path d="M9,13c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4C6.79,5,5,6.79,5,9C5,11.21,6.79,13,9,13z M9,7c1.1,0,2,0.9,2,2s-0.9,2-2,2
                                    s-2-0.9-2-2S7.9,7,9,7z"/>
                                <path d="M9,15c-2.67,0-8,1.34-8,4v2h16v-2C17,16.34,11.67,15,9,15z M3,19c0.22-0.72,3.31-2,6-2c2.7,0,5.8,1.29,6,2H3z"/>
                                <path d="M15.08,7.05c0.84,1.18,0.84,2.71,0,3.89l1.68,1.69c2.02-2.02,2.02-5.07,0-7.27L15.08,7.05z"/>
                                <path d="M20.07,2l-1.63,1.63c2.77,3.02,2.77,7.56,0,10.74L20.07,16C23.97,12.11,23.98,6.05,20.07,2z"/>
                            </g>
                        </g>
                        <g id="Duotone" display="none">
                            <g id="ui_x5F_spec_x5F_header_copy_2">
                            </g>
                            <g display="inline">
                                <g opacity="0.3">
                                    <circle cx="9" cy="9" r="2"/>
                                    <path d="M9,17c-2.69,0-5.77,1.28-6,2h12C14.8,18.29,11.7,17,9,17z"/>
                                </g>
                                <g>
                                    <path d="M9,13c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4C6.79,5,5,6.79,5,9C5,11.21,6.79,13,9,13z M9,7c1.1,0,2,0.9,2,2s-0.9,2-2,2
                                        s-2-0.9-2-2S7.9,7,9,7z"/>
                                    <path d="M9,15c-2.67,0-8,1.34-8,4v2h16v-2C17,16.34,11.67,15,9,15z M3,19c0.22-0.72,3.31-2,6-2c2.7,0,5.8,1.29,6,2H3z"/>
                                    <path d="M16.76,5.36l-1.68,1.69c0.84,1.18,0.84,2.71,0,3.89l1.68,1.69C18.78,10.61,18.78,7.56,16.76,5.36z"/>
                                    <path d="M20.07,2l-1.63,1.63c2.77,3.02,2.77,7.56,0,10.74L20.07,16C23.97,12.11,23.98,6.05,20.07,2z"/>
                                </g>
                            </g>
                        </g>
                        <g id="Material" display="none">
                            <g id="ui_x5F_spec_x5F_header_copy">
                            </g>
                            <g display="inline">
                                <circle cx="9" cy="9" r="4"/>
                                <path d="M9,15c-2.67,0-8,1.34-8,4v2h16v-2C17,16.34,11.67,15,9,15z"/>
                                <path d="M15.08,7.05c0.84,1.18,0.84,2.71,0,3.89l1.68,1.69c2.02-2.02,2.02-5.07,0-7.27L15.08,7.05z"/>
                                <path d="M20.07,2l-1.63,1.63c2.77,3.02,2.77,7.56,0,10.74L20.07,16C23.97,12.11,23.98,6.05,20.07,2z"/>
                            </g>
                        </g>
                        </svg>                        
                    </div>
                    <div class="header-item-text">
                        Подслушано
                    </div>
                </router-link>
            </div>
            <div class="header-item">
                <router-link to="/orenburg" class="header-item-href" active-class="header-item-href-active">
                    <div class="header-item-svg">
                        <svg fill="#000000" height="26" viewBox="0 -2 24 24" width="26" xmlns="http://www.w3.org/2000/svg">    
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                        </svg>
                    </div>
                    <div class="header-item-text">
                        Оренгород
                    </div>
                </router-link>
            </div>
        </div>
        <div class="header-login">
            <a href="#" class="header-login-href">
                <svg class="header-login-svg" fill="#000000" height="26" viewBox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
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
// import { router } from '../main.js'

export default {
    data () {
        return {
            title: 'book',
			currentRoute: this.$router.currentRoute.path	
        }
    },
    methods: {
        openMenu () {
            this.$store.dispatch('openMenu', true)
        }
    }
}
</script>

<style scoped>
.orenburg-online-wrap {
	display: flex;
	/* color: #009687; */
/*	flex-direction: column;*/
	align-items: flex-end;
	font-weight: 500;
}
.orenburg-online {
	text-decoration: none;
/*	color: rgba(189, 196, 202, 1);*/
	/* color: #676767;
	color: maroon; */
	padding-left: 20px;
/*	line-height: 50px;*/
}
.orenburg-online-online {
	position: relative;
	font-size: 12px;
	top: -2px;
}
.header {
    box-shadow: 0 -1px 8px rgba(0,0,0,.15);
    display: flex;
    align-items: center;
	font-size: 15px;
    color: white;
    position: fixed;
    bottom:0;
    z-index: 30;
    height: 48px;
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
    fill: rgb(123,133,142);
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
	.header-item-href svg {
        
		fill: currentColor;
	}
	.header-item-active svg {
		fill: currentColor;
	}
    .header-item-href {
        color: rgb(123,133,142);
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        /* align-items: baseline; */
        justify-content: center;
    }
    .header-item-href:hover:not(.header-item-href-active):not(.link-gamburger) {
        color: rgba(66, 133, 244, 1);
    }
    .header-item-href-active {
		color: rgba(66, 133, 244, 1);
	}
@media (min-width: 500px) {
    .header-item-href {
        display: flex;
        text-decoration: none;
        align-items: center;
		height: 100%;
		width: 50px;
		justify-content: center;
		border-top: 3px solid transparent;
        box-sizing: border-box;
    }
    .header-item-href:hover:not(.header-item-href-active) {
        /* color: rgba(66, 133, 244, 1); */
        border-top: 3px solid rgba(66, 133, 244, 1);
    }
    .header-item-href-active {
        border-top: 3px solid rgba(66, 133, 244, 1);
	}
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

	/* .header-item-href:hover:not(.header-item-href-active) {
		color: #247A86;
	}
	
	.header-item-href-night:hover:not(.header-item-href-active) {
		color: #009687;
		border-top: 3px solid currentColor;
		border-bottom: 3px solid rgb(40,46,51);
	} */


	.header-item {
        height: 100%;
        display: flex;
        align-items: center;
        /* border-top: 3px solid currentColor;
		border-bottom: 3px solid currentColor; */
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
    /* .header-item-active {
        border-top: 3px solid #db4437;
    } */
	/* .header-item-text-active {
		color: #db4437;
	} */
    /* .header-item:hover:not(.header-item-active) {
        border-top: 3px solid #247A86;
    } */

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
	/* .header-item-text-active {
		color: #db4437;
	} */
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