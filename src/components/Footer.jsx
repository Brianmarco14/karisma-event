import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-7 pt-10 text-sm">
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-start items-center md:justify-around">
          <div className="flex flex-col items-center md:items-start text-center md:text-start">
            <img src="/logokarisma.webp" width={250} />
            <p className="w-2/4 text-sm">Platform Edutech Terdepan Pembentuk Pemimpin Digital Berkarakter dan Berdampak.</p>
            <h2 className="font-bold mt-5">Alamat</h2>
            <p className="w-8/12">
              Jl. Watu Gong No. 18, Kel. Ketawanggede, Kec. Lowokwaru, Kota
              Malang, Jawa Timur 65145
            </p>
          </div>
          <div className="flex flex-wrap gap-7">
            <div>
              <h2 className="font-bold">Program Karisma</h2>
              <div className="flex flex-col gap-2 mt-4">
                <Link to="/live-webinar" className="hover:text-blue-800">
                  <p>Kelas Live Webinar</p>
                </Link>
                <Link to="/vidio-belajar-spl" className="hover:text-blue-800">
                  <p>Kelas Video Belajar</p>
                </Link>
              </div>
            </div>
            <div>
              <h2 className="font-bold">Tentang Karisma</h2>
              <div className="flex flex-col gap-2 mt-4">
                <Link to="/faq" className="hover:text-blue-800">
                  <p>FAQ</p>
                </Link>
                <Link to="/kebijakan" className="hover:text-blue-800">
                  <p>Kebijakan Privasi</p>
                </Link>
                <Link to="/ketentuan" className="hover:text-blue-800">
                  <p>Ketentuan Pengguna</p>
                </Link>
                <Link to="/tentang" className="hover:text-blue-800">
                  <p>Tentang Kami</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col flex-wrap *:flex ">
              <h2 className="font-bold">Hubungi Kami</h2>
              <div className="flex flex-col gap-2 mt-4">
                <a
                  href="https://www.instagram.com/karismaacademy/?hl=en"
                  className="hover:text-blue-900 flex gap-1"
                >
                  <FaInstagram className="size-5 mx-1" />
                  <p>@karismaacademy</p>
                </a>
                <a href="" className="hover:text-blue-900 flex gap-1">
                  <img
                    className="size-5 mx-1"
                    src="/tiktok.webp"
                    alt=""
                  />
                  <p>@karismaacademy</p>
                </a>
                <a
                  href="https://id.linkedin.com/company/lkp-karisma-academy"
                  className="hover:text-blue-900 flex gap-1"
                >
                  <img
                    className="size-5 mx-1"
                    src="/linkedin.webp"
                    alt=""
                  />
                  <p>Karisma Academy</p>
                </a>
                <a
                  href="https://wa.me/628113631515"
                  className="hover:text-blue-900 flex gap-1"
                >
                  <img
                    className="size-5 mx-1"
                    src="/whatsapp.webp"
                    alt=""
                  />
                  <p>0811 3631 515</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center py-5 border-t-4 mt-10">
          &copy; 2025 PT. Karisma Garuda Mulia
        </p>
      </div>
    </>
  );
};

export default Footer;
