import logo from "./logo.svg";
import "./App.css";
import edit from "./img/edit.png";
import EditGuru from "./pages/EditGuru";
import LihatNilai from "./pages/LihatNilai";
import LihatNilai2 from "./pages/LihatNilai2";
import LihatNilai3 from "./pages/LihatNilai3";
import InputNilai from "./pages/InputNilai";
import EditNilai from "./pages/EditNilai";
import DataNilai from "./pages/DataNilai";
import TambahMapel from "./pages/TambahMapel";
import EditMapel from "./pages/EditMapel";
import DaftarMapel from "./pages/DaftarMapel";
import GuruLihatNilai from "./pages/GuruLihatNilai";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

          {/* Data Guru */}
          <Route path="/EditGuru" exact component={EditGuru} />
          {/* Data Raport */}
          <Route path="/DataNilai" exact component={DataNilai} />
          {/* Data Detail */}
          <Route path="/LihatNilai" exact component={LihatNilai} />
          <Route path="/LihatNilai2" exact component={LihatNilai2} />
          <Route path="/LihatNilai3" exact component={LihatNilai3} />
          <Route path="/InputNilai" exact component={InputNilai} />
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
