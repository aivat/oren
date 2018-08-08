<template>        
        <div class="news-list-item-footer-rating-left">
            <div class="news-list-item-footer-rating-up">
                <button class="news-list-item-footer-rating-button" title="Поставить плюсик">
                    <svg fill="#000000" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
                    </svg>
                </button>
            </div>
            <div class="news-list-item-footer-rating-count">
                <!-- {{ secret.plus - secret.minus }} -->
            </div>							
            <div class="news-list-item-footer-rating-down">
                <button class="news-list-item-footer-rating-button" title="Поставить минус">
                    <svg fill="#000000" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
                    </svg>										
                </button>
            </div>							
        </div>
</template>

<script>
import { mapGetters} from 'vuex'

export default {

    // props: ['type'],
    computed: { 
        ...mapGetters({
        // range: 'getValue(this.type)'
        }),
        range() {
            // return this.$store.getters.getValue(this.type)
        }
    },
    beforeCreate() {
        //  this.$store.dispatch('initialiseStore')
    },
    methods: {
        // setValue (e) {
        //     let qwe = {
        //         val: Number(e.target.value),
        //         type: this.type
        //     }
        //     this.$store.dispatch('setRange',  qwe )
        //     if (this.type == 'secrets') {
        //         this.$store.dispatch('getAllSecrets', 0)
        //     }
        //     if (this.type == 'news' || this.type == '') {
        //         this.$store.dispatch('getAllNews', 'economics')
        //     }
            
        //     //this.$store.dispatch('getAllNews', 'economics')
            
        // } 
    }
}
</script>

<style scoped>
.news-list-item-footer-rating-left {
	display: none;
}
.news-list-item-footer-rating-up, .news-list-item-footer-rating-down {
	height: 32px;
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
.news-list-item-footer-rating-button svg:hover {
	fill: white;
	transition: fill 200ms;
    transition-property: fill;
    transition-duration: 200ms;
    transition-timing-function: initial;
    transition-delay: initial;
}
.news-list-item-footer-rating-count {
	color: #db4437;
	margin: 0 5px;
	line-height: 32px;
	font-weight: 700;
}
@media (min-width: 500px) {
    .news-list-item-footer-rating-button,
	.news-list-item-footer-rating-button:active,
	.news-list-item-footer-rating-button:focus {
		border-radius: 2px;
	}
}
@media (min-width: 1280px) {
    .news-list-item-footer-rating-left {
        display: flex;
        position: absolute;
        left: -80px;
        flex-direction: column;
        top: -10px;
        align-items: center;
    }
    .news-list-item-footer-rating-button {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>