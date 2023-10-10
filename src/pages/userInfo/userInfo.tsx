import {NavLink} from "react-router-dom";
import profileImg from '../../assets/Images/profileImage.png'


interface UserData {
    fullName: string;
    address: string;
    mobileNumber: string;
    title: string;
    briefJobDescription: string;
    compensationType: string;
    methodOfPayment: string;
    compensationSchedule: string;
    fullNameOfSupervisor: string;
    lastPaymentDate: string;
}


interface Announcements {
    id: number,
    title: string,
    content: string,
    isActive?: boolean
}

interface User {
    id: number;
    name: string;
    photo: string;
    data: UserData;
    announcements: Announcements[]
}

const user: User = {
    id: 1,
    name: 'Ostap',
    photo: profileImg,
    data: {
        fullName: 'Ostap Frankiv',
        address: 'Lviv, Ukraine',
        mobileNumber: '380988786543',
        title: 'profileInformation',
        briefJobDescription: '',
        compensationType: 'fixed rate',
        methodOfPayment: 'Payoneer',
        compensationSchedule: 'weekly',
        fullNameOfSupervisor: 'new',
        lastPaymentDate: '07/09/2023',
    },
    announcements: [
        {
            id: 1,
            title: 'Accounting/Bookkeeping',
            content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from'
        },
        {
            id: 2,
            title: 'Digital Forensics',
            content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from'
        },
        {
            id: 3,
            title: 'Legal Internship',
            content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from'
        },
        {
            id: 4,
            title: 'Attorney',
            content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from'
        },
        {
            id: 5,
            title: 'Client Care/Intake Specialist',
            content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from'
        },
        {
            id: 6,
            title: 'Translator/Interpreters',
            content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from'
        },
        {
            id: 7,
            title: 'Social Media Manager',
            content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from'
        },
        {
            id: 8,
            title: 'Marketing Internship',
            content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from'
        },
        {
            id: 9,
            title: 'Paralegal',
            content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from'
        }
    ]
}

const UserInfo = () => {
    return (
        <section className={section}>
            <div className={wrapper}>

                <div className={userData}>
                    <div className={userInfo}>
                        <img src={user.photo} alt='logo' className={userPhoto}/>
                        <div className={dataFields}>
                            <div className={userField}>
                                <div className={userFieldName}>Full name:</div>
                                <div className={dataField}>{user.data.fullName}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Address:</div>
                                <div className={dataField}>{user.data.address}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Mobile number:</div>
                                <div className={dataField}>{user.data.mobileNumber}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Brief job description:</div>
                                <div className={dataField}>{user.data.briefJobDescription}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Compensation type:</div>
                                <div className={dataField}>{user.data.compensationType}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Method of payment:</div>
                                <div className={dataField}>{user.data.methodOfPayment}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Compensation schedule:</div>
                                <div className={dataField}>{user.data.compensationSchedule}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Full name of supervisor:</div>
                                <div className={dataField}>{user.data.fullNameOfSupervisor}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Last payment date:</div>
                                <div className={dataField}>{user.data.lastPaymentDate}</div>
                            </div>
                        </div>
                    </div>

                    <div className={userMessages}>
                        <div className={greetingMessage}>Hello {user.name}</div>

                        {user.announcements.map((item) =>
                            <div className={announcementItem} key={item.id}>
                                <h1 className={announcementName}>{item.title}</h1>
                                <h2 className={announcementDescription}>{item.content}</h2>
                            </div>
                        )}
                    </div>
                </div>
                <button className={returnBtn}><NavLink to={`/`}>to BRONSKI</NavLink></button>
            </div>
        </section>
    );
};

export default UserInfo;


const section = 'bg-[#ffff] h-full w-screen flex justify-center pt-14 pb-14 font-lato'
const wrapper = 'flex flex-col items-between w-full max-w-[1200px]'
const userData = 'flex justify-between height-screen mb-10 xl:mx-10 md:flex-col'
const userInfo = 'flex flex-col items-center justify-center bg-[#f3f5fb] md:gap-[10px] pb-10 items-center min-w-[40%] rounded-[40px] lg:min-w-[50%] md:mb-10 w-[100%] pt-10 '
const userPhoto = 'max-w-[250px] max-h-[250px] rounded-full'
const dataFields = 'md:items-start'
const userField = 'flex my-[10px] '
const userFieldName = 'text-black text-cardTextP text-[#623e2a] font-lato mr-[10px] font-bold'
const dataField = 'text-black text-cardTextP font-lato'

const userMessages = 'flex flex-col justify-between gap-[10px] ml-[40px] px-[40px] lg:ml-[0px] pl-[20px] pr-[0px] '
const greetingMessage = 'text-[#623e2a] self-center text-head font-light px-[15px] mb-10 font-gilda lg:text-headLg md:text-headMg sm:text-headSm'
const announcementItem = 'flex-col items-center w-full cursor-pointer'
const announcementName = 'text-black text-[16px] text-start text-[#623e2a] font-lato font-bold'
const announcementDescription = 'text-black text-justify text-[16px] font-lato'


const returnBtn = 'ml-10 max-w-[300px] self-center rounded-lg px-4 py-2 bg-[#9e928c] text-gray-100 hover:bg-[#8a807a] duration-300 font-gilda text-p lg:text-pLg md:text-pMg sm:text-pSm'
