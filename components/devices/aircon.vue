<template>
  <div>
    <!-- https://jp.vuejs.org/v2/guide/class-and-style.html -->
    <b-row class>
      <b-col cols="12" :class="methodChangeClass('s')" @click="methodSetStatus('s')">
        <i_stop/>
      </b-col>
    </b-row> 
    <b-row class>
      <b-col cols="4" :class="methodChangeClass('w')" @click="methodSetStatus('w')">
        <i_warm/>
      </b-col>
      <b-col cols="4" :class="this.$store.getters['classCommon']" class="temp" @click="methodSetTemp('1')">
        <i_up/>
      </b-col>
      <b-col cols="4" :class="methodChangeClass('c')" @click="methodSetStatus('c')">
        <i_cool/>
      </b-col>
    </b-row>

    <b-row class>
      <b-col cols="4" :class="methodChangeClass('w')" @click="methodSetStatus('w')">{{ warmTemp }}</b-col>

      <b-col cols="4" :class="this.$store.getters['classCommon']" class="temp" @click="methodSetTemp('-1')">
        <i_down/>
      </b-col>

      <b-col cols="4" :class="methodChangeClass('c')" @click="methodSetStatus('c')">{{ coolTemp }}</b-col>
    </b-row>
    <br>
    <br>
    <br>
  </div>
</template>


<script>
import aircon from "~/components/devices/aircon.vue";
import common from "~/components/mixin/common";

import i_stop from "~/components/icon/stop";
import i_warm from "~/components/icon/warm";
import i_cool from "~/components/icon/cool";

import i_up from "~/components/icon/up";
import i_down from "~/components/icon/down";

export default {
  mixins: [common],
  components: {
    i_stop,
    i_warm,
    i_cool,
    i_up,
    i_down,
  },

  computed: {
    warmTemp() {
      let room = this.$store.getters["room"];
      let device = this.$store.getters["device"];
      let attribute = "Warm";
      return this.$store.getters[room + device + attribute];
    },

    coolTemp() {
      let room = this.$store.getters["room"];
      let device = this.$store.getters["device"];
      let attribute = "Cool";
      return this.$store.getters[room + device + attribute];
    }
  },

  created() {
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
    },

    methodSetTemp: function(value) {
      let attribute = "Status";
      this.$store.dispatch("actionSetTemp", {
        attribute: attribute,
        payload: value
      });
    }
  }
};
</script>
<style scoped>
.temp:active {
  background-color: #007bff ;
}
.temp {
  background-color: #6c757d  ;
}
</style>
