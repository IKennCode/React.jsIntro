import React from 'react'

function Main() {
    let students = [{id:12345, studentName: "John", grade: 85},
    {id:12346, studentName: "Erick", grade: 90},
    {id:12347, studentName: "Kenneth", grade: 87},
    {id:12348, studentName: "Mark", grade: 89},
    {id:12349, studentName: "Grace", grade: 91}];   

    const tableForm = () => {
        return (
          <table class="table">
            <thead class="thead">
              <tr class="tr">
                <th>ID</th>
                <th>Student Name</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {students.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.studentName}</td>
                  <td>{item.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      };
    

  return (
    <div>
      <h1>List of Students</h1>
      {tableForm()}
    </div>
  )
}

export default Main

