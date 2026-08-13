function Student({ students }) {
  return (
    <>
      {students.map((student, index) => (
        <div
          key={index}
          style={{
            width: "250px",
            border: "2px solid red",
            borderRadius: "100px",
            padding: "20px",
            margin: "20px auto",
            textAlign: "center",
            backgroundColor: "pink",
          }}
        >
          <h2>Student Profile</h2>

          <p>Name: {student.name}</p>
          <p>Course: {student.course}</p>
          <p>Year: {student.year}</p>
          <p>Skill: {student.skill}</p>
        </div>
      ))}
    </>
  );
}

export default Student;