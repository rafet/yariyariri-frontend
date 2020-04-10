<template>
  <b-container fluid style="margin-top:64px">
    <!-- <b-button v-b-modal.modal-center>Launch centered modal</b-button> -->

    <b-row align-v="center" class="pb-5" align-h="center">
      <b-col>
        <b-row align-h="center" class="btns">
          <b-col cols="auto">
            <b-button
              size="lg"
              v-if="!editMode"
              style="border:0;background:#fafafa;color:black"
              pill
              @click="toggle"
            >
              <b-icon :icon="editMode ? 'check' : 'plus'"></b-icon>

              Söz Ekle
            </b-button>
            <b-button
              size="lg"
              v-else
              :disabled="loading"
              style="border:0;background:#ee6f57;color:white"
              pill
              @click="saveLyric"
            >
              <b-icon
                v-if="!loading"
                :icon="editMode ? 'check' : 'plus'"
              ></b-icon>
              <b-spinner v-else small></b-spinner>

              {{ loading ? "Kaydediliyor..." : "Kaydet" }}
            </b-button>
            <b-button
              size="small"
              v-if="editMode"
              @click="editMode = false"
              style="border:0;color:white"
              variant="default"
              pill
              class="ml-2"
              >Kapat</b-button
            >
          </b-col>
        </b-row>
        <b-row align-h="center" align-v="center">
          <b-col cols="auto" class="logo">yariyariri</b-col>
        </b-row>

        <b-row align-h="center">
          <b-col
            cols="11"
            sm="10"
            md="10"
            style="padding-bottom:120px !important"
          >
            <transition-group name="list" tag="div">
              <SingleLyric
                v-for="(item, index) in quotes"
                class="list-item"
                :key="index"
                :lyric="item.lyric"
                :artist="item.artist"
                :track="item.track"
              />
            </transition-group>

            <transition name="fade">
              <AddLyric v-model="newLyric" class="add-q" v-if="editMode" />
            </transition>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SingleLyric from "../components/SingleLyric";
import AddLyric from "../components/AddLyric";
export default {
  components: { SingleLyric, AddLyric },
  data() {
    return {
      loading: false,
      editMode: false,
      quotes: [
        {
          artist: "Redd",
          track: "Beni Sevdi Benden Çok",
          lyric: "O hayatımın çocuk yanıydı."
        }
      ],
      newLyric: null
    };
  },
  methods: {
    toggle() {
      this.editMode = !this.editMode;
    },
    saveLyric() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;

        this.quotes.push({ ...this.newLyric });
        this.newLyric.artist = null;
        this.newLyric.track = null;
        this.newLyric.lyric = null;
        this.$refs.artist.$el.focus();
      }, 600);
    }
  }
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Domine:wght@700&display=swap"); */

@font-face {
  font-family: "JetBrains";
  src: url("../assets/ttf/JetBrainsMono-Regular.ttf") format("truetype");
}
.logo {
  font-family: JetBrains, serif;
  font-size: 2.4rem;
  color: white;
  margin-bottom: 26px;
}
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100px);
}

.btns {
  position: fixed;
  left: 0;
  bottom: 30px;
  width: 100%;
  z-index: 10000;
  color: white;
  text-align: center;
}
</style>
