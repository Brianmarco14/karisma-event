import { useState } from 'react';
import Button from '../../components/Button';
import Instruction from './Instruction';
import { useLearning } from '@/hooks/useLearning';

const PracticeDetail = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const { activeMaterial: data } = useLearning();

  const handleDetail = () => {
    setOpenDetail(!openDetail);
  };

  if (openDetail) {
    return <Instruction data={data.detail} handleDetail={handleDetail}/>;
  } else {
    return (
      <div
        className={`bg-gradient-to-r p-2 lg:p-6 ${data.detail.assignment_log === null ? 'from-[#182555] to-[#971B1D]' : 'from-[#1FC45D] to-[#052F16]'}  h-full flex justify-center items-center`}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
          <div className=" relative w-2/3 lg:w-1/3">
            <img src={'/practice-detail.webp'} className={''} />
          </div>
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start gap-y-5">
            <div className="flex flex-col items-center lg:items-start">
              <Button
                color={
                  data.detail.assignment_log === null
                    ? 'merah'
                    : data.detail.assignment_log?.status === 'submitted' &&
                        data.detail.assignment_log?.feedback === null &&
                        data.detail.assignment_log?.score === null
                      ? 'kuning'
                      : 'hijau'
                }
                className={'text-white !py-1 !text-xs'}
              >
                {data.detail.assignment_log === null
                  ? 'Belum Mengirim Tugas'
                  : data.detail.assignment_log?.status === 'submitted' &&
                      data.detail.assignment_log?.feedback === null &&
                      data.detail.assignment_log?.score === null
                    ? 'Sedang Dinilai'
                    : 'Selesai'}
              </Button>
              <h3 className="md:text-xl text-center text-white font-bold mt-2 md:mt-5">
                {data.name}
              </h3>
              <p className="mt-1 text-base text-white text-center lg:text-start w-full">
                {data.detail.assignment_log === null
                  ? 'Ayo segera kerjakan tugas berikut ini'
                  : data.detail.assignment_log?.status === 'submitted' &&
                      data.detail.assignment_log?.feedback === null &&
                      data.detail.assignment_log?.score === null
                    ? 'Tugas kamu sedang dinilai oleh mentor'
                    : 'Jawabanmu telah tersimpan'}
              </p>
              {data.detail.assignment_log?.feedback && (
                <div className="text-xs lg:text-xs text-white mt-3">
                  <p className="font-medium">Catatan: </p>
                  <p>{data.detail.assignment_log?.feedback}</p>
                </div>
              )}
            </div>
            <Button color="biru" onClick={handleDetail}>
              Lihat Detail Tugas
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default PracticeDetail;
