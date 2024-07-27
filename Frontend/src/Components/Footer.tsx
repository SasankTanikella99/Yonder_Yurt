

const Footer = () => {
  return (
    <div className='bg-yellow-400 py-10'>
        <div className='container mx-auto flex justify-between'>
            <span className='text-3xl text-black font-bold tracking-tight'>
                Yonder Yurt
            </span>
            <span className='text-black font-bold tracking-tight flex gap-4'>
                <p className='cursor-pointer'> privacy policy</p>
                <p className='cursor-pointer'> terms of service</p>
            </span>
        </div>
    </div>
  )
}

export default Footer