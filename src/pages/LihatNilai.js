import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import mainLogo from "../img/logo.png";
import "./LihatNilai.css";

const LihatNilai = () => {
  const history = useHistory();
  const [dataRaport, setDataRaport] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dataSiswa, setDataSiswa] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data of students who have raport
        const responseRaport = await fetch(
          "https://jojopinjam.iffan.site/api/get-raport-main"
        );
        const dataRaport = await responseRaport.json();
        setDataRaport(dataRaport);

        // Fetch all student data
        const responseSiswa = await fetch(
          "https://jojopinjam.iffan.site/api/get-siswa"
        );
        const dataSiswa = await responseSiswa.json();

        // Filter students who have raport
        const studentsWithRaport = dataSiswa.filter((siswa) =>
          dataRaport.some((raport) => raport.id_siswa === siswa.nis)
        );

        setDataSiswa(studentsWithRaport);
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

  const handleLihatNilai = (nis) => {
    history.push(`/SiswaLihatNilai/${nis}`);
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
    <div className="LIHAT-RAPORT">
      <div className="div">
        <footer className="FOOTER">
          <p className="p">Copyright © SD Kristen Terang Bangsa</p>
        </footer>

        <div className="TABLE">
          <div className="overlap">
            <div className="DATA-KELAS">
              <table>
                <thead className="stable-table">
                  <tr>
                    <th>NIS</th>
                    <th>Nama</th>
                    <th>Tempat Lahir</th>
                    <th>Tanggal Lahir</th>
                    <th>Jenis Kelamin</th>
                    <th>Agama</th>
                    <th>Nama Orang Tua</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item, index) => (
                    <tr key={index}>
                      <td className="center-item">{item.nis}</td>
                      <td>{item.nama}</td>
                      <td>{item.tempat_lahir}</td>
                      <td>{item.tanggal_lahir}</td>
                      <td>{item.jenis_kelamin}</td>
                      <td>{item.agama}</td>
                      <td>{item.nama_orangtua}</td>
                      <td className="action-button">
                        <button
                          className="EDIT-RAPORT"
                          onClick={() => handleLihatNilai(item.nis)}
                        >
                          <div className="text-wrapper-23">Lihat Nilai</div>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="MENU">
          <div className="PROFILE">
            <Link
              to="/lihatnilai"
              className="list-menu nav-link text-white fs-5"
            >
              <i class="bi bi-file-earmark-plus"></i>
              <span className="side-text ms-2">Lihat Nilai</span>
            </Link>
          </div>
          <div className="PROFILE-2">
            <Link
              to="/LoginAdmin"
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
            <Link
              to="/DaftarMapel"
              className="list-menu nav-link text-white fs-5"
            >
              <i className="bi bi-card-checklist"></i>
              <span className="side-text ms-2">Mata Pelajaran</span>
            </Link>
          </div>
          <div className="CHAT-3">
            <Link
              to="/RaportSiswa"
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
        <div className="PAGES">
          <div className="div-wrapper">
            <div className="overlap-group">
              {pageNumbers.map((number) => (
                <div
                  key={number}
                  className={`ellipse ${
                    currentPage === number ? "active" : ""
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
                  <div className="group-7"></div>
                </div>
              </div>
            </div>
            <div className="element-wrapper">
              {/* <img className="element-4" alt="Element" src="3.svg" /> */}
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

export default LihatNilai;
