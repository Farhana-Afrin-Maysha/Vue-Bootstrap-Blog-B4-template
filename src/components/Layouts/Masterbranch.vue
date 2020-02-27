<template>
  <div class="container">
    <div class="row">
      <slot name="contentmain"></slot>
      <slot name="contentside"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Masterbranch"
};
</script>