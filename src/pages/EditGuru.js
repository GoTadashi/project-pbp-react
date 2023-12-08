import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./EditGuru.css";
import mainLogo from "../img/logo.png";

export const EditGuru = () => {
  const { id_guru } = useParams(); // Use useParams to get the parameter from the URL
  const history = useHistory();
  const [guru, setGuru] = useState([]);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`https://jojopinjam.iffan.site/api/get-guru/${id_guru}`)
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
  }, [id_guru]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedGuru = guru[0]; // Assuming there is only one guru with the given id
    fetch("https://jojopinjam.iffan.site/api/update-guru", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedGuru),
    }).then(() => {
      fetch(`https://jojopinjam.iffan.site/api/get-guru/${id_guru}`)
        .then((response) => response.json())
        .then((json) => setGuru(json));
      setTimeout(() => {
        setMessage("Guru Berhasil Diubah");
      }, 500);
    });
  };
  return (
    <div className="EDIT-GURU">
      <div className="div">
        <div className="MENU">
          <div className="PROFILE">
            {/* <Link to="/InputRaport" className="list-menu nav-link text-white fs-5">
              <i class="bi bi-file-earmark-plus"></i>
              <span className="side-text ms-2">Input Raport Siswa</span>
            </Link> */}
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
            <Link to="/DaftarMapel" className="list-menu nav-link text-white fs-5">
              <i className="bi bi-card-checklist"></i>
              <span className="side-text ms-2">Mata Pelajaran</span>
            </Link>
          </div>
          <div className="CHAT-3">
            <Link to="/RaportSiswa" className="list-menu nav-link text-white fs-5">
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
        <div className="overlap-2">
          <img className="line-2" alt="Line" src="line-3.svg" />
          <div className="text-wrapper-7">\ Data Guru</div>
          <div className="text-wrapper-8">\ Edit Data Guru</div>
          <div className="text-wrapper-9">Dashboard</div>
        </div>
        <header className="HEADER">
          <div className="overlap-3">
            <div className="group-4">
              <div className="text-wrapper-10">Admin</div>
              <div className="text-wrapper-11">Admin</div>
            </div>
            <div className="search">
              <div className="group-10">
                {/* <img className="element-5" alt="Element" src="7.svg" /> */}
                <input
                  className="custom-input-search"
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
        <form onSubmit={handleSubmit}>
          {guru.map((g) => (
            <div key={g.id_guru}>
              <div className="group-6">
                <div className="frame-wrapper">
                  <div className="frame-2">
                    <div className="text-wrapper-13">NIP</div>
                    <div className="text-wrapper-14">*</div>
                  </div>
                </div>
                <div className="frame-3">
                  <input
                    className="setting"
                    type="text"
                    value={g.nip}
                    onChange={(e) =>
                      setGuru((prevGuru) =>
                        prevGuru.map((item) =>
                          item.id_guru === g.id_guru
                            ? { ...item, nip: e.target.value }
                            : item
                        )
                      )
                    }
                  />
                </div>
              </div>
              <div className="group-7">
                <div className="frame-wrapper">
                  <div className="frame-2">
                    <div className="text-wrapper-13">Nama</div>
                    <div className="text-wrapper-14">*</div>
                  </div>
                </div>
                <div className="frame-3">
                  <input
                    className="setting"
                    type="text"
                    value={g.nama}
                    onChange={(e) =>
                      setGuru((prevGuru) =>
                        prevGuru.map((item) =>
                          item.id_guru === g.id_guru
                            ? { ...item, nama: e.target.value }
                            : item
                        )
                      )
                    }
                  />
                </div>
              </div>
              <div className="group-9">
                <div className="frame-wrapper">
                  <div className="frame-4">
                    <div className="text-wrapper-13">Tempat Lahir</div>
                    <div className="text-wrapper-14">*</div>
                  </div>
                </div>
                <div className="frame-5">
                  <input
                    className="setting"
                    type="text"
                    value={g.tempat_lahir}
                    onChange={(e) =>
                      setGuru((prevGuru) =>
                        prevGuru.map((item) =>
                          item.id_guru === g.id_guru
                            ? { ...item, tempat_lahir: e.target.value }
                            : item
                        )
                      )
                    }
                  />
                </div>
              </div>
              <div className="group-10">
                <div className="frame-wrapper">
                  <div className="frame-6">
                    <div className="text-wrapper-13">Tanggal Lahir</div>
                    <div className="text-wrapper-14">*</div>
                  </div>
                </div>
                <div className="frame-7">
                  <input
                    className="setting"
                    type="date"
                    value={g.tanggal_lahir}
                    onChange={(e) =>
                      setGuru((prevGuru) =>
                        prevGuru.map((item) =>
                          item.id_guru === g.id_guru
                            ? { ...item, tanggal_lahir: e.target.value }
                            : item
                        )
                      )
                    }
                  />
                </div>
              </div>
              <div className="group-11">
                <div className="frame-wrapper">
                  <div className="frame-6">
                    <div className="text-wrapper-13">Jenis Kelamin</div>
                    <div className="text-wrapper-14">*</div>
                  </div>
                </div>
                <div className="frame-7">
                  <select
                    className="setting"
                    value={g.jenis_kelamin}
                    onChange={(e) =>
                      setGuru((prevSiswa) =>
                        prevSiswa.map((item) =>
                          item.jenis_kelamin === g.jenis_kelamin
                            ? { ...item, jenis_kelamin: e.target.value }
                            : item
                        )
                      )
                    }
                  >
                    <option value="Pria">Pria</option>
                    <option value="Wanita">Wanita</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
          <button type="submit" class="EDIT-GURU custom-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditGuru;
