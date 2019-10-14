export default {
  created() {
  },
  methods: {
    mixinChangeClass(args) {
      let classCommon = this.$store.getters["classCommon"];
      let applyColor = args['one'] == args['two'] ? " bg-primary" : " bg-secondary";
      return classCommon + applyColor;
    },

    mixinRoomChangeClass(value) {
      let args = {
        one: this.$store.getters["device"],
        two: this.dictionary[value]
      };
      return this.mixinChangeClass(args);
    },

    mixinDeviceChangeClass(value) {
      let room = this.$store.getters["room"];
      let device = this.$store.getters["device"];
      let attribute = "Status";
      let nowStatus = this.$store.getters[room + device + attribute];
      let args = {
        'one':value,
        'two':nowStatus
      }
      return this.mixinChangeClass(args)
    },

  }
}
