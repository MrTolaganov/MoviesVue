<template>
  <div class="app font-monospace">
    <div class="content">
      <AppInfo
        :moviesCount="movies.length"
        :favMovies="movies.filter((movie) => movie.favourite).length"
      />

      <div class="search-panel">
        <SearchPanel :updateTermHandler="updateTermHandler" />
        <AppFilter
          :updataFilterHandler="updataFilterHandler"
          :filterName="filter"
        />
      </div>
      <MovieList
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
          like: false,
          id: 1,
        },
        {
          name: "Ertugrul",
          viewers: 411,
          favourite: false,
          like: false,
          id: 2,
        },
        {
          name: "Omar",
          viewers: 711,
          favourite: false,
          like: false,
          id: 3,
        },
      ],
      term: "",
      filter: "all",
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
