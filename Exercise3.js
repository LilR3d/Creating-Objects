//Class Syntax
class Student {
  constructor(name, grade, subject) {
    this.name = name;
    this.grade = grade; // number or "Pre-K"
    this.subject = subject;
  }
  introduce() {
    if (this.grade === "Pre-K") {
      console.log(
        `Hi, I am ${this.name}, and I haven't started school yet. I will be in Pre-K studying ${this.subject}.`
      );
    } else {
      console.log(
        `Hi, I am ${this.name}, studying ${this.subject} in grade ${this.grade}.`
      );
    }
  }
  finishesSchoolYear() {
    if (this.grade === "Pre-K") {
      this.grade = 1;
      console.log(
        `${this.name} has started school and is now in grade ${this.grade}.`
      );
    } else if (typeof this.grade === "number" && this.grade < 12) {
      this.grade += 1;
      console.log(`${this.name} has moved up to grade ${this.grade}.`);
    } else if (this.grade === 12) {
      console.log(`Congratulations, ${this.name} has graduated!`);
    }
  }
}

//Create students
const noah = new Student("Noah", 6, "Science");
const almarae = new Student("Almarae", 4, "Mathematics");
const emerlyn = new Student("Emerlyn", "Pre-K", "Pre-K");

//Introduce students
noah.introduce();
almarae.introduce();
emerlyn.introduce();

//Finishes school year
noah.finishesSchoolYear();
almarae.finishesSchoolYear();
emerlyn.finishesSchoolYear();
