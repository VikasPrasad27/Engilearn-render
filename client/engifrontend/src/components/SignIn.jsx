import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { NavLink } from 'react-router-dom'
const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://engilearn.onrender.com";
 const SignIn = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
 
  const {storeTokenInLS} =useAuth();
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(`${backendUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("response data : ", response);

      if (response.ok) {
        const responseData = await response.json();
        alert("registration successful");
        storeTokenInLS(responseData.toekn);
        setUser({name: "", email: "", password: "" });
        navigate("/");
        window.location.reload();
      } else {
        console.log("error inside response ", "error");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };


  return (
    <>
      <section className="bg-gradient-to-r from-gray-900 via-indigo-800 to-black min-h-screen flex items-center justify-center p-6">
  <main className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      
      {/* Registration Image Section */}
      <div className="flex justify-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/003/689/228/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
          alt="register image"
          className="w-80 h-auto rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Registration Form Section */}
      <div className="registration-form bg-gray-50 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4">Registration Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInput}
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInput}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInput}
              placeholder="Create a strong password"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  </main>
  <NavLink to='/aibot' className="fixed bottom-4 right-4 z-50 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300 ease-in-out">
        <img
          src="https://st5.depositphotos.com/4226061/73051/v/450/depositphotos_730516270-stock-illustration-robot-head-speech-bubble-blue.jpg?height=96&width=96"
          alt="Floating Logo"
          width={96}
          height={96}
          className="w-12 h-12 md:w-20 md:h-20 object-cover"
        />
      </NavLink>
</section>

    </>
  );
};
export default SignIn;
