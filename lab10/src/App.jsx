const students = [
  { suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics' },
  { suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology' },
  { suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology' }
];

function App() {
  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map(student => (
          <li key={student.suid}>
            Name: {student.name} <br />
            Year: {student.year} <br />
            Major: {student.major}
          </li>
        ))}
      </ul>
    </div>
  );
}


function App() {
  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map(student => (
          <li key={student.suid}> {/* using suid as the key */}
            Name: {student.name} <br />
            Year: {student.year} <br />
            Major: {student.major}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Students</h1>
      <Students />  {/* including students component */}
    </div>
  );
}

function Students() {
  return (
    <ul>
      {students.map(student => (
        <li key={student.suid}>
          Name: {student.name} <br />
          Year: {student.year} <br />
          Major: {student.major}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const handleClick = (message) => {
    console.log(message);
  };

  return (
    <div>
      <button onClick={() => handleClick('Hello ebevron!!')}>
        Click me
      </button>
    </div>
  );
}


const filteredStudents = students.filter(student => student.name === 'Sue Flay');