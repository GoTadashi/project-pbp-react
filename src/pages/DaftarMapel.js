import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DaftarMapel.css";
import mainLogo from "../img/logo.png";

export const DaftarMapel = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jojopinjam.iffan.site/api/get-matapelajaran"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleTambahData = () => {
    // Add your logic for handling the click event here
    console.log("Button clicked!");
  };

  const handleEdit = (index) => {
    // Handle the edit action
    console.log("Edit clicked for index:", index);
  };

  const handleDelete = (index) => {
    // Handle the delete action
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="DAFTAR-MAPEL">
      <div className="div">
        <footer className="FOOTER">
          <p className="text-wrapper">Copyright © SD Kristen Terang Bangsa</p>
        </footer>
        <div className="PAGES">
          <div className="element">
            <div className="overlap-group">
              <div className="ellipse" />
              <div className="text-wrapper-3">1</div>
            </div>
          </div>
          <div className="text-wrapper-4">2</div>
          <div className="text-wrapper-5">3</div>
        </div>
        <div className="MENU">
          <div className="PROFILE">
            <Link to="/" className="list-menu nav-link text-white fs-5">
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
            <Link to="/" className="list-menu nav-link text-white fs-5">
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
            <Link to="/DaftarMapel" className="list-menu nav-link text-white fs-5">
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
        <header className="HEADER">
          <div className="overlap-2">
            <div className="group-3">
              <div className="group-4">
                <div className="group-5">
                  <div className="group-6">
                    <div className="text-wrapper-15">Guru Matematika</div>
                    <div className="text-wrapper-16">Eni Susilowati</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="search">
              <div className="group-7">
                <input
                  className="custom-input"
                  type="text"
                  placeholder="Cari Mata Pelajaran"
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
        <div className="DATA-KELAS-wrapper">
          <button className="TAMBAH-DATA" onClick={handleTambahData}>
            <div className="text-wrapper-23">Tambah Data</div>
          </button>

          <div className="DATA-KELAS">
            {data.length === 0 ? (
              <p>Loading...</p>
            ) : (
              <table border={1}>
                <thead className="stable-table">
                  <tr>
                    <th>Kode Mata Pelajaran</th>
                    <th>Mata Pelajaran</th>
                    <th>Guru Pengajar</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id_matapelajaran}</td>
                      <td>{item.nama_matapelajaran}</td>
                      <td>{item.id_guru}</td>
                      <td>
                        <img
                          className="EDIT"
                          alt="Edit"
                          src="/src/img/edit.png"
                          onClick={() => handleEdit(index)}
                        />
                        <img
                          className="DELETE"
                          alt="Delete"
                          src="DELETE.png"
                          onClick={() => handleDelete(index)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaftarMapel;
