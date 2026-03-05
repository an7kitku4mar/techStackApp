import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faListOl,
  faLock,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'

const LoginModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    category: "",
    sno: "",
    password: ""
  });

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [isClosing, setIsClosing] = useState("");
  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.sno || !formData.password || !formData.category) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/home/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        // alert("Login successful!");
        if (data.token) {
          localStorage.setItem("token", data.token)
        }
        navigate("/dashboard");
        console.log(data);
        setError("");
        onClose();
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="fixed pt-[150px] pr-[320px] inset-0 bg-black/40 flex justify-end items-start ">

      <div className={`relative w-[430px] bg-gray-800 p-8 rounded-xl 
              mt-16 mr-16
              transition-all duration-300 ease-in-out
              ${isClosing ? "animate-slideOut" : "animate-slideIn"}`}>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Category */}
          <div className="grid grid-cols-[50px_1fr_1fr] items-center pt-10 gap-2">
            <label className=" text-gray-300 flex justify-end items-center ">
              <FontAwesomeIcon className=" p-3 border" icon={faUsers} />
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="col-span-2 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="0">Officers</option>
              <option value="1">Airmen / NCs(E) / Agniveer</option>
              <option value="2">Civilians</option>
            </select>
          </div>

          <div className="grid grid-cols-[50px_1fr_1fr]  items-center gap-2">
            <label className="text-gray-300 flex items-center justify-end ">
              <FontAwesomeIcon className="p-3 border " icon={faListOl} />
            </label>
            <input
              type="text"
              name="sno"
              placeholder="Enter Service Number"
              value={formData.sno}
              onChange={handleChange}
              className="col-span-2 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-[50px_1fr_1fr] items-center gap-2">
            <label className="text-gray-300 flex items-center justify-end ">
              <FontAwesomeIcon className="p-3 border" icon={faLock} />
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="col-span-2 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 
                     transition duration-200 text-white p-2 rounded mt-4"
          >
            Login
          </button>
        </form>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 
                   text-gray-400 hover:text-white 
                   transition duration-200 text-xl"
        >
          <FontAwesomeIcon className="border p-3" icon={faXmark} />
        </button>

      </div>
    </div>
  );
};

export default LoginModal;
