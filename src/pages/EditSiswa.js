import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./EditSiswa.css";
import mainLogo from "../img/logo.png";

const EditSiswa = () => {
  const { nis } = useParams();
  const history = useHistory();
  const [siswa, setSiswa] = useState([]);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`https://jojopinjam.iffan.site/api/get-siswa/${nis}`)
      .then((response) => response.json())
      .then((json) => {
        if (Array.isArray(json)) {
          const formattedSiswa = json.map((siswa) => ({
            ...siswa,
            tanggal_lahir: formatDate(siswa.tanggal_lahir),
          }));
          setSiswa(formattedSiswa);
        } else {
          const formattedSiswa = {
            ...json,
            tanggal_lahir: formatDate(json.tanggal_lahir),
          };
          setSiswa([formattedSiswa]);
        }
      })
      .catch((error) => {
        console.error("Error fetching siswa:", error);
      });
  }, [nis]);

  // Fungsi untuk memformat tanggal menjadi "yyyy-MM-dd"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedSiswa = siswa[0];

    console.log("Submitting Siswa Data:", JSON.stringify(updatedSiswa));

    fetch("https://jojopinjam.iffan.site/api/update-siswa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSiswa),
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

        return fetch(`https://jojopinjam.iffan.site/api/get-siswa/${nis}`);
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        console.log("Fetched Siswa Data:", JSON.stringify(json));

        if (Array.isArray(json)) {
          setSiswa(json);
        } else {
          setSiswa([json]);
        }

        window.alert("Siswa Berhasil Diubah");
        history.push(`/DataSiswa`);
      })
      .catch((error) => {
        console.error("Error:", error);
        window.alert("Terjadi kesalahan. Siswa tidak dapat diubah.");
      });
  };

  // Add console.log statements here to track data
  console.log("Rendered Component with Siswa Data:", JSON.stringify(siswa));

  return (
    <div className="EDIT-SISWA">
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
        <footer className="FOOTER">
          <p className="p">Copyright © SD Kristen Terang Bangsa</p>
        </footer>
        <div className="navbar">
          <img className="line-2" alt="Line" src="line-3.svg" />
          <div className="text-wrapper-7">\Kelas</div>
          <div className="text-wrapper-8">\Edit Data</div>
          <div className="text-wrapper-9">\Semester</div>
          <div className="text-wrapper-10">Dashboard</div>
        </div>
        <header className="HEADER">
          <div className="overlap-2">
            <div className="group-wrapper">
              <div className="group-4">
                <div className="group-5">
                  <div className="group-6">
                    {/* <div className="text-wrapper-11">Siswa</div>
                    <div className="text-wrapper-12">Anggi Adinda</div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="search">
              <div className="group-7">
                <img className="element-4" alt="Element" src="7.svg" />
                <div className="text-wrapper-13">Pencarian</div>
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
          {siswa.map((s) => (
            <div key={s.nis}>
              <div className="group-6">
                <div className="frame-wrapper">
                  <div className="frame-2">
                    <div className="text-wrapper-13">NISN</div>
                    <div className="text-wrapper-14">*</div>
                  </div>
                </div>
                <div className="frame-3">
                  <input
                    className="setting"
                    type="text"
                    value={s.nisn}
                    onChange={(e) =>
                      setSiswa((prevSiswa) =>
                        prevSiswa.map((item) =>
                          item.nis === s.nis
                            ? { ...item, nisn: e.target.value }
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
                    value={s.nama}
                    onChange={(e) =>
                      setSiswa((prevSiswa) =>
                        prevSiswa.map((item) =>
                          item.nis === s.nis
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
                  <div className="frame-2">
                    <div className="text-wrapper-13">Tempat Lahir</div>
                    <div className="text-wrapper-14">*</div>
                  </div>
                </div>
                <div className="frame-3">
                  <input
                    className="setting"
                    type="text"
                    value={s.tempat_lahir}
                    onChange={(e) =>
                      setSiswa((prevSiswa) =>
                        prevSiswa.map((item) =>
                          item.nis === s.nis
                            ? { ...item, tempat_lahir: e.target.value }
                            : item
                        )
                      )
                    }
                  />
                </div>
              </div>
              <div className="group-8">
                <div className="frame-wrapper">
                  <div className="frame-4">
                    <div className="text-wrapper-13">Tanggal Lahir</div>
                    <div className="text-wrapper-14">*</div>
                  </div>
                </div>
                <div className="frame-5">
                  <input
                    className="setting"
                    type="date"
                    value={s.tanggal_lahir}
                    onChange={(e) =>
                      setSiswa((prevSiswa) =>
                        prevSiswa.map((item) =>
                          item.nis === s.nis
                            ? { ...item, tanggal_lahir: e.target.value }
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
                    <div className="text-wrapper-13">Agama</div>
                    <div className="text-wrapper-14">*</div>
                  </div>
                </div>
                <div className="frame-7">
                  <input
                    className="setting"
                    type="text"
                    value={s.agama}
                    onChange={(e) =>
                      setSiswa((prevSiswa) =>
                        prevSiswa.map((item) =>
                          item.nis === s.nis
                            ? { ...item, agama: e.target.value }
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
                    value={s.jenis_kelamin}
                    onChange={(e) =>
                      setSiswa((prevSiswa) =>
                        prevSiswa.map((item) =>
                          item.jenis_kelamin === s.jenis_kelamin
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
              <div className="group-12">
                <div className="frame-wrapper">
                  <div className="frame-6">
                    <div className="text-wrapper-13">Nama Orangtua</div>
                    <div className="text-wrapper-14">*</div>
                  </div>
                </div>
                <div className="frame-7">
                  <input
                    className="setting"
                    type="text"
                    value={s.nama_orangtua}
                    onChange={(e) =>
                      setSiswa((prevSiswa) =>
                        prevSiswa.map((item) =>
                          item.nis === s.nis
                            ? { ...item, nama_orangtua: e.target.value }
                            : item
                        )
                      )
                    }
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="EDIT-Siswa">
            <button className="TAMBAH-DATA" onClick={handleSubmit}>
              <div className="text-wrapper">Update</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSiswa;
