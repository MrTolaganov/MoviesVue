<template>
  <div class="app font-monospace">
    <div class="content">
      <AppInfo
        :moviesCount="movies.length"
        :favMovies="movies.filter((movie) => movie.favourite).length"
      />
      <Box>
        <SearchPanel :updateTermHandler="updateTermHandler" />
        <AppFilter
          :updataFilterHandler="updataFilterHandler"
          :filterName="filter"
        />
      </Box>
      <Box v-if="isLoading">
        <Loader />
      </Box>
      <Box v-else-if="!movies.length"
        ><p class="text-center fs-3 text-danger">Kinolar yo'q</p></Box
      >
      <MovieList
        v-else
        :movies="onFilterHandler(onSearchHandler(movies, term), filter)"
        @onToggle="onToggleHandler"
        @delete="deleteHandler"
      />
      <AddMovie @createFilm="createFilm" />
    </div>
  </div>
</template>

<script>
import AppInfo from "../app-info/AppInfo.vue";
import SearchPanel from "../search-panel/SearchPanel.vue";
import AppFilter from "../app-filter/AppFilter.vue";
import MovieList from "../movie-list/MovieList.vue";
import AddMovie from "../add-movie/AddMovie.vue";
import axios from "axios";

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
      movies: [],
      term: "",
      filter: "all",
      isLoading: false,
    };
  },
  methods: {
    createFilm(movie) {
      this.movies.push(movie);
    },
    onToggleHandler({ id, prop }) {
      this.movies = this.movies.map((movie) => {
        if (movie.id === id) {
          return { ...movie, [prop]: !movie[prop] };
        }
        return movie;
      });
    },
    deleteHandler(id) {
      this.movies = this.movies.filter((movie) => movie.id !== id);
    },
    onSearchHandler(arr, term) {
      if (term.length === 0) {
        return arr;
      }
      return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
    },
    onFilterHandler(arr, filter) {
      switch (filter) {
        case "popular":
          return arr.filter((item) => item.like);
        case "mostViewers":
          return arr.filter((item) => item.viewers >= 500);
        default:
          return arr;
      }
    },
    updateTermHandler(term) {
      this.term = term;
    },
    updataFilterHandler(filter) {
      this.filter = filter;
    },
    async fetchMovies() {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        const films = data.map((film) => ({
          id: film.id,
          name: film.title,
          favourite: false,
          like: false,
          viewers: film.id * 10,
        }));
        this.movies = films;
      } catch (error) {
        alert(error.message);
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.isLoading = true;
    this.fetchMovies();
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
</style>
