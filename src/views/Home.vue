<template>
  <div class="home">
    <h1>Welcome to the game wikipedia</h1>
    <post-list></post-list>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { PostList },
};
</script>

<style>
</style>
