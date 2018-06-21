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
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="26px"
                            height="26px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
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
            <div class="header-item" v-on:click="setCategory('')">
                <router-link to="/" class="header-item-href" active-class="header-item-href-active" exact>
                    <!-- <svg fill="#000000" height="26" viewBox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg> -->
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="27px"
                            height="27px" viewBox="0 2 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
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
                <router-link to="/instoren" class="header-item-href" active-class="header-item-href-active">
                    <div class="header-item-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="26" height="26"
                            viewBox="0 0 24 24"><g id="surface1"><path style=" " d="M 8 3 C 5.238281 3 3 5.238281 3 8 L 3 16 C 3 18.761719 5.238281 21 8 21 L 16 21 C 18.761719 21 21 18.761719 21 16 L 21 8 C 21 5.238281 18.761719 3 16 3 Z M 18 5 C 18.550781 5 19 5.449219 19 6 C 19 6.550781 18.550781 7 18 7 C 17.449219 7 17 6.550781 17 6 C 17 5.449219 17.449219 5 18 5 Z M 12 7 C 14.761719 7 17 9.238281 17 12 C 17 14.761719 14.761719 17 12 17 C 9.238281 17 7 14.761719 7 12 C 7 9.238281 9.238281 7 12 7 Z M 12 9 C 10.34375 9 9 10.34375 9 12 C 9 13.65625 10.34375 15 12 15 C 13.65625 15 15 13.65625 15 12 C 15 10.34375 13.65625 9 12 9 Z ">
                          </path></g>
                        </svg>                    
                    </div>
                    <div class="header-item-text">
                        InstOren
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
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="26px"
                            height="26px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
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
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="26px"
                            height="26px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                        <g id="Bounding_Boxes">
                            <g id="ui_x5F_spec_x5F_header_copy_2">
                            </g>
                            <path fill="none" d="M0,0h24v24H0V0z"/>
                        </g>
                        <g id="Rounded">
                            <path d="M12,7V5c0-1.1-0.9-2-2-2H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9c0-1.1-0.9-2-2-2H12z M6,19H4v-2h2V19z
                                M6,15H4v-2h2V15z M6,11H4V9h2V11z M6,7H4V5h2V7z M10,19H8v-2h2V19z M10,15H8v-2h2V15z M10,11H8V9h2V11z M10,7H8V5h2V7z M19,19h-7
                                v-2h2v-2h-2v-2h2v-2h-2V9h7c0.55,0,1,0.45,1,1v8C20,18.55,19.55,19,19,19z M18,11h-2v2h2V11z M18,15h-2v2h2V15z"/>
                        </g>
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
    .header {
        height: 56px;
    }
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
        color: rgba(66, 133, 244, 1);
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