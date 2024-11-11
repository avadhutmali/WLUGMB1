import { useState, useEffect } from "react";
import axios from "axios";

function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    branch: "",
    email: "",
    mobileNo: "",
    whyJoinClub: "",
    photo: null,
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hasAllFields = Object.values(formData).every(
      (value) => value !== "" && value !== null
    );
    const hasNoErrors = Object.values(errors).every((error) => !error);
    setIsFormValid(hasAllFields && hasNoErrors);
  }, [formData, errors]);

  const [isFormValid, setIsFormValid] = useState(false);

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "fullName":
        if (!value) error = "Name is required";
        else if (value.length < 2) error = "Name must be at least 2 characters";
        else if (!/^[a-zA-Z\s]+$/.test(value))
          error = "Name should only contain letters";
        break;
      case "branch":
        if (!value) error = "Please select a branch";
        break;
      case "email":
        if (!value) error = "Email is required";
        else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value))
            error = "Please enter a valid email address";
          else if (value.length > 254) error = "Email is too long";
          else if (value.split("@")[0].length > 64)
            error = "Local part of email is too long";
        }
        break;
      case "mobileNo":
        if (!value) error = "Phone number is required";
        else if (!/^\d{10}$/.test(value))
          error = "Phone number must be exactly 10 digits";
        break;
      case "whyJoinClub":
        if (!value) error = "Please tell us why you want to join";
        else if (value.length < 10)
          error = "Please provide a more detailed response";
        break;
      case "photo":
        if (!value) error = "Photo is required";
        else if (!value.type.startsWith("image/"))
          error = "Please upload an image file";
        else if (value.size > 1000000) error = "Photo must be less than 1MB";
        break;
      case "resume":
        if (!value) error = "Resume is required";
        else if (!value.type.includes("pdf"))
          error = "Please upload a PDF file";
        else if (value.size > 5000000) error = "Resume must be less than 5MB";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value;
    setFormData((prev) => ({ ...prev, [name]: trimmedValue }));
    const error = validateField(name, trimmedValue);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    setFormData((prev) => ({ ...prev, [name]: file }));
    const error = validateField(name, file);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading || !isFormValid) return;

    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await axios.post(
        "https://mb-drive-24.onrender.com/api/user/apply",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          timeout: 15000,
          validateStatus: (status) => status === 200,
        }
      );

      if (response.data.success) {
        setIsSuccess(true);
      } else {
        throw new Error(response.data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      const errorMessage =
        error.response?.data?.error ||
        error.message ||
        "Registration failed. Please try again.";
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white">
            Registration Successful!
          </h2>
          <p className="text-gray-300">
            Thank you for registering. We'll get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-4 sm:p-8 rounded-xl sm:mb-0">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-md mx-auto bg-gray-900 p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center text-white">Register</h2>

        <div className="space-y-4">
          {["fullName", "email", "mobileNo", "whyJoinClub"].map((field) => (
            <div key={field}>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={
                  field === "fullName"
                    ? "Name"
                    : field === "whyJoinClub"
                    ? "Why do you want to join?"
                    : field === "mobileNo"
                    ? "Phone Number"
                    : "Email"
                }
                className={`w-full px-4 py-2 bg-gray-700 text-white rounded-md border ${
                  errors[field] ? "border-red-500" : "border-gray-600"
                } focus:outline-none`}
                required
              />
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}
          <div>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className={`w-full px-2 py-1 bg-gray-700 text-white rounded-md border ${
                errors.branch ? "border-red-500" : "border-gray-600"
              } focus:outline-none`}
              required
            >
              <option value="">Select Branch</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="AI">AI/ML</option>
              <option value="Eln">Electronics</option>
              <option value="Robotics">Robotics and Automation</option>
              <option value="Electrical">Electrical</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
            </select>
            {errors.branch && (
              <p className="text-red-500 text-sm mt-1">{errors.branch}</p>
            )}
          </div>
          <div className="flex gap-4 items-center">
            <div className="text w-16 sm:w-24 text-white font-bold text-xl">
              Photo
            </div>
            <div className="flex gap-2">
              {formData.photo && !errors.photo && (
                <>
                  <div className="px-4 py-2 bg-green-600 text-white rounded-lg">
                    Added
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById("photo-upload").click()
                    }
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Change
                  </button>
                </>
              )}
              {(!formData.photo || errors.photo) && (
                <label
                  htmlFor="photo-upload"
                  className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Choose File
                </label>
              )}
            </div>
            <input
              type="file"
              name="photo"
              id="photo-upload"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              required
            />
            {errors.photo && (
              <p className="text-red-500 text-sm">{errors.photo}</p>
            )}
          </div>
          <div className="flex gap-4 pt-2 pb-2 items-center">
            <div className="text w-16 sm:w-24 text-white font-bold text-xl">
              Resume
            </div>
            <div className="flex gap-2">
              {formData.resume && !errors.resume && (
                <>
                  <div className="px-4 py-2 bg-green-600 text-white rounded-lg">
                    Added
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById("resume-upload").click()
                    }
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Change
                  </button>
                </>
              )}
              {(!formData.resume || errors.resume) && (
                <label
                  htmlFor="resume-upload"
                  className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Choose File
                </label>
              )}
            </div>
            <input
              type="file"
              name="resume"
              id="resume-upload"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
              required
            />
            {errors.resume && (
              <p className="text-red-500 text-sm">{errors.resume}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={!isFormValid || isLoading}
          className={`w-full py-3 ${
            isFormValid && !isLoading
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-400 cursor-not-allowed"
          } text-white rounded-lg transition-colors duration-300`}
        >
          {isLoading ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
