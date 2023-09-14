import { RoleType } from "../../../constants";
import { Status } from "../../../constants/status";
import { Filter } from "../../../types";

export type GetUsersFilter = Filter & {
    role: RoleType,
    status:Status
}

export type User = {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    status: string;
    fullName: string;
    avatar: string | null;
    email: string;
    authToken: string | null;
    deviceToken: string | null;
    mobileNumber: string | null;
    countryCode: string | null;
    password: string;
    isMobileVerified: boolean;
    isTncAccepted: boolean;
    isLoggedIn: boolean;
    role: string;
    signUpType: string;
    socialId: string | null;
};
export type GetUsers = {
    data: User[],
    totalCount: number
}
