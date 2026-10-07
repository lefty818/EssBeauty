import { About } from '@/components/about'
import { Appointments } from '@/components/appointments'
import { Hero } from '@/components/hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Treatments } from '@/components/treatments'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Appointments />
      </main>
      <SiteFooter />
    </>
  )
}
