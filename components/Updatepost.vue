<template>
    <div class="container">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#updatepostModal">
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
                                <label for="title-text" class="col-form-label">Title:</label>
                                <input type="text" class="form-control" v-if="currentPost" v-model="currentPost.title" id="title">
                            </div>
                            <div class="form-group">
                                <label for="content-text" class="col-form-label">Content:</label>
                                <textarea class="form-control" v-if="currentPost" v-model="currentPost.content" id="content"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="author-text" class="col-form-label">Author:</label>
                                <input type="text" class="form-control" v-if="currentPost" v-model="currentPost.author" id="author">
                            </div>
                            <div class="form-group">
                                <label for="image-text" class="col-form-label">Image Path:</label>
                                <input type="text" class="form-control" v-if="currentPost" v-model="currentPost.imagePath" id="image">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" @click="updatePost()" class="btn btn-success">Update Post</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Updatepost',
  props: {
    post: Object
  },
  data () {
    return {
      currentPost: undefined // Will be used to store the desired post's data
    }
  },
  methods: {
    updateCurrentPost: function (post) {
      this.currentPost = post // Current post's data is stored and will be updated
    },
    updatePost () {
      this.$emit('updatePost', this.currentPost)
    }
  }
}
</script>

