import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EditSiswa.css";

const EditSiswa = () => {
  const { nisSiswa } = useParams();
  const [selectedSiswa, setSelectedSiswa] = useState(null);
  const [nis, setNis] = useState("");
  const [nisn, setNisn] = useState("");
  const [nama, setNama] = useState("");
  const [jenis_kelamin, setJenisKelamin] = useState("");
  const [agama, setAgama] = useState("");
  const [nama_orangtua, setNamaOrtu] = useState("");
  const [tanggal_lahir, setTanggalLahir] = useState("");
  const [tempat_lahir, setTempatLahir] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSiswa = await fetch(
          `https://jojopinjam.iffan.site/api/get-siswa/${nisSiswa}`
        );
        const dataSiswa = await responseSiswa.json();
        // setDataSiswa(dataSiswa);

        if (Array.isArray(dataSiswa)) {
          setSelectedSiswa(dataSiswa);
        } else if (dataSiswa) {
          setSelectedSiswa([dataSiswa]);
        } else {
          console.error("Invalid Data Siswa format:", dataSiswa);
          setSelectedSiswa([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [nisSiswa]);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://jojopinjam.iffan.site/api/update-siswa",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nis,
            nama,
            jenis_kelamin,
            agama,
            nama_orangtua,
            tanggal_lahir,
            tempat_lahir,
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("API response:", result);

        // Add any additional logic based on the API response
      } else {
        console.error("Failed to update data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
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
              className="custom-input"
              value={nis}
              onChange={(e) => setNis(e.target.value)}
            />
          </div>
        </div>
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
              className="custom-input"
              value={nisn}
              onChange={(e) => setNisn(e.target.value)}
            />
          </div>
        </div>
        <div className="group-9">
          <div className="frame-wrapper">
            <div className="frame-4">
              <div className="text-wrapper-14">Nama Lengkap</div>
              <div className="text-wrapper-15">*</div>
            </div>
          </div>
          <div className="frame-5">
            <input
              type="text"
              className="custom-input"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
        </div>
        <div className="group-10">
          <div className="frame-wrapper">
            <div className="frame-6">
              <div className="text-wrapper-14">Jenis Kelamin</div>
              <div className="text-wrapper-15">*</div>
            </div>
          </div>
          <div className="frame-7">
            <select
              className="custom-input"
              value={jenis_kelamin}
              onChange={(e) => setJenisKelamin(e.target.value)}
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="Pria">Pria</option>
              <option value="Wanita">Wanita</option>
            </select>
          </div>
        </div>
        <div className="group-11">
          <div className="frame-wrapper">
            <div className="frame-8">
              <div className="text-wrapper-14">Agama</div>
              <div className="text-wrapper-17">*</div>
            </div>
          </div>
          <div className="frame-9">
            <select
              type="text"
              className="custom-input"
              value={agama}
              onChange={(e) => setAgama(e.target.value)}
            >
              <option value="">Pilih Agama</option>
              <option value="Islam">Islam</option>
              <option value="Kristen Protestan">Kristen Protestan</option>
              <option value="Katolik">Katolik</option>
              <option value="Hindu">Hindu</option>
              <option value="Buddha">Buddha</option>
              <option value="Konghucu">Konghucu</option>
            </select>
          </div>
        </div>
        <div className="group-12">
          <div className="frame-wrapper">
            <div className="frame-10">
              <div className="text-wrapper-14">Nama Orang Tua</div>
              <div className="text-wrapper-17">*</div>
            </div>
          </div>
          <div className="frame-11">
            <input
              type="text"
              className="custom-input"
              value={nama_orangtua}
              onChange={(e) => setNamaOrtu(e.target.value)}
            />
          </div>
        </div>
        <div className="group-14">
          <div className="frame-wrapper">
            <div className="frame-12">
              <div className="text-wrapper-14">Tanggal Lahir</div>
              <div className="text-wrapper-17">*</div>
            </div>
          </div>
          <div className="frame-13">
            <input
              type="date"
              className="custom-input"
              value={tanggal_lahir}
              onChange={(e) => setTanggalLahir(e.target.value)}
            />
          </div>
        </div>
        <div className="group-15">
          <div className="frame-wrapper">
            <div className="frame-14">
              <div className="text-wrapper-14">Tempat Lahir</div>
              <div className="text-wrapper-17">*</div>
            </div>
          </div>
          <div className="frame-15">
            <input
              type="text"
              className="custom-input"
              value={tempat_lahir}
              onChange={(e) => setTempatLahir(e.target.value)}
            />
            {/* <Calendar className="vuesax-linear" /> */}
          </div>
        </div>

        <div className="EDIT-SISWA">
          <button className="TAMBAH-DATA" onClick={handleSubmit}>
            <div className="text-wrapper-19">Update</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditSiswa;
