import {Posts} from "../../../pages/userInfo/IUser.ts";

export interface EditProps {
    post: Posts,
    modalOpen: boolean,
    setModalOpen: (data: boolean) => void
}