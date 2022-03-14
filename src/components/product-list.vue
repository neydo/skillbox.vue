<script>

import productItem from './product-item.vue';

export default {
  props: ['products'],
  components: { productItem },
};
</script>

<template>
  <ul class="catalog__list">
    <productItem v-for="(product, i) in products" :product="product" :key="i"></productItem>
  </ul>
</template>
