import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";


type loginForm = {
    userOrEmail: string
    password: string
    acceptTerms?: boolean | undefined
}

const schema = yup.object({
    userOrEmail: yup
        .string()
        .required("Username is required"),
    // email: yup
    //     .string()
    //     .email("Email format is not valid")
    //     .required("Email is required"),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    acceptTerms: yup.bool().oneOf([true], 'Accept Terms is required')

});
const Login = () => {
    const form = useForm<loginForm>({
        defaultValues: {
            userOrEmail: "",
            password: "",
        },
        resolver: yupResolver(schema),
    });

    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data: loginForm) => {console.log(data)};


    return (
        <div>

            <div className={wrapper}>
                <div className={formContainer}>
                    <div className={loginHead}>Login</div>
                    <form className={loginForm} onSubmit={handleSubmit(onSubmit)}>
                        <div className={controlBlock}>
                            <label htmlFor="email" className={controlLabel}>Username or Email</label>
                            <input
                                className={controlInput + `${errors.userOrEmail ? ' border-red-500' : ''}`}
                                type="email"
                                id="email"
                                placeholder="Username or Email"
                                {...register("userOrEmail")}
                            />
                            <p className={errorMessage}>{errors.userOrEmail?.message}</p>
                        </div>
                        <div className={controlBlock}>
                            <label htmlFor="password" className={controlLabel}>Password</label>
                            <input
                                className={controlInput + `${errors.password ? ' border-red-500' : ''}`}
                                type="password"
                                id="password"
                                placeholder="Password"
                                {...register("password")}
                            />
                            <p className={errorMessage}>{errors.password?.message}</p>

                        </div>
                        <div className={termsBlock}>
                            <input
                                type="checkbox"
                                className={termsInput}
                                {...register("acceptTerms")}
                            />
                            <div className={termsTextBlock}>
                                <div className={termsText}>Acceptance of Terms Of Use</div>
                                <p className={errorMessage}>{errors.acceptTerms?.message}</p>
                            </div>
                        </div>

                        <button
                            className={loginBtn}
                            type="submit"
                        >Login
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;

const wrapper = 'flex justify-center items-center h-screen antialiased bg-[#f4f1ed] text-gray-900 font-sans'
const formContainer = 'flex flex-col w-[70%] bg-white rounded p-8 m-4'
const loginHead = 'text-center block w-full text-p uppercase font-bold mb-4 text-[#c5b7af]'
const loginForm = 'mb-4'
const controlBlock = 'mb-4'
const errorMessage = 'text-red-500 text-[14px]'
const termsBlock = 'flex items-center mb-6'
const termsInput = 'border-gray-300 rounded h-[16px] w-[16px]'
const termsTextBlock = 'flex flex-col ml-2'
const termsText = 'text-gray-500'
const controlLabel = 'text-[20px] text-gray-500 mb-1'
const controlInput = 'w-full border rounded p-2 outline-none focus:shadow-outline'
const loginBtn = 'bg-[#9e928c] hover:bg-[#8a807a] text-white uppercase text-sm font-semibold px-4 py-2 rounded'

