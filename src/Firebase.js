import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDAqE11ZhL-lB1xvoyTG-1ndQGOKH6JcP0",
    authDomain: "reservoir-4e130.firebaseapp.com",
    projectId: "reservoir-4e130",
    storageBucket: "reservoir-4e130.appspot.com",
    messagingSenderId: "1074335460700",
    appId: "1:1074335460700:web:4c985ca7aaeabe01a52599",
    measurementId: "G-TN15WPHCL7"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);  