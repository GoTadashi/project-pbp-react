import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../img/logo.png";
import "./TambahGuru.css";

export const TambahGuru = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [kodeGuru, setKodeGuru] = useState("");
    const [namaGuru, setNamaGuru] = useState("");
    const [tempatLahir, settempatLahir] = useState("");
    const [tanggalLahir, setTanggalLahir] = useState("");
    const [jenisKelamin, setJenisKelamin] = useState("Pria"); // Default to "Pria"
  
    const addGuru = () => {
        const newGuru = {
          nip: kodeGuru,
          nama: namaGuru,
          tempat_lahir: tempatLahir,
          tanggal_lahir: tanggalLahir,
          jenis_kelamin: jenisKelamin,
        };
      
        fetch("https://jojopinjam.iffan.site/api/add-guru", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGuru),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle success response
            console.log(data);
            alert("Guru berhasil ditambahkan!");
          })
          .catch((error) => {
            // Handle error
            console.error("Error adding Guru:", error);
            alert("Terjadi kesalahan saat menambahkan guru.");
          });
      };
      
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addGuru();
  
      if (!kodeGuru || !namaGuru || !tempatLahir || !tanggalLahir || !jenisKelamin) {
        alert("Harap isi semua kolom form.");
      } else {
        alert("Guru berhasil dimasukkan.");
      }
  
      console.log(
        "Submitted:",
        kodeGuru,
        namaGuru,
        tempatLahir,
        tanggalLahir,
        jenisKelamin
      );
    };
  
    const handleReset = () => {
      setKodeGuru("");
      setNamaGuru("");
      settempatLahir("");
      setTanggalLahir("");
      setJenisKelamin("Pria");
    };
  
  return (
    <div className="TAMBAH-GURU">
      <div className="div">
      <div className="MENU">
          <div className="PROFILE">
            <Link to="/InputRaport" className="list-menu nav-link text-white fs-5">
              <i class="bi bi-file-earmark-plus"></i>
              <span className="side-text ms-2">Input Raport Siswa</span>
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
        <footer className="FOOTER">
          <p className="p">Copyright © SMP Kristen Getasan 2023</p>
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
                <img className="element-5" alt="Element" src="7.svg" />
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
        <div className="text-wrapper-12">Tambah Guru</div>

        <div>
          <div className="group-8">
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-13">NIP</div>
              </div>
            </div>
            <div className="frame-3">
              <input
                type="text"
                className="custom-input"
                value={kodeGuru}
                onChange={(e) => setKodeGuru(e.target.value)}
              />
            </div>
          </div>
          <div className="group-9">
            <div className="frame-wrapper">
              <div className="frame-4">
                <div className="text-wrapper-13">Nama</div>
              </div>
            </div>
            <div className="frame-5">
              <input
                type="text"
                className="custom-input"
                value={namaGuru}
                onChange={(e) => setNamaGuru(e.target.value)}
              />
            </div>
          </div>
          <div className="group-10">
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-13">Tempat Lahir</div>
              </div>
            </div>
            <div className="frame-6">
              <input
                type="text"
                className="custom-input"
                value={tempatLahir}
                onChange={(e) => settempatLahir(e.target.value)}
              />
            </div>
          </div>
          <div className="group-11">
        <div className="frame-wrapper">
          <div className="frame-9">
            <div className="text-wrapper-13">Tanggal Lahir</div>
          </div>
        </div>
        <div className="frame-10">
          <input
            type="date"
            className="custom-input"
            value={tanggalLahir}
            onChange={(e) => setTanggalLahir(e.target.value)}
          />
        </div>
      </div>
      <div className="group-12">
        <div className="frame-wrapper">
          <div className="frame-11">
            <div className="text-wrapper-13">Jenis Kelamin</div>
          </div>
        </div>
        <div className="frame-12">
          <select
            className="custom-input"
            value={jenisKelamin}
            onChange={(e) => setJenisKelamin(e.target.value)}
          >
            <option value="Pria">Pria</option>
            <option value="Wanita">Wanita</option>
          </select>
        </div>
      </div>
          <div className="group-13">
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

export default TambahGuru;
