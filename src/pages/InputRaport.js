import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./InputRaport.css";

const InputRaport = () => {
  const { nisSiswa } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [dataSiswa, setDataSiswa] = useState([]);
  const [dataMapel, setDataMapel] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState(1);
  const kelasOptions = ["1", "2", "3", "4", "5", "6"];
  const [selectedKelas, setSelectedKelas] = useState("1");
  const [selectedSiswa, setSelectedSiswa] = useState("");
  const [dataGuru, setDataGuru] = useState([]);
  const [selectedGuru, setSelectedGuru] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSiswa = await fetch(
          `https://jojopinjam.iffan.site/api/get-siswa/${nisSiswa}`
        );
        const dataSiswa = await responseSiswa.json();

        if (Array.isArray(dataSiswa)) {
          setDataSiswa(dataSiswa);
        } else if (dataSiswa) {
          setDataSiswa([dataSiswa]);
        } else {
          console.error("Invalid Data Siswa format:", dataSiswa);
          setDataSiswa([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [nisSiswa]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jojopinjam.iffan.site/api/get-matapelajaran"
        );
        const dataMapel = await response.json();
        setDataMapel(dataMapel);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchGuruData = async () => {
      try {
        const responseGuru = await fetch(
          "https://jojopinjam.iffan.site/api/get-guru"
        );
        const dataGuru = await responseGuru.json();
        setDataGuru(dataGuru);
      } catch (error) {
        console.error("Error fetching guru data:", error);
      }
    };

    fetchGuruData();
  }, []);

  const addRaport = () => {
    const newRaport = {
      semester: selectedSemester,
      kelas: selectedKelas,
      nis: selectedSiswa,
      id_guru: selectedGuru,
    };

    fetch("https://jojopinjam.iffan.site/api/add-raport", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRaport),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error adding raport:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();



    addRaport();

    console.log(
      "Submitted:",
      selectedSemester,
      selectedKelas,
      selectedSiswa,
      selectedGuru
    );
  };

  const handleReset = () => {
    setSelectedSemester("");
    setSelectedKelas("");
    setSelectedSiswa("");
    setSelectedGuru("");
  };

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
          <p className="p">Copyright © SMP Kristen Getasan 2023</p>
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
        <div className="group-8">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-13">Nama Siswa</div>
            </div>
          </div>
          <div className="frame-2">
            <select
              className="dropdown"
              onChange={(e) => setSelectedSiswa(e.target.value)}
            >
              {dataSiswa.map((item, index) => (
                <option key={index} value={item.nis}>
                  {item.nama}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="group-9">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-13">Nama Guru</div>
              <div className="text-wrapper-13">Tanggal Raport</div>
            </div>
          </div>
          <div className="frame-2">
            <select
              className="dropdown"
              onChange={(e) => setSelectedGuru(e.target.value)}
            >
              {dataGuru.map((guru) => (
                <option key={guru.id_guru} value={guru.id_guru}>
                  {guru.nama}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="group-10">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-13">Semester</div>
            </div>
          </div>
          <div className="frame-2">
            <select
              className="dropdown"
              onChange={(e) => setSelectedSemester(e.target.value)}
              value={selectedSemester}
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        <div className="group-11">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-13">Kelas</div>
            </div>
          </div>
          <div className="frame-2">
            <select
              className="dropdown"
              onChange={(e) => setSelectedKelas(e.target.value)}
              value={selectedKelas}
            >
              {kelasOptions.map((kelas) => (
                <option key={kelas} value={kelas}>
                  {`Kelas ${kelas}`}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="group-12">
          <div className="frame-7" onClick={handleSubmit}>
            <div className="text-wrapper-15">Simpan</div>
          </div>
          <div className="frame-8" onClick={handleReset}>
            <div className="text-wrapper-15">Reset</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputRaport;
