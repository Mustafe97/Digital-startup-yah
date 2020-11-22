<template>
  <div class="create">
    <h1>Add new game</h1>
    <form>
      <input
        type="text"
        v-model="post.description"
        placeholder="Add new game ..."
        required
      />
      <input
        type="file"
        ref="fileInput"
        accept="image/*"
        v-on:change="previewImage"
      />
      <button
        class="choose-image btnedit"
        type="button"
        v-on:click="triggerChooseImg"
      >
        Upload file
      </button>
      <div>
        <img :src="post.image" class="image-preview" />
      </div>
      <button type="button" class="btndelete" v-on:click="createPost">
        Create a post
      </button>
    </form>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  name: "Create",
  data() {
    return {
      post: {
        description: "",
        image: null,
      },
    };
  },
  methods: {
    triggerChooseImg() {
      this.$refs.fileInput.click();
    },
    previewImage() {
      const imageFile = this.$refs.fileInput.files[0];
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        this.post.image = event.target.result;
      };
      fileReader.readAsDataURL(imageFile);
    },
    createPost() {
      postRef.add(this.post);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
form {
  padding: 2em 1em 2.5em;
}

input {
  margin: 1em auto;
  width: 100%;
  max-width: 350px;
  padding: 12px 15px;
  box-sizing: border-box;
  display: block;
}
input[type="file"] {
  display: none;
}
.image-preview {
  max-width: 350px;
  width: 100%;
  padding: 1em 0;
}

.btnedit {
  padding: 12px 30px !important;
  transition-duration: 0.4s !important;
  margin-right: 2% !important;
  width: 9% !important;
}

.btnedit:hover {
  background-color: #4caf50 !important;
  color: white !important;
}

.btndelete {
  padding: 12px 30px !important;
  transition-duration: 0.4s !important;
  margin-right: 2% !important;
  width: 9% !important;
}

.btndelete:hover {
  background-color: red !important;
  color: white !important;
}
</style>