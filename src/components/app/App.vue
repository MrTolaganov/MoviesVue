<template>
  <div class="app font-monospace">
    <div class="content">
      <AppInfo
        :moviesCount="movies.length"
        :favMovies="movies.filter((movie) => movie.favourite).length"
      />

      <div class="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <MovieList :movies="movies" />
      <AddMovie />
    </div>
  </div>
</template>

<script>
import AppInfo from "../app-info/AppInfo.vue";
import SearchPanel from "../search-panel/SearchPanel.vue";
import AppFilter from "../app-filter/AppFilter.vue";
import MovieList from "../movie-list/MovieList.vue";
import AddMovie from "../add-movie/AddMovie.vue";

export default {
  components: {
    AppInfo,
    SearchPanel,
    AppFilter,
    MovieList,
    AddMovie,
  },
  data() {
    return {
      movies: [
        {
          name: "Empire of Osman",
          viewers: 811,
          favourite: false,
          like: true,
        },
        {
          name: "Ertugrul",
          viewers: 411,
          favourite: false,
          like: false,
        },
        {
          name: "Omar",
          viewers: 711,
          favourite: true,
          like: false,
        },
      ],
    };
  },
};
</script>

<style>
.app {
  height: 100vh;
  color: #000;
}
.content {
  width: 1000px;
  min-height: 700px;
  background-color: #fff;
  margin: 0 auto;
  padding: 5rem 0;
}
.search-panel {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
