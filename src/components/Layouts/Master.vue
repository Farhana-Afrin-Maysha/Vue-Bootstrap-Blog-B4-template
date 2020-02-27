<template>
    <div>
        <!-- nav -->
        <Navbar/>
        <slot name="content"></slot> 
        <!-- footer -->
        <Footer/>
    </div>   
</template>

<script>
 import Navbar from './Partials/Navbar'
 import Footer from './Partials/Footer'

export default {
    name: 'Master',
    components:{
      Navbar,
      Footer

    }
}
</script>