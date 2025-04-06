// auth.jsx
import { createContext, useContext, useState ,useEffect} from "react";

export const AuthContext = createContext();
const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
export const AuthProvider = ({ children }) => {
  const [token,setToken]=useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  // function to check the user Authentication or not
  const userAuthentication = async () => {
    try {
      const response = await fetch(`${backendUrl}/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();

        // our main goal is to get the user data 👇
        setUser(data.userData);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
  if (token) {
    userAuthentication();
  }
}, [token]);


//Logout
const LogoutUser =()=>{
  setToken("");
  return localStorage.removeItem("token");
};
let isLoggedIn =!!token;

  return (
    <AuthContext.Provider value={{isLoggedIn, storeTokenInLS,LogoutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};

// Default export (only one allowed)
export default AuthProvider;
