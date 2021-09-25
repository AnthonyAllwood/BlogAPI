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
                            <input type="text" class="form-control" placeholder="Enter your firstname" v-model="firstname" id="firstname">
                        </div>
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Enter your lastname" v-model="lastname" id="lastname">
                        </div>
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
                        <div class="alert-container">
                            <div class="alert-content">Password must be at least 6 characters</div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn float-right login_btn">Register</button>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <b>Already have an account?</b>
                    <nuxt-link to='/login'>Login</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Register',
  middleware: 'auth',
  auth: 'guest',
  data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
  },
  methods: {
    //This function will give an error if vuex store is not enabled by creating a index.js
    async registerUser () {
      try{
        let data = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password
        }

        let response = await this.$axios.$post('http://localhost:3000/api/auth/signup', data);
        console.log(response);

        if(response.success){
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
          this.$router.push('/');
        }
      }catch(err) {
        console.log(err)
      }
    } 
  }
}
</script>
<style>

</style>
