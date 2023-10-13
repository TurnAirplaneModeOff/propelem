export interface UserData {

}
export interface User {
    id: number | null;
    firstName: string;
    lastName: string;
    img: string;
    email: string
    phone: string;
    createdAt: string;
    verified: boolean;
    fullName: string;
    address: string;
    title: string;
    briefJobDescription: string;
    compensationType: string;
    methodOfPayment: string;
    compensationSchedule: string;
    fullNameOfSupervisor: string;
    lastPaymentDate: string;
    posts?: Posts[]
}

export interface Posts {
    id: number | null,
    title: string,
    content: string,
    isActive?: boolean
}