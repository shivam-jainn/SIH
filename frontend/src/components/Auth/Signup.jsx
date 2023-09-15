import React, { useState } from "react";
import { TextInput } from "@tremor/react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGoogleSignIn = () => {
    // Handle Google Sign-In logic here
    console.log("Google Sign-In clicked"); // Replace with your Google Sign-In code
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // Replace with your form submission code
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <TextInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="mb-4"
        />
        <TextInput
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="mb-4"
        />
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Role
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <TextInput
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="mb-4"
        />
        <TextInput
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="mb-6"
        />

        <Link to="/client">
        <button
          type="submit"
          className="w-[100%] my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
        >
          Sign Up
        </button>
        
        </Link>
        <button
          onClick={handleGoogleSignIn}
          className="w-[100%] border border-blue-500 hover: text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
        >
          <FcGoogle className="w-6 h-6 mr-2" />
          Sign Up with Google
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
