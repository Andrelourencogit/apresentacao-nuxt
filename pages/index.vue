<template lang="pug">
.home
    img(alt='' class="logo" src='../assets/images/Logo-Oscars.svg')
    .container
        .content-1
          template(v-for='(info, index) in infoCard')
            CardFilme(v-if="index%2 == 0" :title='info.title' :year='info.infoYear' :isBig="info.isBig" :image="info.src" :id="info.id")
        .content-2
          template(v-for='(info, index) in infoCard')
            CardFilme(v-if="index%2 != 0" :title='info.title' :year='info.infoYear' :isBig="info.isBig" :image="info.src" :id="info.id")
    button(class="custom-button" @click="redirectToFilmes") catálogo completo
</template>

<script>
import CardFilme from "@/components/CardFilme.vue";
export default {
  components: {
    CardFilme,
  },
  data() {
    return {
      infoCard: [
        {
          title: "The Midnight Sky",
          infoYear: "2h20m • 2020",
          src: require("../assets/images/ceu.png"),
          isBig: true,
          id: 1,
        },
        {
          title: "Love And Monters",
          infoYear: "2h20m • 2020",
          src: require("../assets/images/love.png"),
          isBig: false,
          id: 2,
        },
        {
          title: "Another Round",
          infoYear: "2h20m • 2020",
          src: require("../assets/images/another.png"),
          isBig: false,
          id: 3,
        },
        {
          title: "Emma",
          infoYear: "2h20m • 2020",
          src: require("../assets/images/emma.png"),
          isBig: true,
          id: 4,
        },
      ],
    };
  },
  methods: {
    redirectToFilmes() {
      // Redirecionar para a página de filmes
      this.$router.push("/filmes");
    },
  },
};
</script>

<style scoped>
body {
  display: block;
  margin: 0px !important;
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent
    linear-gradient(180deg, #0f1825 0%, #0f1825 50%, #0d0d1b 100%) 0% 0%
    no-repeat padding-box;
  margin: -8px;
}
.home .logo {
  padding: 40px;
}

@media (max-width: 768px) {
  .home img {
    width: 90%;
    padding: 0.625rem;
    margin-top: 40px;
  }
}

.home .container {
  display: flex;
  justify-content: space-between;
}

.home .container .content-1,
.home .container .content-2 {
  display: flex;
  width: 40%;
  flex-direction: column;
}

.custom-button {
  background-color: #3498db;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.custom-button:hover {
  background-color: #2980b9;
}
</style>
