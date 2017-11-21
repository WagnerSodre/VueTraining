<template>
  <div class="form-inline">
    <h3>Sign Up</h3>
    <div class="form-group">
    <div class="alert alert-danger" role="alert" v-if="error.message!=''">
      <p style="margin-top: 5px, margin-botton: 5px">{{error.message}}
      <button type="button" class="close" aria-label="Close" @click="error.message=''">
      <span aria-hidden="true">&times;</span>
      </button>
      </p>
    </div>
      <input type="text" placeholder="email" class="form-control" v-model="email">
      <input type="password" placeholder="password" class="form-control" v-model="password">
      <br>
      <button class="btn btn-primary" style="margin-top:5px;" @click="signUp">Sign Up</button>
    </div>
    <br>
    <br>
    <router-link style="margin-top: 5px, margin-botton: 5px" to="/signin">Already a user? Sign in</router-link>
  </div>
</template>

<script>
  import {firebaseApp} from '../firebaseApp'
  export default{
    data(){
      return{
        email: '',
        password: '',
        error: {
          message: ''
        }
      }
    },
    methods:{
      signUp(){
        firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
          .catch(error => {
            this.error = error
          })
      }
    }
  }
</script>
