import {IAddress} from "./Address";
import {RolesEnum} from "../enums/rolesEnum";

export interface IUser {
    fullName: string,
    email: string,
    roles: Array<keyof typeof RolesEnum>,
    id: string,
    isActivated: boolean,
    phone: string,
    address: IAddress
}