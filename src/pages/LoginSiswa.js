import React, { useState } from "react";
import "./LoginSiswa.css";
import mainLogo from "../img/logo.png";
import { useHistory } from "react-router-dom";
import Siswa from '../img/GURU 1.png';
import Modal from "react-modal";

Modal.setAppElement("#root");

const LoginSiswa = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
          setModalIsOpen(true);
        }
      } else {
        // Handle non-200 HTTP response
        const errorData = await response.json();
        // setErrorMsg(errorData.message || "Authentication failed");
        setModalIsOpen(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMsg("An unexpected error occurred");
      setModalIsOpen(true);
    }
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="LOGIN-SISWA">
      <div className="div">
        <footer className="FOOTER">
          {/* <p className="text-wrapper">
            SD Kristen Terang Bangsa
          </p> */}
          {/* <div className="text-wrapper-2">SCH</div> */}
        </footer>
        <div className="FORM-LOGIN">
          <form action="/DashboardGuru" onSubmit={handleLogin}>
            <div className="overlap">
              <div className="rectangle" />
              <div className="text-wrapper-3">ID Siswa</div>
              <div className="rectangle" />
              <input
                type="email"
                className="text-wrapper-4"
                id="email"
                placeholder="Email Siswa"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="icon-user">
                <i class="bi bi-envelope-fill fs-2"></i>
              </div>
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
              <div className="icon-lock">
                <i class="bi bi-lock-fill fs-1"></i>
              </div>
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

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
              content: {
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                border: 'none',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px',
                width: '400px',
                maxWidth: '80%',
                height: '300px',
                maxHeight: '80%',
              }
            }}
          >
            <h2 className="fw-bolder" align="center" >Login</h2><br />
            <p className="fs-4">Email atau Password Anda Salah</p>
            <center><button className="mt-5" onClick={closeModal}>Tutup</button></center>
          </Modal>
        </div>
        <div className="overlap-3">
          <img className="SISWA" alt="Siswa" src={Siswa} />
        </div>
        <div className="text-log">
          <div className="text-wrapper-9">LOGIN</div>
        </div>
      </div>
    </div>
  );
};

export default LoginSiswa;
