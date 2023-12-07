import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "./RaportSiswa.css";
import mainLogo from "../img/logo.png";

const RaportSiswa = () => {
  const history = useHistory();
  const [dataRaport, setDataRaport] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dataSiswa, setDataSiswa] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSiswa = await fetch(
          "https://jojopinjam.iffan.site/api/get-siswa"
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

  const handleBuatRaport = (nis) => {
    history.push(`/inputraport/${nis}`);
  };

  const handleEditRaport = (nis) => {
    history.push(`/editnilai/${nis}`);
  };

  const handleLihatRaport = () => {
    history.push("/LihatRaport");
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
    <div className="RAPORT-SISWA">
      <div className="div">
        <footer className="FOOTER">
          <p className="p">Copyright © SMP Kristen Getasan 2023</p>
        </footer>
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
        <div className="TABLE">
          <div className="overlap">
            <div className="DATA-KELAS">
              <table className="DATA-KELAS">
                <thead className="stable-table">
                  <tr className="head-row">
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
                          className="TAMBAH-DATA"
                          onClick={() => handleBuatRaport(item.nis)}
                        >
                          <div className="text-wrapper-23">Buat Raport</div>
                        </button>

                        <button
                          className="TAMBAH-DATA-2"
                          onClick={() => handleEditRaport(item.nis)}
                        >
                          <div className="text-wrapper-23">Edit Raport</div>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                className="TAMBAH-DATA-2"
                onClick={() => handleLihatRaport()}
              // disabled
              >
                <div className="text-wrapper-23">Input Nilai</div>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="SORTING-DATA">
          <img className="icon-sort" alt="Icon sort" src="icon-sort.png" />
          <div className="text-wrapper-9">Sortir Data</div>
        </div> */}
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

export default RaportSiswa;
