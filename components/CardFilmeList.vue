<template lang="pug">
nuxt-link(:to="`/filmes/${id}`")
  .container-card-list( :style="image ? style : ''")
    .infos
      p.title {{title}}
      p.year {{year}}
      .links
</template>

<script>
export default {
  name: "CardFilmeList",
  data() {
    return {
      text: "Assistir",
      src: require("../assets/images/mulan.png"),
      isHovered: false,
    };
  },
  props: {
    image: String,
    title: String,
    year: String,
    infoDropdown: Array,
    id: Number,
  },
  computed: {
    style() {
      return (
        `background-image: url(${this.image}); ` +
        `background-position: bottom; ` +
        `background-size: cover;` +
        `border: none;` +
        `background-repeat: no-repeat;`
      );
    },
  },
};
</script>

<style scoped>
.container-card-list {
  width: 10rem;
  height: 12rem;
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
}

a .container-card-list:hover {
  transform: scale(1.05);
}

@media (max-width: 992px) {
  .container-card-list {
    width: 100%;
  }
}

a .container-card-list .infos {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1.5rem;
  margin-right: 23px;
}

a .container-card-list .infos p {
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  margin: 0;
}

a .container-card-list .infos .title {
  font-weight: bold;
}

a .container-card-list .infos .year {
  opacity: 60%;
}

a .container-card-list .infos .links {
  display: flex;
}

a .container-card-list .infos .links .trailer {
  pointer-events: none;
}

a .container-card-list .infos .links .trailer .dropdown-toggle::after {
  display: none;
}

a .container-small {
  height: 23.375rem;
}
</style>
