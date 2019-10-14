<template>
  <b-container fluid class="text-light text-center">
    <b-row class>
      <b-col cols="12" :class="methodChangeClass('deviceA')" @click="methodSetDevice('deviceA')">
        <i_aircon/>
      </b-col>
    </b-row>

    <br>

    <div v-if="$store.state.home.device == this.dictionary['deviceA']">
      <aircon/>
      <br><br><br>
    </div>

  </b-container>
</template>


<script>
import { mapGetters } from "vuex";
import aircon from "~/components/devices/aircon.vue";
import common from "~/components/mixin/common";
import i_aircon from "~/components/icon/aircon";

export default {
  mixins: [common],
  components: {
    aircon,
    i_aircon,
  },
  computed: {
    ...mapGetters(['dictionary'])
  },

  methods: {
    methodChangeClass: function(value) {
      return this.mixinRoomChangeClass(value)
    },

    methodSetDevice: function(value) {
      this.$store.dispatch("actionSetDevice", this.dictionary[value]);
    }
  }
};
</script>
