<template>
  <nav aria-label="pagination" class="d-flex justify-content-center">
    <ul class="pagination">
      <li
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{ active: pageNumber === page }"
        @click="$emit('changePage', pageNumber)"
      >
        <span class="page-link">{{ pageNumber }}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style></style>
