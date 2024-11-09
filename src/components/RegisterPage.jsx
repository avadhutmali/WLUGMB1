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
    <div className="w-full max-w-full px-4 py-6 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white">Register</h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full px-4 py-2 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          placeholder="Branch"
          className="w-full px-4 py-2 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-2 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full px-4 py-2 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <div className="flex flex-col gap-2 sm:flex-row items-center justify-between">
          <label htmlFor="photo-upload" className="text-white font-bold">
            Photo
          </label>
          <label
            htmlFor="photo-upload"
            className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Choose File
          </label>
          <input
            type="file"
            name="photo"
            id="photo-upload"
            onChange={handleFileChange}
            className="hidden"
            required
          />
        </div>

        <div className="flex flex-col gap-2 sm:flex-row items-center justify-between">
          <label htmlFor="resume-upload" className="text-white font-bold">
            Resume
          </label>
          <label
            htmlFor="resume-upload"
            className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Choose File
          </label>
          <input
            type="file"
            name="resume"
            id="resume-upload"
            onChange={handleFileChange}
            className="hidden"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white font-semibold bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
