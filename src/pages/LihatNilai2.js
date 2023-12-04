import React from "react";
import "./LihatNilai2.css";

export const LihatNilai2 = () => {
  return (
    <div className="LIHAT-NILAI">
      <div className="div">
        <div className="MENU-SIDEBAR">
          <div className="PROFILE">
            {/* <img className="element" alt="Element" src={64.svg} /> */}
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
                  <img className="sun-solid" alt="Sun solid" src="sun-solid.svg" />
                </div>
              </div>
              <div className="text-wrapper-3">Dark</div>
              <img className="moon-solid" alt="Moon solid" src="moon-solid.svg" />
            </div>
          </div>
          <div className="NILAI-wrapper">
            <div className="NILAI">
              <img className="icon-SISWA" alt="Icon SISWA" src="icon-SISWA.png" />
              <div className="text-wrapper">Nilai</div>
            </div>
          </div>
          <div className="CHAT">
            <img className="icon-envelope" alt="Icon envelope" src="icon-envelope.png" />
            <div className="text-wrapper">Chat</div>
          </div>
          <div className="DASHBOARD">
            <img className="element" alt="Element" src="1.svg" />
            <div className="text-wrapper">Dashboard</div>
          </div>
        </div>
        <footer className="FOOTER">
          <p className="p">
            Jalan Pangeran Diponegoro Km. 9, Getasan, Kec. Getasan, Kabupaten Semarang, Jawa Tengah 50774
          </p>
          <img className="line" alt="Line" src="line-2.svg" />
          <img className="img" alt="Line" src="line-1.svg" />
          <div className="text-wrapper-4">SCH</div>
        </footer>
        <div className="overlap-2">
          <div className="text-wrapper-5">Data Nilai Semester 1</div>
          <div className="navbar">
            <div className="mata-pelajaran">Mata Pelajaran</div>
            <div className="text-wrapper-6">No.</div>
            <div className="text-wrapper-7">Nilai</div>
            <div className="text-wrapper-8">Predikat</div>
          </div>
          <div className="overlap-3">
            <div className="navbar-2">
              <div className="text-wrapper-9">Seni Budaya</div>
              <div className="text-wrapper-10">1.</div>
              <div className="text-wrapper-11">80</div>
              <div className="text-wrapper-12">B</div>
            </div>
            <div className="overlap-4">
              <div className="text-wrapper-9">Kewirausahaan</div>
              <div className="text-wrapper-10">3.</div>
              <div className="text-wrapper-11">82</div>
              <div className="text-wrapper-12">B</div>
            </div>
            <div className="text-wrapper-13">Penjasorkes</div>
            <div className="text-wrapper-14">2.</div>
            <div className="text-wrapper-15">90</div>
            <div className="text-wrapper-16">A</div>
          </div>
          <div className="kelompok-b-wajib">Kelompok B (wajib)</div>
          <div className="PAGES">
            <div className="text-wrapper-17">1</div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="ellipse" />
                <div className="text-wrapper-18">2</div>
              </div>
            </div>
            <div className="text-wrapper-19">3</div>
          </div>
          <div className="download-button">
            <div className="text-wrapper-20">Download Rapor</div>
          </div>
        </div>
        <div className="frame">
          <div className="text-wrapper-21">Semester 1</div>
          <img className="icon-chevron-down" alt="Icon chevron down" src="icon-chevron-down.png" />
        </div>
        <header className="HEADER">
          <div className="overlap-5">
            <div className="group-wrapper">
              <div className="div-wrapper">
                <div className="group-3">
                  <div className="group-4">
                    <div className="text-wrapper-22">Siswa</div>
                    <div className="text-wrapper-23">Anggi Adinda</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="element-wrapper">
              <img className="element-2" alt="Element" src="3.svg" />
            </div>
            <div className="search">
              <div className="group-5">
                <img className="element-3" alt="Element" src="7.svg" />
                <div className="text-wrapper-24">Pencarian</div>
              </div>
            </div>
            <div className="SMP-KRISTEN-GETASAN">
              Smp Kristen Getasan
              <br />
              e-rapor
            </div>
            <img className="ellipse-2" alt="Ellipse" src="ellipse-1192.svg" />
            <img className="SMP-KRISTEN" alt="Smp KRISTEN" src="SMP-KRISTEN-2.png" />
          </div>
        </header>
      </div>
    </div>
  );
};

export default LihatNilai2;