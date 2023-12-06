import React, { useState, useEffect } from "react";
import "./EditMapel.css";

export const EditMapel = () => {
  // const [searchQuery, setSearchQuery] = useState("");
  const [kodeMatapelajaran, setKodeMatapelajaran] = useState("");
  const [namaMatapelajaran, setNamaMatapelajaran] = useState("");
  const [guruPengampu, setGuruPengampu] = useState("");

  const fetchData = async () => {
    try {
      // Assuming the ID of the matapelajaran is obtained from the route or some other source
      const idMatapelajaran = 1; // Change this value based on your requirements

      const response = await fetch(
        fetch("https://jojopinjam.iffan.site/api/get-matapelajaran")
      );

      const responseData = await response.json();

      // Assuming the API response has properties 'nama_matapelajaran' and 'id_guru'
      setNamaMatapelajaran(responseData.matapelajaran[0].nama_matapelajaran);
      setGuruPengampu(responseData.matapelajaran[0].id_guru);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!kodeMatapelajaran || !namaMatapelajaran || !guruPengampu) {
      alert("Harap isi semua kolom form.");
    } else {
      alert("Mata pelajaran berhasil diupdate.");
    }

    console.log(
      "Submitted:",
      kodeMatapelajaran,
      namaMatapelajaran,
      guruPengampu
    );

    try {
      const response = await fetch("https://jojopinjam.iffan.site/api/update-matapelajaran", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_matapelajaran: 1, // Change this value based on your requirements
          nama_matapelajaran: namaMatapelajaran,
          id_guru: guruPengampu,
        }),
      });

      const responseData = await response.json();
      console.log(responseData); // Logging the response data from the API

      // Assuming there is some feedback or redirection logic based on the API response
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleReset = () => {
    // Add your logic for resetting the form here
    setKodeMatapelajaran("");
    setNamaMatapelajaran("");
    setGuruPengampu("");
  };

  return (
    <div className="EDIT-MAPEL">
      <div className="div">
        <div className="MENU">
          <div className="PROFILE">
            <img className="img" alt="Element" src="64.svg" />
            <div className="text-wrapper">Pengaturan Profil</div>
          </div>
          <div className="PROFILE-2">
            <img className="element" alt="Element" src="image.svg" />
            <div className="text-wrapper-2">Log Out</div>
          </div>
          <div className="group">
            <div className="overlap-group">
              <div className="overlap">
                <div className="group-2">
                  <div className="text-wrapper-3">Light</div>
                  <img
                    className="sun-solid"
                    alt="Sun solid"
                    src="sun-solid.svg"
                  />
                </div>
              </div>
              <div className="text-wrapper-4">Dark</div>
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
            <img className="img" alt="Icon calender" src="icon-calender.png" />
            <div className="text-wrapper">Jadwal Pelajaran</div>
          </div>
          <div className="DASHBOARD">
            <img className="element-2" alt="Element" src="1.svg" />
            <div className="text-wrapper">Dashboard</div>
          </div>
        </div>
        <footer className="FOOTER">
          <p className="p">Copyright © SMP Kristen Getasan 2023</p>
          <img className="line" alt="Line" src="line-2.svg" />
          <img className="line-2" alt="Line" src="line-1.svg" />
          <div className="text-wrapper-5">SCH</div>
        </footer>
        <div className="PEMBERITAHUAN">
          <img className="element-3" alt="Element" src="53.svg" />
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
              <div className="text-wrapper-6">Jadwal Piket Harian</div>
            </div>
          </div>
          <div className="WALI-MURID">
            <img className="element" alt="Element" src="4-2.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-6">Pertemuan Wali Murid</div>
            </div>
          </div>
          <div className="KLS">
            <img className="element" alt="Element" src="4-3.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-6">Matematika Kelas 9</div>
            </div>
          </div>
          <div className="KLS-2">
            <img className="element" alt="Element" src="4-4.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-6">Matematika Kelas 8</div>
            </div>
          </div>
          <div className="KLS-3">
            <img className="element" alt="Element" src="4-5.svg" />
            <div className="div-wrapper">
              <div className="text-wrapper-6">Matematika Kelas 7</div>
            </div>
          </div>
          <div className="text-wrapper-7">Pemberitahuan</div>
        </div>
        <header className="HEADER">
          <div className="overlap-2">
            <div className="group-wrapper">
              <div className="group-4">
                <div className="group-5">
                  <div className="group-6">
                    <div className="text-wrapper-8">Siswa</div>
                    <div className="text-wrapper-9">Anggi Adinda</div>
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
                <div className="text-wrapper-10">Pencarian</div>
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
        <div className="kembali">
          <img className="back" alt="Back" src="back.png" />
          <div className="text-wrapper-11">Kembali</div>
        </div>
        <div className="text-wrapper-12">Edit Mata Pelajaran</div>
        <form onSubmit={handleSubmit}>
          <div className="group-8">
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-13">Kode Mata Pelajaran</div>
              </div>
            </div>
            <div className="frame-3">
              <input
                type="number"
                className="custom-input"
                value={kodeMatapelajaran}
                onChange={(e) => setKodeMatapelajaran(e.target.value)}
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
              <input
                type="text"
                className="custom-input"
                value={namaMatapelajaran}
                onChange={(e) => setNamaMatapelajaran(e.target.value)}
              />
            </div>
          </div>

          <div className="group-10">
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-13">Kode Guru Pengampu</div>
              </div>
            </div>
            <div className="frame-6">
              <input
                type="number"
                className="custom-input"
                value={guruPengampu}
                onChange={(e) => setGuruPengampu(e.target.value)}
              />
            </div>
          </div>

          <div className="group-11">
            <button className="frame-7" onClick={handleSubmit}>
              <div className="text-wrapper-15">Update</div>
            </button>
            <button className="frame-8" onClick={handleReset}>
              <div className="text-wrapper-15">Reset</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMapel;
