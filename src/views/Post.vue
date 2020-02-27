<template>
  <div>
    <Master>
      <template v-slot:content>
        <Masterbranch>
          <template v-slot:contentmain>
            <Postmain />
          </template>
          <template v-slot:contentside>
            <Side />
          </template>
        </Masterbranch>
      </template>
    </Master>
  </div>
</template>

<script>
import Master from "../components/Layouts/Master";
import Masterbranch from "../components/Layouts/Masterbranch";
import Postmain from "../components/Layouts/Partials/Postmain";
import Side from "../components/Layouts/Partials/Side";

export default {
  name: "Post",
  components: {
    Master,
    Masterbranch,
    Postmain,
    Side
  }
};
</script>


