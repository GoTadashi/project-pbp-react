import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "./DashboardGuru.css";
import mainLogo from "../img/logo.png";

export const DashboardGuru = () => {
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
            <Link to="/DaftarMapel" className="list-menu nav-link text-white fs-5">
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
          <p className="p">
            Jalan Pangeran Diponegoro Km. 9, Getasan, Kec. Getasan, Kabupaten
            Semarang, Jawa Tengah 50774
          </p>
          <img className="line" alt="Line" src="/img/line-1.svg" />
          <img className="img" alt="Line" src="/img/line-1.svg" />
          <div className="text-wrapper-4">SCH</div>
        </footer>
        <div className="overlap-2">
          <div className="overlap-3">
            <div className="PEMBERITAHUAN">
              <img className="element-2" alt="Element" src="/img/53.svg" />
              <div className="frame">
                <div className="group-3">
                  <div className="ellipse" />
                  <div className="ellipse-2" />
                  <div className="ellipse-3" />
                </div>
              </div>
              <div className="PIKET">
                <img className="element" alt="Element" src="/img/3.svg" />
                <div className="div-wrapper">
                  <div className="text-wrapper-5">Jadwal Piket Harian</div>
                </div>
              </div>
              <div className="WALI-MURID">
                <img className="element" alt="Element" src="/img/3.svg" />
                <div className="div-wrapper">
                  <div className="text-wrapper-5">Pertemuan Wali Murid</div>
                </div>
              </div>
              <div className="KLS">
                <img className="element" alt="Element" src="/img/3.svg" />
                <div className="div-wrapper">
                  <div className="text-wrapper-5">Matematika Kelas 9</div>
                </div>
              </div>
              <div className="KLS-2">
                <img className="element" alt="Element" src="/img/3.svg" />
                <div className="div-wrapper">
                  <div className="text-wrapper-5">Matematika Kelas 8</div>
                </div>
              </div>
              <div className="KLS-3">
                <img className="element" alt="Element" src="/img/3.svg" />
                <div className="div-wrapper">
                  <div className="text-wrapper-5">Matematika Kelas 7</div>
                </div>
              </div>
              <div className="text-wrapper-6">Pemberitahuan</div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-4">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <img
                      className="mask-group"
                      alt="Mask group"
                      src="/img/mask-group-1.png"
                    />
                    <img
                      className="mask-group-2"
                      alt="Mask group"
                      src="/img/mask-group.png"
                    />
                    <div className="rectangle" />
                  </div>
                </div>
                <div className="group-4">
                  <div className="overlap-5">
                    <div className="rectangle-2" />
                    <div className="rectangle-wrapper">
                      <div className="rectangle-3" />
                    </div>
                    <div className="group-5">
                      <div className="text-wrapper-7">
                        RATA-RATA RAPOR SEMESTER INI
                      </div>
                      <div className="SEMESTER">Semester 3</div>
                    </div>
                    <img
                      className="element-3"
                      alt="Element"
                      src="/img/3-1.png"
                    />
                    <img className="element-4" alt="Element" src="/img/2.png" />
                    <img className="element-5" alt="Element" src="/img/1.png" />
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
              <div className="text-wrapper-10">Jumlah</div>
              <div className="overlap-group-3">
                <div className="text-wrapper-11">Daftar Mata Pelajaran</div>
                <img
                  className="icon-book"
                  alt="Icon book"
                  src="/img/icon-book.png"
                />
              </div>
            </div>
          </div>
          <div className="DAFTAR-GURU">
            <div className="overlap-6">
              <div className="text-wrapper-10">Jumlah</div>
              <div className="text-wrapper-12">Daftar Guru</div>
              <img
                className="icon-chalkboard"
                alt="Icon chalkboard"
                src="/img/icon-chalkboard-teacher.png"
              />
            </div>
          </div>
          <div className="DAFTAR-SISWA">
            <div className="overlap-6">
              <div className="text-wrapper-10">Jumlah</div>
              <div className="text-wrapper-12">Daftar Siswa</div>
              <img
                className="icon-siswa"
                alt="Icon siswa"
                src="/img/icon-siswa.png"
              />
            </div>
          </div>
        </div>
        <div className="INPUT-PENGUMUMAN">
          <div className="overlap-6">
            <div className="text-wrapper-10">Input</div>
            <div className="text-wrapper-12">Input Pengumuman</div>
            <img
              className="icon-megaphone"
              alt="Icon megaphone"
              src="/img/icon-megaphone.png"
            />
          </div>
        </div>
        <header className="HEADER">
          <div className="overlap-7">
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
            <div className="search">
              <div className="group-10">
                <img className="element-7" alt="Element" src="/img/7.svg" />
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
