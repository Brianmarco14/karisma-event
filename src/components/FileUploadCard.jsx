import { useRef, useState } from "react";
import { FaFileAlt } from "react-icons/fa";

const FileUploadCard = ({ onFileChange }) => {
    const inputRef = useRef(null);
    const [fileName, setFileName] = useState("");
    const [fileSize, setFileSize] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            setFileSize(formatFileSize(file.size));
             onFileChange?.(file);
        } else {
            setFileName("");
            setFileSize("");
            onFileChange?.(null);
        }
    };

    const triggerFileInput = () => {
        inputRef.current.click();
    };

    const formatFileSize = (sizeInBytes) => {
        if (sizeInBytes >= 1024 * 1024) {
            return `${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
        } else if (sizeInBytes >= 1024) {
            return `${(sizeInBytes / 1024).toFixed(2)} KB`;
        } else {
            return `${sizeInBytes} bytes`;
        }
    };

    return (
        <>
            {
                !fileName && (
                    <div className="border border-gray-300 rounded-xl p-6 w-full bg-white shadow-md">
                        <div className="flex flex-col items-center justify-center gap-3">
                            <button
                                type="button"
                                onClick={triggerFileInput}
                                className="px-4 py-2 bg-biru text-white rounded-md hover:bg-biru-dark transition"
                            >
                                Telusuri File
                            </button>
                        </div>

                        <input
                            type="file"
                            ref={inputRef}
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </div>
                )
            }

            {fileName && (
                <div className="bg-blue-200 flex justify-between items-center p-2 pe-3 mt-3 rounded-lg">
                    <div className="flex items-center gap-2">
                        <FaFileAlt className="text-2xl text-biru" />
                        <div>
                            <p className="text-biru font-semibold">{fileName}</p>
                            <p className="text-sm">Ukuran file: {fileSize}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FileUploadCard;
