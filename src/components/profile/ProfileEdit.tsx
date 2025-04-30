import GenerateBreadCrumbs from "../../helpers/GenerateBreadCrumbs.tsx";
import {useEffect, useRef, useState} from "react";
import Editor, {EditorRef} from "../editor/Editor.tsx";
import NewsInput from "../../@core/components/input/NewsInput.tsx";
import {InputEnum} from "../../enums/inputEnum.ts";
import FileUpload from "../../@core/components/input/FileUpload.tsx";
import {v4 as uuid} from "uuid";
import NewsButton from "../../@core/components/btns/NewsButton.tsx";
import {fetchUserDetails} from "../../api/requests/user/user.api.ts";

type Breadcrumb = {
    value: string;
    link: string;
}

const breadCrumbVales: Breadcrumb[] = [
    {
        value: "home",
        link: "/",
    },
    {
        value: "profile edit",
        link: "/profile",
    },
]

type AttachmentResponse = {
    id: number;
    url: string;
}

type User = {
    id: number;
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    explanation: string;
    banner: AttachmentResponse;
    profileImage: AttachmentResponse;
}

const ProfileEdit = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [oldPassword, setOldPassword] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [banner, setBanner] = useState();
    const [profileImage, setProfileImage] = useState();
    const [editorData, setEditorData] = useState<string>("");
    const editorRef = useRef<EditorRef>(null);
    const [user, setUser] = useState<User>({} as User);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchUserDetails();
                const data = response.data;

                console.log(response)
                console.log(data)

                setUser(data)
                setEditorData(user.explanation)

            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    }, []);

    const handleSubmit = async () => {
        // ToDo: Add validation
        // ToDo: Add request
        // ToDo: Add error handling

        console.log("Submit")
    }

    return (<>
        <section className={"profile__section mb-[50px] mt-[25px]"}>
            <div className={"container max-w-container mx-auto"}>
                <GenerateBreadCrumbs values={breadCrumbVales} current={"profile edit"}/>

                {/*  Main content  */}
                <div className={"grid grid-cols-3 grid-rows-2 gap-[24px] my-[24px]"}>
                    <NewsInput val={user.firstname} label={"First name"} type={InputEnum.TEXT} onChange={setFirstName}/>
                    <NewsInput val={user.lastname} label={"Last name"} type={InputEnum.TEXT} onChange={setLastName}/>
                    <NewsInput val={user.username} label={"Username"} type={InputEnum.TEXT} onChange={setUsername}/>

                    <NewsInput label={"Old password"} type={InputEnum.PASSWORD} onChange={setOldPassword}/>
                    <NewsInput label={"password"} type={InputEnum.PASSWORD} onChange={setPassword}/>
                    <NewsInput val={user.email} label={"Email"} type={InputEnum.EMAIL} onChange={setEmail}/>
                </div>
                <div className={"w-full my-[24px]"}>
                    <span className={"text-[#3E3232] mb-[5px] text-[16px] inline-block capitalize font-medium"}>
                            add banner
                    </span>
                    <FileUpload key={uuid()} onFileChange={setBanner}/>
                </div>
                <div className={"grid grid-cols-12 grid-rows-1 gap-[24px]"}>
                    <div className={"col-span-9"}>
                        <span className={"text-[#3E3232] mb-[5px] text-[16px] inline-block capitalize font-medium"}>
                            explanation
                        </span>
                        <Editor ref={editorRef} onChange={setEditorData} value={editorData}/>
                    </div>
                    <div className={"col-span-3"}>
                        <span className={"text-[#3E3232] mb-[5px] text-[16px] inline-block capitalize font-medium"}>
                            add image
                        </span>
                        <FileUpload key={uuid()} onFileChange={setProfileImage}/>
                    </div>
                </div>
                <div className={"flex justify-end mt-[44px]"}>
                    <NewsButton bgColor={"bg-[#F81539BF]"} isLink={false} textColor={"text-[#fff]"}>
                        <>
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.00195 6.75C6.01758 6.75 5.25195 7.54297 5.25195 8.5C5.25195 9.48438 6.01758 10.25 7.00195 10.25C7.95898 10.25 8.75195 9.48438 8.75195 8.5C8.75195 7.54297 7.95898 6.75 7.00195 6.75ZM12.7168 3.30469L10.4199 1.00781C10.2012 0.789062 9.8457 0.625 9.51758 0.625H2.62695C1.64258 0.625 0.876953 1.41797 0.876953 2.375V11.125C0.876953 12.1094 1.64258 12.875 2.62695 12.875H11.377C12.334 12.875 13.127 12.1094 13.127 11.125V4.23438C13.127 3.90625 12.9629 3.55078 12.7168 3.30469ZM4.37695 1.9375H8.31445V4.125H4.37695V1.9375ZM11.8145 11.125C11.8145 11.3711 11.5957 11.5625 11.377 11.5625H2.62695C2.38086 11.5625 2.18945 11.3711 2.18945 11.125V2.375C2.18945 2.15625 2.38086 1.9375 2.62695 1.9375H3.06445V4.78125C3.06445 5.16406 3.33789 5.4375 3.7207 5.4375H8.9707C9.32617 5.4375 9.62695 5.16406 9.62695 4.78125V2.04688L11.7598 4.20703C11.7871 4.23438 11.8145 4.26172 11.8145 4.31641V11.125Z"
                                    fill="white"/>
                            </svg>
                            Save
                        </>
                    </NewsButton>
                </div>
            </div>
        </section>
    </>)
}

export default ProfileEdit;