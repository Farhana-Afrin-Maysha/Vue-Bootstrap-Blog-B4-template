<template>
  <main class="posts-listing col-lg-8">
    <div class="container">
      <div class="row">
        <!-- post -->
        <div class="post col-xl-6" v-for="post in posts.slice(0,6)" :key="post.id">
          <div class="post-thumbnail"><a href="post.html"><img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/blog-post-1.jpeg" alt="..." class="img-fluid"></a></div>
          <router-link :to="{ name: 'Detail', params: { teamid:post.id}}"><h3>{{ post.title}}</h3></router-link>
          <p>{{post.body}}</p>
        </div>
        <!-- post             -->
    </div>
    <nav aria-label="Page navigation example">
              <ul class="pagination pagination-template d-flex justify-content-center">
                <li class="page-item"><a href="#" class="page-link"> <i class="fa fa-angle-left"></i></a></li>
                <li class="page-item"><a href="#" class="page-link active">1</a></li>
                <li class="page-item"><a href="#" class="page-link">2</a></li>
                <li class="page-item"><a href="#" class="page-link">3</a></li>
                <li class="page-item"><a href="#" class="page-link"> <i class="fa fa-angle-right"></i></a></li>
              </ul>
            </nav>
    </div>
  </main>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Blogmain',
  data () {
    return {
      posts: []
    }
  },
  created () {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      console.log(response)
      this.posts = response.data
    })
  }
}
</script>