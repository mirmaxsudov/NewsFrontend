import $api from "../../request.ts";

const BASE_USER_URL: string = "/api/v1/user";

const fetchUserDetails = async (): Promise<any> => {
    return await $api.get(`${BASE_USER_URL}/me`)
}

export {fetchUserDetails};