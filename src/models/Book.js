export default class Book {
  constructor(id, { name, color, text }) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.text = text;
  }
  static fromSnapshot(snapshot) {
    return new Book(snapshot.id, snapshot.data());
  }
}
