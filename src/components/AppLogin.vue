<template>
    <div class="modal" name="modal" @click.self="closeModalLogin()">
        <div class="modal-wrapper">
            <!-- <div class="modal-actions"> -->
                <form class="modal-actions" @submit.prevent="postLogin">
                <h2>Добро пожаловать!</h2>
                <p>Войдите в систему, чтобы получить доступ к голосованию и комментированию событий нашего города</p>
                <input required class="input-auth" type="text" size="20" v-model="user.login" placeholder="Логин">
                <input required class="input-auth" type="password" v-model="user.password" placeholder="Пароль">
                <div class="modal-actions-error" v-if="error">
                    {{ this.errorText }}
                </div>
                <div class="modal-wrap-action">
                    <!-- <button type="submit" class="modal-wrapper-button-in" v-on:click="postLogin()">Войти</button> -->
                    <button type="submit" class="modal-wrapper-button-in">Войти</button>
                    <a class="modal-wrapper-link" href="#">Забыли пароль?</a>
                </div>
                
                <p class="modal-wrapper-p">Нет аккаунта? <a class="modal-wrapper-link" href="#">Создайте.</a>
                </p>
                </form>
            <!-- </div> -->
            <!-- <div v-if="showResult" class="modal-result">
                Спасибо, мы перезвоним Вам в ближайшее время!
            </div> -->
            <button @click="closeModalLogin()" class="modal-wrapper-button">Закрыть</button>
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
            user: {
                login: '',
                password: ''
            },
            error: false,
            errorText: '',
            showResult: false
        }
    },
    computed: {
        isValid: function () {
            if ( this.user.name == '' || this.user.password == '') {
                return false
            } else return true
        }
        // getError() {
        //     return this.$store.state.login.error
        // }
    },
    methods: {  
            postLogin () {
                if ( this.isValid ) {
                    
                    // console.log('username=',username);
                    // this.$store.dispatch('authRequest', this.user).then(() => {
                    this.$store.dispatch('AUTH_REQUEST', this.user).
                    then(() => {
                        this.$store.dispatch('setModalLogin')
                        this.$router.push('/')
                        this.errorText = ''
                        this.error = false
                    })
                    .catch(e => {
                        console.log(e.message)
                        this.error = true
                        // this.error = this.$store.state.login.error
                        console.log('efef=', this.error)
                        if ( this.$store.state.login.error == 110 ) {
                            this.errorText = 'Неправильный логин или пароль'
                        }
                        if ( this.$store.state.login.error == 111 ) {
                            this.errorText = 'Подтвердите аккаунт по ссылке, высланной вам на электронную почту'
                        }
                        // commit('setLoading', false)
                    }); 
                //     axios.post('http://lba.ru/crm_int.php', this.client)
                //     .then(response => {
                //         console.log('данные =', response);
                //         // router.push({ path: '/' })
                //     })
                //     .catch(e => {
                //       console.log(e.message)
                //     })  
                //     this.error = false
                //     this.showResult = true
                //     this.setGetTimeOut()
                //     // this.$emit('close')
                } else {
                    this.error = true
                }  
            },
            closeModalLogin () {
                this.$store.dispatch('setModalLogin')
            },
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
.modal {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    /* margin: auto 0; */
    /* margin-left: auto;
    margin-right: auto; */
}
.modal-wrapper {
    margin: 0 5px;
    background: rgba(255,255,255,1);
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 20px rgba(0,0,0,.5);
    /* margin: auto 0;
    margin-left: auto;
    margin-right: auto; */
    border-radius: 6px;
}
.modal-actions > h2, .modal-actions > p  {
    color: black;
    text-align: center;
}
.modal-actions > p {
    margin-top: 0;
    margin-bottom: 25px;
    font-size: 16px;
    font-weight: 400;
    line-height: 25.8px;
}
.modal-actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.input-auth {
    /* display: block; */
    padding: 6px 12px 8px;
    height: 35px;
    border: 1px solid #d3d9de;
    outline: none;
    border-radius: 6px;
    margin-bottom: 15px;
    width: 280px;
    font-size: 14px;
}

.modal-wrapper-button {
    outline: none;
    border: 0;
    margin-top: 20px;
    padding: 20px 0;
    border-radius: 0 0 6px 6px;
    cursor: pointer;
    color: #6e6e6e;
    font-size: 12px;
}
.modal-wrapper-button-in {
    background-color: rgba(66, 133, 244, 1);
    border-radius: 4px;
    padding: 7px 16px 8px;
    cursor: pointer;
    outline: none;
    color: #fff;
    font-size: 14px;
    line-height: 25px;
    width: 140px;
    border: 0;
}

.modal-wrap-action {
    width: 305px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-wrapper-link {
    text-decoration: none;
    color: rgba(66, 133, 244, 1);
    margin-right: 15px;
}
.modal-wrapper-link:hover {
    text-decoration: underline;
}
.modal-wrapper>p {
    display: block;
}

/* @media (min-width: 500px) {
    .modal-actions > p {
        width: 480px;
    }
} */
.modal-actions > .modal-wrapper-p {
    margin-top: 20px;
    margin-bottom: 0;
    font-size: 14px;
}
.modal-actions-error {
    margin-bottom: 15px;
    color: red;
}
@media (min-width: 800px) {
    .modal-actions > p {
        width: 385px;
    }
    .modal-actions {
        padding: 15px 110px 0 110px;
    }
    .modal-wrapper {
        margin-top: -150px;
    }
    .modal-wrapper-button {
        margin-top: 40px;
        padding: 25px 0;
    }
}
</style>