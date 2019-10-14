<template>
  <b-container fluid class="text-light text-center">
    <b-row class>
      <b-col cols="6" :class="methodChangeClass('deviceA')" @click="methodSetDevice('deviceA')">
        <i_aircon/>
      </b-col>
      <b-col cols="6" :class="methodChangeClass('deviceL')" @click="methodSetDevice('deviceL')">
        <i_light/>
      </b-col>
    </b-row>

    <br>

    <div v-if="$store.state.home.device == this.dictionary['deviceA']">
      <aircon/>
      <br><br><br>
    </div>

    <div v-if="$store.state.home.device == this.dictionary['deviceL']">
      <light/>
      <br><br><br>
    </div>

  </b-container>
</template>


<script>
import { mapGetters } from "vuex";
import aircon from "~/components/devices/aircon.vue";
import light from "~/components/devices/light.vue";
import common from "~/components/mixin/common";
import i_aircon from "~/components/icon/aircon";
import i_light from "~/components/icon/light";

export default {
  mixins: [common],
  computed: {
    ...mapGetters(['dictionary'])
  },
  components: {
    aircon,
    light,
    i_aircon,
    i_light,
  },

  methods: {

    methodChangeClass: function(value) {
      return this.mixinRoomChangeClass(value)
    },

    methodSetDevice: function(value) {
      this.$store.dispatch("actionSetSelectedDevice", this.dictionary[value]);
      this.$store.dispatch("actionSetDevice", this.dictionary[value]);
    }
  }
};
</script>
