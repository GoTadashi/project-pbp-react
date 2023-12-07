import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SiswaLihatNilai.css";

const SiswaLihatNilai = () => {
  const { nisSiswa } = useParams();
  const [raports, setRaports] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [raportData, setRaportData] = useState([]);
  const raportsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSiswa = await fetch(
          `https://jojopinjam.iffan.site/api/get-siswa/${nisSiswa}`
        );
        const dataSiswa = await responseSiswa.json();
        console.log("Data Siswa:", dataSiswa);

        // Assuming the structure of data includes a unique identifier like nis
        const nis = dataSiswa.nis;

        const responseRaport = await fetch(
          `https://jojopinjam.iffan.site/api/get-raport-main/${nis}`
        );
        const dataRaport = await responseRaport.json();
        console.log("Data Raport:", dataRaport);
        setRaportData(dataRaport);

        setRaports(dataRaport);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [nisSiswa]);

  const indexOfLastRaport = currentPage * raportsPerPage;
  const indexOfFirstRaport = indexOfLastRaport - raportsPerPage;
  const currentRaports = raports.slice(indexOfFirstRaport, indexOfLastRaport);

  const totalPages = Math.ceil(raports.length / raportsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (!raports.length) {
    return <p>Loading...</p>; // Add loading state
  }

  if (currentRaports.length === 0) {
    return <p>No data available.</p>; // Add empty state
  }

  return (
    <div className="LIHAT-NILAI">
      <div className="div">
        <div className="MENU-SIDEBAR">
          <div className="PROFILE">
            <img className="element" alt="Element" src="64.svg" />
            <div className="text-wrapper">Pengaturan Profil</div>
          </div>
          <div className="PROFILE-2">
            <img className="element" alt="Element" src="image.svg" />
            <div className="text-wrapper">Log Out</div>
          </div>
          <div className="group">
            <div className="overlap-group">
              <div className="overlap">
                <div className="group-2">
                  <div className="text-wrapper-2">Light</div>
                  <img
                    className="sun-solid"
                    alt="Sun solid"
                    src="sun-solid.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper-3">Dark</div>
              <img
                className="moon-solid"
                alt="Moon solid"
                src="moon-solid.svg"
              />
            </div>
          </div>
          <div className="NILAI-wrapper">
            <div className="NILAI">
              <img
                className="icon-SISWA"
                alt="Icon SISWA"
                src="icon-SISWA.png"
              />
              <div className="text-wrapper">Nilai</div>
            </div>
          </div>
          <div className="CHAT">
            <img
              className="icon-envelope"
              alt="Icon envelope"
              src="icon-envelope.png"
            />
            <div className="text-wrapper">Chat</div>
          </div>
          <div className="DASHBOARD">
            <img className="element" alt="Element" src="1.svg" />
            <div className="text-wrapper">Dashboard</div>
          </div>
        </div>
        <footer className="FOOTER">
          <p className="p">
            Jalan Pangeran Diponegoro Km. 9, Getasan, Kec. Getasan, Kabupaten
            Semarang, Jawa Tengah 50774
          </p>
          <img className="line" alt="Line" src="line-2.svg" />
          <img className="img" alt="Line" src="line-1.svg" />
          <div className="text-wrapper-4">SCH</div>
        </footer>
        <div className="overlap-2">
          <div className="text-wrapper-5">Data Nilai Semester 1</div>
          <div className="overlap-3">
            <div className="rectangle" />
            <div className="navbar-wrapper">
              {currentRaports.map((raport, index) => (
                <div key={raport.id_raport}>
                  <div className="div-2">
                    <div className="text-wrapper-6">
                      {raport.nama_matapelajaran}
                    </div>
                    <div className="text-wrapper-7">
                      {(currentPage - 1) * raportsPerPage + index + 1}.
                    </div>
                    <div className="text-wrapper-8">{raport.nilai}</div>
                    <div className="text-wrapper-9">{raport.predikat}</div>
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
                  className={`overlap-group-2 ${
                    currentPage === index + 1 ? "active" : ""
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
        <div className="frame">
          {/* <div className="text-wrapper-24">Semester 1</div> */}
          {/* <select
            className="dropdown"
            onChange={(e) => setSelectedMapel(e.target.value)}
          >
            {raportData.map((item) => (
              <option
                key={item.kelas && item.semester}
                value={item.kelas && item.semester}
              >
                {item.kelas && item.semester}
              </option>
            ))}
          </select> */}
          <img
            className="icon-chevron-down"
            alt="Icon chevron down"
            src="icon-chevron-down.png"
          />
        </div>
        <header className="HEADER">
          <div className="overlap-4">
            <div className="group-wrapper">
              <div className="group-3">
                <div className="group-4">
                  <div className="group-5">
                    <div className="text-wrapper-25">Siswa</div>
                    <div className="text-wrapper-26">Anggi Adinda</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="element-wrapper">
              <img className="element-2" alt="Element" src="3.svg" />
            </div>
            <div className="search">
              <div className="group-6">
                <img className="element-3" alt="Element" src="7.svg" />
                <div className="text-wrapper-27">Pencarian</div>
              </div>
            </div>
            <div className="SMP-KRISTEN-GETASAN">
              Smp Kristen Getasan
              <br />
              e-rapor
            </div>
            <img className="ellipse-2" alt="Ellipse" src="ellipse-1192.svg" />
            <img
              className="SMP-KRISTEN"
              alt="Smp KRISTEN"
              src="SMP-KRISTEN-2.png"
            />
          </div>
        </header>
      </div>
    </div>
  );
};

export default SiswaLihatNilai;
