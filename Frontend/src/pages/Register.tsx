
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import * as apiClient from '../api-client'
import { useAppContext } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'

export type RegisterFormData = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
}

const Register = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {showToast} = useAppContext();

    const {register, watch, handleSubmit, formState: {errors},} = useForm<RegisterFormData>();

    const mutation = useMutation(apiClient.register, {
        onSuccess: async () => {
            
            showToast({message: "Registration successful", type: "SUCCESS"})
            await queryClient.invalidateQueries('validateToken'),
            navigate('/')
        },
        onError: (error:Error) => {
            showToast({message: "Registration failed: " + error.message, type: "ERROR"})
        },
    })

    const onSubmit = handleSubmit((data) => {
        mutation.mutate(data);
    })

  return (
    <form className='flex flex-col gap-5' onSubmit={onSubmit}>
        <h2 className='text-3xl font-bold'> Create an account</h2>
        <div className='flex flex-col md:flex-row gap-5'>
            <label className='text-gray-700 text-sm font-bold flex-1'>
                First Name
                <input type = "text" className='border rounded w-full py-1 px-2 font-normal' {
                    ...register("firstName",
                    {required: "This field is required"}
                )}>
                
                </input>
                {errors.firstName && (
                    <span className='text-red-700'>{errors.firstName.message}</span>
                )}
            </label>
            <label className='text-gray-700 text-sm font-bold flex-1'>
                Last Name
                <input type = "text" className='border rounded w-full py-1 px-2 font-normal' {
                    ...register("lastName",
                    {required: "This field is required"}
                )} ></input>
            {errors.lastName && (
                    <span className='text-red-700'>{errors.lastName.message}</span>
                )}
            </label>
        </div>
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
        <label className='text-gray-700 text-sm font-bold flex-1'>
                 Confirm password
                <input type = "password" className='border rounded w-full py-1 px-2 font-normal' {
                    ...register("confirmPassword", 
                        {required: "This field is required",
                        validate: (value) => value === watch('password') || "Passwords do not match",
                    } 
                )} ></input>
                {errors.confirmPassword && (
                    <span className='text-red-700'>{errors.confirmPassword.message}</span>
                )}
        </label>
        <span >
            <button type='submit' className='bg-yellow-500 text-black p-2 font-bold hover:bg-amber-400 text-xl'> 
                Create account
            </button>
        </span>
    </form> 
  )
}

export default Register