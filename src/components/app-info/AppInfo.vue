<template>
  <Box>
    <p class="text-uppercase fs-3">Barcha kinolar soni: {{ moviesCount }}</p>
    <p class="text-uppercase fs-4">Ko'rilgan kinolar soni: {{ favMovies }}</p>
  </Box>
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

<style></style>
