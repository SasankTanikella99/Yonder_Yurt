import  { useEffect } from 'react'

type ToastProps = {
    message: string,
    type: 'SUCCESS' | 'ERROR' | 'WARNING',
    onClose: () => void,
  
}

export const Toast = ({message, type, onClose}: ToastProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose()
        }, 5000)
        return () => clearTimeout(timer)
    }, [onClose])
    const styles = type === 'SUCCESS'
    ? 'fixed top-4 right-4 z-50 p-4 bg-green-100 text-green-800 max-w-md'
    : 'fixed top-4 right-4 z-50 p-4 bg-red-100 text-red-800 max-w-md'

  return (
    <div className={styles}>
        <div className='flex justify-center items-center'>
            <span className='text-lg font-semibold'>{message}</span>
        </div>
    </div>
  )
}

export default Toast