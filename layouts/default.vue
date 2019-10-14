<template>
  <section class="container">
    <div v-if="isDebug">
      <ComponentState/>
    </div>
    <br>

    <ComponentAuth/>
    <br>

    <div v-if="isAuthenticated">
      <RoomList/>
      <nuxt/>
    </div>
  </section>
</template>

<script>
import firebase from "firebase";
import { mapGetters, mapState } from "vuex";
import ComponentAuth from "~/components/componentAuth.vue";
import ComponentState from "~/components/componentState.vue";
import RoomList from "~/components/roomList.vue";

export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto+Mono"
        }
      ]
    };
  },

  components: {
    ComponentState,
    ComponentAuth,
    RoomList
  },

  created() {
    let _this = this;
    let arrs = _this.$store.getters["arrs"];

    arrs.forEach(function(arr) {
      firebase
        .database()
        .ref(
          "/home/" + arr["room"] + "/" + arr["device"] + "/" + arr["attribute"]
        )
        .on("value", function(snapshot) {
          let payloadValue = snapshot.val();
          _this.$store.dispatch("actionSetFromFirebase", {
            room: arr["room"],
            device: arr["device"],
            attribute: arr["attribute"],
            payload: payloadValue
          });
        });
    });
  },

  computed: {
    isDebug() {
      return this.$store.getters["isDebug"];
    },
    ...mapGetters(["isAuthenticated"])
  },
  async mounted() {
    setTimeout(() => {
      if (!this.isAuthenticated) {
        this.$router.push("");
      }
      this.loaded = true;
    }, 0);
  }
};
</script>



<style scoped>
div {
  cursor: pointer;
  font-family: "Roboto Mono", sans-serif;
}
</style>
