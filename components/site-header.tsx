import { Phone } from 'lucide-react'
import { contact } from '@/lib/salon'

const links = [
  { href: '#about', label: 'About' },
  { href: '#treatments', label: 'Treatments' },
  { href: '#appointments', label: 'Appointments' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:h-20">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-2xl font-medium tracking-tight md:text-3xl">
            Essential Beauty
          </span>
          <span className="mt-1 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            Old Sarum · Salisbury
          </span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={contact.phoneHref}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Phone className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">{contact.phone}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  )
}
