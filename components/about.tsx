import Image from 'next/image'
import { CalendarClock, Home, Sparkles, Wind } from 'lucide-react'

const features = [
  {
    icon: Home,
    title: 'Home-based salon',
    text: 'Conveniently located on the north side of Salisbury in Old Sarum.',
  },
  {
    icon: Wind,
    title: 'Comfortable room',
    text: 'A dedicated, air-conditioned treatment room designed for comfort.',
  },
  {
    icon: CalendarClock,
    title: 'Flexible hours',
    text: 'Daytime and evening appointments to fit around your busy schedule.',
  },
  {
    icon: Sparkles,
    title: 'Unhurried care',
    text: 'Appointment-only treatments, so there is plenty of time to relax.',
  },
]

export function About() {
  return (
    <section id="about" className="bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:gap-16">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
            <Image
              src="/images/manicure.png"
              alt="Hands with freshly applied nude gel polish"
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-3xl">
            <Image
              src="/images/facial.png"
              alt="Facial skincare products with aloe vera and tea tree"
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Welcome</p>
          <h2 className="mt-4 text-balance font-serif text-4xl leading-tight md:text-5xl">
            A personal, professional salon experience
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Essential Beauty offers a range of popular treatments — from bikini, Brazilian and
            Hollywood waxing to eyebrow shaping and tinting, manicures, pedicares, facial and body
            massage, and electrolysis permanent hair removal.
          </p>

          <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-background text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-medium">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
