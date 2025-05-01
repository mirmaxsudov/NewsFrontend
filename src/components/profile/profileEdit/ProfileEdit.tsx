import GenerateBreadCrumbs from "../../../helpers/GenerateBreadCrumbs.tsx";
import {FormEvent, useEffect, useState} from "react";
import NewsInput from "../../../@core/components/input/NewsInput.tsx";
import {InputEnum} from "../../../enums/inputEnum.ts";
import FileUpload from "../../../@core/components/input/FileUpload.tsx";
import {v4 as uuid} from "uuid";
import NewsButton from "../../../@core/components/btns/NewsButton.tsx";
import {
    deleteBanner, deleteProfileImage,
    fetchUserDetails,
    updateBanner,
    updateProfileImage,
    updateUser
} from "../../../api/requests/user/user.api.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks.ts";
import ProfileEditLoadingPage from "./ProfileEditLoadingPage.tsx";
import {toast} from "react-toastify";
import {changeUser, setValues} from "../../../store/auth/authSlice.ts";
import UserEditor from "./UserEditor.tsx";
import {uploadFile} from "../../../api/requests/file/file.api.ts";

type Breadcrumb = {
    value: string;
    link: string;
}

export type UserUpdateType = {
    email: string,
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    oldPassword: string,
    explanation: string
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
    downloadUrl: string;
}

type User = {
    id: number;
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    explanation: string;
    bannerImage: AttachmentResponse;
    profileImage: AttachmentResponse;
}

const ProfileEdit = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [oldPassword, setOldPassword] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [banner, setBanner] = useState<File[]>([]);
    const [profileImage, setProfileImage] = useState<File[]>([]);
    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState<boolean>(true);
    const dispatch = useAppDispatch();
    const auth = useAppSelector(state => state.auth);

    useEffect(() => {
        if (loading)
            fetchData();
    }, [loading]);

    useEffect(() => {
        if (banner.length <= 0)
            return;

        const uploadBannerImage = async () => {
            const bannerId = await uploadFile(banner[0]);
            const response = await updateBanner(bannerId)

            if (response)
                toast("Successfully updated", {type: "success"})

            setBanner([]);
            setLoading(true);
        }
        uploadBannerImage();
    }, [banner]);

    useEffect(() => {
        if (profileImage.length <= 0)
            return;

        const uploadImage = async () => {
            const profileImageId = await uploadFile(profileImage[0]);
            const response = await updateProfileImage(profileImageId)

            if (response)
                toast("Successfully updated", {type: "success"})

            setProfileImage([]);
            setLoading(true);
        }

        uploadImage();
    }, [profileImage]);

    const fetchData = async () => {
        try {
            const response = await fetchUserDetails(auth.user.id);
            const data = response.data;

            setUser(data)
            setEmail(data.email);
            setFirstName(data.firstname);
            setLastName(data.lastname);
            setUsername(data.username);
            dispatch(changeUser(data))

            console.log(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const data: Partial<UserUpdateType> = {
            email,
            firstname: firstName,
            lastname: lastName,
            username,
            password,
            oldPassword,
        }

        try {
            const response = await updateUser(data);
            if (response)
                toast("Successfully updated", {type: "success"})
            setLoading(true);
        } catch (error) {
            console.log(error)
            toast("Something went wrong", {type: "error"})
        }
    }

    const handleDeleteBanner = async () => {
        try {
            const response = await deleteBanner();
            if (response)
                toast("Successfully updated", {type: "success"})
            setLoading(true);
        } catch (error) {
            console.log(error)
            toast("Something went wrong", {type: "error"})
        }
    }

    const handleDeleteProfileImage = async () => {
        try {
            const response = await deleteProfileImage();
            if (response)
                toast("Successfully updated", {type: "success"})
            setLoading(true);
        } catch (error) {
            console.log(error);
            toast("Something went wrong", {type: "error"})
        }
    }

    if (loading)
        return (<ProfileEditLoadingPage/>)

    return (<>
        <section className={"profile__section mb-[50px] mt-[25px]"}>
            <div className={"container max-w-container mx-auto"}>
                <GenerateBreadCrumbs values={breadCrumbVales} current={"profile edit"}/>
                <div className={"grid grid-cols-3 grid-rows-2 gap-[24px] my-[24px]"}>
                    <NewsInput disabled={false} val={user.firstname} label={"First name"} type={InputEnum.TEXT}
                               onChange={setFirstName}/>
                    <NewsInput val={user.lastname} label={"Last name"} type={InputEnum.TEXT} onChange={setLastName}/>
                    <NewsInput disabled={true} val={user.username} label={"Username"} type={InputEnum.TEXT}
                               onChange={setUsername}/>

                    <NewsInput disabled={true} label={"Old password"} type={InputEnum.PASSWORD}
                               onChange={setOldPassword}/>
                    <NewsInput disabled={true} label={"password"} type={InputEnum.PASSWORD} onChange={setPassword}/>
                    <NewsInput val={user.email} label={"Email"} type={InputEnum.EMAIL} onChange={setEmail}/>
                </div>
                <div className={"w-full my-[24px]"}>
                    <span className={"text-[#3E3232] mb-[5px] text-[16px] inline-block capitalize font-medium"}>
                            add banner
                    </span>
                    {
                        user.bannerImage ? <>
                                <div
                                    className={"w-full h-[250px] relative transition-all duration-300"}
                                >
                                    <img
                                        className={"object-cover w-full h-full rounded-[12px]"}
                                        src={user.bannerImage.url} alt={user.firstname}/>
                                </div>
                                <button
                                    onClick={handleDeleteBanner}
                                    className={"text-[#fff] py-1 px-3 rounded-[5px] mt-[5px] text-[16px] inline-block capitalize font-medium bg-[#F81539BF]"}>
                                    Delete
                                </button>
                            </> :
                            <FileUpload key={uuid()} onFileChange={setBanner}/>
                    }
                </div>
                <div className={"grid grid-cols-12 grid-rows-1 gap-[24px]"}>
                    <div className={"col-span-9"}>
                        <span className={"text-[#3E3232] mb-[5px] text-[16px] inline-block capitalize font-medium"}>
                            explanation
                        </span>
                        <UserEditor cnt={user.explanation}/>
                    </div>
                    <div className={"col-span-3"}>
                        <div>
                            <span className={"text-[#3E3232] mb-[5px] text-[16px] inline-block capitalize font-medium"}>
                            add image
                        </span>
                            {
                                user.profileImage ? <>
                                    <div className={"w-full h-[300px] mt-[10px]"}>
                                        <img className={"size-full object-cover rounded-[12px]"}
                                             src={user.profileImage.url} alt={user.firstname}/>
                                        <button
                                            onClick={handleDeleteProfileImage}
                                            className={"text-[#fff] py-1 px-3 rounded-[5px] mt-[5px] text-[16px] inline-block capitalize font-medium bg-[#F81539BF]"}>
                                            Delete
                                        </button>
                                    </div>
                                </> : <>
                                    <FileUpload key={uuid()} onFileChange={setProfileImage}/>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className={"flex justify-end mt-[44px]"}>
                    <NewsButton onClick={handleSubmit} bgColor={"bg-[#F81539BF]"} isLink={false}
                                textColor={"text-[#fff]"}>
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