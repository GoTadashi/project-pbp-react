import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "./EditNilai.css";
import mainLogo from "../img/logo.png";

export const EditNilai = () => {
  const { id_detail } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [dataSiswa, setDataSiswa] = useState([]);
  const [dataMapel, setDataMapel] = useState([]);
  const [dataNilai, setDataNilai] = useState("");
  const [dataPredikat, setDataPredikat] = useState("");
  const [dataDeskripsi, setDataDeskripsi] = useState("");
  const [selectedSiswa, setSelectedSiswa] = useState("");
  const [selectedMapel, setSelectedMapel] = useState("");
  const [selectedIdRaport, setSelectedIdRaport] = useState("");
  const [raportData, setRaportData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const responseSiswa = await fetch(
  //         `https://jojopinjam.iffan.site/api/get-siswa/${nisSiswa}`
  //       );
  //       const dataSiswa = await responseSiswa.json();

  //       if (Array.isArray(dataSiswa)) {
  //         setDataSiswa(dataSiswa);
  //       } else if (dataSiswa) {
  //         setDataSiswa([dataSiswa]);
  //       } else {
  //         console.error("Invalid Data Siswa format:", dataSiswa);
  //         setDataSiswa([]);
  //       }

  //       if (dataSiswa.length > 0) {
  //         const studentId = dataSiswa[0].id;
  //         const responseRaport = await fetch(
  //           `https://jojopinjam.iffan.site/api/get-raport-main/${studentId}`
  //         );
  //         const raportData = await responseRaport.json();

  //         console.log("Raport data:", raportData);

  //         if (raportData.length > 0) {
  //           const firstRaportId = raportData[0].id_raport;
  //           setSelectedIdRaport(firstRaportId);
  //         } else {
  //           console.error("No raport data available for the selected student.");
  //         }
  //       } else {
  //         console.error("No data available for the selected student.");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [nisSiswa]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://jojopinjam.iffan.site/api/get-matapelajaran"
  //       );
  //       const dataMapel = await response.json();
  //       setDataMapel(dataMapel);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchRaportData = async () => {
      try {
        if (id_detail) {
          console.log("Fetching raport data...");
          const response = await fetch(
            `https://jojopinjam.iffan.site/api/get-raportDetail/${id_detail}`
          );
          const raportData = await response.json();

          console.log("Raport data:", raportData);
          setRaportData(raportData);
          console.log("Isi raportData:", raportData);

          if (Array.isArray(raportData) && raportData.length > 0) {
            setSelectedIdRaport(raportData[0].id_raport);
            setSelectedMapel(raportData[0].id_matapelajaran);
          } else {
            console.error("No raport data found !");
            setSelectedIdRaport([]);
          }
        }
      } catch (error) {
        console.error("Error fetching raport data:", error);
      }
    };

    fetchRaportData();
  }, [id_detail]);

  const updateNilai = async () => {
    try {
      if (!selectedMapel || !selectedIdRaport || !dataNilai) {
        console.error("Please fill in all the required fields.");
        return {
          success: false,
          message: "Please fill in all the required fields.",
        };
      } else console.log("Required fields filled.");
  
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
  
      console.log("Debug - dataPredikat:", dataPredikat);
      console.log("Debug - dataDeskripsi:", dataDeskripsi);
  
      const updatedNilai = {
        id_detail: `${id_detail}`,
        id_matapelajaran: selectedMapel,
        id_raport: parseInt(selectedIdRaport),
        nilai: nilai,
        predikat: dataPredikat,
        deskripsi: dataDeskripsi,
      };
  
      const response = await fetch(
        `https://jojopinjam.iffan.site/api/update-detail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedNilai),
        }
      );
  
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(
          `HTTP error! Status: ${response.status}, Message: ${errorResponse.message}`
        );
      }
  
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
      console.log("Submitted Data:", {
        id_detail,
        selectedMapel,
        selectedIdRaport,
        nilai: parseInt(dataNilai),
        dataPredikat,
        dataDeskripsi,
      });
  
      if (response.success) {
        alert("Data berhasil diupdate!");
      } else {
        alert("Data tidak berhasil diupdate. Mohon coba lagi. " + response.message);
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
            <Link to="/LihatRaport" className="list-menu nav-link text-white fs-5">
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
          <p className="p">Copyright © SD Kristen Terang Bangsa 2023</p>
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
              value={selectedSiswa} // Menyediakan nilai terpilih (default) dari state
              disabled
            >
              {raportData.map((item) => (
                <option key={item.id_siswa} value={item.id_siswa}>
                  {item.nama_siswa}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="group-9">
          <div className="frame-21">
            <div className="text-wrapper-13">Mata Pelajaran</div>
          </div>
          <div className="frame-2">
            <select
              className="dropdown"
              value={selectedMapel} // Menyediakan nilai terpilih (default) dari state
              onChange={(e) => setSelectedMapel(e.target.value)}
              disabled
            >
              {raportData.map((item) => (
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
              value={selectedIdRaport} // Menyediakan nilai terpilih (default) dari state
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
