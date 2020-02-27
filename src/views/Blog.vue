<template>
  <div>
   <Master>
     <template v-slot:content>
       <Masterbranch>
         <template v-slot:contentmain>
           <Blogmain/>
     </template>
     <template v-slot:contentside>
        <Side/>
     </template>
       </Masterbranch>
   </template>
   </Master>

    
  </div>
</template>

<script>
import Master from '../components/Layouts/Master'
import Masterbranch from '../components/Layouts/Masterbranch'
import Blogmain from '../components/Layouts/Partials/Blogmain'
import Side from '../components/Layouts/Partials/Side'


export default {
  name: "Blog",
  components: {
   Master,
   Masterbranch,
   Blogmain,
   Side
  },
  
};
</script>


