 <template>
  <div class="grid-container">
    <article v-for="post in posts" :key="post.id">
      <img class="postpic" :src="post.image" />
      <h3 class="texth3">{{ post.description }}</h3>
      <router-link :to="{ name: 'Update', params: { post: post } }">
        <button class="btnedit">Edit post</button>
      </router-link>
      <button class="btndelete" v-on:click="deletePost(post)">
        Delete post
      </button>
    </article>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  data() {
    return {
      posts: [],
    };
  },
  firestore: {
    posts: postRef,
  },
  methods: {
    deletePost(post) {
      postRef.doc(post.id).delete();
    },
  },
};
</script>

<style scoped>
/* ---------- Grid container ---------- */
.grid-container {
  display: grid;
  grid-template-columns: 100%;
  padding: 10px;
}
@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: 50% 50%;
  }
}
@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: 33.33% 33.33% 33.33%;
  }
}
.grid-container article {
  text-align: center;
  padding: 10px;
}
.grid-container img {
  max-width: 300px;
  width: 100%;
}
.grid-container h3 {
  font-weight: 200;
  margin: 0 0 1.5em;
}

.btnedit {
  padding: 12px 30px;
  transition-duration: 0.4s;
  margin-right: 2%;
}

.btnedit:hover {
  background-color: #4caf50;
  color: white;
}

.btndelete {
  padding: 12px 30px;
  transition-duration: 0.4s;
  margin-right: 2%;
}

.btndelete:hover {
  background-color: red;
  color: white;
}

.postpic {
  border-radius: 8px;
  -webkit-box-shadow: 10px 10px 100px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 100px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 100px 0px rgba(0, 0, 0, 0.75);
  margin-bottom: 2%;
}

.texth3 {
  font-size: 35px;
}
</style>