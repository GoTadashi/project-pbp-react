import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./InputSiswa.css";
import { Link } from "react-router-dom";
import mainLogo from "../img/logo.png";

// ini sudah dropdown id_raport
const InputSiswa = () => {
  const [nisn, setNisn] = useState('');
  const [nama, setNama] = useState('');
  const [tempat_lahir, setTempatLahir] = useState('');
  const [tanggal_lahir, setTanggalLahir] = useState('');
  const [jenis_kelamin, setJenisKelamin] = useState('');
  const [agama, setAgama] = useState('');
  const [nama_orangtua, setNamaOrangtua] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState({ type: null, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jojopinjam.iffan.site/api/add-siswa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nisn,
          nama,
          tempat_lahir,
          tanggal_lahir,
          jenis_kelamin,
          agama,
          nama_orangtua,
        }),
      });

      if (response.ok) {
        alert('Siswa berhasil ditambahkan.'); 
        console.log('Siswa added successfully.');
        setNotification({ type: 'success', message: 'Siswa berhasil ditambahkan.' });
        // Reset form fields or handle success as needed
      } else {
        alert('Gagal menambahkan siswa. Silakan coba lagi.');
        console.error('Failed to add Siswa. Status:', response.status);
        setNotification({ type: 'error', message: 'Gagal menambahkan siswa. Silakan coba lagi.' });
      }
    } catch (error) {
      alert('Terjadi kesalahan. Silakan coba lagi.');
      console.error('Error while adding Siswa:', error);
      setNotification({ type: 'error', message: 'Terjadi kesalahan. Silakan coba lagi.' });
    }
  };

  const handleReset = () => {
    setNisn('');
    setNama('');
    setTempatLahir('');
    setTanggalLahir('');
    setJenisKelamin('');
    setAgama('');
    setNamaOrangtua('');
    setNotification({ type: 'success', message: 'Formulir berhasil direset.' });
  };

  useEffect(() => {
    // Clear notification after 3 seconds
    const timer = setTimeout(() => {
      setNotification({ type: null, message: '' });
    }, 3000);
    return () => clearTimeout(timer);
  }, [notification]);

  return (
    <div className="INPUT-NILAI">
      <div className="div">
      <div className="MENU">
          <div className="PROFILE">
            <Link to="/LihatNilai" className="list-menu nav-link text-white fs-5">
              <i class="bi bi-file-earmark-plus"></i>
              <span className="side-text ms-2">Input Raport Siswa</span>
            </Link>
          </div>
          <div className="PROFILE-2">
            <Link to="/LoginAdmin" className="list-menu nav-link text-white fs-5">
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
          <Link to="/other-page">
            <div className="text-wrapper-11">Kembali</div>
          </Link>
        </div>
        <div className="text-wrapper-12">Input Siswa</div>
        <form onSubmit={handleSubmit}>
          <div className="group-8">
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-13">NISN</div>
              </div>
            </div>
            <div className="frame-3">
              <input
                type="number"
                className="dropdown"
                value={nisn}
                onChange={(e) => setNisn(e.target.value)}
              />
            </div>
          </div>

          <div className="group-9">
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-13">Nama Siswa</div>
              </div>
              <div className="frame-4">
                <input
                  type="text"
                  className="dropdown"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="group-10">
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-13">Tempat Lahir</div>
              </div>
              <div className="frame-5">
                <input
                  type="text"
                  className="dropdown"
                  value={tempat_lahir}
                  onChange={(e) => setTempatLahir(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="group-11">
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-13">Tanggal Lahir</div>
              </div>
              <div className="frame-6">
                <input
                  type="date"  // Change the type to "date"
                  className="dropdown"
                  value={tanggal_lahir}
                  onChange={(e) => setTanggalLahir(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="group-12">
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-13">Jenis Kelamin</div>
              </div>
              <div className="frame-7">
                <select
                  className="dropdown"
                  value={jenis_kelamin}
                  onChange={(e) => setJenisKelamin(e.target.value)}
                >
                  <option value="" disabled>Pilih Jenis Kelamin</option>
                  <option value="Pria">Pria</option>
                  <option value="Wanita">Wanita</option>
                </select>
              </div>
            </div>
          </div>
          <div className="group-13"> {/* Updated for Agama dropdown */}
          <div className="frame-wrapper">
            <div className="frame-12">
              <div className="text-wrapper-13">Agama</div>
            </div>
            <div className="frame-13">
              <select
                className="dropdown"
                value={agama}
                onChange={(e) => setAgama(e.target.value)}
              >
                <option value="" disabled>Pilih Agama</option>
                <option value="Islam">Islam</option>
                <option value="Kristen Protestan">Kristen Protestan</option>
                <option value="Katolik">Katolik</option>
                <option value="Hindu">Hindu</option>
                <option value="Buddha">Buddha</option>
                <option value="Konghucu">Konghucu</option>
              </select>
            </div>
          </div>
        </div>
        <div className="group-14"> {/* Add a new group for Nama Orangtua */}
          <div className="frame-wrapper">
            <div className="frame-14">
              <div className="text-wrapper-13">Nama Orangtua</div>
            </div>
            <div className="frame-15">
              <input
                type="text"
                className="dropdown"
                value={nama_orangtua}
                onChange={(e) => setNamaOrangtua(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="group-12">
            <button type="submit" className="frame-16">
              <div className="text-wrapper-15">Simpan</div>
            </button>
            <div className="frame-17" onClick={handleReset}>
              <div className="text-wrapper-15">Reset</div>
            </div>
          </div>
        </form>
      </div >
    </div >
  );
};

export default InputSiswa;
