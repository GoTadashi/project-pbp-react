import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import mainLogo from "../img/logo.png";
import "./LihatGuru.css";

const LihatGuru = () => {
  const history = useHistory();
  const [dataRaport, setDataRaport] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dataSiswa, setDataSiswa] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSiswa = await fetch(
          "https://jojopinjam.iffan.site/api/get-guru"
        );
        const dataSiswa = await responseSiswa.json();
        setDataSiswa(dataSiswa);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const calculateTotalPages = () => {
    return Math.ceil(dataSiswa.length / itemsPerPage);
  };

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

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

  const handleUbahData = (id_guru) => {
    history.push(`/EditGuru/${id_guru}`);
  };

  const totalPages = Math.ceil(dataSiswa.length / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataSiswa.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="GURU">
      <div className="div">
        <footer className="FOOTER">
          <p className="p">Copyright © SD Kristen Terang Bangsa</p>
          <div className="text-wrapper-2">SCH</div>
        </footer>
        <div className="TABLE">
          <div className="overlap">
            <div className="DATA-KELAS">
              <table>
                <thead className="stable-table">
                  <tr>
                    <th>No</th>
                    <th>NIP</th>
                    <th>Nama</th>
                    <th>Walikelas</th>
                    <th>Tempat Lahir</th>
                    <th>Tanggal Lahir</th>
                    <th>Jenis Kelamin</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item, index) => (
                    <tr key={index}>
                      <td className="center-item">{item.id_guru}</td>
                      <td>{item.nip}</td>
                      <td>{item.nama}</td>
                      <td>{item.walikelas}</td>
                      <td>{item.tempat_lahir}</td>
                      <td>{item.tanggal_lahir}</td>
                      <td>{item.jenis_kelamin}</td>
                      <td className="action-button">
                        <button
                          className="TAMBAH-DATA"
                          onClick={() => handleUbahData(item.id_guru)}
                        >
                          <div className="text-wrapper-23">Edit Guru</div>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {dataRaport.map((item, index) => (
          <div key={index} className="navbar">
            <div className="text-wrapper-10">\{item.kelas}</div>
            <div className="text-wrapper-11">\Semester {item.semester}</div>
            <div className="text-wrapper-12">\Input Rapor</div>
            <div className="text-wrapper-13">Dashboard</div>
          </div>
        ))}
        <div className="MENU">
          <div className="PROFILE">
            <Link to="/" className="list-menu nav-link text-white fs-5">
              <i class="bi bi-sliders2"></i>
              <span className="side-text ms-2">Peraturan</span>
            </Link>
          </div>
          <div className="PROFILE-2">
            <Link to="/" className="list-menu nav-link text-white fs-5">
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
        <div className="PAGES">
          <div className="div-wrapper">
            <div className="overlap-group">
              {pageNumbers.map((number) => (
                <div
                  key={number}
                  className={`ellipse ${currentPage === number ? "active" : ""
                    }`}
                  onClick={() => paginate(number)}
                >
                  <div className="text-wrapper-3">{number}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <header className="HEADER">
          <div className="overlap-2">
            <div className="group-4">
              <div className="group-5">
                <div className="group-6">
                  <div className="group-7">
                    <div className="text-wrapper-17">Guru Matematika</div>
                    <div className="text-wrapper-18">Eni Susilowati</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="element-wrapper">
              <img className="element-4" alt="Element" src="3.svg" />
            </div>
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
      </div>
    </div>
  );
};

export default LihatGuru;
