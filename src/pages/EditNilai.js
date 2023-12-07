import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "./EditNilai.css";
import mainLogo from "../img/logo.png";

export const EditNilai = () => {

  const [namaSiswa, setNamaSiswa] = useState("");
  const [mataPelajaran, setMataPelajaran] = useState("");
  const [semester, setSemester] = useState("");
  const [nilai, setNilai] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic for form submission here, e.g., call an API
    console.log("Submitted:", namaSiswa, mataPelajaran, semester, nilai);
  };

  return (
    <div className="EDIT-NILAI">
      <div className="div">
        <div className="MENU">
          <div className="PROFILE">
            <Link to="/" className="list-menu nav-link text-white fs-5">
              <i class="bi bi-sliders2"></i>
              <span className="side-text ms-2">Peraturan</span>
            </Link>
          </div>
          <div className="PROFILE-2">
            <Link to="/LoginSiswa" className="list-menu nav-link text-white fs-5">
              <i className="bi bi-box-arrow-right"></i>
              <span className="side-text ms-2">Log Out</span>
            </Link>
          </div>
          <div className="SISWA">
            <Link to="/" className="list-menu nav-link text-white fs-5">
              <i className="bi bi-person-vcard"></i>
              <span className="side-text ms-2">Siswa</span>
            </Link>
          </div>
          <div className="CHAT">
            <Link to="/" className="list-menu nav-link text-white fs-5">
              <i className="bi bi-envelope"></i>
              <span className="side-text ms-2">Chat</span>
            </Link>
          </div>
          <div className="CHAT-2">
            <Link to="/" className="list-menu nav-link text-white fs-5">
              <i className="bi bi-card-checklist"></i>
              <span className="side-text ms-2">Generate Absen</span>
            </Link>
          </div>
          <div className="CHAT-3">
            <Link
              to="/DaftarMapel"
              className="list-menu nav-link text-white fs-5"
            >
              <i className="bi bi-table"></i>
              <span className="side-text ms-2">Jadwal Pelajaran</span>
            </Link>
          </div>
          <div className="DASHBOARD">
            <Link to="/" className="list-menu nav-link text-white fs-5">
              <i className="bi bi-speedometer2"></i>
              <span className="side-text ms-2">Dashboard</span>
            </Link>
          </div>
        </div>
        <footer className="FOOTER">
          <p className="p">Copyright © SD Kristen Terang Bangsa 2023</p>
        </footer>
        <div className="PEMBERITAHUAN">
          <img className="element-3" alt="Element" src="53.svg" />
          <div className="frame">
            <div className="group-3">
              <div className="ellipse" />
              <div className="ellipse-2" />
              <div className="ellipse-3" />
            </div>
          </div>
          <div className="PIKET">
            <img className="element" alt="Element" src="4.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-6">Jadwal Piket Harian</div>
            </div>
          </div>
          <div className="WALI-MURID">
            <img className="element" alt="Element" src="4-2.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-6">Pertemuan Wali Murid</div>
            </div>
          </div>
          <div className="KLS">
            <img className="element" alt="Element" src="4-3.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-6">Matematika Kelas 9</div>
            </div>
          </div>
          <div className="KLS-2">
            <img className="element" alt="Element" src="4-4.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-6">Matematika Kelas 8</div>
            </div>
          </div>
          <div className="KLS-3">
            <img className="element" alt="Element" src="4-5.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-6">Matematika Kelas 7</div>
            </div>
          </div>
          <div className="text-wrapper-7">Pemberitahuan</div>
        </div>
        <header className="HEADER">
          <div className="overlap-2">
            <div className="group-wrapper">
              <div className="group-4">
                <div className="group-5">
                  <div className="group-6">
                    <div className="text-wrapper-8">Siswa</div>
                    <div className="text-wrapper-9">Anggi Adinda</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="element-wrapper">
              <img className="element-4" alt="Element" src="3.svg" />
            </div>
            <div className="search">
              <div className="group-7">
                <i class="bi bi-search"></i>
                <div className="text-wrapper-10">Pencarian</div>
              </div>
            </div>
            <div className="SMP-KRISTEN-GETASAN">
              SD Kristen Terang Bangsa
              <br />
              E-Rapor
            </div>
            {/* <img className="ellipse-4" alt="Ellipse" src="ellipse-1192.svg" /> */}
            <img className="img-logo" src={mainLogo} alt="logo-sd"/>
          </div>
        </header>
        <div className="kembali">
          <i class="bi bi-arrow-left fs-6 text-white"></i>
          <div className="text-wrapper-11">Kembali</div>
        </div>
        <div className="text-wrapper-12">Input Nilai</div>
        <form onSubmit={handleSubmit}>
          <div className="group-8">
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-13">Nama Siswa</div>
              </div>
            </div>
            <div className="frame-3">
              <input
                type="text"
                className="custom-input"
                value={namaSiswa}
                onChange={(e) => setNamaSiswa(e.target.value)}
              />
            </div>
          </div>

          <div className="group-9">
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-13">Mata Pelajaran</div>
              </div>
            </div>
            <div className="frame-4">
              <input
                type="text"
                className="custom-input"
                value={mataPelajaran}
                onChange={(e) => setMataPelajaran(e.target.value)}
              />
            </div>
          </div>

          <div className="group-10">
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-13">Semester</div>
              </div>
            </div>
            <div className="frame-5">
              <input
                type="number"
                className="custom-input"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                min="1"
              />
            </div>
          </div>

          <div className="group-11">
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-13">Nilai</div>
              </div>
            </div>
            <div className="frame-6">
              <input
                type="number"
                className="custom-input"
                value={nilai}
                onChange={(e) => setNilai(e.target.value)}
              />
            </div>
          </div>

          <div className="group-12">
            <div className="frame-7">
              <div className="text-wrapper-15">Simpan</div>
            </div>
            <div className="frame-8">
              <div className="text-wrapper-15">Reset</div>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};

export default EditNilai;