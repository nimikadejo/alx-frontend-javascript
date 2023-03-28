export default function getStudentIdsSum(arr) {
  return arr.reduce((acc, obj) => {
    const curr = obj.id;
    acc = acc + curr;
    return acc;
  }, 0);
}
  