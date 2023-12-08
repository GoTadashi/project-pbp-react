import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory, Link } from "react-router-dom";
import "./SiswaLihatNilai.css";
import mainLogo from "../img/logo.png";

const SiswaLihatNilai = () => {
  const history = useHistory();
  const { nisSiswa } = useParams();
  const [raportMain, setRaportMain] = useState([]);
  const [selectedRaportMain, setSelectedRaportMain] = useState("");
  const [raportData, setRaportData] = useState([]);
  const [mataPelajaran, setMataPelajaran] = useState([]);
  const [raportDetails, setRaportDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    // Fetch data raport-main
    fetch(`https://jojopinjam.iffan.site/api/get-raport-main/${nisSiswa}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Raport Main Data:", data);
        setRaportMain(data);
      })
      .catch((error) => console.error("Error fetching raport-main:", error));
  }, [nisSiswa]);

  useEffect(() => {
    // Fetch data matapelajaran
    fetch("https://jojopinjam.iffan.site/api/get-matapelajaran")
      .then((response) => response.json())
      .then((data) => {
        console.log("Mata Pelajaran Data:", data);
        setMataPelajaran(data);
      })
      .catch((error) => console.error("Error fetching matapelajaran:", error));
  }, []);

  useEffect(() => {
    // Fetch data raport based on selectedRaportMain
    if (selectedRaportMain) {
      const [kelas, semester] = selectedRaportMain.split("-");
      fetch(
        `https://jojopinjam.iffan.site/api/get-raport/${nisSiswa}/${kelas}-${semester}`
      )
        .then((response) => response.json())
        .then((data) => setRaportData(data))
        .catch((error) => console.error("Error fetching raport data:", error));
    }
  }, [nisSiswa, selectedRaportMain]);

  const handleEditNilai = (idDetail) => {
    // (item)
    history.push(`/EditNilai/${idDetail}`); // /${item.id_detail}
  };

  const calculateTotalPages = () => {
    return Math.ceil(raportData.length / itemsPerPage);
  };

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const totalPages = Math.ceil(raportData.length / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = raportData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="LIHAT-NILAI">
      <div className="div">
        <div className="MENU-SIDEBAR">
          <div className="PROFILE">
            <Link to="/LihatNilai" className="list-menu nav-link text-white fs-5">
              <i class="bi bi-file-earmark-plus"></i>
              <span className="side-text ms-2">Lihat Nilai</span>
            </Link>
          </div>
          <div className="PROFILE-2">
            <Link to="/LoginAdmin" className="list-menu nav-link text-white fs-5">
              <i className="bi bi-box-arrow-right"></i>
              <span className="side-text ms-2">Log Out</span>
            </Link>
          </div>
          <div className="NILAI-wrapper">
            <div className="NILAI">
              <Link to="/DataSiswa" className="list-menu nav-link text-white fs-5">
                <i className="bi bi-person-vcard"></i>
                <span className="side-text ms-2">Siswa</span>
              </Link>
            </div>
          </div>
          <div className="CHAT">
            <Link to="/LihatGuru" className="list-menu nav-link text-white fs-5">
              <i class="bi bi-person-video3"></i>
              <span className="side-text ms-2">Guru</span>
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
          <p className="p">SD Kristen Terang Bangsa</p>
        </footer>
        <div className="overlap-2">
          {raportData.map((item, index) => (
            <div className="text-wrapper-5">
              Data Nilai Kelas {item.kelas} Semester {item.semester}
            </div>
          ))}
          <div className="overlap-3">
            <div className="rectangle" />
            <div className="navbar-wrapper">
              {currentItems.map((item, index) => (
                <div key={index}>
                  <div className="div-2">
                    <div className="text-wrapper-6">
                      {item.nama_matapelajaran}
                    </div>
                    <div className="text-wrapper-7">{index + 1}.</div>
                    <div className="text-wrapper-8">{item.nilai}</div>
                    <div className="text-wrapper-9">{item.predikat}</div>
                    <button
                      className="TAMBAH-DATA"
                      onClick={() => handleEditNilai(item.id_detail)} // handleEditNilai(item)
                    >
                      <div className="text-wrapper-23">Edit Nilai</div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="HEADER-TABEL">
            <div className="navbar">
              <div className="mata-pelajaran">Mata Pelajaran</div>
              <div className="text-wrapper-17">No.</div>
              <div className="text-wrapper-18">Nilai</div>
              <div className="text-wrapper-19">Predikat</div>
            </div>
          </div>
          <div className="kelompok-a-wajib">Kelompok A (wajib)</div>
          <div className="PAGES">
            <div className="div-wrapper">
              {Array.from({ length: totalPages }, (_, index) => (
                <div
                  key={index}
                  className={`overlap-group-2 ${currentPage === index + 1 ? "active" : ""
                    }`}
                  onClick={() => paginate(index + 1)}
                >
                  <div className="ellipse" />
                  <div className="text-wrapper-20">{index + 1}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="download-button">
            <div className="text-wrapper-23">Download Rapor</div>
          </div>
        </div>
        <div className="dropdown-frame">
          <select
            className="dropdown"
            value={selectedRaportMain}
            onChange={(e) => setSelectedRaportMain(e.target.value)}
          >
            <option value="">Select Raport</option>
            {raportMain.map((item, index) => (
              <option key={index} value={`${item.kelas}-${item.semester}`}>
                {`Kelas ${item.kelas} - Semester ${item.semester}`}
              </option>
            ))}
          </select>
        </div>

        <header className="HEADER">
          <div className="overlap-4">
            <div className="group-wrapper">
              <div className="group-3">
                <div className="group-4">
                  <div className="group-5">
                  </div>
                </div>
              </div>
            </div>
            <div className="element-wrapper">
              {/* <img className="element-2" alt="Element" src="3.svg" /> */}
            </div>
            <div className="search">
              <div className="group-6">
                {/* <img className="element-3" alt="Element" src="7.svg" /> */}
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

export default SiswaLihatNilai;
