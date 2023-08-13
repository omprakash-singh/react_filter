import { useState } from "react";
import "./App.css";

import { data } from "./data/data";

function App() {
  const [showData, setShowData] = useState(data);

  const search = (e) => {
    const value = e.target.value;

    setShowData(
      data.filter((item) =>
        (
          item.first_name +
          " " +
          item.last_name +
          " " +
          item.email +
          " " +
          item.ip_address
        )
          .toLowerCase()
          .includes(value.toLowerCase())
      )
    );

    console.log(data);
  };

  return (
    <>
      <div className="container">
        <input
          type="search"
          placeholder="search"
          className="form-control my-3"
          onChange={search}
        />
        <table className="table table-striped shadow-lg p-3 mb-5 bg-white rounded">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">IP Address</th>
              <th scope="col">Active</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {showData.map((value, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{value.id}</th>
                  <td>{value.first_name}</td>
                  <td>{value.last_name}</td>
                  <td>{value.email}</td>
                  <td>{value.gender}</td>
                  <td>{value.ip_address}</td>
                  <td>{value.active ? "True" : "False"}</td>
                  <td>{value.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {!showData.length && (
          <h1
            style={{
              width: "100%",
              height: "10vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "tomato",
            }}
          >
            No Data Found
          </h1>
        )}
      </div>
    </>
  );
}

export default App;
