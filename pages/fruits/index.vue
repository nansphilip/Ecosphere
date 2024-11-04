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
    <div v-if="pending">Chargement...</div>
    <div v-else-if="error">Erreur : {{ error.message }}</div>
    <div v-else>
        <div v-for="fruit in fruits" :key="fruit.id">
            <h2>{{ fruit.name }}</h2>
            <p>{{ fruit.description }}</p>
            <img :src="fruit.image" :alt="fruit.name" />
        </div>
    </div>
</template>
