import { Clock, Mail, MapPin, Navigation, Phone } from 'lucide-react'
import SalonMap from '@/components/salon-map-loader'
import { contact } from '@/lib/salon'

export function Appointments() {
  return (
    <section id="appointments" className="pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid overflow-hidden rounded-3xl bg-foreground text-background md:grid-cols-[1.3fr_1fr]">
          <div className="p-8 md:p-14">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary/80">Appointments</p>
            <h2 className="mt-4 text-balance font-serif text-4xl leading-tight md:text-5xl">
              Ready to book your treatment?
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-background/70">
              Give Amanda a call or send an email to arrange a time that suits you. Daytime and
              evening appointments are available.
            </p>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              <li>
                <a href={contact.phoneHref} className="group flex items-start gap-3">
                  <Phone className="mt-1 size-5 text-secondary" aria-hidden="true" />
                  <span>
                    <span className="block text-xs text-background/60">Telephone</span>
                    <span className="font-serif text-2xl group-hover:underline">
                      {contact.phone}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="group flex items-start gap-3">
                  <Mail className="mt-1 size-5 text-secondary" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-xs text-background/60">Email</span>
                    <span className="text-base [overflow-wrap:anywhere] group-hover:underline">
                      {contact.email}
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 size-5 text-secondary" aria-hidden="true" />
                <span>
                  <span className="block text-xs text-background/60">Hours</span>
                  <span className="text-lg">Daytimes &amp; evenings</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 text-secondary" aria-hidden="true" />
                <span>
                  <span className="block text-xs text-background/60">Location</span>
                  <span className="text-lg">
                    {contact.location} {contact.postcode}
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center bg-primary p-8 text-primary-foreground md:p-14">
            <h3 className="font-serif text-3xl">Cancellation policy</h3>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
              To keep appointments available for everyone, the following charges apply to late
              cancellations.
            </p>
            <dl className="mt-8 divide-y divide-primary-foreground/20 border-y border-primary-foreground/20">
              <div className="flex items-center justify-between py-4">
                <dt className="text-sm">Cancelled within 48 hours</dt>
                <dd className="font-serif text-2xl">50%</dd>
              </div>
              <div className="flex items-center justify-between py-4">
                <dt className="text-sm">Cancelled within 24 hours</dt>
                <dd className="font-serif text-2xl">100%</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-6 grid overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-[1fr_2fr]">
          <div className="flex flex-col justify-between gap-8 p-8 md:p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Find us</p>
              <h3 className="mt-4 font-serif text-3xl text-card-foreground">
                {contact.location}
              </h3>
              <p className="mt-1 text-sm font-medium tracking-wide text-card-foreground">
                {contact.postcode}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Essential Beauty is a home-based salon in Old Sarum, just north of Salisbury city
                centre. Tap Get directions for turn-by-turn navigation to the door.
              </p>
            </div>
            <a
              href={contact.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Navigation className="size-4" aria-hidden="true" />
              Get directions
            </a>
          </div>
          <div className="relative min-h-80 md:min-h-96">
            <SalonMap
              lat={contact.mapCenter.lat}
              lng={contact.mapCenter.lng}
              zoom={contact.mapZoom}
              label={`Essential Beauty, ${contact.location} ${contact.postcode}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
