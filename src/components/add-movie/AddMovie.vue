<template>
  <div class="add-movie">
    <h3>Yangi kino qo'shish</h3>
    <form class="add-form d-flex">
      <input
        type="text"
        class="movie-label form-control"
        placeholder="Qanday kino?"
      />
      <input
        type="number"
        class="movie-label form-control"
        placeholder="Necha marotaba ko'rilgan?"
      />
      <button class="btn btn-outline-dark" type="submit">Qo'shish</button>
    </form>
  </div>
</template>

<script>
export default {};
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
