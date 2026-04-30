import React from 'react'
import Title from './Uiux/Title'
import Description from './Uiux/Description'
import Button from './Uiux/Button'
import Image from 'next/image'

const contactbar = [
    {
        icons: '/icons/Quick.svg',
        lable: 'Quick Response'
    },
    {
        icons: '/icons/Secure.svg',
        lable: '100% Secure'
    },
    {
        icons: '/icons/Expert.svg',
        lable: 'Expert Guidance'
    },
]

const ContactFrom = () => {
    return (
        <div className='bg-[url(/assets/glaxybg.webp)] bg-cover pb-14 border-t-2 border-white md:border-transparent'>
            <div className='inn_container pt-18'>
                <div className="grid xl:grid-cols-[3fr_2fr] gap-6 md:max-w-[90%] mx-auto">
                    <div>
                        <div className='text-center md:text-center'>
                            <Title
                                title={'Get in Touch with e-Pandit Ji'}
                                Class={'text-white'}
                            />
                            <Description
                                description={'Have questions about your Kundli or need guidance? Our experts are here to help you with accurate astrology insights and support.'}
                                Class={'text-white mt-4'}
                            />
                        </div>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 2xl:gap-y-6 pt-8">

                            <div className="flex flex-col">
                                <label className="text-[18px] font-normal text-white mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Full Name"
                                    className="text-[16px] py-4 px-5 rounded-md bg-gray-200 outline-none text-black placeholder:text-black"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-[18px] font-normal text-white mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Mob. Number"
                                    className="text-[16px] py-4 px-5 rounded-md bg-gray-200 outline-none text-black placeholder:text-black"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-[18px] font-normal text-white mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email Address"
                                    className="text-[16px] py-4 px-5 rounded-md bg-gray-200 outline-none text-black placeholder:text-black"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-[18px] font-normal text-white mb-2">
                                    Select Service
                                </label>
                                <select className="text-[16px] py-4 px-5 rounded-md bg-gray-200 outline-none text-black placeholder:text-black">
                                    <option>Select Your Service</option>
                                    <option>Web Development</option>
                                    <option>App Development</option>
                                    <option>SEO</option>
                                </select>
                            </div>

                            <div className="flex flex-col md:col-span-2">
                                <label className="text-[18px] font-normal text-white mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Enter Your Message"
                                    className="text-[16px] py-4 px-5 rounded-md bg-gray-200 outline-none text-black placeholder:text-black resize-none"
                                ></textarea>
                            </div>

                            <p className="md:col-span-2 text-center text-gray-300 text-xl">
                                Your information is 100% secure and will never be shared.
                            </p>

                            <div className="md:col-span-2 mb-8">
                                <Button
                                    button_name={'Submit'}
                                    variant={'primary'}
                                    Class={'text-black w-full'}
                                />
                            </div>

                        </form>
                    </div>
                    <div className='hidden xl:flex items-end'>
                        <Image
                            src={'/assets/youngpandit.webp'}
                            alt=''
                            width={1000}
                            height={500}
                            className=''
                        />
                    </div>
                </div>
            </div>
            <div className="inn_container">
                <div className='py-6 2xl:py-8 grid md:grid-cols-3 bg-[#FFEFC0] gap-6 px-10 rounded-3xl'>
                    {
                        contactbar.map((item, index) => (
                            <div key={index} className='flex items-center gap-2 md:justify-center'>
                                <div className='bg-primary p-2 rounded-lg w-fit'>
                                    <Image
                                        src={item.icons}
                                        alt=''
                                        width={48}
                                        height={48}
                                        className=''
                                    />
                                </div>
                                <h3 className='text-2xl 2xl:text-3xl font-primary text-black'>
                                    {item.lable}
                                </h3>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="inn_container">
                <section className="relative overflow-hidden bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat xl:pb-16 2xl:pb-22.5 pt-14 md:pt-18">
                    <div className="absolute inset-0 z-1 bg-black/65" />

                    <div className="relative z-2 mx-auto max-w-[980px] px-6 text-center">
                        <Title
                            title={'Start Your <span class="text-primary">Journey</span> Today'}
                            Class={'text-white'}
                        />
                        <p className="mx-auto mb-[10px] max-w-[760px] text-[16px] leading-[1.55] text-white/95">
                            Discover your true path. Understand your destiny. Start your journey with e-Pandit Ji today.
                        </p>

                        <Description
                            description={'Find compatibility. Build trust. Begin your journey together.'}
                            Class={'text-white'}
                        />

                        <Button
                            button_name={'Get Started Now'}
                            variant={'primary'}
                            Class={'text-black mt-8'}
                        />

                        <p className="text-[20px] text-white max-[991px]:text-[16px] pt-3">
                            100% private | Fast delivery
                        </p>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default ContactFrom
