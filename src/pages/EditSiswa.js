import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./EditSiswa.css";


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
          <div className="SISWA">
            <img className="icon-SISWA" alt="Icon SISWA" src="icon-SISWA.png" />
            <div className="text-wrapper">Siswa</div>
          </div>
          <div className="CHAT">
            <img
              className="icon-envelope"
              alt="Icon envelope"
              src="icon-envelope.png"
            />
            <div className="text-wrapper">Chat</div>
          </div>
          <div className="CHAT-2">
            <img
              className="icon-attendance"
              alt="Icon attendance"
              src="icon-attendance.png"
            />
            <div className="text-wrapper">Generate Absen</div>
          </div>
          <div className="CHAT-3">
            <img
              className="icon-calender"
              alt="Icon calender"
              src="icon-calender.png"
            />
            <div className="text-wrapper">Jadwal Pelajaran</div>
          </div>
          <div className="DASHBOARD">
            <img className="element" alt="Element" src="1.svg" />
            <div className="text-wrapper">Dashboard</div>
          </div>
        </div>
        <footer className="FOOTER">
          <p className="p">Copyright © SMP Kristen Getasan 2023</p>
          <img className="line" alt="Line" src="line-2.svg" />
          <img className="img" alt="Line" src="line-1.svg" />
          <div className="text-wrapper-4">SCH</div>
        </footer>
        <div className="PEMBERITAHUAN">
          <img className="element-2" alt="Element" src="53.svg" />
          <div className="frame">
            <div className="group-3">
              <div className="ellipse" />
              <div className="ellipse-2" />
              <div className="ellipse-3" />
            </div>
          </div>
          <div className="PIKET">
            <img className="element" alt="Element" src="4.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-5">Jadwal Piket Harian</div>
            </div>
          </div>
          <div className="WALI-MURID">
            <img className="element" alt="Element" src="4-2.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-5">Pertemuan Wali Murid</div>
            </div>
          </div>
          <div className="KLS">
            <img className="element" alt="Element" src="4-3.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-5">Matematika Kelas 9</div>
            </div>
          </div>
          <div className="KLS-2">
            <img className="element" alt="Element" src="4-4.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-5">Matematika Kelas 8</div>
            </div>
          </div>
          <div className="KLS-3">
            <img className="element" alt="Element" src="4-5.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-5">Matematika Kelas 7</div>
            </div>
          </div>
          <div className="text-wrapper-6">Pemberitahuan</div>
        </div>
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
                    <div className="text-wrapper-11">Siswa</div>
                    <div className="text-wrapper-12">Anggi Adinda</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="element-wrapper">
              <img className="element-3" alt="Element" src="3.svg" />
            </div>
            <div className="search">
              <div className="group-7">
                <img className="element-4" alt="Element" src="7.svg" />
                <div className="text-wrapper-13">Pencarian</div>
              </div>
            </div>
            <div className="SMP-KRISTEN-GETASAN">
              Smp Kristen Getasan
              <br />
              e-rapor
            </div>
            <img className="ellipse-4" alt="Ellipse" src="ellipse-1192.svg" />
            <img
              className="SMP-KRISTEN"
              alt="Smp KRISTEN"
              src="SMP-KRISTEN-2.png"
            />
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
                          item.nis === s.nis ? { ...item, nama: e.target.value } : item
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
