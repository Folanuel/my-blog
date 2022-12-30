import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className='pt-9 pb-4 px-10 mx-5 md:mx-96 mb-10'>
            <div className='flex flex-row text-center space-x-2 text-xl'>
                <Link href='https://www.instagram.com/fola_codes/' target="_blank" className='hover:underline hover:text-stone-900'>Instagram</Link>
                <Link href='https://github.com/Folanuel' target="_blank" className='hover:underline hover:text-stone-900'>Github</Link>
                <Link href='https://folanuel-dev.netlify.app/' target="_blank" className='hover:underline hover:text-stone-900'>Portfolio</Link>               
            </div>
            <div className='pt-4 text-xl'>
                <p>Built with <Link href='https://nextjs.org/'  target="_blank" className='hover:underline hover:text-stone-900'>Next.js</Link>,  
                <Link href='https://tailwindcss.com/' target="_blank" className='hover:underline hover:text-stone-900'> Tailwindcss</Link>,  
                <Link href='https://www.sanity.io/'  target="_blank" className='hover:underline hover:text-stone-900'> Sanity</Link> 
                <span> and</span>
                <Link href='https://vercel.com/' target="_blank" className='hover:underline hover:text-stone-900'> Vercel</Link> </p>
            </div>
            

        </footer>
    )
}

export default Footer