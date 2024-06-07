import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import md5 from "md5";

// Initialize Firebase
firebase.initializeApp({
  // Your Firebase configuration goes here
});
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();
const auth = firebase.auth();

const ChatSystem = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = db
      .collection("messages")
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        const messagesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(messagesData);
      });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }
    });

    return unsubscribe;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      db.collection("messages").add({
        text: newMessage,
        createdAt: new Date(),
        user: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: `https://www.gravatar.com/avatar/${md5(
            user.email
          )}?d=identicon`,
        },
      });
      setNewMessage("");
    }
  };

  return (
    <div>
      <h1>Community Chat</h1>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <img
              src={message.user.photoURL}
              alt={message.user.displayName}
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
            <span>{message.user.displayName}</span>
            <span>
              {new Date(message.createdAt.seconds * 1000).toLocaleString()}
            </span>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatSystem;
