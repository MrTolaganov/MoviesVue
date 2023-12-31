<template>
  <Box>
    <h3>Yangi kino qo'shish</h3>
    <form class="add-form d-flex" @submit.prevent>
      <Input class="movie-label" placeholder="Qanday kino?" v-model="name" />
      <Input
        type="number"
        class="movie-label"
        placeholder="Necha marotaba ko'rilgan?"
        v-model="viewers"
      />
      <PrimaryBtn class="btn-outline-dark" type="submit" @click="addFilm">
        Qo'shish
      </PrimaryBtn>
    </form>
  </Box>
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
      };
      this.$emit("createFilm", newFilm, "secondArg");
      this.name = "";
      this.viewers = "";
    },
  },
};
</script>

<style></style>
