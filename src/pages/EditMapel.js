import React, { useState, useEffect } from "react";
import "./EditMapel.css";
import { Link } from "react-router-dom";
import mainLogo from "../img/logo.png";

export const EditMapel = () => {
  // const [searchQuery, setSearchQuery] = useState("");
  const [kodeMatapelajaran, setKodeMatapelajaran] = useState("");
  const [namaMatapelajaran, setNamaMatapelajaran] = useState("");
  const [guruPengampu, setGuruPengampu] = useState("");
  const [dataSiswa, setDataSiswa] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      const responseSearch = await fetch(
        "https://jojopinjam.iffan.site/api/cari-siswa",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cari: searchQuery }),
        }
      );
      const searchData = await responseSearch.json();
      setDataSiswa(searchData);
    } catch (error) {
      console.error("Error searching data:", error);
    }
  };

  const fetchData = async () => {
    try {
      // Assuming the ID of the matapelajaran is obtained from the route or some other source
      const idMatapelajaran = 1; // Change this value based on your requirements

      const response = await fetch(
        fetch("https://jojopinjam.iffan.site/api/get-matapelajaran")
      );

      const responseData = await response.json();

      // Assuming the API response has properties 'nama_matapelajaran' and 'id_guru'
      setNamaMatapelajaran(responseData.matapelajaran[0].nama_matapelajaran);
      setGuruPengampu(responseData.matapelajaran[0].id_guru);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!kodeMatapelajaran || !namaMatapelajaran || !guruPengampu) {
      alert("Harap isi semua kolom form.");
    } else {
      alert("Mata pelajaran berhasil diupdate.");
    }

    console.log(
      "Submitted:",
      kodeMatapelajaran,
      namaMatapelajaran,
      guruPengampu
    );

    try {
      const response = await fetch(
        "https://jojopinjam.iffan.site/api/update-matapelajaran",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_matapelajaran: kodeMatapelajaran, // Change this value based on your requirements
            nama_matapelajaran: namaMatapelajaran,
            id_guru: guruPengampu,
          }),
        }
      );

      const responseData = await response.json();
      console.log(responseData); // Logging the response data from the API

      // Assuming there is some feedback or redirection logic based on the API response
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleReset = () => {
    // Add your logic for resetting the form here
    setKodeMatapelajaran("");
    setNamaMatapelajaran("");
    setGuruPengampu("");
  };

  return (
    <div className="EDIT-MAPEL">
      <div className="div">
        <div className="MENU">
          <div className="PROFILE">
            <Link
              to="/LihatRaport"
              className="list-menu nav-link text-white fs-5"
            >
              <i class="bi bi-file-earmark-plus"></i>
              <span className="side-text ms-2">Input Raport Siswa</span>
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
            <Link
              to="/DataSiswa"
              className="list-menu nav-link text-white fs-5"
            >
              <i className="bi bi-person-vcard"></i>
              <span className="side-text ms-2">Siswa</span>
            </Link>
          </div>
          <div className="CHAT">
            <Link
              to="/LihatGuru"
              className="list-menu nav-link text-white fs-5"
            >
              <i class="bi bi-person-video3"></i>
              <span className="side-text ms-2">Guru</span>
            </Link>
          </div>
          <div className="CHAT-2">
            <Link to="/" className="list-menu nav-link text-white fs-5">
              <i className="bi bi-card-checklist"></i>
              <span className="side-text ms-2">Mata Pelajaran</span>
            </Link>
          </div>
          <div className="CHAT-3">
            <Link
              to="/DaftarMapel"
              className="list-menu nav-link text-white fs-5"
            >
              <i class="bi bi-book-fill"></i>
              <span className="side-text ms-2">Raport Siswa</span>
            </Link>
          </div>
          <div className="DASHBOARD">
            <Link
              to="/DashboardGuru"
              className="list-menu nav-link text-white fs-5"
            >
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
                <button className="button-search" onClick={handleSearch}>
                  <div className="text-wrapper-23">Search</div>
                </button>
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
          <Link to="/DaftarMapel">
            <div className="text-wrapper-11">Kembali</div>
          </Link>
        </div>
        <div className="text-wrapper-12">Edit Mata Pelajaran</div>
        <form onSubmit={handleSubmit}>
          <div className="group-8">
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-13">Kode Mata Pelajaran</div>
              </div>
            </div>
            <div className="frame-3">
              <input
                type="number"
                className="custom-input"
                value={kodeMatapelajaran}
                onChange={(e) => setKodeMatapelajaran(e.target.value)}
              />
            </div>
          </div>

          <div className="group-9">
            <div className="frame-wrapper">
              <div className="frame-4">
                <div className="text-wrapper-13">Mata Pelajaran</div>
              </div>
            </div>
            <div className="frame-5">
              <input
                type="text"
                className="custom-input"
                value={namaMatapelajaran}
                onChange={(e) => setNamaMatapelajaran(e.target.value)}
              />
            </div>
          </div>

          <div className="group-10">
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-13">Guru Pengampu</div>
              </div>
            </div>
            <div className="frame-6">
              <input
                type="number"
                className="custom-input"
                value={guruPengampu}
                onChange={(e) => setGuruPengampu(e.target.value)}
              />
            </div>
          </div>

          <div className="group-11">
            <button className="frame-7" onClick={handleSubmit}>
              <div className="text-wrapper-15">Update</div>
            </button>
            <button className="frame-8" onClick={handleReset}>
              <div className="text-wrapper-15">Reset</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMapel;
