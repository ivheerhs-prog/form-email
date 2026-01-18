import { useState } from "react";
import emailjs from "emailjs-com";
emailjs.init("Gz0HeyqDS9TgWAJHa");
export default function Home() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const submitForm = () => {
    if (!name || !mobile || !address) {
      alert("Please fill all fields");
      return;
    }

    emailjs.send(
      "service_4gxs017",
      "template_qz3xssi",
      {
        name: name,
        mobile: mobile,
        address: address
      },
      "Gz0HeyqDS9TgWAJHa"
    )
    .then(() => {
      alert("Form submitted successfully. Email sent!");
      setName("");
      setMobile("");
      setAddress("");
    })
    .catch(() => {
      alert("Failed to send email");
    });
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: "500px", margin: "auto" }}>
      <h1>Location-Specification-Form</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ width: "100%", padding: "8px" }}
      /><br/><br/>

      <input
        placeholder="Mobile Number"
        value={mobile}
        onChange={e => setMobile(e.target.value)}
        style={{ width: "100%", padding: "8px" }}
      /><br/><br/>

      <textarea
        placeholder="Address / Location"
        value={address}
        onChange={e => setAddress(e.target.value)}
        rows="4"
        style={{ width: "100%", padding: "8px" }}
      /><br/><br/>

      <button onClick={submitForm} style={{ padding: "10px 20px" }}>
        Submit
      </button>
    </div>
  );
}
