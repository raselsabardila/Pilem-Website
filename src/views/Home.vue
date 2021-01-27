<template>
  <div class="home">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import '../assets/css/home.css'
import Header from '../components/Header.vue'
import Content from '../components/Content.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Content,
    Footer
  },
}
</script>
