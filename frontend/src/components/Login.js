import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "password") {
            localStorage.setItem("user", JSON.stringify({ username }));
            setIsAuthenticated(true);
            navigate("/");
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <form onSubmit={handleLogin} className="bg-white p-4 rounded shadow-lg" style={{ maxWidth: "400px" }}>
                <h2 className="text-center mb-4">Login</h2>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Username" value={username}
                        onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    );
};

export default Login;
