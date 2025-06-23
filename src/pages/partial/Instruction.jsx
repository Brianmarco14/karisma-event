import { FaCloudDownloadAlt, FaFileAlt } from 'react-icons/fa';
import Button from '../../components/Button';
import FileUploadCard from '../../components/FileUploadCard';
import { useState } from 'react';
import { formatDurationToMinutes } from '@/utils/generate';
import { useLearning } from '@/hooks/useLearning';

const Instruction = ({ data, handleDetail }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { uploadAssignment, goToNextMaterial } = useLearning();
  const handleSubmit = async () => {
    try {
      await uploadAssignment(selectedFile);
      goToNextMaterial()
    } catch (err) {
      alert(err.message || 'Gagal upload tugas.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#35BAF6] to-[#1C44B0] h-full flex flex-col lg:flex-row gap-3 lg:gap-10 p-6 overflow-y-auto mb-20">
      <div className="flex-1 flex flex-col gap-y-3">
        <div className="bg-white p-5 rounded-xl">
          <div className="mb-3">
            <Button
              color={
                data.assignment_log === null
                  ? 'merah'
                  : data.assignment_log?.status === 'submitted' &&
                      data.assignment_log?.feedback === null &&
                      data.assignment_log?.score === null
                    ? 'kuning'
                    : 'hijau'
              }
              className={'text-white !py-1 !text-xs mb-2'}
            >
              {data.assignment_log === null
                ? 'Belum Mengirim Tugas'
                : data.assignment_log?.status === 'submitted' &&
                    data.assignment_log?.feedback === null &&
                    data.assignment_log?.score === null
                  ? 'Sedang Dinilai'
                  : 'Selesai'}
            </Button>
            <div className="bg-blue-200 p-2 rounded-lg">
              <p className="text-sm">
                Durasi pengerjaan tugas ={' '}
                <span className="font-semibold">
                  {formatDurationToMinutes(data.duration)} Menit
                </span>
              </p>
              {/* <p className="text-sm">Kumpulkan paling lambat  <span className="font-semibold">1x24 Jam</span></p> */}
            </div>
          </div>
          <div className="mb-3">
            <p className="text-biru font-semibold">Instruksi</p>
            <p
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: data.instruction }}
            ></p>
          </div>
          {/* <div>
                        <p className="text-biru font-semibold">Tutorial Mengerjakan Tugas</p>
                        <a href="https://youtu.be/S_BDIYc57UU" className="text-sm underline text-biru-dark font-medium">Lihat Tutorial Pengerjaan</a>
                    </div> */}
        </div>
        <div className="bg-white p-5 rounded-xl">
          <div>
            <p className="text-biru font-semibold">Tujuan Tugas</p>
            <p
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: data.objective }}
            ></p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl">
          <div className="mb-2">
            <p className="text-biru font-semibold">File Asset Tugas</p>
            <p className="text-sm">
              Silahkan download file dibawah ini untuk membantu kamu
              menyelesaikan tugas.
            </p>
          </div>
          <div className="bg-blue-200 flex justify-between items-center p-2 pe-3 rounded-lg">
            <div className="flex gap-2">
              <p className="text-biru font-semibold">Aset TPM</p>
              {/* <div className="">
                    <p className="text-sm">Ukuran file : Tidak diketahui</p>
                </div> */}
            </div>
            <a href={`https://media.karismaacademy.com/${data.pdf}`} download>
              <FaCloudDownloadAlt className="text-2xl text-biru" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-y-3">
        <div className="bg-white p-5 rounded-xl">
          <div className="mb-2">
            <p className="text-biru font-semibold">Upload Tugas</p>
            <FileUploadCard
              onFileChange={setSelectedFile}
              initialFileName={
                data.assignment_log?.task
                  ? data.assignment_log.task.split('/').pop()
                  : ''
              }
              initialOnly={Boolean(data.assignment_log?.task)}
            />
          </div>
          <div className="text-center">
            <p className="text-sm mb-1">Ukuran maksimum file: 2 MB (pdf)</p>
            {!data.assignment_log?.task && selectedFile && (
              <Button
                className={'w-full justify-center'}
                onClick={handleSubmit}
              >
                Upload File Tugas
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
