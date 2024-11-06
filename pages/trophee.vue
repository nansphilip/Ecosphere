<template>
  <Header />
  <div class="trophee-container">
    <div class="filtre-container">
      <ul>
        <li><a href="#">Classement mondial</a></li>
        <li><a href="#">Mes amis</a></li>
      </ul>
    </div>
    <table style="border-collapse: collapse; width: 100%">
      <thead>
        <tr>
          <th style="
              text-align: center;
              padding: 8px;
              border-bottom: 2px solid #000;
              width: 33.33%;
            ">
            Rang
          </th>
          <th style="
              text-align: center;
              padding: 8px;
              border-bottom: 2px solid #000;
              width: 33.33%;
            ">
            User
          </th>
          <th style="
              text-align: center;
              padding: 8px;
              border-bottom: 2px solid #000;
              width: 33.33%;
            ">
            Feuille
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in sortedUsers" :key="user.id">
          <td style="padding: 8px; text-align: center" v-if="index + 1 == 1">
            <img class="medals" src="/public/imgs/medailles/or.png" alt="medaille d'or" />
          </td>
          <td style="padding: 8px; text-align: center" v-else-if="index + 1 == 2">
            <img class="medals" src="/public/imgs/medailles/argent.png" alt="medaille d'argent" />
          </td>
          <td style="padding: 8px; text-align: center" v-else-if="index + 1 == 3">
            <img class="medals" src="/public/imgs/medailles/bronze.png" alt="medaille de bronze" />
          </td>
          <td style="padding: 8px; text-align: center" v-else>
            {{ index + 1 }}
          </td>
          <td style="padding: 8px; text-align: center">{{ user.userName }}</td>
          <td style="padding: 8px; text-align: center">{{ user.trophees }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <Footer />
</template>

<script lang="ts" setup>
useHead({
  title: "trophee - Ecosphere",
  meta: [{ name: "description", content: "This is the trophee's page" }],
});

// Fetch fruits from database
const { data: userList } = await useFetch('/api/get-every-user');

console.log(userList);

const listUsersTrophees = [
  {
    id: 1,
    userName: "Marie",
    trophees: 1000,
  },
  {
    id: 2,
    userName: "JP",
    trophees: 750,
  },
  {
    id: 3,
    userName: "Sébastien",
    trophees: 1690,
  },
  {
    id: 4,
    userName: "Bernardo",
    trophees: 2560,
  },
  {
    id: 5,
    userName: "Carla",
    trophees: 2648,
  },
  {
    id: 6,
    userName: "Gianni",
    trophees: 1247,
  },
  {
    id: 7,
    userName: "Hugo",
    trophees: 1,
  },
  {
    id: 8,
    userName: "Vlad",
    trophees: 659,
  },
  {
    id: 9,
    userName: "Cyrine",
    trophees: 2168,
  },
  {
    id: 10,
    userName: "Nans",
    trophees: 2560,
  },
  {
    id: 11,
    userName: "Michel",
    trophees: 3659,
  },
];

const sortedUsers = computed(() => {
  return [...listUsersTrophees]
    .sort((a, b) => b.trophees - a.trophees)
    .slice(0, 10);
});
</script>

<style scoped>
.trophee-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  hr {
    height: 1px;
    width: 100px;
  }

  .filtre-container {
    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 50px;

      li {
        a {
          font-size: 0.8em;
        }

        a:hover {
          text-decoration: underline;
        }
      }
    }

    table {
      margin-left: 20px;
    }
  }
}

.footer-container {
  width: 100%;
}

.medals {
  width: 30px;
  display: block;
  margin: 0 auto;
}
</style>
