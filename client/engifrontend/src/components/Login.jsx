import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://engilearn.onrender.com";
const Login = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });



  const navigate = useNavigate();
  const {storeTokenInLS}=useAuth();
  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // let handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("after login: ", responseData);
        alert("Login Successfull")
        storeTokenInLS(responseData.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
   <section className="bg-gradient-to-r from-gray-900 via-indigo-900 to-black min-h-screen flex items-center justify-center p-6">
  <main className="w-full max-w-3xl p-8 bg-gray-800 rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src="https://img.freepik.com/premium-vector/user-interface-entering-personal-information-login-into-website-account-concept-secure-login-password-protection_110633-1392.jpg?w=1480"
          alt="Login Illustration"
          className="w-80 h-auto rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Registration Form Section */}
      <div className="registration-form bg-gray-900 p-6 rounded-2xl shadow-md transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-3xl font-extrabold text-center text-white mb-6">Welcome Back!</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-gray-300 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInput}
              placeholder="Enter your email"
              className="w-full px-4 py-3 mt-2 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-300 font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInput}
              placeholder="Create a strong password"
              className="w-full px-4 py-3 mt-2 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </main>
</section>
    </>
  );
};
export default Login;
