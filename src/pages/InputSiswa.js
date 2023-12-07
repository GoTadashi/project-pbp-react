import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./InputSiswa.css";

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
            <img className="img" alt="Element" src="64.svg" />
            <div className="text-wrapper">Pengaturan Profil</div>
          </div>
          <div className="PROFILE-2">
            <img className="element" alt="Element" src="image.svg" />
            <div className="text-wrapper-2">Log Out</div>
          </div>
          <div className="group">
            <div className="overlap-group">
              <div className="overlap">
                <div className="group-2">
                  <div className="text-wrapper-3">Light</div>
                  <img
                    className="sun-solid"
                    alt="Sun solid"
                    src="sun-solid.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper-4">Dark</div>
              <img
                className="moon-solid"
                alt="Moon solid"
                src="moon-solid.svg"
              />
            </div>
          </div>
          <div className="SISWA">
            <img className="icon-SISWA" alt="Icon SISWA" src="icon-SISWA.png" />
            <div className="text-wrapper">Siswa</div>
          </div>
          <div className="CHAT">
            <img
              className="icon-envelope"
              alt="Icon envelope"
              src="icon-envelope.png"
            />
            <div className="text-wrapper">Chat</div>
          </div>
          <div className="CHAT-2">
            <img
              className="icon-attendance"
              alt="Icon attendance"
              src="icon-attendance.png"
            />
            <div className="text-wrapper">Generate Absen</div>
          </div>
          <div className="CHAT-3">
            <img className="img" alt="Icon calender" src="icon-calender.png" />
            <div className="text-wrapper">Jadwal Pelajaran</div>
          </div>
          <div className="DASHBOARD">
            <img className="element-2" alt="Element" src="1.svg" />
            <div className="text-wrapper">Dashboard</div>
          </div>
        </div>
        <footer className="FOOTER">
          <p className="p">Copyright Â© SMP Kristen Getasan 2023</p>
          <img className="line" alt="Line" src="line-2.svg" />
          <img className="line-2" alt="Line" src="line-1.svg" />
          <div className="text-wrapper-5">SCH</div>
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
              Smp Kristen Getasan
              <br />
              e-rapor
            </div>
            <img className="ellipse-4" alt="Ellipse" src="ellipse-1192.svg" />
            <img
              className="SMP-KRISTEN"
              alt="Smp KRISTEN"
              src="SMP-KRISTEN-2.png"
            />
          </div>
        </header>
        <div className="kembali">
          <img className="back" alt="Back" src="back.png" />
          <div className="text-wrapper-11">Kembali</div>
        </div>
        <div className="text-wrapper-12">Input Nilai</div>
        <form onSubmit={handleSubmit}>
          <div className="group-8">
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-13">NISN</div>
              </div>
            </div>
            <div className="frame-2">
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
              <div className="frame-2">
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
              <div className="frame-2">
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
              <div className="frame-2">
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
              <div className="frame-2">
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
            <div className="frame-2">
              <div className="text-wrapper-13">Agama</div>
            </div>
            <div className="frame-2">
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
            <div className="frame-2">
              <div className="text-wrapper-13">Nama Orangtua</div>
            </div>
            <div className="frame-2">
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
            <button type="submit" className="frame-7">
              <div className="text-wrapper-15">Simpan</div>
            </button>
            <div className="frame-8" onClick={handleReset}>
              <div className="text-wrapper-15">Reset</div>
            </div>
          </div>
        </form>
      </div >
    </div >
  );
};

export default InputSiswa;
