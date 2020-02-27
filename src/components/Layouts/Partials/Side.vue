<template>

    <aside class="col-lg-4">
        <Searchblog/>
        <Latestpost/>
        <Categories/>
        <Tags/>
    </aside> 
   
</template>

<script>
import Searchblog from './Searchblog'
import Latestpost from './Latestpost'
import Categories from './Categories'
import Tags from './Tags'

export default {
    name: "Side",
    components: {
   Searchblog,
   Latestpost,
   Categories,
   Tags
  }
}
</script>