
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query';
import * as apiClient from '../api-client'
import { useAppContext } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'

export type SigninFormData = {
    email: string,
    password: string,
}

const Signin = () => {
    const{register, formState: {
        errors,
    },
    handleSubmit
    } = useForm<SigninFormData>();
    const navigate = useNavigate();
    const {showToast} = useAppContext();
    const queryClient = useQueryClient();
    const mutation = useMutation(apiClient.signin, {
        onSuccess: async () => {
            showToast({message: "Sign in successful", type: "SUCCESS"})
            await queryClient.invalidateQueries('validateToken'),
            navigate('/')
        },
        onError: (error:Error) => {
            showToast({message: error.message, type: "ERROR"})
        }
    })

    const onSubmit = handleSubmit((data) => {
        mutation.mutate(data);
    })
  return (
    <form className='flex flex-col gap-5' onSubmit={onSubmit}>
        <h2 className='text-3xl font-bold'>Sign In</h2>

        <label className='text-gray-700 text-sm font-bold flex-1'>
                Email
                <input type = "email" className='border rounded w-full py-1 px-2 font-normal' {
                    ...register("email",
                    {required: "This field is required"}
                )} ></input>
            {errors.email && (
                    <span className='text-red-700'>{errors.email.message}</span>
                )}
        </label>
        <label className='text-gray-700 text-sm font-bold flex-1'>
                Password
                <input type = "password" className='border rounded w-full py-1 px-2 font-normal' {
                    ...register("password",
                    {required: "This field is required",
                        minLength: {value: 8, message: "Password must be at least 8 characters long"}
                    }
                )} ></input>
                {errors.password && (
                    <span className='text-red-700'>{errors.password.message}</span>
                )}
        </label>
        <span className='flex items-center justify-between' >
            <span className='text-sm'>Not registered yet?{" "}
                 <Link className = 'underline' to ='/register'> Create an account here</Link>
            </span>
            <button type='submit' className='bg-yellow-500 text-black p-2 font-bold hover:bg-amber-400 text-xl'>
                Login
            </button>
        </span>
    </form>
  )
}

export default Signin