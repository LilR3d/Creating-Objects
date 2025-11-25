let book = {
  title: "Odd Thomas",
  author: "Dean Koontz",
  pages: 446,
  read: function () {
    console.log("Currently reading " + this.title + " by " + this.author);
  },
};

//Test it out by calling the read method
book.read();
