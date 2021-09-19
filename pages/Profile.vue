<template>
        <div class="container">
            <div v-for="(post, index) in posts" :key="post._id">
                    <div class="card">
                        <div class="card-header">
                            {{post.title}}
                        </div>
                        <img class="card-img" :src="post.imagePath" alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text">{{post.content}}</p>
                        </div>
                        <div class="card-footer">
                            {{post.timeStamp}}
                            <button type="button" @click="updatePostModal(post)" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#updatepostModal">
                            Update
                            </button>

                            <!-- Modal -->
                            <div class="modal fade" id="updatepostModal" tabindex="-1" aria-labelledby="updatepostModalLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="updatepostModalLabel">Update Post</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                    <form>
                                      <div class="form-group">
                                        <label for="title-text" class="col-form-label label-float">Title:</label>
                                        <input type="text" class="form-control" v-if="currentPost" v-model="currentPost.title" id="title">
                                      </div>
                                      <div class="form-group">
                                        <label for="content-text" class="col-form-label label-float">Content:</label>
                                        <textarea class="form-control" v-if="currentPost" v-model="currentPost.content" id="content"></textarea>
                                      </div>
                                      <div class="form-group">
                                        <label for="author-text" class="col-form-label label-float">Author:</label>
                                        <input type="text" class="form-control" v-if="currentPost" v-model="currentPost.author" id="author">
                                      </div>
                                      <div class="form-group">
                                        <label for="image-text" class="col-form-label label-float">Image Path:</label>
                                        <input type="text" class="form-control" v-if="currentPost" v-model="currentPost.imagePath" id="image">
                                      </div>
                                    </form>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button"  @click="updatePost" class="btn btn-success" data-bs-dismiss="modal">Update Post</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button type="button" @click="$emit('removePost', index)" class="btn btn-danger btn-sm" >Remove</button>
                        </div>
                    </div>
            </div>
            <Newpost @newPost="newPost" />
        </div>
</template>

<script>

import Newpost from '../components/Newpost.vue'

export default {
  name: 'Profile',
  data () {
    return {
      posts: [],
      currentPost: undefined
    }
  },
  components: { Newpost },
  methods: {
    // Use this method to get posts from the database
    getPosts: async function () {
      this.posts = await fetch('http://localhost:3000/api/posts/all')
        .then(data => {
          return data.json()
        })
        .then(json => {
          return json.result
        })
      this.posts.sort(function (a, b) {
        if (a.timeStamp < b.timeStamp) {
          return 1
        } else if (a.timeStamp > b.timeStamp) {
          return -1
        } else {
          return 0
        }
      })
    },
    // This method catches the emit to the app. The emit came from the addPost method in NewPost.vue
    newPost: function (post) {
      this.posts.push(post)
      this.posts.sort(function (a, b) {
        if (a.timeStamp < b.timeStamp) {
          return 1
        } else if (a.timeStamp > b.timeStamp) {
          return -1
        } else {
          return 0
        }
      })
    },
    refreshPage () {
      window.location.reload()
    },
    updatePostModal (post) {
      this.currentPost = post // Current post's data is stored and will be updated
    },
    updatePost () {
      this.$emit('updateOldPost', this.currentPost)
      this.refreshPage()
    }
  },
  // This lifecycle method runs before the component is mounted to the DOM
  beforeMount () {
    this.getPosts()
  }
}
</script>
