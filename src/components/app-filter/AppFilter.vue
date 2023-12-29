<template>
  <div class="btn-group mt-3">
    <button
      v-for="btn in filterButtons"
      :key="btn.name"
      class="btn"
      :class="[btn.name === filterName ? 'btn-dark' : 'btn-outline-dark']"
      @click="filterHandler(btn.name)"
    >
      {{ btn.title }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    updataFilterHandler: {
      type: Function,
      required: true,
    },
    filterName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      filterButtons: [
        {
          title: "Barcha kinolar",
          name: "all",
        },
        {
          title: "Mashhur kinolar",
          name: "popular",
        },
        {
          title: "Eng ko'p ko'rilgan kinolar",
          name: "mostViewers",
        },
      ],
      filter: "all",
    };
  },
  methods: {
    filterHandler(filter) {
      this.filter = filter;
      this.updataFilterHandler(this.filter);
    },
  },
};
</script>

<style scoped></style>
