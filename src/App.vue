<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
    
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Footer
  },
  data() {
    return {
      transitionName: 'slide-forward',
      map: new Map()
    }
  },
  watch: {
    $route(to, from) {
      if (!this.map[to.path]) {
        this.map[to.path] = new Date().getTime() + 0.5;
      }
      if (!this.map[from.path]) {
        this.map[from.path] = new Date().getTime();
      }
      if (!this.map[to.path] > this.map[from.path]) {
        this.transitionName = 'slide-forward';
      } else {
        this.transitionName = 'slide-back'
      }
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

.slide-forward-enter {
  transform: translate(100%);
}

.slide-forward-enter-active {
  transform: all .5s ease-in-out;
}

.slide-back-enter {
  transform: translate(-100%);
}

.slide-back-enter-active {
  transform: all .5s ease-in-out;
}

.slide-back-leave-active {
  transform: translate(100%);
  transition: all .5s ease-in-out;
}</style>
