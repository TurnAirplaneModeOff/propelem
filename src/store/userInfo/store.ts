import {create} from 'zustand'
import {devtools} from "zustand/middleware";
import {User} from "../../utils/types/pages/userInfo/IUser.ts";


type State = {
    userInfo: User
}

type Actions = {
    setUserInfo: (data: User) => void
}


export const useStoreUserInfo = create<State & Actions>()(devtools((set) => ({

    userInfo: {
        id: null,
        img: "",
        lastName: "",
        firstName: "",
        email: "",
        phone: "",
        createdAt: "",
        verified: false,
        fullName: "",
        address: '',
        title: '',
        briefJobDescription: '',
        compensationType: '',
        methodOfPayment: '',
        compensationSchedule: '',
        fullNameOfSupervisor: '',
        lastPaymentDate: '',
        posts: []
    },

    setUserInfo: (data) => set(state => ({userInfo: {...state.userInfo, ...data}})),
})))


