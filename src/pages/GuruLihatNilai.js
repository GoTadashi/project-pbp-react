import React from "react";
import "./GuruLihatNilai.css";

export const GuruLihatNilai = () => {
  return (
    <div className="GURU-LIHAT-NILAI">
      <div className="div">
        <div className="MENU-SIDEBAR">
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
          <div className="overlap-3">
            <div className="rectangle" />
            <div className="navbar-wrapper">
              <div className="div-2">
                <div className="text-wrapper-6">Agama Kristen</div>
                <div className="text-wrapper-7">1.</div>
                <div className="text-wrapper-8">90</div>
                <div className="text-wrapper-9">A</div>
              </div>
            </div>
            <div className="NILAI-2">
              <div className="text-wrapper-10">Bahasa Indonesia</div>
              <div className="text-wrapper-11">2.</div>
              <div className="text-wrapper-12">85</div>
              <div className="text-wrapper-13">A</div>
            </div>
            <div className="overlap-wrapper">
              <div className="div-2">
                <div className="text-wrapper-6">Ppkn</div>
                <div className="text-wrapper-7">3.</div>
                <div className="text-wrapper-8">84</div>
                <div className="text-wrapper-9">B</div>
              </div>
            </div>
            <div className="NILAI-3">
              <div className="text-wrapper-10">Bahasa Inggris</div>
              <div className="text-wrapper-11">4.</div>
              <div className="text-wrapper-12">89</div>
              <div className="text-wrapper-13">A</div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="div-2">
                <div className="text-wrapper-14">Matematika</div>
                <div className="text-wrapper-15">5.</div>
                <div className="text-wrapper-16">75</div>
                <div className="b">B-</div>
              </div>
            </div>
          </div>
          <div className="HEADER-TABEL">
            <div className="navbar">
              <div className="mata-pelajaran">Mata Pelajaran</div>
              <div className="text-wrapper-17">No.</div>
              <div className="text-wrapper-18">Nilai</div>
              <div className="text-wrapper-19">Predikat</div>
            </div>
          </div>
          <div className="kelompok-a-wajib">Kelompok A (wajib)</div>
          <div className="PAGES">
            <div className="div-wrapper">
              <div className="overlap-group-2">
                <div className="ellipse" />
                <div className="text-wrapper-20">1</div>
              </div>
            </div>
            <div className="text-wrapper-21">2</div>
            <div className="text-wrapper-22">3</div>
          </div>
          <div className="download-button">
            <div className="text-wrapper-23">Download Rapor</div>
          </div>
        </div>
        <div className="nama-ahmad-NISIN">
          Nama: Ahmad
          <br />
          nisin : 101
        </div>
        <div className="frame">
          <div className="text-wrapper-24">Semester 1</div>
          <img className="icon-chevron-down" alt="Icon chevron down" src="icon-chevron-down.png" />
        </div>
        <header className="HEADER">
          <div className="overlap-4">
            <div className="element-wrapper">
              <img className="element-2" alt="Element" src="3.svg" />
            </div>
            <div className="search">
              <div className="group-3">
                <img className="element-3" alt="Element" src="7.svg" />
                <div className="text-wrapper-25">Pencarian</div>
              </div>
            </div>
            <div className="SMP-KRISTEN-GETASAN">
              Smp Kristen Getasan
              <br />
              e-rapor
            </div>
            <img className="ellipse-2" alt="Ellipse" src="ellipse-1192.svg" />
            <img className="SMP-KRISTEN" alt="Smp KRISTEN" src="SMP-KRISTEN-2.png" />
            <div className="group-wrapper">
              <div className="group-4">
                <div className="group-5">
                  <div className="text-wrapper-26">Guru Matematika</div>
                  <div className="text-wrapper-27">Eni Susilowati</div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};


export default GuruLihatNilai;