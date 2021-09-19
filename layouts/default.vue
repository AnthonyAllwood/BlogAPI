<template>
  <div id="app">
    <Navbar />
    <nuxt @updateOldPost="updateOldPost" @removePost="removePost" />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Profile from '../pages/Profile.vue'
import Register from '../pages/Register.vue'

export default {
  data () {
    return {
      API_URL: 'http://localhost:3000/api/',
      posts: []
    }
  },
  components: {Navbar, Profile, Register},
  methods: {
    getPosts () {
      fetch(this.API_URL + 'posts/all')
        .then(data => {
          return data.json()
        })
        .then(json => {
          this.posts = json.result
        })
    },
    refreshPage () {
      window.location.reload()
    },
    updateOldPost: function (post) {
      let clientPost = {
        _id: post._id,
        title: post.title,
        content: post.content,
        author: post.author,
        imagePath: post.imagePath
      }
      fetch('http://localhost:3000/api/post/update', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(clientPost)
      })
        .then(data => {
          return data.json()
        })
        .then(json => {
          console.log(json)
        })
    },
    removePost: function (index) {
      fetch('http://localhost:3000/api/post/remove', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({_id: this.posts[index]._id})
      })
        .then(data => {
          return data.json()
        })
        .then(json => {
          console.log(json)
        })
      this.posts.splice(index, 1)
      this.refreshPage()
    }
  },
  // This lifecycle method runs before the component is mounted to the DOM
  beforeMount () {
    this.getPosts()
  }
}
</script>

<style>
#app {
  font-family: 'Kanit', sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>