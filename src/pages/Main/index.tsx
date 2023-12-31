import { NavLink } from 'react-router-dom';
import bg from '../../assets/Images/bg-1.webp'
import bg2 from '../../assets/Images/bg-2.webp'
import bg3 from '../../assets/Images/bg-3.webp'
import bg4 from '../../assets/Images/bg-4.webp'
import GoogleMaps from "./officeplace";

const MainPage = () => {

    const officeInfo = [
        {
            id: 'place',
            img: 'src/assets/Icons/place.svg',
            info: '4540 Campus Drive, Suite 500\n' +
                '\n' +
                'Newport Beach, CA 92660'
        },
        {
            id: 'phone',
            img: 'src/assets/Icons/phone.svg',
            info: '949-779-2300'
        },
        {
            id: 'email',
            img: 'src/assets/Icons/email.svg',
            info: 'office@propelem.com'
        }
    ]

    return (
        <section className={container}>
            <section className={section1} style={{ backgroundImage: `url(${bg}` }}>
                <div className={wrapper}>
                    <h1 className={title}>PROPEL EM</h1>
                    <h2 className={text}>Taking your ideas to new heights</h2>
                </div>
            </section>

            <section className={section2}>
                <div className={wrapper}>
                    <h1 className={title2}>Let Propel Elevate Your Brand And Power Your Online Presence</h1>
                    <p className={text2}>Are you ready to take your business to the next level? Propel is here to help! With our extensive experience in marketing, business coaching, strategic planning, and workplace solutions, we have helped numerous recognized brands achieve success. By working with Propel, you'll have access to our Founder and a network of top-tier consultants who will help you power your online presence and elevate your brand. Whether you need help with social media, website design, or overall business strategy, we've got you covered.</p>
                </div>
            </section>

            <section className={section3} style={{ backgroundImage: `url(${bg2}` }}>
                <div className={wrapper}>
                    <h1 className={title3}>Considering to implement strategic marketing?</h1>
                    <h2 className={text3}>It's a smart move!</h2>
                    <h2 className={text3}>Sell smarter by really understanding your customers, identifying what makes your product or service unique, setting achievable goals, and creating a game plan to reach the right people in the right way.</h2>
                </div>
            </section>

            <section className={section2}>
                <div className={wrapper}>
                    <h1 className={title2}>Revolutionize Your Workplace with Innovative Solutions!</h1>
                    <h2 className={text2}>As a business owner, outsourcing your recruitment and hiring process can bring numerous benefits. First, it allows you to focus on your core business operations while leaving the staffing-related tasks to the experts. Second, staffing solutions providers can help you mitigate the risks associated with hiring, such as high turnover rates, legal issues, and training costs.</h2>
                    <h2 className={text2}>Our HR solutions can include recruiting, screening, and hiring candidates, as well as providing onboarding, training, recruitment, and workforce planning.</h2>
                </div>
            </section>

            <section className={section1} style={{ backgroundImage: `url(${bg3}` }}>
                <div className={wrapper}>
                    <h1 className={title4}>Coaching is <br />a must-have.</h1>
                    <h2 className={text4}>Investing in business coaching is investing in yourself and your business. It's a proven way to accelerate your growth, improve your performance, and achieve your goals. Don't wait any longer to take your business to the next level - hire a business coach today and unlock your full potential!</h2>
                </div>
            </section>


            <section className={section5}>
                <div className={wrapper}>
                    <h1 className={title5}>A Proven Track Record For Success</h1>
                    <h2 className={text5}>As our Founder, Tatiana brings over two decades of experience in digital marketing, brand strategy, and social media management to help businesses achieve their goals. She has a proven track record of success in developing effective campaigns for a variety of clients, including well-known brands such as BMW, Kia, Hyundai, Volvo, Suzuki, Honda, Acura, British American Tobacco, Lennar Homes, Palomar Residences, OMNI Residences, and Southern California Edison.</h2>
                    <h2 className={text5}>Tatiana and her team of industry-specific experts can help propel your brand to new heights. Their approach is collaborative, transparent, and results-driven, providing the highest level of service to clients.</h2>
                </div>
            </section>


            <section className={section1} style={{ backgroundImage: `url(${bg4}` }}>
                <div className={wrapper2}>
                    <h1 className={title6}>Tatiana</h1>
                </div>
            </section>

            <section className={section7}>
                <div className={wrapper}>
                    <h1 className={title7}>So what are you waiting for?</h1>
                    <h2 className={text7}>Let Propel be your guide to success and help your business reach new heights!</h2>
                    <div className={infoContainer}>
                        <div className={infoItem}>
                            <h2 className={cardHead}>Corporate Office</h2>
                            {officeInfo.map((info) =>
                                <div key={info.id} className={officeInfoItem}>
                                    <img className={imgItem} src={info.img} alt={info.id} />
                                    <div className={textItem}>{info.info}</div>

                                </div>
                            )}
                        </div>
                        <div className={infoItemPlace}>
                            <GoogleMaps />
                        </div>
                        <div className={infoItem}>
                            <h2 className={cardHead}>By Appointment Only</h2>
                            <div className={textItem}>Monday to Friday</div>
                            <div className={textItem}>M9:00 am to 4:00 pm</div>

                        </div>
                    </div>
                    <h2 className={textFooter1}>Propel, Inc.</h2>
                    <h2 className={textFooter2}>© 2020-2023  | <NavLink to={`/policy`}>Legal Notices</NavLink></h2>
                </div>
            </section>


        </section>

    );
};

