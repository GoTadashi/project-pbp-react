import React, { useState, useEffect } from "react";
// import { TableHeader } from "./TableHeader";
import "./DataNilai.css";

export const DataNilai = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dataSiswa, setDataSiswa] = useState([]);
  const [dataRaport, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(
        //   "http://jojopinjam.iffan.site/api/get-siswa"
        // );
        const response = await fetch("http://127.0.0.1:8000/api/get-siswa");
        const dataSiswa = await response.json();
        setDataSiswa(dataSiswa);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // RANCU DISINI
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(
        //   "http://jojopinjam.iffan.site/api/get-siswa"
        // );
        const response = await fetch("http://127.0.0.1:8000/api/get-siswa");
        const dataSiswa = await response.json();
        setData(dataSiswa);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleTambahData = () => {
    // Add your logic for handling the click event here
    console.log("Button clicked!");
  };

  const handleEdit = (index) => {
    // Handle the edit action
    console.log("Edit clicked for index:", index);
  };

  const handleDelete = (index) => {
    // Handle the delete action
    const newDataSiswa = [...dataSiswa];
    newDataSiswa.splice(index, 1);
    setDataSiswa(newDataSiswa);
  };

  return (
    <div className="DATA-NILAI">
      <div className="div">
        <footer className="FOOTER">
          <p className="p">Copyright © SMP Kristen Getasan 2023</p>
          <img className="line" alt="Line" src="line-2.svg" />
          <img className="img" alt="Line" src="line-1.svg" />
          <div className="text-wrapper-2">SCH</div>
        </footer>
        <div className="PAGES">
          <div className="element">
            <div className="overlap-group">
              <div className="ellipse" />
              <div className="text-wrapper-3">1</div>
            </div>
          </div>
          <div className="text-wrapper-4">2</div>
          <div className="text-wrapper-5">3</div>
        </div>
        <div className="text-wrapper-6">*Urutan Siswa Sesuai NIS</div>
        <div className="PEMBERITAHUAN">
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
        </div>
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
                  {dataSiswa.map((item, index) => (
                    <tr key={index}>
                      <td>{item.nis}</td>
                      <td>{item.nama}</td>
                      <td>{item.tempat_lahir}</td>
                      <td>{item.tanggal_lahir}</td>
                      <td>{item.jenis_kelamin}</td>
                      <td>{item.agama}</td>
                      <td>{item.nama_orangtua}</td>
                      <td>
                        <button
                          className="TAMBAH-DATA"
                          onClick={handleTambahData}
                        >
                          <div className="text-wrapper-23">Input Nilai</div>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="SORTING-DATA">
          <img className="icon-sort" alt="Icon sort" src="icon-sort.png" />
          <div className="text-wrapper-9">Sortir Data</div>
        </div>
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
            <img className="element-3" alt="Element" src="64.svg" />
            <div className="text-wrapper-14">Pengaturan Profil</div>
          </div>
          <div className="PROFILE-2">
            <img className="element-3" alt="Element" src="64-2.svg" />
            <div className="text-wrapper-14">Log Out</div>
          </div>
          <div className="group-2">
            <div className="overlap-group-3">
              <div className="group-wrapper">
                <div className="group-3">
                  <div className="text-wrapper-15">Light</div>
                  <img
                    className="sun-solid"
                    alt="Sun solid"
                    src="sun-solid.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper-16">Dark</div>
              <img
                className="moon-solid"
                alt="Moon solid"
                src="moon-solid.svg"
              />
            </div>
          </div>
          <div className="SISWA">
            <img className="icon-SISWA" alt="Icon SISWA" src="icon-SISWA.png" />
            <div className="text-wrapper-14">Siswa</div>
          </div>
          <div className="CHAT">
            <img
              className="icon-envelope"
              alt="Icon envelope"
              src="icon-envelope.png"
            />
            <div className="text-wrapper-14">Chat</div>
          </div>
          <div className="CHAT-2">
            <img
              className="icon-attendance"
              alt="Icon attendance"
              src="icon-attendance.png"
            />
            <div className="text-wrapper-14">Generate Absen</div>
          </div>
          <div className="CHAT-3">
            <img
              className="icon-calender"
              alt="Icon calender"
              src="icon-calender.png"
            />
            <div className="text-wrapper-14">Jadwal Pelajaran</div>
          </div>
          <div className="DASHBOARD">
            <img className="element-3" alt="Element" src="1.svg" />
            <div className="text-wrapper-14">Dashboard</div>
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
                <img className="element-5" alt="Element" src="7.svg" />
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
              Smp Kristen Getasan
              <br />
              e-rapor
            </div>
            <img className="ellipse-5" alt="Ellipse" src="ellipse-1192.svg" />
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

export default DataNilai;
