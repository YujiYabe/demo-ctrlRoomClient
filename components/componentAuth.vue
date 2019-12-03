<template>
  <b-container fluid class="text-light text-center">
    <div v-if="isAuthenticated">
      <b-row class>
        <b-col
          cols="10"
          class="rounded p-3 border border-white bg-dark text-white"
          style="font-size: 20px"
        >control room client</b-col>
        <b-col cols="2" class="rounded p-3 border border-white bg-danger" v-on:click="logout">
          <font-awesome-icon icon="sign-out-alt" style="font-size: 30px"/>
        </b-col>
      </b-row>
    </div>

    <div v-else>
      <br>
      <br>
      <b-row class>
        <b-col cols="4" class="" >
          <label for="input_mail" class="float-left btn btn-secondary">usermail</label>
        </b-col>

        <b-col cols="8" class="">
          <input id="input_mail" class="form-control" type="text" v-model.trim="email">
        </b-col>
      </b-row>

      <br>

      <b-row class>
        <b-col cols="4" class="" >
          <label for="input_password" class="float-left btn btn-secondary">password</label>
        </b-col>

        <b-col cols="8" class="">
          <input id="input_password" class="form-control" type="password" v-model.trim="password">
        </b-col>
      </b-row>

      <br>
      <button class="float-left btn btn-secondary" v-on:click="login">login</button>
    </div>
  </b-container>
</template>

<script>
import firebase from "~/plugins/firebase";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      email: "yayuji@gmail.com",
      password: "fordemo"
    };
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["isAuthenticated"])
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      this.setUser(user);
    });
  },
  methods: {
    ...mapActions(["setUser"]),
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
        })
        .catch(error => {
          alert(error);
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.setUser(null);
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>
