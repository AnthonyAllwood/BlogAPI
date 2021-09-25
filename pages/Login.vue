<template>
    <div class="container-fluid login">
        <div class="d-flex justify-content-center h-100">
            <div class="card login-card">
                <div class="card-header">
                    <h3>Login</h3>
                </div>
                <div class="card-body">
                    <form @submit.prevent="loginUser">
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Enter your email" v-model="email" id="email">
                        </div>
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-key"></i></span>
                            </div>
                            <input type="password" class="form-control" placeholder="Enter your password" v-model="password" id="password">
                        </div>
                        <div class="form-group">
                            <input type="submit" value="Login" class="btn float-right login_btn">
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <b>Dont have an account?</b>
                    <nuxt-link to='/register'>Register</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Login',
  middleware: 'auth',
  auth: 'guest',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async loginUser () {
      try{
          this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password
            }
          })
          this.$auth.setUser({ //This toggles the nuxtjs 'loggedIn' state to true.
            email: this.email,
            password: this.password,
          })
      }catch(err) {
        console.log(err)
      }
    } 
  }
}

</script>

<style>

</style>
