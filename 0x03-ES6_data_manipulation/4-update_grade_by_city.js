export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((obj) => obj.location === city).map((obj) => {
    const grade = newGrades.find(grade => grade.studentId === obj.id);
    const newGrade = grade ? grade.grade : N/A;
    return {...obj, grade: newGrade};
  })
}