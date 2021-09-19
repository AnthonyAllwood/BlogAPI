<template>
    <div class="container">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newpostModal">
            New Post
        </button>

        <!-- Modal -->
        <div class="modal fade" id="newpostModal" tabindex="-1" aria-labelledby="newpostModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="newpostModalLabel">Create New Post</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="title-text" class="col-form-label label-float">Title:</label>
                                <input type="text" class="form-control" v-model="createPost.title" id="title">
                            </div>
                            <div class="form-group">
                                <label for="content-text" class="col-form-label label-float">Content:</label>
                                <textarea class="form-control" v-model="createPost.content" id="content"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="author-text" class="col-form-label label-float">Author:</label>
                                <input type="text" class="form-control" v-model="createPost.author" id="author">
                            </div>
                            <div class="form-group">
                                <label for="image-text" class="col-form-label label-float">Image Path:</label>
                                <input type="text" class="form-control" v-model="createPost.imagePath" id="image">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" @click="addPost" class="btn btn-success" data-bs-dismiss="modal">Add Post</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Newpost',
  data () {
    return {
      createPost: {}
    }
  },
  methods: {
    refreshPage () {
      window.location.reload()
    },
    addPost () {
      let clientPost = {
        title: this.createPost.title,
        content: this.createPost.content,
        author: this.createPost.author,
        imagePath: this.createPost.imagePath
      }
      fetch('http://localhost:3000/api/post/new', {
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
          this.$emit('createPost', json.result) // Emit sends the post result back up to the parent component. The post result is then caught by parent component, and can now be used
          this.createPost = {}
        })
      this.refreshPage()
    }

  }
}
</script>

