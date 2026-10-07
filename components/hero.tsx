import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { contact } from '@/lib/salon'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-14">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Home-based beauty salon
          </p>
          <h1 className="mt-5 text-balance font-serif text-5xl font-normal leading-[1.02] tracking-tight md:text-7xl">
            Time to relax, <em className="text-primary">unwind</em> and feel your best.
          </h1>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            A professional and caring service from a dedicated, comfortable and air-conditioned
            treatment room on the north side of Salisbury.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book an appointment
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#treatments"
              className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              View treatments &amp; prices
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
            <div>
              <dt className="text-xs text-muted-foreground">Appointments</dt>
              <dd className="mt-1 font-serif text-xl">Day &amp; evening</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Treatments</dt>
              <dd className="mt-1 font-serif text-xl">25+</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">Location</dt>
              <dd className="mt-1 font-serif text-xl">Old Sarum</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-3xl bg-secondary">
            <Image
              src="/images/treatment-room.png"
              alt="The calm, air-conditioned treatment room at Essential Beauty"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm md:-left-8">
            <p className="font-serif text-lg leading-tight">By appointment only</p>
            <p className="text-xs text-muted-foreground">So you never feel rushed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
