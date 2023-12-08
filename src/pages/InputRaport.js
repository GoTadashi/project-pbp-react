import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./InputRaport.css";
import mainLogo from "../img/logo.png";

const InputRaport = () => {
  const { nisSiswa } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [dataSiswa, setDataSiswa] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState(1);
  const kelasOptions = ["1", "2", "3", "4", "5", "6"];
  const [selectedKelas, setSelectedKelas] = useState("1");
  const [selectedSiswa, setSelectedSiswa] = useState(nisSiswa);
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
      id_siswa: selectedSiswa,
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
        window.alert("Rapoort Berhasil Dibuat");
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
          <p className="p">Copyright © SD Kristen Terang Bangsa</p>
        </footer>
        <header className="HEADER">
          <div className="overlap-2">
            <div className="group-wrapper">
              <div className="group-4">
                <div className="group-5">
                  <div className="group-6">
                    {/* <div className="text-wrapper-8">Siswa</div>
                    <div className="text-wrapper-9">Anggi Adinda</div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="element-wrapper">
              <img className="element-4" alt="Element" src="3.svg" />
            </div> */}
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
          <i class="bi bi-arrow-left fs-5 text-white"></i>
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
