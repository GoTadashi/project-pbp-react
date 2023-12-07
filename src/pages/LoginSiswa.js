import React, { useState } from "react";
import "./LoginSiswa.css";
import mainLogo from "../img/logo.png";
import { useHistory } from "react-router-dom";
import Siswa from '../img/SISWA 1.png';

const LoginSiswa = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://jojopinjam.iffan.site/api/action-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);

        // Check if the response contains the expected information for successful login
        if (data.success) {
          // Redirect to DashboardGuru
          history.push("/DashboardGuru");
        } else {
          setErrorMsg("Authentication failed. Please check your credentials.");
        }
      } else {
        // Handle non-200 HTTP response
        const errorData = await response.json();
        setErrorMsg(errorData.message || "Authentication failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMsg("An unexpected error occurred");
    }
  };

  return (
    <div className="LOGIN-SISWA">
      <div className="div">
        <footer className="FOOTER">
          <p className="text-wrapper">
            Jalan Pangeran Diponegoro Km. 9, Getasan, Kec. Getasan, Kabupaten
            Semarang, Jawa Tengah 50774
          </p>
          <div className="text-wrapper-2">SCH</div>
        </footer>
        <div className="FORM-LOGIN">
          <form action="/DashboardGuru" onSubmit={handleLogin}>
            <div className="overlap">
              <div className="rectangle" />
              <div className="text-wrapper-3">ID Siswa</div>
              <img
                className="iconsax-linear"
                alt="Iconsax linear"
                src="/img/iconsax-linear-profilecircle.svg"
              />
              <div className="rectangle" />
              <input
                type="email"
                className="text-wrapper-4"
                id="email"
                placeholder="Email Siswa"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <img
                className="icon-user"
                alt="Icon user"
                src="/img/icon-user.png"
              />
              <p className="takut-akan-TUHAN">
                <span className="span">
                  "Takut akan TUHAN adalah permulaan pengetahuan, tetapi orang
                  bodoh menghina hikmat dan didikan."
                  <br />
                </span>
                <span className="text-wrapper-5">Amsal 1:7</span>
              </p>
            </div>
            <div className="overlap-group">
              <input
                type="password"
                className="text-wrapper-7"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                className="icon-lock"
                alt="Icon lock"
                src="/img/icon-lock.png"
              />
            </div>
            <div className="overlap-2">
              <div className="SMP-KRISTEN-GETASAN">
                SD KRISTEN TERANG BANGSA
                <br />
                E-Rapor
              </div>
              <img className="SMP-KRISTEN" src={mainLogo} alt="SD" />
            </div>
            {errorMsg && <p className="error-message">{errorMsg}</p>}
            {/* <div className="frame"> */}
            <button
              type="submit"
              className="text-wrapper-8"
              onClick={handleLogin}
            >
              Masuk
            </button>
            {/* </div> */}
          </form>
        </div>
        <div className="overlap-3">
          <img className="SISWA" alt="Siswa" src={Siswa} />
        </div>
        <div className="text-log">
          <div className="text-wrapper-9">LOGIN SISWA</div>
        </div>
      </div>
    </div>
  );
};

export default LoginSiswa;
