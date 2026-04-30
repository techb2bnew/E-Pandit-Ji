import ContactFrom from '@/components/ContactFrom'
import ContactUsBanner from '@/components/ContactUsBanner'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import KundliNavbar from '@/components/KundliNavbar'
import OurServicesSection from '@/components/OurServicesSection'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
       <KundliNavbar />
       <ContactUsBanner />
       <ContactFrom />
       <div className="bg-[url(/assets/glaxybg.webp)] bg-cover">
       <OurServicesSection />
       </div>
       <Faq />
       <Testimonials />
       <Footer /> 
    </div>
  )
}

export default page
