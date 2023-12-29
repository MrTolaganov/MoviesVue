<template>
  <div class="add-movie">
    <h3>Yangi kino qo'shish</h3>
    <form class="add-form d-flex" @submit.prevent>
      <input
        type="text"
        class="movie-label form-control"
        placeholder="Qanday kino?"
        :value="name"
        @input="name = $event.target.value"
      />
      <input
        type="number"
        class="movie-label form-control"
        placeholder="Necha marotaba ko'rilgan?"
        :value="viewers"
        @input="viewers = $event.target.value"
      />
      <button class="btn btn-outline-dark" type="submit" @click="addFilm">
        Qo'shish
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      viewers: "",
    };
  },
  methods: {
    addFilm() {
      if (!this.name || !this.viewers) {
        alert("Name and viewers are required");
        return;
      }
      const newFilm = {
        name: this.name,
        viewers: this.viewers,
        favourite: false,
        like: false,
        id: Date.now(),
      };
      this.$emit("createFilm", newFilm, "secondArg");
      this.name = "";
      this.viewers = "";
    },
  },
};
</script>

<style>
.add-movie {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
