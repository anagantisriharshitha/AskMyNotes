function EmployeeCard(props) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        margin: "10px",
        width: "300px",
        borderRadius: "8px",
      }}
    >
      <h2>{props.name}</h2>
      <p><strong>Employee ID:</strong> {props.id}</p>
      <p><strong>Department:</strong> {props.department}</p>
      <p><strong>Designation:</strong> {props.designation}</p>
      <p><strong>Salary:</strong> ₹{props.salary}</p>
    </div>
  );
}

export default EmployeeCard;