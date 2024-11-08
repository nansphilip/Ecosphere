<template>
  <!-- cyrine -->
  <Header />
  <div class="page-container">
    <main class="article">
      <h2>{{ articleTitle }}</h2>
      <div
        v-if="currentArticle"
        :style="{
          backgroundImage: `url(${articleImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '150px',
          width: '100%',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '1.5rem',
        }"
      ></div>
      <div class="article-content">
        <p>{{ articleContent }}</p>
      </div>
    </main>
  </div>
  <Footer />
</template>

<script setup>
// definePageMeta({
//   middleware: "auth",
// });

// import { useRoute } from "vue-router";

// // Récupération de l'ID à partir de la route
// const route = useRoute();
// const articleId = route.params.id;
// const currentArticle = ref();
// const { articles } = await useFetch("/api/get-every-article");

// function setCurrentArticleById(id) {
//   const foundArticle = articles.value.find((article) => article.id === id);
//   currentArticle.value = foundArticle || null;
// }

// setCurrentArticleById(articleId);

// const articleImg = ref("");
// const articleTitle = ref("");
// const articleContent = ref("");

// console.log(currentArticle.value);
// Importation de Nuxt composables
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

// Middleware pour vérifier l'authentification
definePageMeta({
  middleware: "auth",
});

// Récupération de l'ID à partir de la route
const route = useRoute();
const articleId = parseInt(route.params.id, 10); // Assurez-vous que l'ID est un nombre
const currentArticle = ref(null);

// Récupération de la liste des articles via useFetch
const {
  data: articles,
  pending,
  error,
} = await useFetch("/api/get-every-article");

const articleImg = ref("");
const articleTitle = ref("");
const articleContent = ref("");

// Fonction pour définir l'article actuel en fonction de l'ID
function setCurrentArticleById(id) {
  const foundArticle = articles.value.find((article) => article.id === id);
  currentArticle.value = foundArticle || null;

  // Si un article est trouvé, on peut aussi extraire son contenu
  if (currentArticle.value) {
    articleImg.value = currentArticle.value.image;
    articleTitle.value = currentArticle.value.title;
    articleContent.value = currentArticle.value.text;
  }
}

// Utiliser la fonction quand les données sont disponibles
onMounted(() => {
  if (articles.value) {
    setCurrentArticleById(articleId);
  }
});
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex: 1 1 0%;
  overflow: auto;

  font-family: Arial, sans-serif;
}

.article {
  width: 90%;
  max-width: 600px;
  margin-bottom: 20px;
}

.article h2 {
  text-align: center;
  color: #2b5e34;
  font-size: x-large;
  font-weight: 800;
}

.article-image {
  width: 100%;
  height: 150px;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  color: #999;
  border-radius: 20px;
}

.article-content p {
  margin: 10px 0;
  text-align: justify;
}
</style>
