import firebase from 'firebase'
  const config = {
    apiKey: "AIzaSyClS3PVf0SD_-_h26VSyVulmevp9lXDR3w",
    authDomain: "turnout-2988e.firebaseapp.com",
    databaseURL: "https://turnout-2988e.firebaseio.com",
    projectId: "turnout-2988e",
    storageBucket: "turnout-2988e.appspot.com",
    messagingSenderId: "1016731154297"
  };

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
