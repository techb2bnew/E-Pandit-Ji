import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const footerbardata = [
  {
    icon: '/icons/Astrology_Houses.svg',
    lable: 'Kundli',
    href: '/kundli'
  },
  {
    icon: '/icons/Numerology-primary.svg',
    lable: 'Numerology',
    href: '/numerology'
  }, {
    icon: '/icons/todayrashi.svg',
    lable: 'Numerology',
    href: '/'
  },
  {
    icon: '/icons/bubble-chat 1.svg',
    lable: 'Forum',
    href: '#'
  },
  {
    icon: '/icons/homeremedy.svg',
    lable: 'Remedy',
    href: '/remedy'
  },
]
const FooterMobileBar = () => {
  return (
    <div className='pb-6 pt-3 bg-[#1A1A1A] border-t-2 border-white/50'>
      <div className='flex items-center justify-center gap-2'>
        <Link
          href={'/kundli'}
        >
          <div className='min-w-14 flex flex-col justify-center items-center gap-1.5'>
            <Image
              src={'/icons/Astrology_Houses.svg'}
              alt=''
              width={100}
              height={100}
              className='max-w-5 mx-auto'
            />

            <p className='text-primary text-[10px]'>
              Kundli
            </p>
          </div>
        </Link>
        <Link
          href={'/numerology'}
        >
          <div className='min-w-14 flex flex-col justify-center items-center gap-1.5'>
            <Image
              src={'/icons/Numerology-primary.svg'}
              alt=''
              width={100}
              height={100}
              className='max-w-5 mx-auto'
            />

            <p className='text-primary text-[10px]'>
              Numerology
            </p>
          </div>
        </Link>
        <Link
          href={'/'}
        >
          <div className='w-[95px] relative'>
            <div className=' absolute left-0 bottom-[-10px] w-full flex justify-center'>
              <Image
                src={'/icons/todayrashi.svg'}
                alt=''
                width={100}
                height={100}
                className='max-w-[76px]  mx-auto'
              />
            </div>

          </div>
        </Link>
        <Link
          href={'#'}
        >
          <div className='min-w-14 flex flex-col justify-center items-center gap-1.5'>
            <Image
              src={'/icons/bubble-chat 1.svg'}
              alt=''
              width={100}
              height={100}
              className='max-w-5 mx-auto'
            />

            <p className='text-primary text-[10px]'>
              Forum
            </p>
          </div>
        </Link>
        <Link
          href={'/remedy'}
        >
          <div className='min-w-14 flex flex-col  justify-center items-center gap-1.5'>
            <Image
              src={'/icons/homeremedy.svg'}
              alt=''
              width={100}
              height={100}
              className='max-w-5 mx-auto'
            />

            <p className='text-primary text-[10px]'>
              Remedy
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default FooterMobileBar
