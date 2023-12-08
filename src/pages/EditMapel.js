import React, { useState, useEffect } from "react";
import "./EditMapel.css";
import { Link, useHistory, useParams } from "react-router-dom";
import mainLogo from "../img/logo.png";

export const EditMapel = () => {
  const { id_matapelajaran } = useParams();
  const history = useHistory();
  const [matapelajaran, setMatapelajaran] = useState([]);
  const [availableMataPelajaran, setAvailableMataPelajaran] = useState([]);
  const [guru, setGuru] = useState([]);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch the specific mata pelajaran
    fetch(`https://jojopinjam.iffan.site/api/get-matapelajaran/${id_matapelajaran}`)
      .then((response) => response.json())
      .then((json) => {
        // Check if the response is an array
        if (Array.isArray(json)) {
          setMatapelajaran(json);
        } else {
          // If not an array, consider wrapping it in an array or accessing the correct property
          setMatapelajaran([json]);
        }
      })
      .catch((error) => {
        console.error("Error fetching matapelajaran:", error);
      });

    // Fetch all available mata pelajaran
    fetch("https://jojopinjam.iffan.site/api/get-matapelajaran")
      .then((response) => response.json())
      .then((json) => {
        // Check if the response is an array
        if (Array.isArray(json)) {
          setAvailableMataPelajaran(json);
        } else {
          // If not an array, consider wrapping it in an array or accessing the correct property
          setAvailableMataPelajaran([json]);
        }
      })
      .catch((error) => {
        console.error("Error fetching available matapelajaran:", error);
      });

    // Fetch all available guru
    fetch("https://jojopinjam.iffan.site/api/get-guru")
      .then((response) => response.json())
      .then((json) => {
        // Check if the response is an array
        if (Array.isArray(json)) {
          setGuru(json);
        } else {
          // If not an array, consider wrapping it in an array or accessing the correct property
          setGuru([json]);
        }
      })
      .catch((error) => {
        console.error("Error fetching guru:", error);
      });
  }, [id_matapelajaran]);


  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedMatapelajaran = matapelajaran[0];

    // Log the payload being sent to the server
    console.log("Submitting Mapel Data:", JSON.stringify(updatedMatapelajaran));

    // ... (rest of your existing code)

    // Fetch the updated data from the server after successful submission
    fetch(`https://jojopinjam.iffan.site/api/get-matapelajaran/${id_matapelajaran}`)
      .then((response) => response.json())
      .then((json) => {
        // Log the fetched data
        console.log("Fetched Mapel Data:", JSON.stringify(json));

        if (Array.isArray(json)) {
          setMatapelajaran(json);
        } else {
          setMatapelajaran([json]);
        }

        // Display a success alert
        window.alert("Mapel Berhasil Diubah");
      })
      .catch((error) => {
        // Log any errors during the process
        console.error("Error:", error);

        // Display an error alert
        window.alert("Terjadi kesalahan. Mapel tidak dapat diubah.");
      });
  };

  return (
    <div className="EDIT-MAPEL">
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
                <button className="button-search">
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
          {matapelajaran.map((g) => (
            <div key={g.id_matapelajaran}>
              <div className="group-8">
                <div className="frame-wrapper">
                  <div className="frame-2">
                    <div className="text-wrapper-13">Kode Mata Pelajaran</div>
                  </div>
                </div>
                <div className="frame-3">
                  <input
                    className="setting"
                    type="text"
                    value={g.id_matapelajaran}
                    readOnly
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
              {/* Dropdown for selecting mata pelajaran */}
              <select
                className="setting"
                value={g.id_matapelajaran} // Assuming g.id_matapelajaran contains the ID of the selected mata pelajaran
                onChange={(e) =>
                  setMatapelajaran((prevGuru) =>
                    prevGuru.map((item) =>
                      item.id_matapelajaran === g.id_matapelajaran
                        ? { ...item, id_matapelajaran: e.target.value }
                        : item
                    )
                  )
                }
              >
                {/* Mapping over the available mata pelajaran options */}
                {availableMataPelajaran.map((mataPelajaranOption) => (
                  <option key={mataPelajaranOption.id_matapelajaran} value={mataPelajaranOption.id_matapelajaran}>
                    {mataPelajaranOption.nama_matapelajaran}
                  </option>
                ))}
              </select>
            </div>
          </div>
              <div className="group-10">
                <div className="frame-wrapper">
                  <div className="frame-2">
                    <div className="text-wrapper-13">Guru Pengampu</div>
                  </div>
                </div>
                <div className="frame-6">
                  <select
                    className="setting"
                    value={g.id_guru}
                    onChange={(e) =>
                      setMatapelajaran((prevGuru) =>
                        prevGuru.map((item) =>
                          item.id_matapelajaran === g.id_matapelajaran
                            ? { ...item, id_guru: e.target.value }
                            : item
                        )
                      )
                    }
                  >
                    {/* Mapping over the guru data to generate options */}
                    {guru.map((guruData) => (
                      <option key={guruData.id_guru} value={guruData.id_guru}>
                        {guruData.nama}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}

          <div className="group-11">
            <button className="frame-7" onClick={handleSubmit}>
              <div className="text-wrapper-15">Update</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMapel;
