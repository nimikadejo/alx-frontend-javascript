export default function getListStudents() {
  const firstObj = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco' 
  };
  const secondObj = {
    id: 2,
    firstName: 'James',
    location: 'Columbia'
  };
  const thirdObj = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco'
  };

  return [firstObj, secondObj, thirdObj]
}