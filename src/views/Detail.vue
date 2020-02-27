<template>
  <div>
    <Master>
      <template v-slot:content>
        <Masterbranch>
          <template v-slot:contentmain>
            <Detailmain />
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
import Detailmain from "../components/Layouts/Partials/Detailmain";
import Side from "../components/Layouts/Partials/Side";

export default {
  name: "Detail",
  components: {
    Master,
    Masterbranch,
    Detailmain,
    Side
  }
};
</script>


