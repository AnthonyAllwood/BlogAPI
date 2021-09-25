<template>
    <div class="container">
        <h2>{{post.title}}</h2>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newcommentModal">New Comm</button>
        <!-- Comment Modal -->
        <div class="modal fade" id="newcommentModal" tabindex="-1" aria-labelledby="newcommentModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="newcommentModalLabel">Add Comment</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="content-text" class="col-form-label label-float">Rating:</label>
                                <b-form-rating class="mb-2" variant="warning" v-model="rating" id="rating"></b-form-rating>
                            </div>
                            <div class="form-group">
                                <label for="content-text" class="col-form-label label-float">Header:</label>
                                <input type="text" class="form-control" v-model="header" id="content">
                            </div>
                            <div class="form-group">
                                <label for="author-text" class="col-form-label label-float">Content:</label>
                                <textarea class="form-control" v-model="content" id="content"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="image-text" class="col-form-label label-float">User:</label>
                                <input type="text" class="form-control" :value="$auth.$state.user.firstname" id="user" readonly>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" @click="addComment" class="btn btn-success" data-bs-dismiss="modal">Add Comment</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>

export default {
    name: 'Post',
    async asyncData({ $axios, params }){
        try{
            let post = $axios.$get(`http://localhost:3000/api/posts/${params.id}`);

            const [postResponse] = await Promise.all([
                post
            ])

            console.log(postResponse)

            return {
                post: postResponse.post
            }
        }catch(err){
            console.log(err)
        }

        /* Test code to see if params worked
        console.log(params.id);

        return {
            param: params.id
        }*/
    },
    data() {
        return {
            rating: undefined,
            header: '',
            content:''
        }
    },
    methods: {
        // This methods add new comment
        async addComment(){
            try{
                let data = {
                    rating: 0,
                    header: this.header,
                    content: this.content
                }
                let response = await this.$axios.$post(`http://localhost:3000/api/comments/${this.$route.params.id}`, data)
                console.log(response)

                if(response.success){
                    this.$router.push(`/posts/${this.$route.params.id}`)
                }
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>