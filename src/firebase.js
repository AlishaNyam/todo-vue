import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyB5iVaYQPfIeZYBeFELzA0SDphqS05QA5M",
    authDomain: "vue-todolists.firebaseapp.com",
    databaseURL: "https://vue-todolists.firebaseio.com",
    projectId: "vue-todolists",
    storageBucket: "vue-todolists.appspot.com",
    messagingSenderId: "959406503566",
    appId: "1:959406503566:web:3752f3e8480d2d78457bdf",
    measurementId: "G-SS0LMHM2CE"
}

const firebaseApp = firebase.initializeApp(config)

const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore