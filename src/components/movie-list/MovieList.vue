<template>
  <ul class="movie-list list-group">
    <MovieItem v-for="movie in movies" :movie="movie" :key="movie" />
  </ul>
</template>

<script>
import MovieItem from "../movie-item/MovieItem.vue";
export default {
  components: { MovieItem },
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.movie-list {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
