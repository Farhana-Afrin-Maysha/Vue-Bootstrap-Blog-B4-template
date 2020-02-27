<template>
  <Master>
    <template v-slot:content>
      <Hero />
      <Intro />
      <Divider />
      <Latest />
      <Newsletter />
      <Gallery />
    </template>
  </Master>
</template>

<script>
import Master from "../components/Layouts/Master";
import Hero from "../components/Layouts/Partials/Hero";
import Intro from "../components/Layouts/Partials/Intro";
import Divider from "../components/Layouts/Partials/Divider";
import Latest from "../components/Layouts/Partials/Latest";
import Newsletter from "../components/Layouts/Partials/Newsletter";
import Gallery from "../components/Layouts/Partials/Gallery";

export default {
  name: "Home",
  components: {
    Master,
    Hero,
    Intro,
    Divider,
    Latest,
    Newsletter,
    Gallery
  }
};
</script>
