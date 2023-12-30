<template>
  <Input
    class="search-input"
    placeholder="Kinolarni qidirish"
    v-model="term"
    @input="changeHandler"
  />
</template>

<script>
export default {
  props: {
    updateTermHandler: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      term: "",
    };
  },
  methods: {
    changeHandler(event) {
      this.term = event.target.value;
      this.updateTermHandler(this.term);
    },
  },
};
</script>

<style scoped>
.search-input {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
