import React, { Component } from "react";
import "./EmployeeDetails.css";

class EmployeeDetails extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Employee Details</h1>
        </header>

        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <td>101</td>
            </tr>

            <tr>
              <th>Name</th>
              <td>Nidhi</td>
            </tr>

            <tr>
              <th>Role</th>
              <td>Developer</td>
            </tr>
          </tbody>
        </table>
        <footer>
          <p>ABC Company | Bangalore</p>
        </footer>
      </div>
    );
  }
}

export default EmployeeDetails;