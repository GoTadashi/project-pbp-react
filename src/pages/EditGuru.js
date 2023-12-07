import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./EditGuru.css";

import mainLogo from "../img/logo.png";

export const EditGuru = () => {
  const history = useHistory();
  const [guru, setGuru] = useState([]);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://jojopinjam.iffan.site/api/get-guru")
      .then((response) => response.json())
      .then((json) => setGuru(json));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateGuru = (id, judul, pengarang) => {
      const updatedGuru = { id, judul, pengarang };
      fetch("https://jojopinjam.iffan.site/api/update-guru", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedGuru),
      }).then(() => {
        fetch("https://jojopinjam.iffan.site/api/get-guru")
          .then((response) => response.json())
          .then((json) => setGuru(json));
        setTimeout(() => {
          setMessage("Buku Berhasil Diubah");
        }, 500);
      });
    };
  };

  return (
    <div className="EDIT-GURU">
      <div className="div">
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
        <footer className="FOOTER">
          <p className="p">Copyright © SD Kristen Terang Bangsa</p>
          <div className="text-wrapper-4">SCH</div>
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
            <div className="element-wrapper">
              <img className="element-3" alt="Element" src="3.svg" />
            </div>
            <div className="search">
              <div className="group-10">
                <img className="element-5" alt="Element" src="7.svg" />
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
                    type="text"
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
                <div className="frame-6">
                  <div className="frame-8">
                    <div className="text-wrapper-13">Jenis Kelamin</div>
                    <div className="text-wrapper-14">*</div>
                  </div>
                </div>
                <div className="frame-9">
                  <input
                    className="setting"
                    type="text"
                    value={g.jenis_kelamin}
                    onChange={(e) =>
                      setGuru((prevGuru) =>
                        prevGuru.map((item) =>
                          item.id_guru === g.id_guru
                            ? { ...item, jenis_kelamin: e.target.value }
                            : item
                        )
                      )
                    }
                  />
                </div>
              </div>
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
        <div className="TAMBAH-DATA">
          <div className="text-wrapper-17">Simpan Data</div>
        </div>
      </div>
    </div>
  );
};

export default EditGuru;
