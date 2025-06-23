import Button from "@/components/Button";
import axios from "@/config/axios/index.js";
import { formatDate } from "@/utils/generate";
import { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Profile = () => {
  const [tab, setTab] = useState("profile")
  const [profile, setProfile] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    birth_date: ""
  })

  const [formPassword, setFormPassword] = useState({
    old_password: "",
    new_password: "",
    confirm_password: ""
  })

  const [showPassword, setShowPassword] = useState({
    old_password: false,
    new_password: false,
    confirm_password: false,
  })

  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  const handleTab = (item) => {
    setTab(item)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormPassword(prev => ({ ...prev, [name]: value }));
  }

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/profile", {
        ...formData,
        birth_date: formatDate(formData.birth_date)
      });

    } catch (err) {
      console.error("Gagal update profil:", err);
      throw err
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/profile/new-password", formPassword);
    } catch (err) {
      console.error("Gagal update password:", err);
      throw err
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/profile')
        const data = res.data.data;
        setProfile(data);
        setFormData({
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          gender: data.gender || "",
          birth_date: data.birth_date || ""
        });
      } catch (error) {
        console.error()
        throw error
      }
    }
    fetchData()
  }, [])

  return (
    <div className="w-full 2xl:mt-20 flex flex-col gap-y-4 items-center mt-3">
      <div className="w-full  py-24 bg-gradient-to-br md:bg-gradient-to-r from-blue-900 to-green-700  text-xl flex justify-center items-center relative">
        <p className="w-full text-center capitalize text-white font-bold text-4xl"> edit profile</p>
      </div>
      <div className="pt-10 md:pt-0 lg:max-w-screen-md 2xl:max-w-screen-lg w-full flex gap-3">
        {["profile", "password"].map(item => (
          <button
            key={item}
            onClick={() => handleTab(item)}
            className={`text-center border-2 ${tab === item ? "border-biru-dark text-white bg-biru-dark" : "text-gray-500"} font-semibold py-1 px-5 rounded-full capitalize`}
          >
            {item}
          </button>
        ))}
      </div>
      {
        tab === "profile" && (
          <form onSubmit={handleUpdateProfile} className="lg:max-w-screen-md 2xl:max-w-screen-lg w-full flex flex-col gap-y-3 lg:gap-y-5 items-center gap-3 bg-blue-300 p-5 lg:p-10 rounded-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-y-2 lg:gap-y-0 w-full">
              <label htmlFor="name" className="flex-1 capitalize font-semibold text-sm lg:text-base">Nama Lengkap <span className="text-merah">*</span></label>
              <input required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="flex-1 border-2 border-biru px-3 py-2 w-full rounded-xl outline-none"
                placeholder="Masukkan Nama Lengkap"
              />            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-y-2 lg:gap-y-0 w-full">
              <p className="text-xs lg:w-1/2">*Nama akan dicantumkan pada sertifikat program. Pastikan mengisi nama sesuai dengan data diri anda.</p>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-y-2 lg:gap-y-0 w-full">
              <label htmlFor="name" className="flex-1 capitalize font-semibold text-sm lg:text-base">Email <span className="text-merah">*</span></label>
              <input required
                type="text"
                name="email"
                value={formData.email}
                readOnly
                className="flex-1 border-2 bg-gray-200 border-biru px-3 py-2 w-full rounded-xl outline-none"
              />            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-y-2 lg:gap-y-0 w-full">
              <p className="text-xs lg:w-1/2">*Silahkan hubungi admin jika email tidak sesuai atau <a href="" className="text-merah underline">klik disini</a></p>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-y-2 lg:gap-y-0 w-full">
              <label htmlFor="name" className="flex-1 capitalize font-semibold text-sm lg:text-base">Nomor Ponsel <span className="text-merah">*</span></label>
              <input required
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 border-2 border-biru px-3 py-2 w-full rounded-xl outline-none"
                placeholder="Masukkan Nomor Ponsel"
              />            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-y-2 lg:gap-y-0 w-full">
              <p className="flex-1 capitalize font-semibold text-sm lg:text-base">Jenis Kelamin <span className="text-merah">*</span></p>
              <div className="flex-1 flex gap-5">
                {["male", "female"].map(g => (
                  <div key={g} className="flex gap-1 items-center">
                    <input required
                      type="radio"
                      id={g}
                      name="gender"
                      value={g}
                      checked={formData.gender === g}
                      onChange={handleChange}
                      className="cursor-pointer"
                    />
                    <label htmlFor={g} className="text-sm lg:text-base">{g === "male" ? "Laki-laki" : "Perempuan"}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-y-2 lg:gap-y-0 w-full">
              <label htmlFor="name" className="flex-1 capitalize font-semibold text-sm lg:text-base">Tanggal Lahir <span className="text-merah">*</span></label>
              <input required
                type="date"
                name="birth_date"
                 value={formData.birth_date ? formatDate(formData.birth_date) : ""}
                onChange={handleChange}
                className="flex-1 border-2 border-biru px-3 py-2 w-full rounded-xl outline-none bg-white"
              />            
            </div>
            <Button type={"submit"} className={"w-full justify-center"}>Simpan</Button>
          </form>
        )
      }

      {
        tab === "password" && (
          <form onSubmit={handleUpdatePassword} className="lg:max-w-screen-md 2xl:max-w-screen-lg w-full flex flex-col gap-y-3 lg:gap-y-5 items-center gap-3 bg-blue-300 p-5 lg:p-10 rounded-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-y-2 lg:gap-y-0 w-full">
              <label htmlFor="name" className="flex-1 capitalize font-semibold text-sm lg:text-base">Kata Sandi Lama <span className="text-merah">*</span></label>
              <div className="flex items-center flex-1 border-2 border-biru w-full rounded-xl overflow-hidden bg-white h-11">
                <input required
                  type={showPassword.old_password ? "text" : "password"} 
                  id="old_password"
                  name="old_password"
                  value={formPassword.old_password}
                  onChange={handlePasswordChange}
                  className="outline-none text-sm lg:text-base px-3 w-full h-full"
                  placeholder="Masukkan Kata Sandi Lama"
                />
                <button
                  type="button"
                  onClick={() => togglePassword("old_password")}
                  className="bg-biru h-full px-3 flex items-center justify-center"
                >
                  {showPassword.old_password ? (
                    <FaRegEye className="text-xl text-white" />
                  ) : (
                    <FaRegEyeSlash className="text-xl text-white" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-y-2 lg:gap-y-0 w-full">
              <label htmlFor="new_password" className="flex-1 capitalize font-semibold text-sm lg:text-base">Kata Sandi Baru <span className="text-merah">*</span></label>
              <div className="flex items-center flex-1 border-2 border-biru w-full rounded-xl overflow-hidden bg-white h-11">
                <input required
                  type={showPassword.new_password ? "text" : "password"}
                  id="new_password"
                  name="new_password"
                  value={formPassword.new_password}
                  onChange={handlePasswordChange}
                  className="outline-none text-sm lg:text-base px-3 w-full h-full"
                  placeholder="Masukkan Kata Sandi Baru"
                />
                <button
                  type="button"
                  onClick={() => togglePassword("new_password")}
                  className="bg-biru h-full px-3 flex items-center justify-center"
                >
                  {showPassword.new_password ? (
                    <FaRegEye className="text-xl text-white" />
                  ) : (
                    <FaRegEyeSlash className="text-xl text-white" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-y-2 lg:gap-y-0 w-full">
              <label htmlFor="confirm_password" className="flex-1 capitalize font-semibold text-sm lg:text-base">Konfirmasi Sandi <span className="text-merah">*</span></label>
              <div className="flex items-center flex-1 border-2 border-biru w-full rounded-xl overflow-hidden bg-white h-11">
                <input required
                  type={showPassword.confirm_password ? "text" : "password"}
                  id="confirm_password"
                  name="confirm_password"
                  value={formPassword.confirm_password}
                  onChange={handlePasswordChange}
                  className="outline-none text-sm lg:text-base px-3 w-full h-full"
                  placeholder="Masukkan Konfirmasi Sandi"
                />
                <button
                  type="button"
                  onClick={() => togglePassword("confirm_password")}
                  className="bg-biru h-full px-3 flex items-center justify-center"
                >
                  {showPassword.confirm_password ? (
                    <FaRegEye className="text-xl text-white" />
                  ) : (
                    <FaRegEyeSlash className="text-xl text-white" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex justify-center gap-y-2 lg:gap-y-0 w-full">
              <p className="text-sm text-merah ">* Minimal 8 karakter kombinasi huruf kapital, huruf kecil, angka dan karakter khusus (!@#$%^&*)</p>
            </div>
            <Button className={"w-full justify-center"}>Simpan</Button>

          </form>
        )
      }

    </div>
  )
}

export default Profile