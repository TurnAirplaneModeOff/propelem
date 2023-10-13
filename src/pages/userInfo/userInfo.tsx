import {NavLink} from "react-router-dom";
import {users} from "../../utils/mockData/userAccountsTable/userAccoutnsData.ts";

const UserInfo = () => {
    const user = users[0]

    return (
        <section className={section}>
            <div className={wrapper}>

                <div className={userData}>
                    <div className={userInfo}>
                        <img src={user.img} alt='logo' className={userPhoto}/>
                        <div className={dataFields}>
                            <div className={userField}>
                                <div className={userFieldName}>Address:</div>
                                <div className={dataField}>{user.fullName}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Address:</div>
                                <div className={dataField}>{user.address}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Mobile number:</div>
                                <div className={dataField}>{user.phone}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Brief job description:</div>
                                <div className={dataField}>{user.briefJobDescription}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Compensation type:</div>
                                <div className={dataField}>{user.compensationType}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Method of payment:</div>
                                <div className={dataField}>{user.methodOfPayment}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Compensation schedule:</div>
                                <div className={dataField}>{user.compensationSchedule}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Full name of supervisor:</div>
                                <div className={dataField}>{user.fullNameOfSupervisor}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Last payment date:</div>
                                <div className={dataField}>{user.lastPaymentDate}</div>
                            </div>
                        </div>
                    </div>

                    <div className={userMessages}>
                        <div className={greetingMessage}>Hello {user.firstName}</div>
                        {user.posts?.map((item) =>
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
const userInfo = 'flex flex-col space-y-5 w-1/3 mr-[40px] lg:mr-[20px] w-2/5 px-[0px] md:w-full items-center mb-10 mr-[0px]'
const userPhoto = 'max-w-[250px] max-h-[250px] rounded-full'
const dataFields = 'md:items-start'
const userField = 'flex my-[10px]'
const userFieldName = 'text-black text-cardTextP text-[#623e2a] font-lato mr-[10px] font-bold'
const dataField = 'text-black text-cardTextP font-lato'

const userMessages = 'flex flex-col items-center justify-center bg-[#f3f5fb] space-y-5 px-[20px] w-2/3 pb-10 items-center rounded-[40px] lg:w-3/5 md:w-full pt-10 '
const greetingMessage = 'flex items-center justify-center text-[#623e2a] h-[180px] text-head font-light px-[15px] mb-10 font-gilda lg:text-headLg md:h-[50px] mb-[0px] text-headMg sm:text-headSm'
const announcementItem = 'flex-col items-center w-full cursor-pointer'
const announcementName = 'text-black text-[16px] text-start text-[#623e2a] font-lato font-bold'
const announcementDescription = 'text-black text-justify text-[16px] font-lato'


const returnBtn = 'max-w-[300px] self-center rounded-lg px-4 py-2 bg-[#9e928c] text-gray-100 hover:bg-[#8a807a] duration-300 font-gilda text-p lg:text-pLg md:text-pMg sm:text-pSm'