export default MainPage;


const section7 = 'bg-[#c5b7af] h-[770px] w-screen flex justify-center pt-28 pb-14 font-lato xl:h-[1350px] md:h-[100%]'
const title7 = 'text-[#f4f1ed] text-head font-light text-center mb-[30px] px-[4%] font-gilda lg:text-headLg md:text-headMg sm:text-headSm'
const text7 = 'text-[#f4f1ed] text-p text-justify self-center px-[4%] mb-10 text-[#623e2a] font-gilda md:text-pMg sm:text-pSm'
const infoContainer = 'flex justify-between items-center mb-10 xl:flex-col'
const infoItem = 'flex-col justify-center items-start max-w-[360px] w-full h-[260px] p-5 border border-white'
const infoItemPlace = 'flex justify-center items-center max-w-[360px] w-full h-[260px] border border-white xl:my-[30px]'
const textFooter1 = 'text-[#f4f1ed] text-textFooter mt-[40px] mb-[10px] font-light text-center font-gilda lg:text-textFooterLg md:text-textFooterMg sm:text-textFooterSm'
const textFooter2 = 'text-[#f4f1ed] text-p font-light text-center font-gilda lg:text-pLg md:text-pMg sm:text-pSm'

const cardHead = 'text-[#f4f1ed] text-cardTextHead text-justify self-center px-[4%] mb-10 text-[#623e2a] font-gilda'
const officeInfoItem = 'flex justify-start items-center px-[4%] mb-[10px]'
const textItem = 'text-[#f4f1ed] text-cardTextP px-[4%] max-w-[270px] font-gilda'
const imgItem = 'w-[20px] h-[20px]'

const wrapper2 = 'flex justify-start items-end w-full max-w-[1240px]'
const title6 = 'text-[#efebe5] text-head font-dancing-script px-[4%]'


const section5 = 'bg-[#f0c7bb] h-[770px] w-screen flex justify-center pt-28 pb-14 font-lato md:h-[100%]'
const title5 = 'text-[#656566] text-head font-light text-center mb-20 px-[4%] font-gilda lg:text-headLg md:text-headMg sm:text-headSm'
const text5 = 'text-[#656566] text-p text-justify self-center px-[4%] mb-10 font-gilda lg:text-pLg md:text-pMg sm:text-pSm'

const title4 = 'text-[#c5b7af] text-head mt-14  font-light w-1/2 px-[4%] mb-16 self-end text-end font-gilda lg:text-headLg md:text-headMg sm:text-headSm w-[80%]'
const text4 = 'px-[4%] w-[53%] text-p font-light text-justify mb-16 tracking-wider leading-[40px] text-[#c5b7af] self-end font-gilda lg:text-pLg md:text-pMg sm:text-pSm w-[80%]'

const section3 = 'h-[770px] w-screen flex justify-center pt-28 pb-14 bg-cover bg-no-repeat bg-center font-lato md:h-[100%] '
const title3 = 'text-[#dec3a8] text-head font-light w-2/3 px-[4%] mb-16 font-gilda lg:text-headLg w-[80%] md:text-headMg sm:text-headSm'
const text3 = 'px-[4%] w-1/2 text-p font-light text-justify mb-8 text-[#dec3a8] font-gilda md:text-pMg sm:text-pSm w-[65%]'

const section2 = 'bg-[#f4f1ed] h-[770px] w-screen flex justify-center pt-28 pb-14 font-lato md:h-[100%]'
const title2 = 'text-head font-light text-center mb-20 px-[4%] text-[#623e2a] font-gilda lg:text-headLg self-center md:text-headMg sm:text-headSm'
const text2 = 'text-p text-justify self-center px-[4%] mb-10 text-[#623e2a] font-gilda md:text-pMg sm:text-pSm'

const container = 'flex flex-col w-screen h-full'
const section1 = 'flex justify-center w-screen h-[770px] bg-cover bg-no-repeat py-4 bg-center font-lato lg:items-center'
const wrapper = 'flex flex-col w-full max-w-[1240px]'
const title = 'font-bold text-white uppercase tracking-[.6em] text-[26px] lg:self-center'
const text = 'text-head w-[460px] text-gray-500  font-light mt-[200px] text-center px-[4%] font-gilda lg:w-full'