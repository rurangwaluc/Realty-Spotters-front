import { useState } from "react";

const InquiryForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Inquiry sent");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div>
      <h3>Request Property Assistance</h3>

      <input placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <textarea placeholder="What are you looking for?"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InquiryForm;
