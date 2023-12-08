import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./InputNilai.css";
// ini sudah dropdown id_raport
const InputNilai = () => {
  const { nisSiswa } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [dataSiswa, setDataSiswa] = useState([]);
  const [dataMapel, setDataMapel] = useState([]);
  const [dataNilai, setDataNilai] = useState("");
  const [dataPredikat, setDataPredikat] = useState("");
  const [dataDeskripsi, setDataDeskripsi] = useState("");
  const [selectedSiswa, setSelectedSiswa] = useState(nisSiswa);
  const [selectedMapel, setSelectedMapel] = useState("");
  const [selectedIdRaport, setSelectedIdRaport] = useState("");
  const [raportData, setRaportData] = useState([]);
  const [selectedRaportMain, setSelectedRaportMain] = useState("");
  const [raportMain, setRaportMain] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseSiswa = await fetch(
          `https://jojopinjam.iffan.site/api/get-siswa/${nisSiswa}`
        );
        const dataSiswa = await responseSiswa.json();
        if (Array.isArray(dataSiswa)) {
          setDataSiswa(dataSiswa);
        } else if (dataSiswa) {
          setDataSiswa([dataSiswa]);
        } else {
          console.error("Invalid Data Siswa format:", dataSiswa);
          setDataSiswa([]);
        }
        // Check if there is valid data for the student
        if (dataSiswa.length > 0) {
          const studentId = dataSiswa[0].id; // Assuming id is the correct property
          const responseRaport = await fetch(
            `https://jojopinjam.iffan.site/api/get-raport-main/${studentId}`
          );
          const raportData = await responseRaport.json();
          console.log("Raport data:", raportData);
          if (raportData.length > 0) {
            const firstRaportId = raportData[0].id_raport; // Assuming id_raport is the correct property
            setSelectedIdRaport(firstRaportId);
          } else {
            console.error("No raport data available for the selected student.");
          }
        } else {
          console.error("No data available for the selected student.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [nisSiswa]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jojopinjam.iffan.site/api/get-matapelajaran"
        );
        const dataMapel = await response.json();
        setDataMapel(dataMapel);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchRaportData = async () => {
      try {
        console.log("Fetching raport data...");
        const response = await fetch(
          `https://jojopinjam.iffan.site/api/get-raport-main/${nisSiswa}`
        );
        const raportMain = await response.json();
        console.log("Raport data:", raportMain);
        setRaportMain(raportMain);
        if (Array.isArray(raportMain) && raportMain.length > 0) {
          setSelectedIdRaport(raportMain.map((raport) => raport.id_raport));
        } else {
          console.error("No raport data found for the selected student.");
          setSelectedIdRaport([]);
        }
      } catch (error) {
        console.error("Error fetching raport data:", error);
      }
    };
    if (nisSiswa) {
      fetchRaportData();
    }
  }, [nisSiswa]);

  useEffect(() => {
    if (selectedRaportMain) {
      const [kelas, semester] = selectedRaportMain.split("-");
      fetch(
        `https://jojopinjam.iffan.site/api/get-raport/${nisSiswa}/${kelas}-${semester}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            // Extracting the id_raport from the fetched data
            const idRaportArray = data.map((raport) => raport.id_raport);
            // Set the selectedIdRaport state with the first id_raport from the array
            setSelectedIdRaport(idRaportArray[0]);
          } else {
            console.error("No raport data found for the selected student.");
            setSelectedIdRaport("");
          }
          // Set the fetched raport data
          setRaportData(data);
        })
        .catch((error) => console.error("Error fetching raport data:", error));
    }
  }, [nisSiswa, selectedRaportMain]);

  const addNilai = async () => {
    // Validate the input fields
    if (!selectedMapel || !selectedIdRaport || !dataNilai) {
      console.error("Please fill in all the required fields.");
      return {
        success: false,
        message: "Please fill in all the required fields.",
      };
    }

    // Convert dataNilai from string to number if necessary
    const nilai = parseInt(dataNilai);
    let dataPredikat = "";
    let dataDeskripsi = "";

    if (nilai > 90 && nilai <= 100) {
      dataPredikat = "A";
      dataDeskripsi = "Sangat Baik";
    } else if (nilai > 80) {
      dataPredikat = "B";
      dataDeskripsi = "Baik";
    } else if (nilai > 70) {
      dataPredikat = "C";
      dataDeskripsi = "Cukup";
    } else if (nilai > 60) {
      dataPredikat = "D";
      dataDeskripsi = "Kurang";
    } else {
      dataPredikat = "E";
      dataDeskripsi = "Sangat Kurang";
    }

    const newNilai = {
      id_matapelajaran: selectedMapel,
      id_raport: parseInt(selectedIdRaport),
      nilai: nilai,
      predikat: dataPredikat,
      deskripsi: dataDeskripsi,
    };

    try {
      const response = await fetch(
        "https://jojopinjam.iffan.site/api/add-detail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newNilai),
        }
      );

      const data = await response.json();
      console.log("Nilai added successfully:", data);
      // Additional actions after successfully adding the nilai
      return { success: true, message: "Data berhasil dimasukkan!" };
    } catch (error) {
      console.error("Error adding nilai:", error);
      return {
        success: false,
        message: "Terjadi kesalahan. Mohon coba lagi.",
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addNilai();
      console.log(
        "Submitted:",
        selectedMapel,
        selectedIdRaport,
        parseInt(dataNilai),
        dataPredikat,
        dataDeskripsi
      );
      if (response.success) {
        alert("Data berhasil dimasukkan!");
        console.log(
          "mapel: ",
          selectedMapel,
          "\nraport: ",
          selectedIdRaport,
          "\nnilai: ",
          dataNilai
        );
      } else {
        alert(
          "Data tidak berhasil dimasukkan. Mohon coba lagi. " + response.message
        );
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Terjadi kesalahan. Mohon coba lagi.");
    }
  };
  const handleReset = () => {
    // setSelectedMapel(""),
    //   setSelectedIdRaport(""),
    //   setDataNilai(""),
    //   setDataPredikat(""),
    //   setDataDeskripsi("");
  };
  return (
    <div className="INPUT-NILAI">
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
          <p className="p">Copyright Â© SMP Kristen Getasan 2023</p>
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
        <div className="text-wrapper-12">Input Nilai</div>
        <div className="group-8">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-13">Nama Siswa</div>
            </div>
          </div>
          <div className="frame-2">
            <select
              className="dropdown"
              onChange={(e) => setSelectedSiswa(e.target.value)}
            >
              {dataSiswa.map((item, index) => (
                <option key={index} value={item.nis}>
                  {item.nama}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="group-9">
          <div className="frame-2">
            <div className="text-wrapper-13">Mata Pelajaran</div>
          </div>
          <div className="frame-2">
            <select
              className="dropdown"
              onChange={(e) => setSelectedMapel(e.target.value)}
            >
              {dataMapel.map((item) => (
                <option
                  key={item.id_matapelajaran}
                  value={item.id_matapelajaran}
                >
                  {item.nama_matapelajaran}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="group-10">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-13">Nilai</div>
            </div>
          </div>
          <div className="frame-2">
            <input
              type="number"
              className="dropdown"
              onChange={(e) => setDataNilai(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="group-11">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-13">Kelas - Semester</div>
            </div>
          </div>
          <div className="frame-2">
            <select
              className="dropdown"
              value={selectedIdRaport} // Menggunakan selectedIdRaport sebagai nilai terpilih
              onChange={(e) => setSelectedIdRaport(e.target.value)} // Mengatur selectedIdRaport dengan nilai terpilih
            >
              {raportMain.map((item, index) => (
                <option key={index} value={item.id_raport}>
                  {`Kelas ${item.kelas} - Semester ${item.semester}`}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="group-12">
          <div className="frame-7" onClick={handleSubmit}>
            <div className="text-wrapper-15">Simpan</div>
          </div>
          <div className="frame-8" onClick={handleReset}>
            <div className="text-wrapper-15">Reset</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InputNilai;
