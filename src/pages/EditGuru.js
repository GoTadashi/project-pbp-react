import React, { useState } from "react";
import "./EditGuru.css";

export const EditGuru = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const [nik, setNik] = useState("101");
  const [nama, setNama] = useState("Bu Siti");
  const [waliKelas, setWaliKelas] = useState("7A");
  const [noHandphone, setNoHandphone] = useState("086120121");
  const [alamat, setAlamat] = useState("Getasan");
  const [password, setPassword] = useState("1231");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log("Form submitted:", { nik, nama, waliKelas, noHandphone, alamat, password });
  };

  return (
    <div className="EDIT-GURU">
      <div className="div">
        <div className="MENU">
          <div className="PROFILE">
            <img className="element" alt="Element" src="64.svg" />
            <div className="text-wrapper">Pengaturan Profil</div>
          </div>
          <div className="PROFILE-2">
            <img className="element" alt="Element" src="image.svg" />
            <div className="text-wrapper">Log Out</div>
          </div>
          <div className="group">
            <div className="overlap-group">
              <div className="overlap">
                <div className="group-2">
                  <div className="text-wrapper-2">Light</div>
                  <img className="sun-solid" alt="Sun solid" src="sun-solid.svg" />
                </div>
              </div>
              <div className="text-wrapper-3">Dark</div>
              <img className="moon-solid" alt="Moon solid" src="moon-solid.svg" />
            </div>
          </div>
          <div className="SISWA">
            <img className="icon-SISWA" alt="Icon SISWA" src="icon-SISWA.png" />
            <div className="text-wrapper">Siswa</div>
          </div>
          <div className="CHAT">
            <img className="icon-envelope" alt="Icon envelope" src="icon-envelope.png" />
            <div className="text-wrapper">Chat</div>
          </div>
          <div className="CHAT-2">
            <img className="icon-attendance" alt="Icon attendance" src="icon-attendance.png" />
            <div className="text-wrapper">Generate Absen</div>
          </div>
          <div className="CHAT-3">
            <img className="icon-calender" alt="Icon calender" src="icon-calender.png" />
            <div className="text-wrapper">Jadwal Pelajaran</div>
          </div>
          <div className="DASHBOARD">
            <img className="element" alt="Element" src="1.svg" />
            <div className="text-wrapper">Dashboard</div>
          </div>
        </div>
        <footer className="FOOTER">
          <p className="p">Copyright © SMP Kristen Getasan 2023</p>
          <img className="line" alt="Line" src="line-2.svg" />
          <img className="img" alt="Line" src="line-1.svg" />
          <div className="text-wrapper-4">SCH</div>
        </footer>
        <div className="PEMBERITAHUAN">
          <img className="element-2" alt="Element" src="53.svg" />
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
              <div className="text-wrapper-5">Jadwal Piket Harian</div>
            </div>
          </div>
          <div className="WALI-MURID">
            <img className="element" alt="Element" src="4-2.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-5">Pertemuan Wali Murid</div>
            </div>
          </div>
          <div className="KLS">
            <img className="element" alt="Element" src="4-3.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-5">Matematika Kelas 9</div>
            </div>
          </div>
          <div className="KLS-2">
            <img className="element" alt="Element" src="4-4.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-5">Matematika Kelas 8</div>
            </div>
          </div>
          <div className="KLS-3">
            <img className="element" alt="Element" src="4-5.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-5">Matematika Kelas 7</div>
            </div>
          </div>
          <div className="text-wrapper-6">Pemberitahuan</div>
        </div>
        <div className="overlap-2">
          <img className="line-2" alt="Line" src="line-3.svg" />
          <div className="text-wrapper-7">\ Data Guru</div>
          <div className="text-wrapper-8">\ Edit Data Guru</div>
          <div className="text-wrapper-9">Dashboard</div>
        </div>
        <header className="HEADER">
          <div className="overlap-3">
            <div className="group-4">
              <div className="text-wrapper-10">Admin</div>
              <div className="text-wrapper-11">Admin</div>
            </div>
            <div className="element-wrapper">
              <img className="element-3" alt="Element" src="3.svg" />
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
            <img className="SMP-KRISTEN" alt="Smp KRISTEN" src="SMP-KRISTEN-2.png" />
          </div>
        </header>
        <form onSubmit={handleSubmit}>
      <div className="group-6">
        <div className="frame-wrapper">
          <div className="frame-2">
            <div className="text-wrapper-13">NIK</div>
            <div className="text-wrapper-14">*</div>
          </div>
        </div>
        <div className="frame-3">
          <input className="setting"
            type="text"
            value={nik}
            onChange={(e) => setNik(e.target.value)}
          />
        </div>
      </div>
      <div className="group-7">
        <div className="frame-wrapper">
          <div className="frame-2">
            <div className="text-wrapper-13">Nama</div>
            <div className="text-wrapper-16">*</div>
          </div>
        </div>
        <div className="frame-4">
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
      </div>
      <div className="group-8">
        <div className="frame-wrapper">
          <div className="frame-2">
            <div className="text-wrapper-13">Wali Kelas</div>
            <div className="text-wrapper-16">*</div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="frame-5">
            <input
              type="text"
              value={waliKelas}
              onChange={(e) => setWaliKelas(e.target.value)}
            />
          </div>
          <img className="icon-chevron-down" alt="Icon chevron down" src="icon-chevron-down.png" />
        </div>
      </div>
      <div className="group-9">
        <div className="frame-wrapper">
          <div className="frame-2">
            <div className="text-wrapper-13">No. Handphone</div>
            <div className="text-wrapper-16">*</div>
          </div>
        </div>
        <div className="frame-4">
          <input
            type="text"
            value={noHandphone}
            onChange={(e) => setNoHandphone(e.target.value)}
          />
        </div>
      </div>
      <div className="group-10">
        <div className="frame-6">
          <div className="frame-2">
            <div className="text-wrapper-13">Alamat</div>
            <div className="text-wrapper-16">*</div>
          </div>
        </div>
        <div className="frame-4">
          <input
            type="text"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
          />
        </div>
      </div>
      <div className="group-11">
        <div className="frame-6">
          <div className="frame-2">
            <div className="text-wrapper-13">Password</div>
            <div className="text-wrapper-16">*</div>
          </div>
        </div>
        <div className="frame-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
        {/* <div className="group-6">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-13">NIK</div>
              <div className="text-wrapper-14">*</div>
            </div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-15">101</div>
          </div>
        </div>
        <div className="group-7">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-13">Nama</div>
              <div className="text-wrapper-16">*</div>
            </div>
          </div>
          <div className="frame-4">
            <div className="text-wrapper-15">Bu Siti</div>
          </div>
        </div>
        <div className="group-8">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-13">Wali Kelas</div>
              <div className="text-wrapper-16">*</div>
            </div>
          </div>
          <div className="overlap-4">
            <div className="frame-5">
              <div className="text-wrapper-15">7A</div>
            </div>
            <img className="icon-chevron-down" alt="Icon chevron down" src="icon-chevron-down.png" />
          </div>
        </div>
        <div className="group-9">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-13">No. Handphone</div>
              <div className="text-wrapper-16">*</div>
            </div>
          </div>
          <div className="frame-4">
            <div className="text-wrapper-15">086120121</div>
          </div>
        </div>
        <div className="group-10">
          <div className="frame-6">
            <div className="frame-2">
              <div className="text-wrapper-13">Alamat</div>
              <div className="text-wrapper-16">*</div>
            </div>
          </div>
          <div className="frame-4">
            <div className="text-wrapper-15">Getasan</div>
          </div>
        </div>
        <div className="group-11">
          <div className="frame-6">
            <div className="frame-2">
              <div className="text-wrapper-13">Password</div>
              <div className="text-wrapper-16">*</div>
            </div>
          </div>
          <div className="frame-4">
            <div className="text-wrapper-15">1231</div>
          </div>
        </div> */}
        <div className="TAMBAH-DATA">
          <div className="text-wrapper-17">Simpan Data</div>
        </div>
        <div className="PHOTO-PROFILE">
          <div className="edit-photo">
            <img className="frame-7" alt="Frame" src="frame.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditGuru;