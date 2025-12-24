import { useEffect, useState } from "react";

const AdminInquiries = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/inquiries", {
      headers: {
        "x-admin-token": localStorage.getItem("adminToken"),
      },
    })
      .then(res => res.json())
      .then(setInquiries);
  }, []);

  return (
    <div>
      <h2>Inquiries</h2>

      {inquiries.map((i) => (
        <div key={i._id} style={{ borderBottom: "1px solid #ccc" }}>
          <p><b>{i.email}</b></p>
          <p>{i.message}</p>
          <p>Status: {i.status}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminInquiries;
