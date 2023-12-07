import React, { useState } from "react";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "./DashboardGuru.css";
import mainLogo from "../img/logo.png";
import terbang from "../img/terbang.jpeg";

export const DashboardGuru = () => {
  const [isProfilePopupVisible, setProfilePopupVisibility] = useState(false);

  return (
    <div className="sidebar">
      <div className="div">
        <div className="MENU">
          <div className="PROFILE">
            <Link to="/" className="list-menu nav-link text-white fs-5">
              <i class="bi bi-sliders2"></i>
              <span className="side-text ms-2">Peraturan</span>
            </Link>
          </div>
          <div className="PROFILE-2">
            <Link to="/" className="list-menu nav-link text-white fs-5">
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
          <p className="p">Copyright © SD Kristen Terang Bangsa</p>
          <div className="text-wrapper-2">SCH</div>
        </footer>
        <div className="overlap-2">
          <div className="overlap-3">
            <div className="overlap-wrapper">
              <div className="overlap-4">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="rectangle" />
                  </div>
                </div>
                <div className="group-4">
                  <div className="overlap-5">
                    <div className="rectangle-2" />
                    <div className="rectangle-wrapper">
                      <div className="rectangle-3">
                        <img className="terbang" src={terbang} alt="gedung" />
                      </div>
                    </div>
                    <div className="group-5">
                      <div className="SEMESTER">Semester 3</div>
                    </div>
                  </div>
                </div>
                <div className="group-6">
                  <div className="INPUT-RAPOR">
                    <div className="INPUT-RAPOR-2">Input Rapor</div>
                  </div>
                  <p className="selamat-datang-BU">
                    <span className="span">Selamat datang </span>
                    <span className="text-wrapper-8">BU ENI</span>
                    <span className="span">
                      , silahkan input matapelajaran yang anda ampu semester
                      ini!
                    </span>
                  </p>
                  <p className="takut-akan-TUHAN">
                    <span className="text-wrapper-9">
                      Takut akan TUHAN adalah permulaan pengetahuan, tetapi
                      orang bodoh menghina hikmat dan didikan.
                      <br />
                    </span>
                    <span className="text-wrapper-8">Amsal 1:7</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="DAFTAR-MATAPELAJARAN">
            <div className="overlap-6">
              {/* <div className="text-wrapper-10">Jumlah</div> */}
              <div className="overlap-group-3">
                <div className="text-wrapper-11">Daftar Mata Pelajaran</div>
              </div>
            </div>
          </div>
          <div className="DAFTAR-GURU">
            <div className="overlap-6">
              {/* <div className="text-wrapper-10">Jumlah</div> */}
              <div className="text-wrapper-12">Daftar Guru</div>
            </div>
          </div>
          <div className="DAFTAR-SISWA">
            <div className="overlap-6">
              {/* <div className="text-wrapper-10">Jumlah</div> */}
              <div className="text-wrapper-12">Daftar Siswa</div>
            </div>
          </div>
        </div>
        <div className="INPUT-PENGUMUMAN">
          <div className="overlap-6">
            {/* <div className="text-wrapper-10">Input</div> */}
            <div className="text-wrapper-12">Input Pengumuman</div>
          </div>
        </div>
        <header className="HEADER">
          <div className="overlap-7">
            <div className="group-wrapper onClick={() => setProfilePopupVisibility(true)}">
              <div className="group-7">
                <div className="group-8">
                  <div className="group-9">
                    <div className="text-wrapper-13">Guru Matematika</div>
                    <div className="text-wrapper-14">Eni Susilowati</div>
                  </div>
                </div>
              </div>
            </div>
            {isProfilePopupVisible && (
              <div className="profile-popup">
                <div className="group-wrapper">
                  <div className="group-7">
                    <div className="group-8">
                      <div className="group-9">
                        <div className="text-wrapper-13">Guru Matematika</div>
                        <div className="text-wrapper-14">Eni Susilowati</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="element-wrapper">
                  <img className="element-6" alt="Element" src="/img/3.svg" />
                </div>
                <button onClick={() => setProfilePopupVisibility(false)}>
                  Close
                </button>
              </div>
            )}
            <div className="element-wrapper">
              <img className="element-6" alt="Element" src="/img/3.svg" />
            </div>
            <div className="search">
              <div className="group-10">
                {/* <img className="element-7" alt="Element" src="/img/7.svg" /> */}
                <div className="text-wrapper-15">Pencarian</div>
              </div>
            </div>
            <div className="SMP-KRISTEN-GETASAN">
              SD Kristen Terang Bangsa
              <br />
              E-Rapor
            </div>
            <img className="img-logo" src={mainLogo} alt="logo-sd" />
          </div>
        </header>
      </div>
    </div>
  );
};

export default DashboardGuru;
