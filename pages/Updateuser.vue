<template>
    <div class="container updateuser">
        <h2>Welcome, {{$auth.$state.user.firstname}} !</h2>
        <div class="d-flex justify-content-center h-100">
            <div class="card updateuser-card">
                <div class="card-header">
                    <h4>Update Profile</h4>
                </div>
                <div class="card=body">
                    <form @submit.prevent="updateUser">
                        <div class="form-group">
                            <label for="title-text" class="col-form-label label-float">Firstname:</label>
                            <input type="text" class="form-control" v-model="firstname" id="firstname">
                        </div>
                        <div class="form-group">
                            <label for="content-text" class="col-form-label label-float">Lastname:</label>
                            <input type="text" class="form-control" v-model="lastname" id="lastname">
                        </div>
                        <div class="form-group">
                            <label for="author-text" class="col-form-label label-float">Email:</label>
                            <input type="text" class="form-control" v-model="email" id="email">
                        </div>
                        <div class="form-group">
                            <label for="image-text" class="col-form-label label-float">Password:</label>
                            <input type="text" class="form-control" v-model="password" id="password">
                        </div>
                        <div class="alert-container">
                            <div class="alert-content">Password must be at least 6 characters</div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-warning">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Updateuser',
  data () {
    return {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    }
  },
  methods: {
      async updateUser () {
          let data = {
              firstname: this.firstname,
              lastname: this.lastname,
              email: this.email,
              password: this.password
          }
        try{
            let response = await this.$axios.$put('http://localhost:3000/api/auth/user', data)

            if(response.success){
                this.firstname = '';
                this.lastname = '';
                this.email = '';
                this.password = '';

                // This is needed to display the change to the user on the client-side. Without this, the user's old info will still be displayed. 
                await this.$auth.fetchUser();
            }
        }catch(err){
            console.log(err)
        }
      }
  }
}
</script>
