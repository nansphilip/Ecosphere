<script setup>
useHead({
    title: 'Fruits - Ecosphere',
    meta: [
        { name: 'description', content: 'This is the fruits page' }
    ]
})

const { data: fruits } = await useFetch('/api/fruits');
console.log(fruits)
</script>

<template>
    <h1 class="bg-orange-500">Fruits</h1>
    <h2 v-for="fruit in fruits" :key="fruit.id">{{ fruit.name }}</h2>
</template>
