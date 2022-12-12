import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCGsCJtfm9iENYY5kqhTjWfEACBDC_PnlI",
    authDomain: "food-order-41b30.firebaseapp.com",
    projectId: "food-order-41b30",
    storageBucket: "food-order-41b30.appspot.com",
    messagingSenderId: "333843080960",
    appId: "1:333843080960:web:9258e586cefb351ebb75e5"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
    firebase.firestore().settings({ experimentalForceLongPolling: true, merge:true })
}

// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.apps()

export default firebase;