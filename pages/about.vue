<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloribus, repellat repudiandae magnam eligendi eaque animi aperiam labore laboriosam eius!</p>
        <div>
            {{  data  }}
        </div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/KRW')
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
        
    }
</style>