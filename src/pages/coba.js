import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RaportPage = () => {
  const { nisSiswa } = useParams();
  const [raportMain, setRaportMain] = useState([]);
  const [selectedRaportMain, setSelectedRaportMain] = useState('');
  const [raportData, setRaportData] = useState([]);
  const [mataPelajaran, setMataPelajaran] = useState([]);

  useEffect(() => {
    // Fetch data raport-main
    fetch(`https://jojopinjam.iffan.site/api/get-raport-main/${nisSiswa}`)
      .then(response => response.json())
      .then(data => {
        console.log('Raport Main Data:', data);
        setRaportMain(data);
      })
      .catch(error => console.error('Error fetching raport-main:', error));
  }, [nisSiswa]);

  useEffect(() => {
    // Fetch data matapelajaran
    fetch('https://jojopinjam.iffan.site/api/get-matapelajaran')
      .then(response => response.json())
      .then(data => {
        console.log('Mata Pelajaran Data:', data);
        setMataPelajaran(data);
      })
      .catch(error => console.error('Error fetching matapelajaran:', error));
  }, []);

  useEffect(() => {
    // Fetch data raport based on selectedRaportMain
    if (selectedRaportMain) {
      const [kelas, semester] = selectedRaportMain.split('-');
      fetch(`https://jojopinjam.iffan.site/api/get-raport/${nisSiswa}/${kelas}-${semester}`)
        .then(response => response.json())
        .then(data => setRaportData(data))
        .catch(error => console.error('Error fetching raport data:', error));
    }
  }, [nisSiswa, selectedRaportMain]);

  return (
    <div>
      <div className="dropdown-frame">
        <select
          className="dropdown"
          value={selectedRaportMain}
          onChange={(e) => setSelectedRaportMain(e.target.value)}
        >
          <option value="">Select Raport</option>
          {raportMain.map((item, index) => (
            <option key={index} value={`${item.kelas}-${item.semester}`}>
              {`Kelas ${item.kelas} - Semester ${item.semester}`}
            </option>
          ))}
        </select>
      </div>

      {/* Tabel untuk menampilkan data raport */}
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Mata Pelajaran</th>
            <th>Nilai</th>
            <th>Predikat</th>
          </tr>
        </thead>
        <tbody>
          {raportData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.nama_matapelajaran}</td>
              <td>{item.nilai}</td>
              <td>{item.predikat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RaportPage;
