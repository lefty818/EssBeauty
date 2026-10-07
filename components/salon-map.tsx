'use client'

import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const pinkPin = L.divIcon({
  className: 'salon-pin',
  html: `
    <svg width="40" height="52" viewBox="0 0 40 52" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20 0C9 0 0 8.9 0 19.9 0 34.8 20 52 20 52s20-17.2 20-32.1C40 8.9 31 0 20 0z" fill="#E4569A" stroke="#ffffff" stroke-width="2.5"/>
      <circle cx="20" cy="20" r="7" fill="#ffffff"/>
    </svg>`,
  iconSize: [40, 52],
  iconAnchor: [20, 52],
  popupAnchor: [0, -48],
})

type SalonMapProps = {
  lat: number
  lng: number
  zoom: number
  label: string
}

export default function SalonMap({ lat, lng, zoom, label }: SalonMapProps) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={zoom}
      scrollWheelZoom={false}
      className="absolute inset-0 z-0 size-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        className="salon-map-tiles"
      />
      <Marker position={[lat, lng]} icon={pinkPin} title={label} alt={label}>
        <Popup>
          <strong>Essential Beauty</strong>
          <br />
          Old Sarum, Salisbury SP4 6FP
        </Popup>
      </Marker>
    </MapContainer>
  )
}
