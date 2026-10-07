import { contact } from '@/lib/salon'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-2xl text-foreground">Essential Beauty</p>
          <p className="mt-1">Beauty Salon · {contact.location}</p>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <a href={contact.phoneHref} className="hover:text-foreground">
            Tel: {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="hover:text-foreground">
            {contact.email}
          </a>
          <p className="mt-2 text-xs">
            &copy; {new Date().getFullYear()} Essential Beauty. All treatments by appointment only.
          </p>
        </div>
      </div>
    </footer>
  )
}
