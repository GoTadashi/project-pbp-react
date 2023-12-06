import React from "react";
import "./LoginSiswa.css";
import mainLogo from'../img/logo.png';

export const LoginSiswa = () => {
    return (
        <div className="LOGIN-SISWA">
            <div className="div">
                <footer className="FOOTER">
                    <p className="text-wrapper">
                        Jalan Pangeran Diponegoro Km. 9, Getasan, Kec. Getasan, Kabupaten Semarang, Jawa Tengah 50774
                    </p>
                    <img className="line" alt="Line" src="/img/line-1.svg" />
                    <img className="img" alt="Line" src="/img/line-1.svg" />
                    <div className="text-wrapper-2">SCH</div>
                </footer>
                <div className="FORM-LOGIN">
                    <div className="overlap">
                        <div className="rectangle" />
                        <div className="text-wrapper-3">ID Siswa</div>
                        <img className="iconsax-linear" alt="Iconsax linear" src="/img/iconsax-linear-profilecircle.svg" />
                        <div className="rectangle" />
                        <input
                            type="text"
                            className="text-wrapper-4"
                            id="nis"
                            placeholder="NISN Siswa"
                        />
                        <img className="icon-user" alt="Icon user" src="/img/icon-user.png" />
                        <p className="takut-akan-TUHAN">
                            <span className="span">
                                Takut akan TUHAN adalah permulaan pengetahuan, tetapi orang bodoh menghina hikmat dan didikan.
                                <br />
                            </span>
                            <span className="text-wrapper-5">Amsal 1:7</span>
                        </p>
                    </div>
                    <div className="overlap-group">
                        <input
                            type="pasword"
                            className="text-wrapper-7"
                            id="pass"
                            placeholder="Password"
                        />
                        <img className="icon-lock" alt="Icon lock" src="/img/icon-lock.png" />
                    </div>
                    <div className="overlap-2">
                        <div className="SMP-KRISTEN-GETASAN">
                            SMP KRISTEN GETASAN
                            <br />
                            E-Rapor
                        </div>
                        <img className="SMP-KRISTEN" src={mainLogo} alt="SD"/>
                    </div>
                    <div className="frame">
                        <div className="text-wrapper-8">Masuk</div>
                    </div>
                </div>
                {/* <div className="overlap-3">
                    <div className="text-wrapper-9">LOGIN SISWA/WALI</div>
                    <img className="SISWA" alt="Siswa" src="/img/siswa-1.png" />
                </div> */}
                <img className="icon-arrow-left" alt="Icon arrow left" src="/img/icon-arrow-left.png" />
            </div>
        </div>
    );
};
