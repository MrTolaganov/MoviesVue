<template>
  <li
    class="list-item d-flex justify-content-between"
    :class="[{ favourite: movie.favourite }, { like: movie.like }]"
  >
    <span
      class="item-label"
      @click="$emit('onToggle', { id: movie.id, prop: 'like' })"
      >{{ movie.name }}</span
    >
    <input type="number" class="item-input" :value="movie.viewers" />

    <div class="d-flex justify-content-center align-items-center">
      <button
        type="button"
        class="btn-cookie btn-sm"
        @click="$emit('onToggle', { id: movie.id, prop: 'favourite' })"
      >
        <i class="fas fa-cookie"></i>
      </button>
      <button
        type="button"
        class="btn-trash btn-sm"
        @click="$emit('delete', movie.id)"
      >
        <i class="fas fa-trash"></i>
      </button>
      <i class="fas fa-star"></i>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.list-item {
  padding: 15px 20px;
  border-bottom: 1px solid #3d5a80;
}
.list-item:last-child {
  border-bottom: none;
}
.list-item span {
  line-height: 35px;
  font-size: 20px;
  width: 550px;
  cursor: pointer;
}
.list-item input {
  line-height: 35px;
  font-size: 20px;
  text-align: center;
  border: 0;
  outline: none;
}
.list-item button {
  width: 35px;
  height: 35px;
  margin: 3px;
  font-size: 17px;
  border: none;
  cursor: pointer;
}
.list-item .btn-cookie {
  color: #e09f3a;
}
.list-item .btn-trash {
  color: #e5383b;
}
.list-item .fa-star {
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  font-size: 16px;
  color: #ffd700;
  transition: all 0.3s;
  transform: translateX(30px);
  opacity: 0;
}
.list-item.like .fa-star {
  opacity: 1;
  transform: translateX(0);
}
.list-item.favourite span,
.list-item.favourite input {
  color: #e09f3a;
}
</style>
