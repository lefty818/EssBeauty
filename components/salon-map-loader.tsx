'use client'

import dynamic from 'next/dynamic'

const SalonMap = dynamic(() => import('./salon-map'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" />,
})

export default SalonMap
