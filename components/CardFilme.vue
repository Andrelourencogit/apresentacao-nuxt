<template lang="pug">
nuxt-link(:to="`/filmes/${id}`")
  .container-card(:class="isBig ? 'container-card' : 'container-small'" , :style="image ? style : ''")
    .infos
      p.title {{title}}
      p.year {{year}}
      .links
</template>

<script>
export default {
  name: "CardFilme",
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
    isBig: Boolean,
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
.container-card {
  width: 24.813rem;
  height: 32.875rem;
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
}

a .container-card:hover {
  transform: scale(1.05);
}

@media (max-width: 992px) {
  .container-card {
    width: 100%;
  }
}

a .container-card .infos {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1.5rem;
  margin-right: 23px;
}

a .container-card .infos p {
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  margin: 0;
}

a .container-card .infos .title {
  font-weight: bold;
}

a .container-card .infos .year {
  opacity: 60%;
}

a .container-card .infos .links {
  display: flex;
}

a .container-card .infos .links .trailer {
  pointer-events: none;
}

a .container-card .infos .links .trailer .dropdown-toggle::after {
  display: none;
}

a .container-small {
  height: 23.375rem;
}
</style>
