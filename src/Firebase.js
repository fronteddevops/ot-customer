

const firebaseConfig = {
  apiKey: "AIzaSyCEegu-GUr_joCReUiROSO0mNT7whAtqJg",
  authDomain: "ot-chat-41e3d.firebaseapp.com",
  databaseURL: "https://ot-chat-41e3d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ot-chat-41e3d",
  storageBucket: "ot-chat-41e3d.appspot.com",
  messagingSenderId: "1048006921877",
  appId: "1:1048006921877:web:9c10331c41aea5f85d959c",
  measurementId: "G-BJYZ53VCZY"
};


export function getFirebaseConfig() {
    if (!firebaseConfig || !firebaseConfig.apiKey) {
      console.log('error')
    } else {
      return firebaseConfig;
    }
  }
  