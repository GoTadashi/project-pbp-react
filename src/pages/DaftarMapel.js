import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DaftarMapel.css";

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
          <p className="text-wrapper">Copyright © SMP Kristen Getasan 2023</p>
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
        <div className="text-wrapper-6">*Urutan Siswa Sesuai NIS</div>
        {/* <div className="PEMBERITAHUAN">
          <img className="element-2" alt="Element" src="53.svg" />
          <div className="frame">
            <div className="group">
              <div className="ellipse-2" />
              <div className="ellipse-3" />
              <div className="ellipse-4" />
            </div>
          </div>
          <div className="PIKET">
            <img className="element-3" alt="Element" src="4.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-7">Jadwal Piket Harian</div>
            </div>
          </div>
          <div className="WALI-MURID">
            <img className="element-3" alt="Element" src="image.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-7">Pertemuan Wali Murid</div>
            </div>
          </div>
          <div className="KLS">
            <img className="element-3" alt="Element" src="4-2.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-7">Matematika Kelas 9</div>
            </div>
          </div>
          <div className="KLS-2">
            <img className="element-3" alt="Element" src="4-3.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-7">Matematika Kelas 8</div>
            </div>
          </div>
          <div className="KLS-3">
            <img className="element-3" alt="Element" src="4-4.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-7">Matematika Kelas 7</div>
            </div>
          </div>
          <div className="text-wrapper-8">Pemberitahuan</div>
        </div> */}
        <div className="SORTING-DATA">
          <img className="icon-sort" alt="Icon sort" src="icon-sort.png" />
          <div className="text-wrapper-9">Sortir Data</div>
        </div>
        {/* <div className="overlap">
          <div className="text-wrapper-10">\Daftar Mata Pelajaran</div>
          <div className="text-wrapper-11">Dashboard</div>
        </div> */}
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
            <img
              className="SMP-KRISTEN"
              alt="Smp KRISTEN"
              src="SMP-KRISTEN-2.png"
            />
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
