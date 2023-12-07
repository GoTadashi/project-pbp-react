import React, { useState } from "react";
import "./LoginSiswa.css";
import { useHistory } from "react-router-dom";
// import mainLogo from "../img/logo.png";
// import { useHistory } from "react-router-dom";
// import Siswa from '../img/GURU 1.png';
// import Modal from "react-modal";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("administrator");
    const [errorMsg, setErrorMsg] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const history = useHistory();

    const handleRegister = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!email.includes('@gmail')) {
            setErrorMsg('Email must be a valid Gmail address');
            setModalIsOpen(true);
            return;
        }

        if (password.length < 6) {
            setErrorMsg('Password must be at least 6 characters long');
            setModalIsOpen(true);
            return;
        }

        if (!username) {
            setErrorMsg('Username is required');
            setModalIsOpen(true);
            return;
        }

        try {
            // Send registration data to the API
            const response = await fetch('https://jojopinjam.iffan.site/api/action-register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    username,
                }),
            });

            if (response.ok) {
                // Registration successful, you can redirect or perform other actions
                history.push("/DashboardGuru");
            } else {
                // Registration failed, handle the error
                const data = await response.json();
                setErrorMsg(data.message || 'Registration failed');
                setModalIsOpen(true);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setErrorMsg('Registration failed');
            setModalIsOpen(true);
        }
    };
    return (
        <div className="REGISTER">
            <div className="FORM-REGISTER">
                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email Siswa"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Role</label>
                        <select
                            className="form-control"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="administrator">Administrator</option>
                            {/* Add other role options as needed */}
                        </select>
                    </div>

                    {errorMsg && <p className="error-message">{errorMsg}</p>}

                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                </form>

                {/* ... your existing modal JSX code */}
            </div>

            {/* ... your existing JSX code */}
        </div>
    );
};

export default Register;
