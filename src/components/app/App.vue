<template>
  <div class="app font-monospace">
    <div class="content">
      pageNumber
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
      <Box>
        <Pagination
          :totalPages="totalPages"
          :page="page"
          @changePage="changePage"
        />
      </Box>
      <AddMovie @createFilm="createFilm" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AppInfo from "../app-info/AppInfo.vue";
import SearchPanel from "../search-panel/SearchPanel.vue";
import AppFilter from "../app-filter/AppFilter.vue";
import MovieList from "../movie-list/MovieList.vue";
import AddMovie from "../add-movie/AddMovie.vue";
import Pagination from "../pagination/Pagination.vue";

export default {
  components: {
    AppInfo,
    SearchPanel,
    AppFilter,
    MovieList,
    AddMovie,
    Pagination,
  },
  data() {
    return {
      movies: [],
      term: "",
      filter: "all",
      isLoading: false,
      limit: 10,
      page: 1,
      totalPages: 0,
    };
  },
  methods: {
    async createFilm(movie) {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          movie
        );
        this.movies.push(response.data);
      } catch (error) {
        alert(error.message);
      }
    },
    onToggleHandler({ id, prop }) {
      this.movies = this.movies.map((movie) => {
        if (movie.id === id) {
          return { ...movie, [prop]: !movie[prop] };
        }
        return movie;
      });
    },
    async deleteHandler(id) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        this.movies = this.movies.filter((movie) => movie.id !== id);
      } catch (error) {
        alert(error.message);
      }
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
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: this.limit,
              _page: this.page,
            },
          }
        );

        const films = response.data.map((film) => ({
          id: film.id,
          name: film.title,
          favourite: false,
          like: false,
          viewers: film.id * 10,
        }));
        this.movies = films;
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
      } catch (error) {
        alert(error.message);
      } finally {
        this.isLoading = false;
      }
    },
    changePage(pageNumber) {
      this.page = pageNumber;
      this.fetchMovies();
    },
  },
  mounted() {
    this.isLoading = true;
    this.fetchMovies();
  },
  watch: {
    page() {
      this.fetchMovies();
    },
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
