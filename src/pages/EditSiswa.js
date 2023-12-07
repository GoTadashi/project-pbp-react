import React, { useEffect, useState } from "react";
// import { Calendar } from "./Calendar";
import "./EditSiswa.css";

export const EditSiswa = () => {
  const [nis, setNis] = useState("");
  const [nama, setNama] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [agama, setAgama] = useState("");
  const [namaOrtu, setNamaOrtu] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");

    const fetchData = async () => {
      try {
        const response = await fetch("https://jojopinjam.iffan.site/api/get-siswa");
        const data = await response.json();

        // Populate the state with the fetched data
        setNis(data.nis);
        setNama(data.nama);
        setJenisKelamin(data.jenisKelamin);
        setAgama(data.agama);
        setNamaOrtu(data.namaOrtu);
        setTanggalLahir(data.tanggalLahir);
        setTempatLahir(data.tempatLahir);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8001/api/update-siswa", {
        method: "POST", // Assuming you want to update data
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nis,
          nama,
          jenis_kelamin: jenisKelamin, // Make sure to match the API field names
          agama,
          nama_orangtua: namaOrtu, // Make sure to match the API field names
          tanggal_lahir: tanggalLahir, // Make sure to match the API field names
          tempat_lahir: tempatLahir, // Make sure to match the API field names
        }),
      });

      const result = await response.json();

      // Handle the result, you might want to show a success message or handle errors
      console.log(result);
    } catch (error) {
      console.error("Error updating data:", error.message);
    }
  };


  return (
    <div className="EDIT-SISWA">
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
                  <img
                    className="sun-solid"
                    alt="Sun solid"
                    src="sun-solid.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper-3">Dark</div>
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
            <img
              className="icon-calender"
              alt="Icon calender"
              src="icon-calender.png"
            />
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
        <div className="navbar">
          <img className="line-2" alt="Line" src="line-3.svg" />
          <div className="text-wrapper-7">\Kelas</div>
          <div className="text-wrapper-8">\Edit Data</div>
          <div className="text-wrapper-9">\Semester</div>
          <div className="text-wrapper-10">Dashboard</div>
        </div>
        <header className="HEADER">
          <div className="overlap-2">
            <div className="group-wrapper">
              <div className="group-4">
                <div className="group-5">
                  <div className="group-6">
                    <div className="text-wrapper-11">Siswa</div>
                    <div className="text-wrapper-12">Anggi Adinda</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="element-wrapper">
              <img className="element-3" alt="Element" src="3.svg" />
            </div>
            <div className="search">
              <div className="group-7">
                <img className="element-4" alt="Element" src="7.svg" />
                <div className="text-wrapper-13">Pencarian</div>
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
        <div className="group-8">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-14">NIS</div>
              <div className="text-wrapper-15">*</div>
            </div>
          </div>
          <div className="frame-3">
            <input
              type="number"
              value={nis}
              onChange={(e) => setNis(e.target.value)}
            />
          </div>
        </div>
        <div className="group-9">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-14">Nama Lengkap</div>
              <div className="text-wrapper-17">*</div>
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
        <div className="group-10">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-14">Jenis Kelamin</div>
              <div className="text-wrapper-17">*</div>
            </div>
          </div>
          <div className="overlap-3">
            <div className="frame-5">
              <input
                type="text"
                value={jenisKelamin}
                onChange={(e) => setJenisKelamin(e.target.value)}
              />
            </div>
            <img
              className="icon-chevron-down"
              alt="Icon chevron down"
              src="icon-chevron-down.png"
            />
          </div>
        </div>
        <div className="group-11">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-14">Agama</div>
              <div className="text-wrapper-17">*</div>
            </div>
          </div>
          <div className="overlap-3">
            <div className="frame-5">
              <input
                type="text"
                value={agama}
                onChange={(e) => setAgama(e.target.value)}
              />
            </div>
            <img
              className="icon-chevron-down"
              alt="Icon chevron down"
              src="image.png"
            />
          </div>
        </div>
        <div className="group-12">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-14">Nama Orang Tua</div>
              <div className="text-wrapper-17">*</div>
            </div>
          </div>
          <div className="frame-6">
            <input
              type="text"
              value={namaOrtu}
              onChange={(e) => setNamaOrtu(e.target.value)}
            />
          </div>
        </div>
        <div className="group-14">
          <div className="component">
            <div className="frame-7">
              <div className="frame-8">
                <div className="text-wrapper-18">Tanggal Lahir</div>
                <div className="text-wrapper-17">*</div>
              </div>
              <div className="frame-9">
                <input
                  type="text"
                  value={tanggalLahir}
                  onChange={(e) => setTanggalLahir(e.target.value)}
                />
                {/* <Calendar className="vuesax-linear" /> */}
              </div>
            </div>
          </div>
          <div className="group-15">
            <div className="group-16">
              <div className="frame-10">
                <div className="text-wrapper-16"></div>
              </div>
            </div>
            <div className="frame-11">
              <div className="text-wrapper-18">Tempat Lahir</div>
              <div className="text-wrapper-17">*</div>
            </div>
            <div className="frame-12">
                <input
                  type="text"
                  value={tempatLahir}
                  onChange={(e) => setTempatLahir(e.target.value)}
                />
                {/* <Calendar className="vuesax-linear" /> */}
              </div>
          </div>
        </div>
        <div className="TAMBAH-DATA">
          <button className="frame-13" onClick={handleSubmit}>
              <div className="text-wrapper-19">Update</div>
            </button>
        </div>
      </div>
    </div>
  );
};

export default EditSiswa;
