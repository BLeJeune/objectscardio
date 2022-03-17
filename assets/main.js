// 1. Construct an object about this course. It must contain at least five properties. The values of those properties should be EITHER strings or integers.
const mycourse = {
  title: `Web Design`,
  period: `3rd`,
  subject: `Science`,
  students: 15,
  instructor: `Mr Dominguez`,
  room: 117,
};
// 2. Write a statement that will log some information about your course to the console using dot-notation.
console.log(`This course, ${mycourse.name}, is taught by ${mycourse.teacher}.`);
// 3. Construct a second object about ANOTHER course. It should have the SAME properties, but obviously different values.
const mycourse2 = {
  title: `Physics`,
  period: `5th`,
  subject: `Science`,
  students: 16,
  instructor: `Mr Tindle`,
  room: 222,
};
// 4. Write a function which accepts a course as an argument and that uses dot-notation to output some information to the console from your object.
// You should be able to plug either course in as an argument and the function should work!
function acceptcourse(acourse) {
  console.log(`This course, ${acourse.name}, is taught by ${acourse.teacher}.`);
  return acceptcourse;
}

acceptcourse(mycourse);
acceptcourse(mycourse2);
// 5. Write a function that contains two statements: one that modifies the value of a property from either course object, and a second statement
// that alerts the user, via the console, about the modification. The function should accept two arguments: the object you're modifying and the
// new value that's being assigned to a property.
function updatecourse(aCourse, newName) {
  // modify name of course
  aCourse.name = newName;
  // do a console.log about the change
  console.log(`The course title has been updated to ${aCourse.main}.`);
}

updatecourse(mycourse, `HONORS Web Development`);
updatecourse(mycourse2, `Physical Science`);
// 6. Create an array called `myCourses` that contains an object for at least four of your courses (you can re-use the two from above).
// Use the .map() method to invoke the function below for each course in the array. Your courses will need, at least, properties of `title`, `subject`, `instructor`.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

function talkAboutMyCourses(anyCourse) {
  console.log(
    `${anyCourse.title} is a course about ${anyCourse.subject}. The course is taught by, ${anyCourse.instructor}.`
  );
}

// Create your array for #6 down here and invoke the .map() function after it.

const myCourses = [mycourse, mycourse2];

myCourses.map((course) => {
  talkAboutMyCourses(course);
})
