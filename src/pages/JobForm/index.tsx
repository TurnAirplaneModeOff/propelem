import {SubmitHandler, useForm, useFormState} from "react-hook-form";
import React from "react";


type Inputs = {
    firstName: string
    lastName: string
    emailAddress: string
    phoneNumber: string
    alternativeNumber: string
    socialMedia: string
    message: string
}

const JobForm = () => {
    const {
        register,
        handleSubmit,
        control,
    } = useForm<Inputs>()

    const {dirtyFields, touchedFields} = useFormState({
        control
    });


    const handleFileChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]
        console.log(selectedFile)
    };

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    // console.log(watch("firstName"))

    return (
        <div>
            <div className={wrapper}>
                <form className={formStyles} onSubmit={handleSubmit(onSubmit)}>
                    <div className={block}>
                        <div className={formControl}>
                            <input
                                className={!dirtyFields.firstName && touchedFields.firstName ? errorInput : input}
                                type="text"
                                {...register("firstName", {
                                    required: true
                                })}
                            />
                            <label className={labelStyles}>First Name</label>
                        </div>
                        <div className={formControl}>
                            <input
                                className={!dirtyFields.lastName && touchedFields.lastName ? errorInput : input}
                                type="text"
                                {...register("lastName", {
                                    required: true
                                })}
                            />
                            <label className={labelStyles}>Last Name</label>
                        </div>
                    </div>

                    <div className={block}>
                        <div className={formControl}>
                            <input
                                className={!dirtyFields.emailAddress && touchedFields.emailAddress ? errorInput : input}
                                type="text"
                                {...register("emailAddress", {
                                    required: true
                                })}
                            />
                            <label className={labelStyles}>Email Address</label>
                        </div>
                        <div className={formControl}>
                            <input
                                className={!dirtyFields.phoneNumber && touchedFields.phoneNumber ? errorInput : input}
                                type="text"
                                {...register("phoneNumber", {
                                    required: true
                                })}
                            />
                            <label className={labelStyles}>Phone Number</label>
                        </div>
                    </div>

                    <div className={block}>
                        <div className={formControl}>
                            <input
                                className={!dirtyFields.alternativeNumber && touchedFields.alternativeNumber ? errorInput : input}
                                type="text"
                                {...register("alternativeNumber", {
                                    required: true
                                })}
                            />
                            <label className={labelStyles}>Alternate Number or contact</label>
                        </div>
                        <div className={formControl}>
                            <input
                                className={!dirtyFields.socialMedia && touchedFields.socialMedia ? errorInput : input}
                                type="text"
                                {...register("socialMedia", {
                                    required: true
                                })}
                            />
                            <label className={labelStyles}>This is Messenger, WhatsApp, Skype?</label>
                        </div>
                    </div>

                    <input
                        className={!dirtyFields.message && touchedFields.message ? errorInput : input}
                        type="text"
                        {...register("message", {
                            required: true
                        })}
                    />
                    <label className={labelStyles}>Message</label>


                    <div className="uploadFile">
                        <label htmlFor="fileInput" className={fileInputLabel}>
                            Upload / Attach Updated Resume (CV)
                        </label>
                        <input
                            id='fileInput'
                            className={fileInput}
                            type="file"
                            onChange={handleFileChange}
                        />
                    </div>


                    <button className={submitBtn} type="submit">Submit</button>
                </form>
            </div>

        </div>
    );
};

export default JobForm;

const wrapper = 'flex justify-center items-center w-full h-[700px] lg: px-20'
const formStyles = 'flex flex-col '
const block = 'flex justify-between items-center lg:flex-wrap '
const formControl = 'w-[45%] lg:w-full'
const input = 'border-b border-[black] w-full outline-none'
const errorInput = 'border-b border-[red] w-full outline-none'
const labelStyles = 'font-gilda'
const submitBtn = 'self-center rounded-lg px-4 py-2 w-[150px] bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300 font-gilda font-bold'
const fileInputLabel = 'font-gilda mr-2'
const fileInput = 'self-start my-5'