import { useMutation, useQueryClient } from "react-query";
import { useAppContext } from "../contexts/AppContext";
import * as apiClient from '../api-client'



const SignOutButton = () => {
    const queryClient = useQueryClient();
    const { showToast } = useAppContext();
    const mutation = useMutation(apiClient.logout, {
        
        onSuccess: async () => {
            await queryClient.invalidateQueries('validateToken'),
            showToast({message: "Sign out successful", type: "SUCCESS"})
        },
        onError: (error:Error) => {
            showToast({message: error.message, type: "ERROR"})
        }
    })

    const handleClick = () => {
        mutation.mutate();
    }
return (
    <button onClick={handleClick} className='text-black px-4 font-bold bg-amber-800 hover:bg-gray-100'>Sign Out</button>
  )
}
export default SignOutButton