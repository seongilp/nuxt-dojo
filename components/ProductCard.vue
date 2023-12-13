<template>
    <div class="card text-center">
            <img :src="product.image" :alt="product.title" class="w-full h-48 object-contain thumb">
            <h3 class="font-bold text-sm text-gray-500 m-1 truncate">{{ product.title }}</h3>
            <p class="text-gray-500 text-sm m-1">{{ product.price }}</p>
            <NuxtLink :to="`/products/${product.id}`" class="btn my-4">View</NuxtLink>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>

<style lang="scss" scoped>
    .thumb {
        max-height: 120px;
        max-width: 70%;
        margin: 0 auto;
    }
</style>