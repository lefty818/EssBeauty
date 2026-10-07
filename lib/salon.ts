export const contact = {
  phone: '07801 235281',
  phoneHref: 'tel:+447801235281',
  email: 'amanda@essentialbeauty.biz',
  location: 'Old Sarum, Salisbury',
  postcode: 'SP4 6FP',
  mapCenter: { lat: 51.10645, lng: -1.782673 },
  mapZoom: 16,
  // House number is only passed to the directions service, never displayed on the page.
  directionsHref: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('43 Norman Drive, Old Sarum, Salisbury SP4 6FP')}&travelmode=driving`,
}

export type Treatment = {
  name: string
  price: string
  duration?: string
  description?: string
}

export type TreatmentCategory = {
  id: string
  title: string
  intro: string
  notes?: string[]
  highlights?: string[]
  treatments: Treatment[]
}

export const categories: TreatmentCategory[] = [
  {
    id: 'waxing',
    title: 'Waxing',
    intro:
      'The wax used depends on the treatment. A gentle, soothing Aloe Vera & Peppermint Gel Wax is used for the face, while a Tea Tree Creme Wax — with natural antiseptic properties — tackles shorter, stronger hairs on legs, arms, underarms and bikini line.',
    treatments: [
      { name: 'Eyebrow Shape', price: '£9.00', duration: '15 mins' },
      { name: 'Top Lip', price: '£8.00', duration: '15 mins' },
      { name: 'Chin', price: '£10.00', duration: '15 mins' },
      { name: 'Top Lip & Chin', price: '£15.00', duration: '15 mins' },
      { name: 'Underarms', price: '£10.00', duration: '15 mins' },
      { name: 'Forearms', price: '£18.00', duration: '15 mins' },
      { name: 'Full Arms', price: '£25.00', duration: '30 mins' },
      { name: '1/2 Leg', price: '£20.00', duration: '30 mins' },
      { name: '3/4 Leg', price: '£28.00', duration: '30 mins' },
      { name: 'Full Leg', price: '£32.00', duration: '60 mins' },
      { name: 'Full Leg + Bikini Line', price: '£45.00', duration: '60 mins' },
    ],
  },
  {
    id: 'intimate',
    title: 'Intimate Waxing',
    intro:
      'Intimate waxing uses a specialist wax that sticks to the hair and not the skin, removing even the coarsest hair and leaving skin smooth, hair-free and with no wax residue.',
    treatments: [
      {
        name: 'Bikini Line',
        price: 'from £15.00',
        duration: '30 mins',
        description: 'Removes hair from the sides, just outside a modest panty or bathing suit line.',
      },
      {
        name: 'Californian',
        price: '£21.00',
        duration: '15 mins',
        description: 'Removes hair outside of a thong, leaving a natural triangle shape to the front.',
      },
      {
        name: 'Brazilian',
        price: '£32.00',
        duration: '30 mins',
        description: 'All hair is removed except for a "landing strip".',
      },
      {
        name: 'Hollywood',
        price: '£35.00',
        duration: '30 mins',
        description: 'All hair is removed.',
      },
    ],
  },
  {
    id: 'tinting',
    title: 'Tinting',
    intro: 'Tinting can be applied to eyelashes and eyebrows to enhance their definition.',
    treatments: [
      { name: 'Eyebrow Tint', price: '£9.00', duration: '15 mins' },
      { name: 'Eyelash Tint', price: '£20.00', duration: '30 mins' },
      { name: 'Eyebrow & Eyelash Tint', price: '£26.00', duration: '30 mins' },
    ],
  },
  {
    id: 'massage-facials',
    title: 'Massage & Facials',
    intro:
      'Swedish massage for relaxation and relief of muscle tension, plus facials to cleanse, refresh and revive the skin.',
    treatments: [
      { name: 'Full Body Massage', price: '£60.00', duration: '60 mins' },
      { name: 'Back Massage', price: '£26.00', duration: '30 mins' },
      {
        name: 'Facial',
        price: '£50.00',
        duration: '60 mins',
        description:
          'Cleanse, tone, exfoliation and brush cleanse followed by a 20 minute massage and a mask. Applied to the face, neck, upper chest and shoulders.',
      },
      {
        name: 'Mini Facial',
        price: '£27.00',
        duration: '30 mins',
        description: 'Cleanse, tone, exfoliation and mask. Applied to the face and neck.',
      },
    ],
  },
  {
    id: 'nails',
    title: 'Nails',
    intro:
      'Gel polish is painted on like a varnish, dries in minutes and soaks off in minutes. Nobody will be able to tell they are gels — it looks just like nail polish.',
    highlights: [
      "Doesn't chip or fade",
      'Lasts 2 – 3 weeks',
      'No in-fills',
      'Leave with dry nails',
    ],
    notes: ['Please bring flip-flops for pedicare and toe treatments to protect your polish.'],
    treatments: [
      {
        name: 'Gel Polish',
        price: '£32.00',
        duration: '60 mins',
        description:
          'Shaping, cuticle work and soaking off of any previous application if required.',
      },
      {
        name: 'Manicure',
        price: '£32.00',
        duration: '45 – 60 mins',
        description:
          'Shaping, soaking and cuticle care, followed by a hand and forearm massage, finished with a coloured or French polish.',
      },
      {
        name: 'Pedicare',
        price: '£36.00',
        duration: '60 mins',
        description: 'Similar to a manicure but for the feet, including removal of any hard skin.',
      },
      {
        name: 'File & Paint',
        price: '£20.00',
        duration: '30 mins',
        description: 'Available for either hands or feet.',
      },
    ],
  },
  {
    id: 'electrolysis',
    title: 'Electrolysis',
    intro:
      'Electrolysis permanently removes unwanted hair by applying a small electrical current to the hair root. It is ideal for small areas such as the top lip and chin, using Sterex equipment.',
    treatments: [
      { name: 'Electrolysis Session', price: '£20.00', duration: '15 mins' },
      { name: 'Additional Time', price: '£7.00', duration: '+5 mins' },
    ],
  },
]
