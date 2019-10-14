<template>
  <b-container fluid class="text-light text-center">
    <b-row class>
      <b-col
        cols="6"
        :class="methodChangeClass('roomB')"
        @click="methodJumpRoom('roomB')"
      >
        <i_bed/>
      </b-col>

      <b-col
        cols="6"
        :class="methodChangeClass('roomL')"
        @click="methodJumpRoom('roomL')"
      >
        <i_living/>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import { mapGetters } from "vuex";
import common from "~/components/mixin/common";
import i_bed from "~/components/icon/bed";
import i_living from "~/components/icon/living";

export default {
  mixins: [common],
  computed: {
    ...mapGetters(["dictionary"])
  },
  components: {
    i_bed,
    i_living,
  },

  methods: {
    methodJumpRoom: function(value) {
      this.$store.dispatch("actionSetRoom", this.dictionary[value]);
      this.$store.dispatch("actionCopySelectedDevice", this.dictionary[value]);
      this.$store.dispatch("actionJumpRoom");
    },

    methodChangeClass: function(value) {
      let args = {
        one: this.$store.getters["room"],
        two: this.dictionary[value]
      };
      return this.mixinChangeClass(args);
    }
  }
};
</script>
