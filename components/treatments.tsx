'use client'

import { useState, type KeyboardEvent } from 'react'
import { Check, Info } from 'lucide-react'
import { categories } from '@/lib/salon'
import { cn } from '@/lib/utils'

export function Treatments() {
  const [activeId, setActiveId] = useState(categories[0].id)
  const active = categories.find((c) => c.id === activeId) ?? categories[0]

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    event.preventDefault()
    const offset = event.key === 'ArrowRight' ? 1 : -1
    const next = categories[(index + offset + categories.length) % categories.length]
    setActiveId(next.id)
    document.getElementById(`tab-${next.id}`)?.focus()
  }

  return (
    <section id="treatments" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Treatment menu</p>
          <h2 className="mt-4 text-balance font-serif text-4xl leading-tight md:text-5xl">
            Treatments &amp; prices
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Every treatment is carried out by appointment, with time allowed for you to relax.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Treatment categories"
          className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2"
        >
          {categories.map((category, index) => {
            const selected = category.id === activeId
            return (
              <button
                key={category.id}
                id={`tab-${category.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${category.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(category.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={cn(
                  'shrink-0 rounded-full border px-5 py-2.5 text-sm transition-colors',
                  selected
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border bg-card text-muted-foreground hover:text-foreground',
                )}
              >
                {category.title}
              </button>
            )
          })}
        </div>

        <div
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="mt-8 grid gap-10 rounded-3xl border border-border bg-card p-6 md:grid-cols-[1fr_1.6fr] md:p-10"
        >
          <div>
            <h3 className="font-serif text-3xl">{active.title}</h3>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{active.intro}</p>

            {active.highlights && (
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {active.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {active.notes?.map((note) => (
              <p
                key={note}
                className="mt-6 flex gap-2 rounded-2xl bg-accent px-4 py-3 text-sm text-accent-foreground"
              >
                <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {note}
              </p>
            ))}
          </div>

          <ul className="divide-y divide-border">
            {active.treatments.map((treatment) => (
              <li key={treatment.name} className="py-4 first:pt-0 last:pb-0">
                <div className="flex items-baseline gap-3">
                  <span className="font-medium">{treatment.name}</span>
                  <span
                    aria-hidden="true"
                    className="flex-1 translate-y-[-4px] border-b border-dotted border-foreground/25"
                  />
                  <span className="font-serif text-xl text-primary">{treatment.price}</span>
                </div>
                {(treatment.duration || treatment.description) && (
                  <div className="mt-1 flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:gap-3">
                    {treatment.duration && (
                      <span className="shrink-0">Allow {treatment.duration}</span>
                    )}
                    {treatment.description && (
                      <span className="text-pretty">
                        <span className="hidden sm:inline" aria-hidden="true">
                          {'· '}
                        </span>
                        {treatment.description}
                      </span>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
