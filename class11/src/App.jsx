const students = [
  { suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics' },
  { suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology' },
  { suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology' }
];

function App () {
  let filteredStudents = students;

  const handleChange = (event) => {
    filteredStudents = student.filter(student => student.name === event.target.value);
    console.log(filteredStudents);
  };
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <h1>Students</h1>
      <ul>
        {
          filteredStudents.map(function(item){
            return
            <l1 key={item.suid}>
              Name: {item.name}
              Year: {item.year}
            </l1>
          }) 
        }
      </ul>
    </div>
  )
}