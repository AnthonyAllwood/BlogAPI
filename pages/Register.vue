<template>
    <div class="container-fluid register">
        <div class="d-flex justify-content-center h-100">
            <div class="card register-card">
                <div class="card-header">
                    <h3>Create Account</h3>
                </div>
                <div class="card-body">
                    <form @submit.prevent="registerUser">
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Enter your firstname" v-model="register.firstname" id="firstname">
                        </div>
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Enter your lastname" v-model="register.lastname" id="lastname">
                        </div>
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Enter your email" v-model="register.email" id="email">
                        </div>
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-key"></i></span>
                            </div>
                            <input type="password" class="form-control" placeholder="Enter your password" v-model="register.password" id="password">
                        </div>
                        <div class="alert-container">
                            <div class="alert-content">Password must be at least 6 characters</div>
                        </div>
                        <div class="form-group">
                            <input type="submit" value="Register" class="btn float-right login_btn">
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <b>Already have an account?</b>
                    <router-link class="nav-link" exact-active-class="active" to="/login">Login</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default {
  name: 'Register',
  data () {
    return {
      register: {}
    }
  },
  methods: {
    registerUser () {
      const createUser = {
        firstname: this.register.firstname,
        lastname: this.register.lastname,
        email: this.register.email,
        password: this.register.password
      }
      axios.post('http://localhost:3000/api/user/register', createUser)
        .then(
          res => {
            console.log(res)
          }
        ).catch(
          err => {
            console.log(err)
          }
        )
      this.$router.push('/login')
    }
  }
}
</script>
<style>

</style>
