<template>
  <b-row align-v="center" class="lyric-card effect2 grow">
    <b-col cols="2" class="artist">
      <contenteditable
        :class="{ 'edit-mode': editMode }"
        tag="div"
        :contenteditable="editMode"
        v-model="post.artist"
        :noNL="true"
      />
    </b-col>
    <b-col cols="3" class="track">
      <contenteditable
        :class="{ 'edit-mode': editMode }"
        tag="div"
        :contenteditable="editMode"
        v-model="post.songName"
        :noNL="true"
      />
    </b-col>
    <b-col>
      <contenteditable
        class="lyric"
        :class="{ 'edit-mode': editMode }"
        tag="div"
        :contenteditable="editMode"
        v-model="post.lyric"
        :noNL="true"
      />
    </b-col>
    <b-col class="icon" cols="auto">
      <b-button-group size="sm">
        <b-button
          variant="transparent"
          v-if="!editMode"
          @click="
            () => {
              editMode = true;
              editPost = { ...post };
            }
          "
        >
          <b-icon icon="pencil" class="icon"></b-icon>
        </b-button>
        <b-button v-else @click="save()">
          <b-icon icon="check" style="color:#55efc4"></b-icon>
        </b-button>

        <b-button variant="transparent" v-if="!editMode" @click="play">
          <!-- <b-icon icon="play-fill" class="icon"></b-icon> -->
          <img
            style="width:20px;color:white"
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
            alt=""
          />
        </b-button>
        <b-button variant="transparent" v-if="!editMode" @click="delPost()">
          <b-icon icon="x" class="icon"></b-icon>
        </b-button>
        <b-button
          variant="transparent"
          v-else
          @click="
            () => {
              editMode = false;
              post = { ...editPost };
            }
          "
        >
          <span style="font-size:12px;cursor:pointer" class="icon">İptal</span>
        </b-button>
      </b-button-group>
    </b-col>
    <div class="w-100"></div>
    <b-col cols="12" class="mt-4" v-if="editMode">
      <contenteditable
        :class="{ 'edit-mode': editMode }"
        class="artist"
        tag="div"
        :contenteditable="editMode"
        v-model="post.spotifyLink"
        :noNL="true"
      />
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      editPost: null,
      editMode: false
    };
  },
  methods: {
    ...mapActions(["deletePost", "updatePost"]),
    async delPost() {
      await this.deletePost(this.post._id);
    },
    async save() {
      await this.updatePost({ postId: this.post._id, changes: this.post });
      this.editMode = false;
    },
    play() {
      window.open(this.post.spotifyLink, "_blank");
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Tillana&display=swap");

.artist {
  color: #fafafa;
}
.lyric {
  font-family: "Tillana", cursive;
  color: white;
  font-size: 1.1rem;
  word-wrap: break-word;
}
.lyric-card {
  cursor: default;
  background: #80133677;
  margin: 8px;
  margin-bottom: 16px;
  border: 1px solid rgba(255, 255, 255, 0.116);
  box-shadow: #80133677;
  padding: 16px;
  border-radius: 5px;
  transition: background 0.15s;
}
.lyric-card:hover {
  background: #801336dd;
}
.track {
  color: #ffffff99;
}
.effect2 {
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}
.icon {
  color: white;
}
.icon svg {
  cursor: pointer;
}

.edit-mode {
  border-bottom: 1px solid white;
}
.grow {
  transition: all 0.2s ease-in-out;
}
.grow:hover {
  transform: scale(1.02);
}
</style>
