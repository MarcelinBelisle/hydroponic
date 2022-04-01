
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
        
const firebaseConfig = {
  apiKey: "AIzaSyAScT_b2jdH7OV-jChxxIYmuIOtxOL0Tcs",
  authDomain: "hydro-closet.firebaseapp.com",
  databaseURL: "https://hydro-closet-default-rtdb.firebaseio.com",
  projectId: "hydro-closet",
  storageBucket: "hydro-closet.appspot.com",
  messagingSenderId: "419523459894",
  appId: "1:419523459894:web:7b6d55c5af770e182f1197"
};

const app = initializeApp(firebaseConfig);

import {getDatabase, ref, get, set, child, update, remove, onValue}
from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";

const db = getDatabase();




