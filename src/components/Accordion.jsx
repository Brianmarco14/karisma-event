import { useState } from "react";
import { FiCheckCircle, FiAlertTriangle } from "react-icons/fi";
import { RiYoutubeLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";

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

const Accordion = ({ chapter, materialId, onClickMaterial }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="rounded-xl overflow-hidden mb-4 ">
      <button
        className="w-full text-left px-4 py-4 font-bold text-white bg-green-600 flex justify-between items-center rounded-xl"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          <MdKeyboardArrowRight className={`${open ? 'rotate-90' : ''} duration-200 text-xl`} />
          <span>{chapter.name}</span>
        </div>
        <TbRosetteDiscountCheckFilled className="text-xl"/>
      </button>

      {open && (
        <div className="bg-white ps-3 pt-2 flex flex-col items-center shadow-xl">
          {chapter.materials.map((material) => {
            const isActive = materialId === material.id;
            const isComplete = material.is_complete;

            return (
              <button
                key={material.id}
                onClick={() => onClickMaterial(material)}
                className={`duration-300 w-full text-left px-4 py-3 rounded-2xl my-2 mx-2 flex justify-between items-center shadow-sm  ${isComplete || isActive
                    ? "text-black bg-yellow-400 hover:bg-blue-900 hover:text-white"
                    : "bg-zinc-200 hover:bg-zinc-100"
                  } ${isActive ? "!bg-blue-900 !text-white" : ""}`}
              >
                <div className="flex items-center gap-2">
                  {typeIcons[material.type] && typeIcons[material.type](isActive)}

                  <div className="flex flex-col text-left">
                    <h2 className="text-sm font-bold max-w-[25rem] xs:max-w-none">{material.name}</h2>
                    <p className="text-xs text-start ms-1">{material.type}</p>

                    {material.type === "quiz" &&
                      chapter.name.toLowerCase().includes("post test") &&
                      !material.is_complete && (
                        <div className="flex gap-1 mt-1 items-center">
                          <FiAlertTriangle className="text-red-500" />
                          <p className="text-red-500 font-normal text-xs">
                            verifikasi akun prakerja diperlukan lagi sebelum mengerjakan post test
                          </p>
                        </div>
                      )}
                  </div>
                </div>

                {isComplete && (
                  <TbRosetteDiscountCheckFilled className={`text-lg ${isActive ? "text-white" : "text-green-600"}`} />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Accordion;
