<script setup>
useHead({
    title: 'Fruits - Ecosphere',
    meta: [
        { name: 'description', content: 'This is the fruits page' }
    ]
})

const fruits = await useFetch('/api/fruits')
</script>

<template>
    <h1 class="bg-orange-500">Fruits</h1>
    <div>{{ fruits }}</div>
</template>
