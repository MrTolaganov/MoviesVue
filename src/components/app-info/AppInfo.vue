<template>
  <div class="app-info">
    <p class="text-uppercase fs-3">Barcha kinolar soni: {{ moviesCount }}</p>
    <p class="text-uppercase fs-4">Ko'rilgan kinolar soni: {{ favMovies }}</p>
  </div>
</template>

<script>
export default {
  props: {
    moviesCount: {
      type: Number,
      required: true,
    },
    favMovies: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.app-info {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
