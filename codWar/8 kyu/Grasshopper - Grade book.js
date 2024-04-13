// description
//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.


//solution

function getGrade(s1, s2, s3) {
  const score = (s1 + s2 + s3) / 3;

  if (90 <= score && score <= 100) {
    return "A";
  } else if (80 <= score && score < 90) {
    return "B";
  } else if (70 <= score && score < 80) {
    return "C";
  } else if (60 <= score && score < 70) {
    return "D";
  } else {
    return "F";
  }
}

// console.log(getGrade(92, 93, 94));