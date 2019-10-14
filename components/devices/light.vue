<template>
  <div>
    <b-row class>
      <b-col cols="12" :class="methodChangeClass('o')" @click="methodSetStatus('o')">
        <i_stop/>
      </b-col>
    </b-row>
    <b-row class>
      <b-col cols="12" :class="methodChangeClass('n')" @click="methodSetStatus('n')">
        <i_night/>
      </b-col>
    </b-row>
    <b-row class>
      <b-col cols="12" :class="methodChangeClass('e')" @click="methodSetStatus('e')">
        <i_eco/>
      </b-col>
    </b-row>
    <b-row class>
      <b-col cols="12" :class="methodChangeClass('f')" @click="methodSetStatus('f')">
        <i_full/>
      </b-col>
    </b-row>
  </div>
</template>


<script>
import common from "~/components/mixin/common";
import i_stop from "~/components/icon/stop";
import i_night from "~/components/icon/night";
import i_eco from "~/components/icon/eco";
import i_full from "~/components/icon/full";

export default {
  mixins: [common],
  components: {
    i_stop,
    i_night,
    i_eco,
    i_full,
  },
  methods: {
    methodChangeClass: function(value) {
      return this.mixinDeviceChangeClass(value);
    },

    methodSetStatus: function(value) {
      let attribute = "Status";
      this.$store.dispatch("actionSetCommon", {
        attribute: attribute,
        payload: value
      });
    }
  }
};
</script>
