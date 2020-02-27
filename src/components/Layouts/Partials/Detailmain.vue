<template>
  <main class="post blog-post col-lg-8">
    <div class="container">
      <div class="post-single">
        <div class="post-thumbnail">
          <img
            src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/blog-post-3.jpeg"
            alt="..."
            class="img-fluid"
          />
        </div>
        <div class="post-details">
          <div class="post-body">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, quibusdam facere commodi incidunt impedit molestiae neque mollitia minus. Saepe placeat nobis natus velit sunt nesciunt iusto autem maxime? Asperiores, quas.</p>
          </div>
          <Postcomment/>
          <Leavereply/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Postcomment from "./Postcomment";
import Leavereply from "./Leavereply";

export default {
  name: "Detailmain",
  components: {
    Postcomment,
    Leavereply
  }
};
</script>