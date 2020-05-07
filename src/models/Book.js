import * as firebase from "firebase/app";
import "firebase/firestore";
export default class Book {
  constructor(id, { name, color, text } = {}) {
    this.id = id;
    this.setData({ name, color, text });
  }

  static fromSnapshot(snapshot) {
    return new Book(snapshot.id, snapshot.data());
  }

  fromSnapshot(snapshot) {
    this.setData(snapshot.data());
  }
  setData({ name, color, text }) {
    this.name = name;
    this.color = color;
    this.text = text;
  }

  static getCollectionRef() {
    const uid = firebase.auth().currentUser.uid;
    return firebase.firestore().collection("user").doc(uid).collection("books");
  }

  getRef() {
    return Book.getCollectionRef().doc(this.id);
  }

  static getAll(setBooks) {
    const cancelEffect = Book.getCollectionRef().onSnapshot((snapshot) => {
      const updatedBooks = [];
      snapshot.forEach((book) => updatedBooks.push(Book.fromSnapshot(book)));
      setBooks(updatedBooks);
    });
    return cancelEffect;
  }

  get(setBook) {
    const cancelEffect = this.getRef().onSnapshot((snapshot) => {
      this.fromSnapshot(snapshot);
      setBook({ instance: this });
    });
    return cancelEffect;
  }

  update(data) {
    this.getRef().update(data);
  }

  delete() {
    this.getRef().delete();
  }
}
