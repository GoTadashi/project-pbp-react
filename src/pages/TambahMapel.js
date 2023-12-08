import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import mainLogo from "../img/logo.png";

import "./TambahMapel.css";

export const TambahMapel = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [kodeMatapelajaran, setKodeMatapelajaran] = useState("");
  const [namaMatapelajaran, setNamaMatapelajaran] = useState("");
  const [guruPengampu, setGuruPengampu] = useState("");

  const addMatapelajaran = () => {
    const newMatapelajaran = {
      // kode_matapelajaran: kodeMatapelajaran,
      nama_matapelajaran: namaMatapelajaran,
      id_guru: guruPengampu,
    };

    fetch("https://jojopinjam.iffan.site/api/add-matapelajaran", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMatapelajaran),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success response
        console.log(data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error adding matapelajaran:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMatapelajaran();

    if (!namaMatapelajaran || !guruPengampu) {
      //!kodeMatapelajaran ||
      alert("Harap isi semua kolom form.");
    } else {
      alert("Mata pelajaran berhasil dimasukkan.");
    }

    console.log(
      "Submitted:",
      // kodeMatapelajaran,
      namaMatapelajaran,
      guruPengampu
    );
  };

  const handleReset = () => {
    // setKodeMatapelajaran("");
    setNamaMatapelajaran("");
    setGuruPengampu("");
  };

  return (
    <div className="TAMBAH-MAPEL">
      <div className="div">
      <div className="MENU">
          <div className="PROFILE">
            <Link
              to="/LihatRaport"
              className="list-menu nav-link text-white fs-5"
            >
              <i class="bi bi-file-earmark-plus"></i>
              <span className="side-text ms-2">Input Raport Siswa</span>
            </Link>
          </div>
          <div className="PROFILE-2">
            <Link
              to="/LoginSiswa"
              className="list-menu nav-link text-white fs-5"
            >
              <i className="bi bi-box-arrow-right"></i>
              <span className="side-text ms-2">Log Out</span>
            </Link>
          </div>
          <div className="SISWA">
            <Link
              to="/DataSiswa"
              className="list-menu nav-link text-white fs-5"
            >
              <i className="bi bi-person-vcard"></i>
              <span className="side-text ms-2">Siswa</span>
            </Link>
          </div>
          <div className="CHAT">
            <Link
              to="/LihatGuru"
              className="list-menu nav-link text-white fs-5"
            >
              <i class="bi bi-person-video3"></i>
              <span className="side-text ms-2">Guru</span>
            </Link>
          </div>
          <div className="CHAT-2">
            <Link to="/" className="list-menu nav-link text-white fs-5">
              <i className="bi bi-card-checklist"></i>
              <span className="side-text ms-2">Mata Pelajaran</span>
            </Link>
          </div>
          <div className="CHAT-3">
            <Link
              to="/DaftarMapel"
              className="list-menu nav-link text-white fs-5"
            >
              <i class="bi bi-book-fill"></i>
              <span className="side-text ms-2">Raport Siswa</span>
            </Link>
          </div>
          <div className="DASHBOARD">
            <Link
              to="/DashboardGuru"
              className="list-menu nav-link text-white fs-5"
            >
              <i className="bi bi-speedometer2"></i>
              <span className="side-text ms-2">Dashboard</span>
            </Link>
          </div>
        </div>
        <footer className="FOOTER">
          <p className="p">Copyright © SD Kristen Terang Bangsa</p>
          <img className="line" alt="Line" src="line-2.svg" />
          <img className="line-2" alt="Line" src="line-1.svg" />
          <div className="text-wrapper-5">SCH</div>
        </footer>
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
                <input
                  className="custom-input"
                  type="text"
                  placeholder="Cari berdasarkan Nama/NIS"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
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
        <div className="kembali">
          <div className="text-wrapper-11">Kembali</div>
        </div>
        <div className="text-wrapper-12">Tambah Mata Pelajaran</div>

        <div>
          {/* <div className="group-8">
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-13">Kode Mata Pelajaran</div>
              </div>
            </div>
            <div className="frame-3">
              <input
                type="number"
                className="custom-input"
                value={kodeMatapelajaran}
                onChange={(e) => setKodeMatapelajaran(e.target.value)}
              />
            </div>
          </div> */}
          <div className="group-8">
            <div className="frame-wrapper">
              <div className="frame-4">
                <div className="text-wrapper-13">Mata Pelajaran</div>
              </div>
            </div>
            <div className="frame-5">
              <input
                type="text"
                className="custom-input"
                value={namaMatapelajaran}
                onChange={(e) => setNamaMatapelajaran(e.target.value)}
              />
            </div>
          </div>
          <div className="group-9">
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-13">Kode Guru Pengampu</div>
              </div>
            </div>
            <div className="frame-6">
              <input
                type="number"
                className="custom-input"
                value={guruPengampu}
                onChange={(e) => setGuruPengampu(e.target.value)}
              />
            </div>
          </div>
          <div className="group-11">
            <button className="frame-7" onClick={handleSubmit}>
              <div className="text-wrapper-15">Simpan</div>
            </button>
            <button className="frame-8" onClick={handleReset}>
              <div className="text-wrapper-15">Reset</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahMapel;
