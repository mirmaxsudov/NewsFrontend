import { useRef, useState } from "react";
import Editor, { EditorRef } from "../../Editor.tsx";
import GenerateBreadCrumps from "../../helpers/GenerateBreadCrumps.tsx";
import NewsInput from "../input/NewsInput.tsx";
import { InputEnum } from "../../enums/inputEnum.ts";
import FileUpload from "../input/FileUpload.tsx";

const Contact = () => {
  const [editorData, setEditorData] = useState<string>("");
  const editorRef = useRef<EditorRef>(null);
  const [subject, setSubject] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileChange = (files: File[]) => {
    setUploadedFiles(files);
  };

  return (
    <>
      <div className="container max-w-container mx-auto my-[50px] mt-[20px]">
        <GenerateBreadCrumps
          current="contact us"
          values={[
            { value: "home", link: "/" },
            { value: "contact us", link: "/contact" },
          ]}
        />
        <div className="inputs mt-[40px]">
          <div className="grid grid-cols-3 gap-[24px]">
            <NewsInput
              onChange={setSubject}
              label="subject"
              type={InputEnum.TEXT}
            />
            <NewsInput onChange={setName} label="Name" type={InputEnum.TEXT} />
            <NewsInput
              onChange={setEmail}
              label="email"
              type={InputEnum.EMAIL}
            />
          </div>
          <div className="grid grid-cols-12 gap-[24px] mt-[24px]">
            <div className="col-span-9 flex flex-col gap-[15px]">
              <span className="text-[#3E3232] text-[16px] inline-block capitalize font-medium">
                explanation
              </span>
              <Editor
                ref={editorRef}
                onChange={setEditorData}
                value={editorData}
              />
            </div>
            <div className="col-span-3 flex flex-col gap-[15px]">
              <span className="text-[#3E3232] text-[16px] inline-block capitalize font-medium">
                add file
              </span>
              <FileUpload onFileChange={handleFileChange} />
              <div className="mt-[10px]">
                {uploadedFiles.map((file, index) => (
                  <p key={index} className="text-[#3E3232] text-[14px]">
                    {file.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
