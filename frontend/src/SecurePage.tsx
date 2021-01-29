import React, { useState, useEffect } from "react";
import { DataGrid, ColDef } from "@material-ui/data-grid";

const columns: ColDef[] = [
  { field: "id", headerName: "ID", width: 70, type: "number" },
  { field: "email", headerName: "Email", width: 250 },
  { field: "is_active", headerName: "User Active", width: 150 },
];

const SecurePage = () => {
  // fetch
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Make HTTP Request
      const result = await fetch("/users", { method: "GET" });
      console.log(await result);
      // Grab JSON from response
      const jsonData = await result.json();
      console.log(jsonData);
      // Update State
      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <div style={{ height: 400, width: "50%", background: "white" }}>
      {/* the data variable is from the useState function */}
      <DataGrid rows={data} columns={columns} checkboxSelection />
    </div>
  );
};

export default SecurePage;
