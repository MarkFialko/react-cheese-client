import {AxiosResponse} from "axios/index";
import $api from "../http";
import {IUpload} from "../models/Upload";

export default class UploadService {
    static async getFile(data:any): Promise<AxiosResponse<IUpload>> {
        return $api.post<IUpload>('/upload', data)
    }

}