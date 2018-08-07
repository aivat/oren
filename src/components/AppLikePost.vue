<template>
    <div class="news-list-item-footer-rating-left">
        <div class="news-list-item-footer-rating-up" >
            <button class="news-list-item-footer-rating-button" title="Поставить плюсик" v-bind:class="{ 'active-up': isLikeUp }">
                <svg fill="#000000" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
                </svg>
            </button>
        </div>
        <div class="news-list-item-footer-rating-count">
            {{ rating }}
        </div>							
        <div class="news-list-item-footer-rating-down">
            <button class="news-list-item-footer-rating-button" title="Поставить минус" v-bind:class="{ 'active-down': isLikeDown }">
                <svg fill="#000000" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
                </svg>										
            </button>
        </div>							
    </div>
</template>

<script>

export default {
    props: ['plus', 'minus', 'isLiked'],
    computed: {
        rating: function () {
            return this.plus - this.minus
        },
        isLikeUp: function () {
            return this.isLiked == '1' ? true : false
        },
        isLikeDown: function () {
            return this.isLiked == '-1' ? true : false
        }
    }
}
</script>


<style scoped>
.news-list-item-footer-rating-left {
	display: flex;
	align-items: center;
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

.news-list-item-footer-rating-button {
	display: flex;
	align-items: center;
	justify-content: center;
}

.news-list-item-footer-rating-button svg {
	fill: #bdc4ca;
}
.news-list-item-footer-rating-button,
.news-list-item-footer-rating-button:active {
	outline: none;
	border: none;
	padding: 0;
/*	background-color: white;*/
    /* background-color: inherit; */
    background-color: transparent;
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

.active-up {
    background-color: rgb(138, 200, 88);
    border: 1px solid rgb(138, 200, 88);
}
.active-up>svg {
	fill: white;
}
.active-down {
    background-color: #db4437;
    border: 1px solid #db4437;
}

.active-down>svg {
	fill: white;
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
}
</style>