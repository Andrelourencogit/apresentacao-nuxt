<template lang="pug">
  .home-filme
    .container
      template(v-for='(info, index) in filterById(filmeId) ')
        p Filme: {{ info.title }}
        CardFilme(:title='info.title' :year='info.infoYear' :isBig="info.isBig" :image="info.src" :id="info.id")
    .buttons
      router-link(to="/") Voltar para Home
      router-link(to="/filmes") Voltar para Filmes
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
          title: "Mulan",
          infoYear: "2h20m • 2020",
          src: require("../../../assets/images/mulan.png"),
          isBig: true,
          id: 1,
        },
        {
          title: "Over the Moon",
          infoYear: "2h20m • 2020",
          src: require("../../../assets/images/moon.png"),
          isBig: false,
        },
        {
          title: "Bacurau",
          infoYear: "2h20m • 2020",
          src: require("../../../assets/images/bacurau.png"),
          isBig: false,
          id: 2,
        },
        {
          title: "The Midnight Sky",
          infoYear: "2h20m • 2020",
          src: require("../../../assets/images/ceu.png"),
          isBig: true,
          id: 3,
        },
        {
          title: "Love And Monters",
          infoYear: "2h20m • 2020",
          src: require("../../../assets/images/love.png"),
          isBig: true,
          id: 4,
        },
        {
          title: "Another Round",
          infoYear: "2h20m • 2020",
          src: require("../../../assets/images/another.png"),
          isBig: false,
          id: 5,
        },
        {
          title: "Emma",
          infoYear: "2h20m • 2020",
          src: require("../../../assets/images/emma.png"),
          isBig: false,
          id: 6,
        },
        {
          title: "The Trial",
          infoYear: "2h20m • 2020",
          src: require("../../../assets/images/chicago.png"),
          isBig: true,
          id: 7,
        },
        {
          title: "Enet",
          infoYear: "2h20m • 2020",
          src: require("../../../assets/images/net.png"),
          isBig: true,
          id: 8,
        },
      ],
      filmeId: null,
    };
  },
  methods: {
    filterById(id) {
      return this.infoCard.filter((info) => info.id === id);
    },
  },
  created() {
    console.log("this.$route.params.id", this.$route.params.id);
    this.filmeId = parseInt(this.$route.params.id);
  },
};
</script>

<style scoped>
body {
  display: block;
  margin: 0px !important;
}
.home-filme {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent
    linear-gradient(180deg, #0f1825 0%, #0f1825 50%, #0d0d1b 100%) 0% 0%
    no-repeat padding-box;
  margin: -8px;
  height: 100vh;
}
.home-filme p {
  color: white;
  font-size: 50px;
  font-weight: bold;
}

.home-filme .container {
  display: flex;
  justify-content: space-around;
}

a .container-card {
  width: 10.813rem !important;
  height: 13.875rem !important;
}

.container {
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
}

.home-filme .buttons {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.home-filme .buttons a {
  margin: 0 1rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background-color: #f0f0f0;
  color: #333;
  border-radius: 4px;
}
</style>
