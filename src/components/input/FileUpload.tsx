import React, {useState} from "react";

type FileUploadProps = {
    onFileChange: (files: File[]) => void;
    className?: string;
};

const FileUpload: React.FC<FileUploadProps> = ({onFileChange, className}) => {
    const [files, setFiles] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(event.target.files || []);
        setFiles(selectedFiles);
        onFileChange(selectedFiles);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const droppedFiles = Array.from(event.dataTransfer.files);
        setFiles(droppedFiles);
        onFileChange(droppedFiles);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div
            className={`${className} bg-[#F5F5F5] py-[30px] px-[16px] rounded-[12px] h-full flex items-center justify-center border-dashed border-2 border-gray-300 transition-all duration-300`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
                id="fileUpload"
            />
            <label
                htmlFor="fileUpload"
                className="text-[#3E3232] text-[14px] font-medium cursor-pointer flex flex-col items-center gap-[5px]"
            >
                {files.length === 0 ? (
                    <>
                        <svg
                            width="97"
                            height="84"
                            viewBox="0 0 97 84"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M84.8154 12H52.5654L43.3779 3.5625C41.1279 1.3125 38.1279 0 34.9404 0H12.8154C6.06543 0 0.81543 5.4375 0.81543 12V72C0.81543 78.75 6.06543 84 12.8154 84H84.8154C91.3779 84 96.8154 78.75 96.8154 72V24C96.8154 17.4375 91.5654 12 84.8154 12ZM87.8154 72C87.8154 73.6875 86.3154 75 84.8154 75H12.8154C11.1279 75 9.81543 73.6875 9.81543 72V12C9.81543 10.5 11.1279 9 12.8154 9H34.7529C35.5029 9 36.2529 9.375 36.8154 9.9375L48.8154 21H84.8154C86.3154 21 87.8154 22.5 87.8154 24V72Z"
                                fill="#3E3232"
                                fill-opacity="0.25"
                            />
                        </svg>
                        <span className="my-[20px] text-[#3E3232BF]">Drop Image Here, Paste Or</span>
                        <button className="bg-[#F5F5F5] py-[10px] px-[20px] rounded-[12px] border border-[#E6E6E6]">
                            + Select
                        </button>
                    </>
                ) : (
                    <>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span>{files.length} File(s) Uploaded</span>
                    </>
                )}
            </label>
        </div>
    );
};

export default FileUpload;
