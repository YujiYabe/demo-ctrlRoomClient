<template>
  <b-container fluid class="text-light text-center">
    <br>
    <b-row class>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">room</b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">device</b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">bed selected</b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">living selected</b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white"></b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">bed light status</b-col>
    </b-row>
    <b-row class>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">{{home.room}}</b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">{{home.device}}</b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">{{home.bed.selected}}</b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">{{home.living.selected}}</b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white"></b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">{{home.bed.light.status}}</b-col>
    </b-row>
<br>
    <b-row class>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">bed aircon status</b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">bed aircon warm</b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">bed aircon cool</b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">living aircon status</b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">living aircon warm</b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">living aircon cool</b-col>
    </b-row>
    <b-row class>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">{{home.bed.aircon.status}}</b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">{{home.bed.aircon.warm}}</b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">{{home.bed.aircon.cool}}</b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">{{home.living.aircon.status}}</b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">{{home.living.aircon.warm}}</b-col>
      <b-col cols="2" class="rounded p-3 bg-secondary border border-white">{{home.living.aircon.cool}}</b-col>
    </b-row>
  </b-container>
</template>

<script>
import {  mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(['home'])
  }
};
</script>