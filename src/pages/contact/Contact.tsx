import React, { useRef, useState } from "react";
import Editor, { EditorRef } from "../../components/editor/Editor.tsx";
import GenerateBreadCrumbs from "../../helpers/GenerateBreadCrumbs.tsx";
import NewsInput from "../../@core/components/input/NewsInput.tsx";
import { InputEnum } from "../../enums/inputEnum.ts";
import FileUpload from "../../@core/components/input/FileUpload.tsx";
import NewsButton from "../../@core/components/btns/NewsButton.tsx";
import { sendContact } from "../../api/requests/contact/contact.api.ts";
import { uploadFile } from "../../api/requests/file/file.api.ts";
import { toast } from "react-toastify";

const Contact = () => {
  const [editorData, setEditorData] = useState<string>("");
  const editorRef = useRef<EditorRef>(null);
  const [subject, setSubject] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const imageId = await uploadFile(uploadedFiles[0]);

      const data = await sendContact({
        subject,
        name,
        email,
        imageId,
        explanation: editorData,
      });

      console.log(data);

      toast("Successfully sent", { type: "success" });

      setName("");
      setEmail("");
      setSubject("");
      setEditorData("");
      setUploadedFiles([]);
    } catch (e: unknown) {
      console.log(e);
      toast("Something went wrong", { type: "error" });
    }
  };

  const handleFileChange = (files: File[]) => {
    setUploadedFiles(files);
  };

  return (
    <>
      <div className="container max-w-container mx-auto my-[50px] mt-[20px]">
        <GenerateBreadCrumbs
          current="contact us"
          values={[
            { value: "home", link: "/" },
            { value: "contact us", link: "/contact" },
          ]}
        />
        <div className="inputs mt-[40px]">
          <div className="grid grid-cols-3 gap-[24px]">
            <NewsInput
              val={subject}
              onChange={setSubject}
              label="subject"
              type={InputEnum.TEXT}
            />
            <NewsInput
              val={name}
              onChange={setName}
              label="Name"
              type={InputEnum.TEXT}
            />
            <NewsInput
              val={email}
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
            <NewsButton
              onClick={handleSubmit}
              className={
                "text-center text-[14px] font-medium py-[10px] px-[16px] rounded-[12px] capitalize bg-[#F81539BF] text-[#fff]"
              }
            >
              Send
            </NewsButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
