<template lang="pug">
.home
    img(alt='' class="logo" src='../../assets/images/Logo-Oscars.svg')
    .container
        .content-1
          template(v-for='(info, index) in infoCard')
            CardFilme(v-if="index%2 == 0" :title='info.title' :year='info.infoYear' :isBig="info.isBig" :image="info.src")
        .content-2
          template(v-for='(info, index) in infoCard')
            CardFilme(v-if="index%2 != 0" :title='info.title' :year='info.infoYear' :isBig="info.isBig" :image="info.src")
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
          src: require("../../assets/images/mulan.png"),
          isBig: true,
        },
        {
          title: "Over the Moon",
          infoYear: "2h20m • 2020",
          src: require("../../assets/images/moon.png"),
          isBig: false,
        },
        {
          title: "Bacurau",
          infoYear: "2h20m • 2020",
          src: require("../../assets/images/bacurau.png"),
          isBig: false,
        },
        {
          title: "The Midnight Sky",
          infoYear: "2h20m • 2020",
          src: require("../../assets/images/ceu.png"),
          isBig: true,
        },
        {
          title: "Love And Monters",
          infoYear: "2h20m • 2020",
          src: require("../../assets/images/love.png"),
          isBig: true,
        },
        {
          title: "Another Round",
          infoYear: "2h20m • 2020",
          src: require("../../assets/images/another.png"),
          isBig: false,
        },
        {
          title: "Emma",
          infoYear: "2h20m • 2020",
          src: require("../../assets/images/emma.png"),
          isBig: false,
        },
        {
          title: "The Trial",
          infoYear: "2h20m • 2020",
          src: require("../../assets/images/chicago.png"),
          isBig: true,
        },
        {
          title: "Enet",
          infoYear: "2h20m • 2020",
          src: require("../../assets/images/net.png"),
          isBig: true,
        },
        {
          title: "Fence",
          infoYear: "2h20m • 2020",
          src: require("../../assets/images/fences.png"),
          isBig: false,
        },
      ],
    };
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
  justify-content: space-around;
}

.home .container .content-1,
.home .container .content-2 {
  display: flex;
  width: 40%;
  flex-direction: column;
}
</style>
