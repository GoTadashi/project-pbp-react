import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "./DashboardGuru.css";
import mainLogo from "../img/logo.png";
import terbang from "../img/terbang.jpeg";

export const DashboardGuru = () => {
  const [isProfilePopupVisible, setProfilePopupVisibility] = useState(false);
  const [administratorName, setAdministratorName] = useState("");

  useEffect(() => {
    // Fungsi untuk mengambil data administrator dari database register
    const fetchAdministratorName = async () => {
      try {
        // Gantilah dengan logika pengambilan data sesuai dengan aplikasi Anda
        const response = await fetch("https://jojopinjam.iffan.site/api/action-register");
        const data = await response.json();

        // Set nama administrator ke dalam state
        setAdministratorName(data.administratorName);
      } catch (error) {
        console.error("Error fetching administrator name:", error);
      }
    };
    fetchAdministratorName();
  }, []);

  return (
    <div className="sidebar">
      <div className="div">
        <footer className="FOOTER">
          <p className="text-wrapper">Copyright © SD Kristen Terang Bangsa</p>
        </footer>
        <div className="MENU">
          <div className="PROFILE">
            <Link to="/LihatNilai" className="list-menu nav-link text-white fs-5">
              <i class="bi bi-file-earmark-plus"></i>
              <span className="side-text ms-2">Lihat Nilai</span>
            </Link>
          </div>
          <div className="PROFILE-2">
            <Link to="/LoginSiswa" className="list-menu nav-link text-white fs-5">
              <i className="bi bi-box-arrow-right"></i>
              <span className="side-text ms-2">Log Out</span>
            </Link>
          </div>
          <div className="SISWA">
            <Link to="/DataSiswa" className="list-menu nav-link text-white fs-5">
              <i className="bi bi-person-vcard"></i>
              <span className="side-text ms-2">Siswa</span>
            </Link>
          </div>
          <div className="CHAT">
            <Link to="/LihatGuru" className="list-menu nav-link text-white fs-5">
              <i class="bi bi-person-video3"></i>
              <span className="side-text ms-2">Guru</span>
            </Link>
          </div>
          <div className="CHAT-2">
            <Link to="/DaftarMapel" className="list-menu nav-link text-white fs-5">
              <i className="bi bi-card-checklist"></i>
              <span className="side-text ms-2">Mata Pelajaran</span>
            </Link>
          </div>
          <div className="CHAT-3">
            <Link to="/RaportSiswa" className="list-menu nav-link text-white fs-5">
              <i class="bi bi-book-fill"></i>
              <span className="side-text ms-2">Raport Siswa</span>
            </Link>
          </div>
          <div className="DASHBOARD">
            <Link to="/DashboardGuru" className="list-menu nav-link text-white fs-5">
              <i className="bi bi-speedometer2"></i>
              <span className="side-text ms-2">Dashboard</span>
            </Link>
          </div>
        </div>
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
                    <Link to="/RaportSiswa" className="list-menu nav-link text-blue fs-5">
                      <span className="side-text ms-2 fw-bolder">Input Raport</span>
                    </Link>
                  </div>
                  <p className="selamat-datang-BU">
                    <span className="span fs-3">Selamat datang di E-Rapor SD Kristen Terang Bangsa</span>

                    <span className="span">

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
                <Link to="/DaftarMapel" className="list-menu nav-link text-blue fs-5">
                  <i className="bi bi-card-checklist fs-2"></i>
                  <span className="side-text ms-2 fw-bolder">Mata Pelajaran</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="DAFTAR-GURU">
            <div className="overlap-6">
              <div className="overlap-group-3">
                {/* <div className="text-wrapper-10">Jumlah</div> */}
                <Link to="/LihatGuru" className="list-menu nav-link text-blue fs-5">
                  <i class="bi bi-person-video3 fs-2"></i>
                  <span className="side-text ms-2 fw-bolder">Daftar Guru</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="DAFTAR-SISWA">
            <div className="overlap-6">
              <div className="overlap-group-3">
                {/* <div className="text-wrapper-10">Jumlah</div> */}
                <Link to="/DataSiswa" className="list-menu nav-link text-blue fs-5">
                  <i className="bi bi-person-vcard fs-2"></i>
                  <span className="side-text ms-2 fw-bolder">Daftar Siswa</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <header className="HEADER">
          <div className="overlap-7">
            <div className="group-wrapper">
              <div className="group-7">
                <div className="group-8">
                  <div className="group-9">

                    <span className="text-wrapper-14">{administratorName}</span>
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
                  {/* <img className="element-6" alt="Element" src="/img/3.svg" /> */}
                </div>
                <button onClick={() => setProfilePopupVisibility(false)}>
                  Close
                </button>
              </div>
            )}
            {/* <div className="element-wrapper">
              <img className="element-6" alt="Element" src="/img/3.svg" />
            </div> */}
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
