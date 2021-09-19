<template>
    <div class="container-fluid register">
        <div class="d-flex justify-content-center h-100">
            <div class="card register-card">
                <div class="card-header">
                    <h3>Login</h3>
                </div>
                <div class="card-body">
                    <form @submit.prevent="loginUser">
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Enter your email" v-model="login.email" id="email">
                        </div>
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-key"></i></span>
                            </div>
                            <input type="password" class="form-control" placeholder="Enter your password" v-model="login.password" id="password">
                        </div>
                        <div class="form-group">
                            <input type="submit" value="Login" class="btn float-right login_btn">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Login',
 data () {
    return {
      login: {}
    }
  },
  methods: {
    loginUser () {
      const loginUser = {
        email: this.login.email,
        password: this.login.password
      }
      axios.post('http://localhost:3000/api/user/login', loginUser)
        .then(
          res => {
            console.log(res)
          }
        ).catch(
          err => {
            console.log(err)
          }
        )
    }
  }
}

</script>

<style>

</style>
