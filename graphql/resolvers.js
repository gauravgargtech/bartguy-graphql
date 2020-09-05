module.exports = {
  getBookData() {
    return {
      id: 7657656,
      name: "Book nam s ths",
      pages: 765,
    };
  },

  getUserData() {
    return {
      id: 45,
      age: 4444,
      city: "yamuna Nagar",
    };
  },

  createBook(args) {
    console.log("list of arguments are");
    console.log(args);
    return "New book inserted";
  },
};
