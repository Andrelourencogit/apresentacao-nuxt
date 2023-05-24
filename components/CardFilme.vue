<template lang="pug">
  .container-card( :class="isBig ? '' : 'container-small'" :style="image ? style : ''")
    .infos
      p.title {{title}}
      p.year {{year}}
      .links
        //- DropdownCard.trailer(msg="Trailer")
        //- DropdownCard(:msg="text")
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      text: "Assistir",
      src: require("../assets/images/mulan.png"),
    };
  },
  props: {
    image: String,
    title: String,
    year: String,
    isBig: Boolean,
    infoDropdown: Array,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container-card {
  width: 24.813rem;
  height: 32.875rem;
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 2rem;
}

@media (max-width: 992px) {
  .container-card {
    width: 100%;
  }
}

.container-card .infos {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1.5rem;
}

.container-card .infos p {
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  margin: 0;
}

.container-card .infos .title {
  font-weight: bold;
}

.container-card .infos .year {
  opacity: 60%;
}

.container-card .infos .links {
  display: flex;
}

.container-card .infos .links .trailer {
  pointer-events: none;
}

.container-card .infos .links .trailer .dropdown-toggle::after {
  display: none;
}

.container-small {
  height: 23.375rem;
}
</style>
