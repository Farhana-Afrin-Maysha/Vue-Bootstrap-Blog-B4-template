<template>
  <div class="add-comment">
    <header>
      <h3 class="h6">Leave a reply</h3>
    </header>
    <form action="#" class="commenting-form">
      <div class="row">
        <div class="form-group col-md-6">
          <input type="text" name="username" id="username" placeholder="Name" class="form-control" />
        </div>
        <div class="form-group col-md-6">
          <input
            type="email"
            name="username"
            id="useremail"
            placeholder="Email Address (will not be published)"
            class="form-control"
          />
        </div>
        <div class="form-group col-md-12">
          <textarea
            name="usercomment"
            id="usercomment"
            placeholder="Type your comment"
            class="form-control"
          ></textarea>
        </div>
        <div class="form-group col-md-12">
          <button type="submit" class="btn btn-secondary">Submit Comment</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Leavereply"
};
</script>