import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiYoutubeLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

const typeIcons = {
  video: (active) => (
    <RiYoutubeLine className={`text-lg shrink-0 ${active ? "text-white" : "text-blue-800"}`} />
  ),
  reading: (active) => (
    <img className="w-4" src={active ? "/sbw4.webp" : "/list4.webp"} alt="" />
  ),
  webinar: (active) => (
    <img className="w-4" src={active ? "/sbw1.webp" : "/list3.webp"} alt="" />
  ),
  quiz: (active) => (
    <img className="w-4" src={active ? "/sbw5.webp" : "/list2.webp"} alt="" />
  ),
  practice: (active) => (
    <img className="w-2" src={active ? "/sbw2.webp" : "/list1.webp"} alt="" />
  ),
  embed: (active) => (
    <img className="w-4" src={active ? "/sbw3.webp" : "/material.webp"} alt="" />
  ),
  essay: (active) => (
    <img className="w-4" src={active ? "/sbw3.webp" : "/material.webp"} alt="" />
  ),
  text: (active) => (
    <img className="w-4" src={active ? "/sbw4.webp" : "/list4.webp"} alt="" />
  ),
};

const Accordion = ({ chapter, materialId, handleShow, handleActive }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="rounded-xl overflow-hidden mb-4 ">
      <button
        className="w-full text-left px-4 py-4 font-bold text-white !bg-gradient-to-r from-hijau to-hijau-dark flex justify-between items-center rounded-xl"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          <MdKeyboardArrowRight className={`${open ? 'rotate-90' : ''} duration-200 text-xl`} />
          <span>{chapter.chapter_name}</span>
        </div>
        <TbRosetteDiscountCheckFilled className="text-xl" />
      </button>

      {open && (
        <div className="bg-white ps-3 pt-2 flex flex-col items-center shadow-xl">
          {chapter.materials?.map((material, index) => {
            const isActive = materialId === material.material_id;
            const isComplete = material.is_complete;

            return (
              <button
                key={index}
                onClick={() => handleActive(material.material_id, chapter.chapter_id)}
                className={`duration-300 w-full text-left px-4 py-3 rounded-2xl my-2 mx-2 flex justify-between items-center shadow-sm relative  ${isComplete || isActive
                  ? "text-black bg-kuning hover:bg-kuning-dark "
                  : "bg-zinc-200 hover:bg-zinc-100"
                  } ${isActive ? "!bg-gradient-to-r from-biru to-biru-dark !text-white" : ""}`}
              >
                <div className="flex items-center gap-2">
                  {typeIcons[material.material_type] && typeIcons[material.material_type](isActive)}

                  <div className="flex flex-col text-left">
                    <h2 className="text-sm font-bold max-w-[25rem] xs:max-w-none">{material.material_name}</h2>
                    <p className="text-xs text-start ms-1">{material.material_type}</p>
                  </div>
                </div>
                {
                  isActive && (
                    <FaBookmark className="text-kuning text-2xl absolute right-12 -top-0.5" />
                  )
                }

                <TbRosetteDiscountCheckFilled
                  className={`text-lg ${isActive && isComplete ? "text-white" : isComplete ? "text-hijau" : "text-transparent"}`}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Accordion;
