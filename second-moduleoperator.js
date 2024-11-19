let too = 22;
if (too % 7 == 0) {
  if (too % 11 == 0) {
    console.log("too 2uuland ni huvaagdana");
  } else {
    console.log("too 7d huvaagdah ch 11-d huvaagdahgui");
  }
} else {
  if (too % 11 == 0) {
    console.log("too 7-d huvaagdahgui ch 11-d huvaagdana");
  } else {
    console.log("too 7-d ch huvaagdahgui 11-d ch huvaagdahgui");
  }
}

const ners = ["Bold", "Dorj", "Bataa", "Ganaa"];
for (x of ners) {
  console.log(x);
}

//Bodlogo 8

let year = 2100;
if (year % 4 == 0) {
  if (year % 400 != 0 && year % 100 == 0) {
    console.log("undur jil bish");
  }
  if (year % 400 == 0) {
    console.log("undur jil");
  }
  if (year % 400 != 0 && year % 100 != 0) {
    console.log("undur jil4");
  }
} else {
  console.log("undur jil bishhh");
}
