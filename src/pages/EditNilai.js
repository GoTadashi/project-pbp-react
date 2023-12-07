import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "./EditNilai.css";
import mainLogo from "../img/logo.png";

export const EditNilai = () => {
  const { nisSiswa, id_detail } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [dataSiswa, setDataSiswa] = useState([]);
  const [dataMapel, setDataMapel] = useState([]);
  const [dataNilai, setDataNilai] = useState("");
  const [dataPredikat, setDataPredikat] = useState("");
  const [dataDeskripsi, setDataDeskripsi] = useState("");
  const [selectedSiswa, setSelectedSiswa] = useState(nisSiswa);
  const [selectedMapel, setSelectedMapel] = useState("");
  const [selectedIdRaport, setSelectedIdRaport] = useState("");
  const [raportData, setRaportData] = useState([]);

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

        if (dataSiswa.length > 0) {
          const studentId = dataSiswa[0].id;
          const responseRaport = await fetch(
            `https://jojopinjam.iffan.site/api/get-raport-main/${studentId}`
          );
          const raportData = await responseRaport.json();

          console.log("Raport data:", raportData);

          if (raportData.length > 0) {
            const firstRaportId = raportData[0].id_raport;
            setSelectedIdRaport(firstRaportId);
          } else {
            console.error("No raport data available for the selected student.");
          }
        } else {
          console.error("No data available for the selected student.");
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
    const fetchRaportData = async () => {
      try {
        console.log("Fetching raport data...");
        const response = await fetch(
          `https://jojopinjam.iffan.site/api/get-raport-main/${nisSiswa}`
        );
        const raportData = await response.json();

        console.log("Raport data:", raportData);
        setRaportData(raportData);

        if (Array.isArray(raportData) && raportData.length > 0) {
          setSelectedIdRaport(raportData.map((raport) => raport.id_raport));
        } else {
          console.error("No raport data found for the selected student.");
          setSelectedIdRaport([]);
        }
      } catch (error) {
        console.error("Error fetching raport data:", error);
      }
    };

    if (nisSiswa) {
      fetchRaportData();
    }
  }, [nisSiswa]);

  const updateNilai = async () => {
    if (!selectedMapel || !selectedIdRaport || !dataNilai) {
      console.error("Please fill in all the required fields.");
      return {
        success: false,
        message: "Please fill in all the required fields.",
      };
    }

    const nilai = parseInt(dataNilai);
    let dataPredikat = "";
    let dataDeskripsi = "";

    if (nilai > 90 && nilai <= 100) {
      dataPredikat = "A";
      dataDeskripsi = "Sangat Baik";
    } else if (nilai > 80) {
      dataPredikat = "B";
      dataDeskripsi = "Baik";
    } else if (nilai > 70) {
      dataPredikat = "C";
      dataDeskripsi = "Cukup";
    } else if (nilai > 60) {
      dataPredikat = "D";
      dataDeskripsi = "Kurang";
    } else {
      dataPredikat = "E";
      dataDeskripsi = "Sangat Kurang";
    }

    const updatedNilai = {
      id_matapelajaran: selectedMapel,
      id_raport: parseInt(selectedIdRaport),
      nilai: nilai,
      predikat: dataPredikat,
      deskripsi: dataDeskripsi,
    };

    try {
      const response = await fetch(
        `https://jojopinjam.iffan.site/api/update-detail/${id_detail}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedNilai),
        }
      );

      const data = await response.json();

      console.log("Nilai updated successfully:", data);

      return { success: true, message: "Data berhasil diupdate!" };
    } catch (error) {
      console.error("Error updating nilai:", error);

      return { success: false, message: "Terjadi kesalahan. Mohon coba lagi." };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateNilai();
      console.log(
        "Submitted:",
        selectedMapel,
        selectedIdRaport,
        parseInt(dataNilai),
        dataPredikat,
        dataDeskripsi
      );

      if (response.success) {
        alert("Data berhasil diupdate!");
      } else {
        alert(
          "Data tidak berhasil diupdate. Mohon coba lagi. " + response.message
        );
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Terjadi kesalahan. Mohon coba lagi.");
    }
  };

  const handleReset = () => {
    // Implement the reset logic if needed
  };

  return (
    <div className="EDIT-NILAI">
      <div className="div">
        <div className="MENU">
          <div className="PROFILE">
            <Link to="/" className="list-menu nav-link text-white fs-5">
              <i class="bi bi-sliders2"></i>
              <span className="side-text ms-2">Peraturan</span>
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
            <Link
              to="/DaftarMapel"
              className="list-menu nav-link text-white fs-5"
            >
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
          <p className="p">Copyright © SD Kristen Terang Bangsa 2023</p>
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
                <i class="bi bi-search"></i>
                <div className="text-wrapper-10">Pencarian</div>
              </div>
            </div>
            <div className="SMP-KRISTEN-GETASAN">
              SD Kristen Terang Bangsa
              <br />
              E-Rapor
            </div>
            {/* <img className="ellipse-4" alt="Ellipse" src="ellipse-1192.svg" /> */}
            <img className="img-logo" src={mainLogo} alt="logo-sd" />
          </div>
        </header>
        <div className="kembali">
          <i class="bi bi-arrow-left fs-6 text-white"></i>
          <div className="text-wrapper-11">Kembali</div>
        </div>
        <div className="text-wrapper-12">Edit Nilai</div>
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
          <div className="frame-2">
            <div className="text-wrapper-13">Mata Pelajaran</div>
          </div>
          <div className="frame-2">
            <select
              className="dropdown"
              onChange={(e) => setSelectedMapel(e.target.value)}
            >
              {dataMapel.map((item) => (
                <option
                  key={item.id_matapelajaran}
                  value={item.id_matapelajaran}
                >
                  {item.nama_matapelajaran}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="group-10">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-13">Nilai</div>
            </div>
          </div>
          <div className="frame-2">
            <input
              type="number"
              className="dropdown"
              onChange={(e) => setDataNilai(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="group-11">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-13">Id Raport</div>
            </div>
          </div>
          <div className="frame-2">
            <select
              className="dropdown"
              value={selectedIdRaport} // Mengatur nilai yang dipilih dalam dropdown
              onChange={(e) => setSelectedIdRaport(e.target.value)}
              disabled
            >
              {raportData.map((item) => (
                <option key={item.id_raport} value={item.id_raport}>
                  {item.id_raport}
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

export default EditNilai;
