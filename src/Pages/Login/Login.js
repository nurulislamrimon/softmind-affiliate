import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import SpinnerLoad from '../../Utilities/SpinnerLoad';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    const [signInWithFacebook, Fuser, Floading, Ferror] = useSignInWithFacebook(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = ({ email, password }) => signInWithEmailAndPassword(email, password);

    (loading || Gloading || Floading) && <SpinnerLoad />;
    (user?.user?.uid || Guser || Fuser) && navigate('/');

    console.log(error?.message || Gerror?.message || Ferror?.message);

    return (
        <section>
            <div className='lg:w-2/4 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full grid gap-4'>
                    <h1 className='text-5xl text-center'>Login</h1>
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

                    {(error) && <p className='text-red-600 text-center'>{error?.message}</p>}
                    <input type="submit" className='btn btn-primary w-full max-w-xs my-5 mx-auto' />
                </form>
                {/* divider */}
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">Social</div>
                </div>
                {(Gerror || Ferror) && <p className='text-red-600 text-center'>{Gerror?.message || Ferror?.message}</p>}
                {/* social auth */}
                <div className="grid grid-cols-2 justify-center">
                    <button onClick={() => signInWithGoogle()} className='btn btn-accent w-full max-w-xs my-5 mx-auto'>Login with Google</button>
                    <button onClick={() => signInWithFacebook()} className='btn btn-primary w-full max-w-xs my-5 mx-auto'>Login with Google</button>
                </div>
            </div>
        </section>
    );
};

export default Login;