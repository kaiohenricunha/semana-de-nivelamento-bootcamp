const readline = require('readline-sync');

var students = [
    {
        "name": "Ada",
        "sex": "Female",
      },
      {
        "name": "Marko",
        "sex": "Male",
      },
      {
        "name": "Ana",
        "sex": "Female",
      },
      {
        "name": "Karol",
        "sex": "Female",
      },
      {
        "name": "Kaio",
        "sex": "Male",
      },
];

function attendance() {
  var attendance_list = [];

  for (var i=0; i<students.length; i++) {
    console.log("Is " + students[i].name + " in class?");

    a = readline.question(("If yes, type '1'. Otherwise, type '2': "));

    if (a != 1 && a != 2) {
      console.log('\nIncorrect option. Try again.')
      console.log("Is " + students[i].name + " in class?");
      a = readline.question(("If yes, type '1'. Otherwise, type '2': "));
    }
    // if (a == 1) {
    attendance_list.push(a);
    // } else {
    //   absence_list.push(a);
    // }

  }
  for (var j=0; j<attendance_list.length; j++) {
    if (attendance_list[j] == 1) {
      console.log(students[j].name + ": present.");
    } else {
      console.log(students[j].name + ": absent.");
    }
  
  }
}

attendance();