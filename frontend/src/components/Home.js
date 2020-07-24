import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

const Home = () => {
  const [emps, setemp] = useState([]);

  useEffect(() => {
    loademps();
  }, []);

  const loademps = async () => {
    const result = await axios.get("http://localhost:3000/emp/view");
    // setemp(result.data.reverse());
  };

  const deleteemp = async id => {
    await axios.delete(`http://localhost:3000/emp/del/${id}`);
    loademps();
  };

  return (
    <div classNameName="container">
      <div classNameName="py-4">
        <h1>Employee List</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {emps.map((emp, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{emp.fname}</td>
                <td>{emp.lname}</td>
                <td>{emp.email}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/emp/view/${emp.id}`}>
                    View
                  </Link>
                  
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteemp(emp.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
