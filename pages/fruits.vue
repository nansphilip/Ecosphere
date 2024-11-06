<script setup>

useHead({
    title: 'Fruits - Ecosphere',
    meta: [
        { name: 'description', content: 'This is the fruits page' }
    ]
})

// Fetch fruits from database
const { data: fruits } = await useFetch('/api/get-every-fruits');

// Input form values
const name = ref('');
const description = ref('');
const loading = ref(false);

// Add a fruit to database
const addFruit = async () => {
    // Start loading
    loading.value = true;

    // Send POST request to add fruit
    const response = await fetch('/api/add-fruit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name.value,
            description: description.value
        })
    });

    if (response.ok) {
        // Get new fruit, then add it to the current list
        const newFruit = await response.json();
        fruits.value.push(newFruit);

        // Reset form values
        name.value = '';
        description.value = '';
    } else {
        console.error('Failed to add fruit');
    }

    // Stop loading
    loading.value = false;
}
</script>

<template>
    <h1 class="bg-orange-500">Fruits</h1>
    <div class="flex flex-col items-center justify-center w-full h-96 gap-3">
        <div class="border-2 border-gray-400 rounded-xl p-4 w-60">
            <h2 v-for="fruit in fruits" :key="fruit.id">{{ fruit.name }}</h2>
        </div>
        <form class="w-60 flex flex-col border-2 border-gray-400 rounded-xl p-4 items-center justify-center gap-2"
            @submit.prevent="addFruit">
            <input class="border px-3 py-1 rounded border-gray-300" v-model="name" type="text" name="name"
                placeholder="Nom du fruit">
            <input class="border px-3 py-1 rounded border-gray-300" v-model="description" type="text" name="description"
                placeholder="Description du fruit">
            <button class="border px-3 py-1 hover:bg-gray-700 bg-black text-white rounded" type="submit">
                <span v-if="loading">Chargement...</span>
                <span v-else>Insère-moi ton fruit</span>
            </button>
        </form>
    </div>
</template>
