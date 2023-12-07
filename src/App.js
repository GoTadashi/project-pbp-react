import logo from "./logo.svg";
import "./App.css";
import edit from "./img/edit.png";
import EditGuru from "./pages/EditGuru";
import LihatNilai from "./pages/LihatNilai";
import InputNilai from "./pages/InputNilai";
import InputRaport from "./pages/InputRaport";
import EditNilai from "./pages/EditNilai";
import DataSiswa from "./pages/DataSiswa";
import TambahMapel from "./pages/TambahMapel";
import EditMapel from "./pages/EditMapel";
import DaftarMapel from "./pages/DaftarMapel";
import GuruLihatNilai from "./pages/GuruLihatNilai";
import DashboardGuru from "./pages/DashboardGuru";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginSiswa from "./pages/LoginSiswa";
import LihatRaport from "./pages/LihatRaport";
import SiswaLihatNilai from "./pages/SiswaLihatNilai";

function App() {
  return (
    <Router>
      <div className="app-header"></div>
      <Switch>
        <div className="app-content">
          {/* 
          editguru done
          datanilai semester dan kelas rancu
          lihatnilai -
          inputnilai -
          editnilai -
          */}

          <Route path="/LoginSiswa" exact component={LoginSiswa} />
          <Route path="/DashboardGuru" exact component={DashboardGuru} />
          {/* Data Guru */}
          <Route path="/EditGuru" exact component={EditGuru} />
          {/* Data Raport */}
          <Route path="/DataSiswa" exact component={DataSiswa} />
          {/* Data Detail */}
          <Route path="/LihatNilai" exact component={LihatNilai} />
          <Route path="/SiswaLihatNilai/:nisSiswa" exact component={SiswaLihatNilai} />
          <Route path="/LihatRaport" component={LihatRaport} />
          <Route path="/inputnilai/:nisSiswa" component={InputNilai} />
          <Route path="/inputraport/:nisSiswa" component={InputRaport} />
          <Route path="/EditNilai" exact component={EditNilai} />
          {/* Data Mapel */}
          <Route path="/TambahMapel" exact component={TambahMapel} />
          <Route path="/EditMapel" exact component={EditMapel} />
          <Route path="/DaftarMapel" exact component={DaftarMapel} />

          <Route path="/GuruLihatNilai" exact component={GuruLihatNilai} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
