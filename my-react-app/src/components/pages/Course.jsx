import ProgressBar from "../ui/ProgressBar";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import Footers_course from "../shared/Footers_course";
import Navbar_dashboard from "../shared/Navbar";
const Course = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar_dashboard />

      <div className="mt-20">
        <Button
          type={"button"}
          className="mt-6"
          variation={"back"}
          onClick={() => navigate("/dashboard")}
        >
          <img src="../src/assets/ep_back.svg" alt="" width="25px" />
        </Button>
        <h3 className="text-black text-xl  text-left px-32 pb-5">
          Java <ProgressBar />
        </h3>

        <hr className="bg-blue" />
      </div>
      <div className="">
        <h2 className="text-black text-3xl font-bold  mb-2 text-left px-24 pt-4">
          Konsep Pemrograman Dasar
        </h2>

        <img src="./src/assets/java.png" />
      </div>
      <div className="mt-2 px-24 text-black text-left">
        <h3 className="font-bold text-xl">
          "Halo User! Selamat Datang di Kelas Konsep Dasar Pemrograman Java."
        </h3>
        <p>
          Pada kelas ini kita akan belajar hal-hal fundamental yang perlu Anda
          ketahui tentang bahasa pemrograman Java agar dapat anda
          implementasikan di kemudian hari.{" "}
        </p>
        <p className="mt-4">
          Materi yang tersaji ramah untuk pemula, sehingga tidak ada prasyarat
          pemrograman yang perlu Anda kuasai untuk belajar di kelas ini.
          Beberapa hal yang akan dipelajari pada kelas ini, antara lain:
        </p>
        <ul>
          <li>
            <strong>1. Kelas:</strong>{" "}
            <li>Dalam Java, kelas adalah blueprint untuk menciptakan objek.</li>
          </li>
          <li>
            <strong>Objek:</strong> Objek adalah instance dari sebuah kelas.
          </li>
          <li>
            <strong>Pewarisan (Inheritance):</strong> Konsep di mana sebuah
            kelas dapat mewarisi atribut dan metode dari kelas lain.
          </li>
          <li>
            <strong>Polimorfisme:</strong> Kemampuan untuk menggunakan nama yang
            sama untuk metode yang berbeda dalam kelas yang berbeda.
          </li>
          <li>
            <strong>Abstraksi:</strong> Proses menyembunyikan detail
            implementasi dan hanya menampilkan fungsionalitas yang relevan bagi
            pengguna.
          </li>
          <li>
            <strong>Enkapsulasi:</strong> Konsep yang memungkinkan penyembunyian
            rincian internal objek dan hanya mengekspos fungsi yang relevan.
            Dapat dicapai dengan mendeklarasikan atribut sebagai pribadi dan
            menyediakan metode akses (getters dan setters) untuk mengakses dan
            memodifikasi nilai atribut tersebut.
          </li>
          <li>
            <strong>Konstruktor:</strong> Metode khusus dalam sebuah kelas yang
            digunakan untuk menginisialisasi objek. Konstruktor memiliki nama
            yang sama dengan kelas dan dipanggil saat objek dibuat.
          </li>
          <li>
            <strong>Kelas dan Objek Statik:</strong> Anggota kelas yang dideklar
          </li>
        </ul>
      </div>
      <Footers_course />
    </>
  );
};
export default Course;
