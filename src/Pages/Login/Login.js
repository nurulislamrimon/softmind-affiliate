import React from 'react';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <section>
            <div className='lg:w-2/4 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full grid gap-4'>
                    {/* email input field */}
                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text">Enter your email here</span>
                        </label>
                        <input {...register("email", { required: true })} className="input input-bordered w-full max-w-sm" />
                        {errors.email &&
                            <label className="label">
                                <span className="label-text-alt text-red-600">Email is required!</span>
                            </label>
                        }
                    </div>
                    {/* password input field */}
                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text">Enter your password here</span>
                        </label>
                        <input {...register("password", { required: true })} className="input input-bordered w-full max-w-xs" />
                        {errors.password &&
                            <label className="label">
                                <span className="label-text-alt text-red-600">Password is required!</span>
                            </label>
                        }
                    </div>
                    <input type="submit" className='btn btn-primary w-full max-w-xs my-5 mx-auto' />
                </form>
            </div>
        </section>
    );
};

export default Login;