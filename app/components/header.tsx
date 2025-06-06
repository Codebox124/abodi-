'use client'
import { useContext, useEffect, useState } from 'react'

import Image from 'next/image'

import { Link } from 'react-scroll'



import { useMediaQuery } from 'react-responsive'

import { BiMenuAltRight, BiX } from 'react-icons/bi'
import { SearchContext } from '../context/search'
export default function Header() {
    const { setSearchActive } = useContext(SearchContext)

    const [header, setHeader] = useState(false)
    const [nav, setNav] = useState(false)

    const desktopMode = useMediaQuery({
        query: '(min-width: 1388px)'
    })

    useEffect(() => {
        const handleScroll = () => {
            if (window.screenY > 40) {
                setHeader(true)
            } else {
                setHeader(false)
            }
            if (window.screenY > 800) {
                setSearchActive(true);
            } else {
                setSearchActive(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    return (
        <header className={`${header ? 'bg-white shadow-md py-2' : ' shadow-none py-4 '} fixed bg-white w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}>
            <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
                <div className='flex justify-between items-center px-4'>

                    <Link to='home' smooth={desktopMode} spy={true} className='cursor-pointer'>
                        <img
                            src={'/logo.png'}
                            width={194}
                            height={64}
                            alt='logo'
                            className="w-28 h-auto sm:w-32 md:w-40 lg:w-48"
                        />
                    </Link>

                    <div onClick={() => { setNav(!nav) }}
                        className='cursor-pointer xl:hidden'>
                        {nav ? (
                            <BiX className='text-4xl' />) : (
                            <BiMenuAltRight className='text-4xl' />
                        )}
                    </div>
                </div>
                <nav className={`${nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0 ' : 'max-h-0  xl:max-h-max'} flex flex-col bg-white w-full gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case `}>
                    <Link to='home' activeClass='active' className='cursor-pointer' smooth={desktopMode} spy={true}>Home</Link>
                    <Link to='features' activeClass='active' className='cursor-pointer' smooth={desktopMode} spy={true}>Features</Link>
                    <Link to='how-it-works' activeClass='active' className='cursor-pointer' smooth={desktopMode} spy={true}>How It Works</Link>
                    <Link to='testimonials' activeClass='active' className='cursor-pointer' smooth={desktopMode} spy={true}>Testimonial</Link>
                    <Link to='professions' activeClass='active' className='cursor-pointer' smooth={desktopMode} spy={true}>Showcase</Link>
                    <Link to='use-cases' activeClass='active' className='cursor-pointer' smooth={desktopMode} spy={true}>Usecase</Link>
                    <Link to='faq' activeClass='active' className='cursor-pointer' smooth={desktopMode} spy={true}>FAQ</Link>



                </nav>

            </div>

        </header>
    )
}
