//Constructor function
function Student(name, grade, subject) {
  this.name = name;
  this.grade = grade;
  this.subject = subject;
}

this.introduce = function () {
  console.log(
    `Hi, I am ${this.name}, studying ${this.subject} in grade ${this.grade}.`
  );
};

this.finishesSchoolYear = function () {
  if (this.grade === "Pre-K") {
    this.grade = 1;
    console.log(
      `${this.name} has started school and is now in grade ${this.grade}.`
    );
  } else if (typeof this.grade === "number" && this.grade < 12) {
    this.grade += 1;
    console.log(`${this.name} has advanced to grade ${this.grade}.`);
  } else if (this.grade === 12) {
    console.log(`Congratulations, ${this.name} has graduated!`);
  }
};

//Create students
let Noah = new Student("Noah", 6, "Science");
let Almarae = new Student("Almarae", 4, "Math");
let Emerlyn = new Student("Emerlyn", "Pre-K", "Pre-K");

//Introduce students
Noah.introduce();
Almarae.introduce();
Emerlyn.introduce();

//Finishes school year
Noah.finishesSchoolYear(); //Noah goes to grade 7
Almarae.finishesSchoolYear(); //Almarae goes to grade 5
Emerlyn.finishesSchoolYear(); //Emerlyn goes to grade 1
