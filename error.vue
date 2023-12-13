<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <h2 class="text-2xl my-7">Error</h2>
        <p class="mt-7 text-7xl font-bold"> {{ error.statusCode }}</p>
        <p class="text-xl my-7">Oops...</p>
        <p class="my-7"> {{ error.message }} </p>
        <button class="btn my-7" @click="handleClearError">Go home...</button>
    </div>
</template>

<script setup>
    defineProps(['error'])

    const handleClearError = () => clearError({ redirect: '/' })
</script>

<style scoped>

</style>