import React, { useState } from "react";

const AddSubtask = ({ onSubmit, subtasks = [], onDelete }) => { // Default subtasks to an empty array
  const [formData, setFormData] = useState({
    username: "",
    role: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, role } = formData;

    if (!username || !role) {
      setError("All fields are required.");
      return;
    }

    // Call the onSubmit prop with the form data
    onSubmit(formData);

    setSuccess("Subtask added successfully!");
    setError("");
    setFormData({ username: "", role: "" });
  };

  return (
    <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Add Subtask</h3>
      {error && (
        <div className="bg-red-100 text-red-700 p-4 mb-4 rounded-lg shadow-lg">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-100 text-green-700 p-4 mb-4 rounded-lg shadow-lg">
          {success}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role"
          >
            Role
          </label>
          <input
            id="role"
            name="role"
            type="text"
            placeholder="Enter role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300"
          >
            Add Subtask
          </button>
        </div>
      </form>

      {/* Display added subtasks */}
      <div className="mt-4">
        <h4 className="text-lg font-semibold mb-2">Added Subtasks:</h4>
        <ul className="space-y-2">
          {subtasks.length > 0 ? (
            subtasks.map((subtask, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-sm rounded-lg p-3"
              >
                <span className="text-gray-800">{subtask.username} - {subtask.role}</span>
                <button
                  onClick={() => onDelete(index)} // Call the delete function passed from parent
                  className="text-red-600 hover:text-red-800 transition duration-300"
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <li className="text-gray-500">No subtasks added yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AddSubtask;
