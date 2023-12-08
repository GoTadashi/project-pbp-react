import React, { useState, useEffect } from "react";
import "./EditMapel.css";
import { Link, useHistory, useParams } from "react-router-dom";
import mainLogo from "../img/logo.png";

const EditMapel = () => {
  const { id_matapelajaran } = useParams();
  const history = useHistory();
  const [matapelajaran, setMatapelajaran] = useState([]);
  const [guru, setGuru] = useState([]); // State for storing guru data
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch matapelajaran data
    fetch(`https://jojopinjam.iffan.site/api/get-matapelajaran/${id_matapelajaran}`)
      .then((response) => response.json())
      .then((json) => {
        if (Array.isArray(json)) {
          setMatapelajaran(json);
        } else {
          setMatapelajaran([json]);
        }
      })
      .catch((error) => {
        console.error("Error fetching mapel:", error);
      });

    // Fetch guru data
    fetch("https://jojopinjam.iffan.site/api/get-guru/")
      .then((response) => response.json())
      .then((json) => {
        if (Array.isArray(json)) {
          setGuru(json);
        } else {
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

    console.log("Submitting Guru Data:", JSON.stringify(updatedMatapelajaran));

    fetch("https://jojopinjam.iffan.site/api/update-matapelajaran", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMatapelajaran),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Server Response:", data);

        if (data.status && data.status === "ERROR") {
          throw new Error(`Server error: ${data.message}`);
        }

        return fetch(`https://jojopinjam.iffan.site/api/get-matapelajaran/${id_matapelajaran}`);
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        console.log("Fetched Mapel Data:", JSON.stringify(json));

        if (Array.isArray(json)) {
          setMatapelajaran(json);
        } else {
          setMatapelajaran([json]);
        }

        window.alert("Mapel Berhasil Diubah");
      })
      .catch((error) => {
        console.error("Error:", error);
        window.alert("Terjadi kesalahan. Mapel tidak dapat diubah.");
      });
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
        <form onSubmit={handleSubmit} className="form">
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
                    disabled
                  />
                </div>
              </div>
              <div className="group-9">
                <div className="frame-wrapper">
                  <div className="frame-2">
                    <div className="text-wrapper-13">Mata Pelajaran</div>
                  </div>
                </div>
                <div className="frame-5">
                  <input
                    type="text"
                    className="setting"
                    value={g.nama_matapelajaran} // Assuming g.nama_matapelajaran contains the name of the selected mata pelajaran
                    onChange={(e) =>
                      setMatapelajaran((prevGuru) =>
                        prevGuru.map((item) =>
                          item.id_matapelajaran === g.id_matapelajaran
                            ? { ...item, nama_matapelajaran: e.target.value }
                            : item
                        )
                      )
                    }
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
