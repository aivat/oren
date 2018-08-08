<template>
    <div name="modal">
        <div class="modal-wrapper">
                <div v-if="!showResult" class="modal-actions">
                    <h2 class="modal-h2">Добро пожаловать!</h2>
                    <p>Войдите в систему, чтобы получить доступ к голосованию и комментированию событий, интересных вам</p>
                    <input class="input-auth" type="text" size="20" v-model="client.name" placeholder="Логин">
                    <input class="input-auth" type="tel" v-model="client.tel" placeholder="Пароль">
                    <div class="modal-actions-error" v-if="error">
                        Заполните все поля!
                    </div>
                    <div class="modal-wrap-action">
                        <button @click="$emit('close')" class="modal-wrap-action-button">Войти</button>
                        <button v-on:click="postClient()" class="modal-wrap-action-button">Забыли пароль</button>
                    </div>
                </div>
                <div v-if="showResult" class="modal-result">
                    Спасибо, мы перезвоним Вам в ближайшее время!
                </div>
        </div>
    </div>
</template>

<script>
import  axios from 'axios'
export default {
    components: {
    },
    data () {
        return {
            client: {
                name: '',
                tel: ''
            },
            error: false,
            showResult: false
        }
    },
    computed: {
        isValid: function () {
            if ( this.client.name == '' || this.client.tel == '') {
                return false
            } else return true
        }
    },
    methods: {  
            // postClient () {
            //     if ( this.isValid ) {
            //         axios.post('http://lba.ru/crm_int.php', this.client)
            //         .then(response => {
            //             console.log('данные =', response);
            //             // router.push({ path: '/' })
            //         })
            //         .catch(e => {
            //           console.log(e.message)
            //         })  
            //         this.error = false
            //         this.showResult = true
            //         this.setGetTimeOut()
            //         // this.$emit('close')
            //     } else {
            //         this.error = true
            //     }  
            // },
            setGetTimeOut() {
                setTimeout(()=>{ 
                    this.showResult = false
                     this.$emit('close')
                }, 1900);
            },
    }
}
</script>
 
<style scoped>

</style>