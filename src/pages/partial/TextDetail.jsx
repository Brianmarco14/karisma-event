
const TextDetail = () => {
  return (
    <div className="bg-gradient-to-r from-[#FDD946] to-[#FCB741] h-full flex justify-center items-center">
      <div className="flex flex-col lg:flex-row gap-x-8 gap-y-5 lg:gap-y-0 justify-center px-5 lg:px-20 ">
        <div className="flex flex-col gap-y-6 w-full lg:w-3/5">
          <h3 className="md:text-5xl font-bold mt-2 md:mt-5">Selamat Datang!</h3>
          <div>
            <p className="mb-2 text-base w-4/5 lg:w-full">Silahkan menyelesaikan program berikut dengan mengikuti seluruh rangkaian aktivitas hingga akhir untuk mendapatkan sertifikat. </p>
            <p className="mb-2 text-base w-4/5 lg:w-full">Jika terdapat kendala, mohon untuk dapat segera melaporkan kendala tersebut pada kontak CS yang dapat dilihat pada deskripsi program ini.</p>
            <p className="mb-2 text-base w-4/5 lg:w-full">Terima kasih. </p>
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex justify-center items-center">
          <div className="size-32 lg:size-44 relative flex justify-center items-center">
            <img src={`/robowelcome.webp`} alt="robot welcome" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextDetail