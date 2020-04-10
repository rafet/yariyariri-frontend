<template>
  <b-row align-v="center" class="lyric-card lyric-add">
    <b-col cols="3" class="artist">
      <b-input
        ref="artist"
        v-model="data.artist"
        placeholder="Şarkıcı"
        class="lyric-input"
      ></b-input>
    </b-col>
    <b-col cols="3" class="track">
      <b-input
        v-model="data.songName"
        placeholder="Şarkı"
        class="lyric-input"
      ></b-input>
    </b-col>
    <b-col cols="6" class="lyric">
      <b-input
        v-model="data.lyric"
        placeholder="Söz"
        class="lyric-input"
      ></b-input>
    </b-col>
    <div class="w-100"></div>
    <b-col cols="12" class="mt-2">
      <b-input
        ref="artist"
        v-model="data.spotifyURL"
        placeholder="Spotify URL"
        class="lyric-input"
      ></b-input>
    </b-col>
  </b-row>
</template>
<script>
export default {
  data() {
    return {
      data: {
        artist: null,
        songName: null,
        lyric: null,
        spotifyURL: null
      }
    };
  },
  watch: {
    "data.artist"() {
      this.$emit("input", this.data);
    },
    "data.songName"() {
      this.$emit("input", this.data);
    },
    "data.lyric"() {
      this.$emit("input", this.data);
    }
  }
};
</script>
<style>
.lyric-add {
  border: 1px solid white !important;
  background: white !important;
}
.lyric-input {
  color: #801336 !important;
  border: 0 !important;

  border-radius: 0 !important;
}
.lyric-input:focus {
  color: #801336 !important;
  border: 0 !important;

  border-radius: 0 !important;
}
::placeholder {
  color: #80133655 !important;
}
</style>
