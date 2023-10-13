import {NavLink} from "react-router-dom";
import noAvatar from '../../assets/Images/noavatar.png'
import EditPost from "../../components/modals/editPost.tsx";
import {useEffect, useState} from "react";
import EditIcon from '@mui/icons-material/Edit';
import {GridColDef} from "@mui/x-data-grid";
import {users} from "../../utils/mockData/userAccountsTable/userAccoutnsData.ts";
import UserAccounts from "../../components/dataTable/userAccounts.tsx";
import {Posts} from "../../utils/types/pages/userInfo/IUser.ts";
import {Button} from "@mui/material";
import {useStoreUserInfo} from "../../store/userInfo/store.ts";

const initialPost: Posts = {
    id: null,
    title: '',
    content: '',
    isActive: false
}

const columns: GridColDef[] = [
    {
        field: "img",
        headerName: "Avatar",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || noAvatar} className='w-[40px] h-[40px] rounded-full object-cover' alt="logo" />;
        },
    },
    {
        field: "firstName",
        type: "string",
        headerName: "First name",
        width: 150,
    },
    {
        field: "lastName",
        type: "string",
        headerName: "Last name",
        width: 150,
    },
    {
        field: "email",
        type: "string",
        headerName: "Email",
        width: 200,
    },
    {
        field: "phone",
        type: "string",
        headerName: "Phone",
        width: 150,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 150,
        type: "string",
    },
    {
        field: "verified",
        headerName: "Verified",
        width: 150,
        type: "boolean",
    },
];

const AdminPage = () => {
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [post, setPost] = useState<Posts>(initialPost)

    const {userInfo, setUserInfo } = useStoreUserInfo()
    const user = users[0]
    const handleOpenModal = (open: boolean, post: Posts) => {
        setEditModalOpen(open)
        setPost(post)
        changePostData(post)
    }

    const changePostData = (post: Posts) => {
        // userInfo.posts

    }



    useEffect(() => {
        setUserInfo(user)
    }, [user]);

    return (
        <section className={section}>
            <div className={wrapper}>

                <div className={adminData}>
                    <div className={adminInfo}>
                        <img src={userInfo.img} alt='logo' className={adminPhoto}/>
                        <div className={dataFields}>
                            <div className={userField}>
                                <div className={userFieldName}>Full name:</div>
                                <div className={dataField}>{userInfo.fullName}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Address:</div>
                                <div className={dataField}>{userInfo.address}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Mobile number:</div>
                                <div className={dataField}>{userInfo.phone}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Brief job description:</div>
                                <div className={dataField}>{userInfo.briefJobDescription}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Compensation type:</div>
                                <div className={dataField}>{userInfo.compensationType}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Method of payment:</div>
                                <div className={dataField}>{userInfo.methodOfPayment}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Compensation schedule:</div>
                                <div className={dataField}>{userInfo.compensationSchedule}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Full name of supervisor:</div>
                                <div className={dataField}>{userInfo.fullNameOfSupervisor}</div>
                            </div>
                            <div className={userField}>
                                <div className={userFieldName}>Last payment date:</div>
                                <div className={dataField}>{userInfo.lastPaymentDate}</div>
                            </div>
                        </div>
                    </div>

                    <div className={posts}>
                        <div className={postsHeader}>Try to edit posts</div>

                        {userInfo.posts?.map((item) =>
                            <div className={postItem} key={item.id}>
                                <div className={blockItem}>
                                    <h1 className={postName}>{item.title}</h1>
                                    <h2 className={postDescription}>{item.content}</h2>
                                </div>
                                <Button aria-label="edit" size="large" className={editBtn}>
                                    <EditIcon onClick={() => handleOpenModal(true, item)}/>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>

                <div className={userAccounts}>
                    <div className={accountsHead}>User accounts</div>
                    <UserAccounts columns={columns} rows={users}/>
                </div>

                <button className={goHomeBtn}><NavLink to={`/`}>to homepage</NavLink></button>
            </div>
            {
                (editModalOpen && post) &&
                <EditPost
                    post={post}
                    changedPost={setPost}
                    modalOpen={editModalOpen}
                    setModalOpen={setEditModalOpen}
                />
            }
        </section>
    );
};

export default AdminPage;


const section = 'bg-[#ffff] h-full w-screen flex justify-center pt-14 pb-14 font-lato'
const wrapper = 'flex flex-col items-between w-full max-w-[1200px]'

const adminData = 'flex justify-between height-screen mb-10 xl:mx-10 md:flex-col'
const adminInfo = 'flex flex-col items-center justify-center bg-[#f3f5fb] gap-[10px] items-center w-[60%] rounded-[40px] lg:w-[100%] md:mb-10 py-10 '
const adminPhoto = 'max-w-[250px] max-h-[250px] rounded-full'
const dataFields = 'md:items-start'
const userField = 'flex my-[10px] '
const userFieldName = 'text-black text-cardTextP text-[#623e2a] font-lato mr-[10px] font-bold'
const dataField = 'text-black text-cardTextP font-lato'
const posts = 'flex flex-col justify-between gap-[10px] ml-[40px] px-[40px] lg:ml-[0px] pl-[20px] pr-[0px] '
const postsHeader = 'text-[#623e2a] self-center text-head font-light px-[15px] mb-10 font-gilda lg:text-headLg md:text-headMg sm:text-headSm'
const postItem = 'flex justify-between items-center w-full'
const blockItem = 'flex flex-col'
const postName = 'text-black text-[16px] text-start text-[#623e2a] font-lato font-bold'
const postDescription = 'teFxt-black text-justify text-[16px] font-lato'
const editBtn = ' cursor-pointer ml-10'

const userAccounts = 'flex flex-col items-center'
const accountsHead = 'text-[#623e2a] text-head font-light px-[15px] mb-10 font-gilda lg:text-headLg md:text-headMg sm:text-headSm'

const goHomeBtn = 'ml-10 max-w-[300px] self-center rounded-lg px-4 py-2 bg-[#9e928c] text-gray-100 hover:bg-[#8a807a] duration-300 font-gilda text-p lg:text-pLg md:text-pMg sm:text-pSm'

