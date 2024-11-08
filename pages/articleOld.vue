<template>
  <!-- cyrine -->
  <Header />

  <div class="page-container">
    <main class="article">
      <h2>Titre de l’article</h2>
      <div class="article-image">
        <p>Photo</p>
      </div>
      <div class="article-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          maximus at mi non dignissim...
        </p>
        <p>
          Sed faucibus arcu a odio tincidunt, convallis tristique orci finibus.
          Sed eu suscipit urna...
        </p>
        <p>
          Cras interdum, lectus elementum accumsan bibendum, dui mauris
          sollicitudin metus, in congue leo erat venenatis risus...
        </p>
        <p class="Date">Fait le 06/11/2024</p>
      </div>
    </main>
  </div>
  <Footer />
</template>

<script>
definePageMeta({
  middleware: "auth",
});
export default {
  name: "ArticlePage",
};

// const route = useRoute();
// const articleId = route.params.id;

// // Utiliser l'ID pour faire des requêtes ou récupérer des données
// console.log("ID de l'article:", articleId);
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
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
