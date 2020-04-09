<template>
  <b-row align-v="center" class="lyric-card effect2">
    <b-col cols="3" class="artist">{{ artist }}</b-col>
    <b-col cols="3" class="track">{{ track }}</b-col>
    <b-col class="lyric" cols="6">{{ lyric }}</b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    lyric: {
      type: String,
      default: "[QUOTE]"
    },
    artist: {
      type: String,
      default: "[ARTIST]"
    },
    track: {
      type: String,
      default: "[TRACK]"
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
}
.lyric-card {
  background: #80133677;
  margin: 8px;
  margin-bottom: 16px;
  border: 1px solid rgba(255, 255, 255, 0.116);
  box-shadow: #80133677;
  padding: 16px;
  border-radius: 5px;
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
</style>
