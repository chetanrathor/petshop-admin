import { RoleType } from "../../../constants";
import { Filter } from "../../../types";

export type GetUsersFilter = Filter & {
    role: RoleType
}