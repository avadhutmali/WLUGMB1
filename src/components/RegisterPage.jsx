import React, { useState } from "react";
import axios from "axios";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    branch: "",
    email: "",
    phone: "",
  });

  const [photo, setPhoto] = useState(null);
  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.name === "photo") {
      setPhoto(e.target.files[0]);
    } else if (e.target.name === "resume") {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("branch", formData.branch);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("photo", photo);
    data.append("resume", resume);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="w-full p-8 z-50">
      <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-center text-white">Register</h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full h-[3.5vh] md:h-[5.5vh] px-2 py-1 md:px-4 md:py-2 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none"
          required
        />

        <input
          type="text"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          placeholder="Branch"
          className="w-full h-[3.5vh] md:h-[5.5vh] px-2 py-1 md:px-4 md:py-2 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full h-[3.5vh] md:h-[5.5vh] px-2 py-1 md:px-4 md:py-2 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none"
          required
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full h-[3.5vh] md:h-[5.5vh] px-2 py-1 md:px-4 md:py-2 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none"
          required
        />

        <div className="photo flex gap-4">
          <div className="text text-white font-bold text-[2vh] md:text-xl">Photo</div>
          <input
            type="file"
            name="photo"
            onChange={handleFileChange}
            className="w-full  text-white"
            required
          />
        </div>

        <div className="resume flex gap-4">
          <div className="text text-white font-bold text-[2vh] md:text-xl">Resume</div>
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            className="w-full text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded mx-auto"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
