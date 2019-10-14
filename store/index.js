import firebase from "firebase";

export const strict = false
const MAXTEMP = 25
const MINTEMP = 15

export const state = () => ({
  user: null,
  // isDebug: true,
  isDebug: false,

  dictionary: {
    roomB: 'Bed',
    roomL: 'Living',
    deviceA: 'Aircon',
    deviceL: 'Light',
  },

  arrs: [{
    room: "Bed",
    device: "Light",
    attribute: "Status"
  },
  {
    room: "Bed",
    device: "Aircon",
    attribute: "Status"
  },
  {
    room: "Bed",
    device: "Aircon",
    attribute: "Warm"
  },
  {
    room: "Bed",
    device: "Aircon",
    attribute: "Cool"
  },
  {
    room: "Living",
    device: "Aircon",
    attribute: "Status"
  },
  {
    room: "Living",
    device: "Aircon",
    attribute: "Warm"
  },
  {
    room: "Living",
    device: "Aircon",
    attribute: "Cool"
  }
  ],

  home: {
    room: 'Bed',
    device: 'Aircon',
    bed: {
      selected: 'Aircon',
      aircon: {
        status: 's',
        warm: '20',
        cool: '20',
      },
      light: {
        status: 'o',
      }
    },
    living: {
      selected: 'Aircon',
      aircon: {
        status: 's',
        warm: '20',
        cool: '20',
      },
    },
    classCommon: 'rounded p-3 border',

  }
})

export const mutations = {

  setUser: (state, payload) => state.user = payload,

  mutationSetRoom: (state, payload) => state.home.room = payload,
  mutationSetDevice: (state, payload) => state.home.device = payload,

  mutationSetBedSelected: (state, payload) => state.home.bed.selected = payload,

  mutationSetBedLightStatus: (state, payload) => state.home.bed.light.status = payload,

  mutationSetBedAirconStatus: (state, payload) => state.home.bed.aircon.status = payload,
  mutationSetBedAirconWarm: (state, payload) => state.home.bed.aircon.warm = payload,
  mutationSetBedAirconCool: (state, payload) => state.home.bed.aircon.cool = payload,

  mutationSetLivingSelected: (state, payload) => state.home.living.selected = payload,
  mutationSetLivingAirconStatus: (state, payload) => state.home.living.aircon.status = payload,
  mutationSetLivingAirconWarm: (state, payload) => state.home.living.aircon.warm = payload,
  mutationSetLivingAirconCool: (state, payload) => state.home.living.aircon.cool = payload,

}

export const actions = {
  // https://vuex.vuejs.org/ja/api/#actions
  setUser({
    commit
  }, payload) {
    commit('setUser', payload)
  },

  actionSetRoom({
    commit
  }, payload) {
    commit('mutationSetRoom', payload)
  },

  actionSetDevice({
    commit
  }, payload) {
    commit('mutationSetDevice', payload)
  },

  actionCopySelectedDevice({
    commit
  }, payload) {
    let selectedDevice = this.getters[payload + 'Selected']
    commit('mutationSetDevice', selectedDevice)
  },

  actionSetSelectedDevice({
    commit
  }, payload) {
    let selectedRoom = 'mutationSet' + this.getters['room'] + 'Selected'
    commit(selectedRoom, payload)

  },

  actionSetCommon({
    commit
  }, argument) {
    let room = this.getters.room
    let device = this.getters.device
    let attribute = argument.attribute
    let payload = argument.payload
    commit('mutationSet' + room + device + attribute, payload)
    firebase.database().ref('/home/' + room + '/' + device + '/' + attribute).set(payload);
  },


  actionSetFromFirebase({
    commit
  }, argument) {
    let room = argument.room
    let device = argument.device
    let attribute = argument.attribute
    let payload = argument.payload
    commit('mutationSet' + room + device + attribute, payload)
  },

  actionSetTemp({
    commit
  }, argument) {

    let room = this.getters['room']
    let device = this.getters['device']
    let attribute = argument.attribute

    let nowStatus = this.getters[room + device + attribute]
    if (nowStatus == 's') {
      return
    }
    attribute = nowStatus == 'w' ? "Warm" : "Cool";

    let payload = parseInt(argument.payload, 10)
    let nextTemp = parseInt(this.getters[room + device + attribute], 10) + payload

    if (MINTEMP <= nextTemp && nextTemp <= MAXTEMP) {
      commit('mutationSet' + room + device + attribute, nextTemp)
      firebase.database().ref('/home/' + room + '/' + device + '/' + attribute).set(nextTemp);
    }

  },

  actionJumpRoom() {
    this.$router.push('/' + this.getters['room']);
  },

}

export const getters = {
  isAuthenticated: (state) => !!state.user,
  isDebug: (state) => state.isDebug,
  classCommon: (state) => state.home.classCommon,
  dictionary: (state) => state.dictionary,
  home: (state) => state.home,
  room: (state) => state.home.room,
  device: (state) => state.home.device,
  BedAirconStatus: (state) => state.home.bed.aircon.status,
  BedAirconWarm: (state) => state.home.bed.aircon.warm,
  BedAirconCool: (state) => state.home.bed.aircon.cool,
  BedLightStatus: (state) => state.home.bed.light.status,
  BedSelected: (state) => state.home.bed.selected,

  LivingAirconWarm: (state) => state.home.living.aircon.warm,
  LivingAirconCool: (state) => state.home.living.aircon.cool,
  LivingAirconStatus: (state) => state.home.living.aircon.status,
  LivingSelected: (state) => state.home.living.selected,

  arrs: (state) => state.arrs,

}
