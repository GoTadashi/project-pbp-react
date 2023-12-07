import React from "react";
import { Calendar } from "./Calendar";
import "./EditSiswa.css";

export const EditSiswa = () => {
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
                  <img className="sun-solid" alt="Sun solid" src="sun-solid.svg" />
                </div>
              </div>
              <div className="text-wrapper-3">Dark</div>
              <img className="moon-solid" alt="Moon solid" src="moon-solid.svg" />
            </div>
          </div>
          <div className="SISWA">
            <img className="icon-SISWA" alt="Icon SISWA" src="icon-SISWA.png" />
            <div className="text-wrapper">Siswa</div>
          </div>
          <div className="CHAT">
            <img className="icon-envelope" alt="Icon envelope" src="icon-envelope.png" />
            <div className="text-wrapper">Chat</div>
          </div>
          <div className="CHAT-2">
            <img className="icon-attendance" alt="Icon attendance" src="icon-attendance.png" />
            <div className="text-wrapper">Generate Absen</div>
          </div>
          <div className="CHAT-3">
            <img className="icon-calender" alt="Icon calender" src="icon-calender.png" />
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
            <img className="SMP-KRISTEN" alt="Smp KRISTEN" src="SMP-KRISTEN-2.png" />
          </div>
        </header>
        <div className="group-8">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-14">NIS</div>
              <div className="text-wrapper-15">*</div>
            </div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-16">101</div>
          </div>
        </div>
        <div className="group-9">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-14">Nama Lengkap</div>
              <div className="text-wrapper-17">*</div>
            </div>
          </div>
          <div className="frame-4">
            <div className="text-wrapper-16">Ahmad</div>
          </div>
        </div>
        <div className="group-10">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-14">Jenis Kelamin</div>
              <div className="text-wrapper-17">*</div>
            </div>
          </div>
          <div className="overlap-3">
            <div className="frame-5">
              <div className="text-wrapper-16">Laki-Laki</div>
            </div>
            <img className="icon-chevron-down" alt="Icon chevron down" src="icon-chevron-down.png" />
          </div>
        </div>
        <div className="group-11">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-14">Agama</div>
              <div className="text-wrapper-17">*</div>
            </div>
          </div>
          <div className="overlap-3">
            <div className="frame-5">
              <div className="text-wrapper-16">Laki-Laki</div>
            </div>
            <img className="icon-chevron-down" alt="Icon chevron down" src="image.png" />
          </div>
        </div>
        <div className="group-12">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-14">Nama Ayah</div>
              <div className="text-wrapper-17">*</div>
            </div>
          </div>
          <div className="frame-6">
            <div className="text-wrapper-16">Muhammad</div>
          </div>
        </div>
        <div className="group-13">
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="text-wrapper-14">Nama Ibu</div>
              <div className="text-wrapper-17">*</div>
            </div>
          </div>
          <div className="frame-6">
            <div className="text-wrapper-16">Aminah</div>
          </div>
        </div>
        <div className="group-14">
          <div className="component">
            <div className="frame-7">
              <div className="frame-8">
                <div className="text-wrapper-18">Tanggal Lahir</div>
                <div className="text-wrapper-17">*</div>
              </div>
              <div className="frame-9">
                <div className="text-wrapper-16">06/21/2008</div>
                <Calendar className="vuesax-linear" />
              </div>
            </div>
          </div>
          <div className="group-15">
            <div className="group-16">
              <div className="frame-10">
                <div className="text-wrapper-16">Salatiga</div>
              </div>
            </div>
            <div className="frame-11">
              <div className="text-wrapper-18">Tempat Lahir</div>
              <div className="text-wrapper-17">*</div>
            </div>
          </div>
        </div>
        <div className="TAMBAH-DATA">
          <div className="text-wrapper-19">Simpan Data</div>
        </div>
      </div>
    </div>
  );
};
