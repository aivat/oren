<template>
    <div class="range">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
    <defs>
        <path id="a" d="M0 0h24v24H0V0z"/>
    </defs>
    <clipPath id="b">
        <use xlink:href="#a" overflow="visible"/>
    </clipPath>
    <path clip-path="url(#b)" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
</svg>
        <span class="rande-label">Рейтинг</span><span id="rangeValue">{{ range }}</span>
        <input type="range" min="-50" max="100" step="50" list="rangeList" :value="range" v-on:change="setValue">
        <datalist id="rangeList">
            <option value="-50" label="50"></option>
            <option value="0" label="0"></option>
            <option value="50" label="50"></option>
            <option value="100" label="100"></option>
        </datalist>
    </div>
</template>

<script>
import { mapGetters} from 'vuex'

export default {
    props: ['type'],
    computed: { 
        ...mapGetters({
        // range: 'getValue(this.type)'
        }),
        range() {
            return this.$store.getters.getValue(this.type)
        }
    },
    beforeCreate() {
         this.$store.dispatch('initialiseStore')
    },
    methods: {
        setValue (e) {
            let qwe = {
                val: Number(e.target.value),
                type: this.type
            }
            this.$store.dispatch('setRange',  qwe )
            this.$store.dispatch('getAllNews', 'economics')
        } 
    }
}
</script>

<style scoped>
input[type=range]{
    -webkit-appearance: none; 
       -moz-appearance: none;
            appearance: none;
        
    border: none; /* FF */
    width: 80px; /* FF */
    padding: 0; /* IE */
	background-color: inherit;
	cursor: pointer;
	margin: 0;
}

input[type=range]:focus {
    outline: none;
} 

#rangeValue {
	display: inline-block;
	width: 30px;
	color: rgba(36, 122, 134, .8);
    padding-right: 10px;
    color: rgba(66, 133, 244, .8);
}

.range {
	display: flex;
	align-items: center;
}
.range > svg {
    padding-right: 18px;
    fill:rgb(123,133,142);
}
.rande-label {
    color: rgb(123,133,142);
    font-weight: 700;
	padding-right: 20px;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently */
}
/*Для webkit-браузеров*/

input[type=range]::-webkit-slider-runnable-track {
    width: 80px;
    height: 12px;
    background: #ddd;
    border: none;
    border-radius: 6px;
}

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #247A86;
    background: rgba(66, 133, 244, 1);
    margin-top: -4px;
}

input[type=range]:focus::-webkit-slider-runnable-track {
    background: #ccc;
	background: #ddd;
    
}

/*Для браузера Forefox*/

input[type=range]::-moz-range-track {
    width: 80px;
    height: 12px;
    background: #ddd;
    border: none;
    border-radius: 6px;
}

input[type=range]::-moz-range-thumb {
    border: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #247A86;
    background: rgba(66, 133, 244, 1);
}

input[type=range]:-moz-focusring{
    outline: 1px solid white;
    outline-offset: -1px;
}

input[type=range]:focus::-moz-range-track {
/*    background: #ccc;*/
}

input[type=range]::-moz-range-progress { 
   background: #ccc;
   background: rgba(36, 122, 134, .3);
   background: rgba(66, 133, 244, .15);
   height: 12px;
   border-radius: 6px;
}

/*Для браузера IE10 +*/

input[type=range]::-ms-track {
    width: 80px;
    height: 10px;
    background: transparent;
    border-color: transparent;
    border-width: 11px 0;
    color: transparent;
}

 input[type=range]::-ms-fill-lower {
	background: rgba(36, 122, 134, 0.3);
    background: rgba(66, 133, 244, .15);
    border-radius: 10px;
}

input[type=range]::-ms-fill-upper {
	background: rgba(36, 122, 134, 0.3);
    background: rgba(66, 133, 244, .15);
    border-radius: 10px;
}

input[type=range]::-ms-thumb {
    border: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #247A86;
}

input[type=range]:focus::-ms-fill-lower {
	background: rgba(36, 122, 134, 0.3);
    background: rgba(66, 133, 244, .15);
}

input[type=range]:focus::-ms-fill-upper {
    background: #ccc;
}
@media (min-width: 800px) {
    #rangeValue {
        padding-right: 5px;
    }
    .rande-label {
        padding-right: 10px;
    }
}
@media (min-width: 1050px) {
    .rande-label {
        font-weight: 500;
    }
}
</style>