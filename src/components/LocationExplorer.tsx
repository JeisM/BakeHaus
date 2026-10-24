"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap } from "leaflet";
import { ArrowUpRight, Clock3, MapPin, X } from "lucide-react";

type StoreLocation = {
  id: string;
  name: string;
  shortName: string;
  address: string;
  coordinates: [number, number];
  image: string;
  description: string;
  hours: { days: string; time: string }[];
  mapsUrl: string;
};

const locations: StoreLocation[] = [
  {
    id: "riverbanks",
    name: "BakeHaus Riverbanks",
    shortName: "Riverbanks",
    address: "Riverbanks Center, 84 A. Bonifacio Avenue, Barangka, Marikina City 1803",
    coordinates: [14.63091, 121.08177],
    image: "/images/locations/riverbanks.webp",
    description: "A relaxed riverside bake stop with sunny outdoor tables and plenty of room for a slow coffee.",
    hours: [
      { days: "Monday–Friday", time: "11:00 AM–9:00 PM" },
      { days: "Saturday–Sunday", time: "10:00 AM–9:00 PM" },
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=14.63091%2C121.08177",
  },
  {
    id: "sm-marikina",
    name: "BakeHaus SM Marikina",
    shortName: "SM Marikina",
    address: "SM City Marikina, Marcos Highway, Brgy. Calumpang, Marikina City 1801",
    coordinates: [14.6275181, 121.0843778],
    image: "/images/locations/sm-marikina.webp",
    description: "Our lively city branch for quick pastry runs, coffee breaks, and boxes to bring home.",
    hours: [{ days: "Daily", time: "10:00 AM–9:00 PM" }],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=14.6275181%2C121.0843778",
  },
  {
    id: "marikina-heights",
    name: "BakeHaus Marikina Heights",
    shortName: "Marikina Heights",
    address: "Ayala Malls Marikina, Liwasang Kalayaan, Brgy. Marikina Heights, Marikina City 1810",
    coordinates: [14.64891, 121.11572],
    image: "/images/locations/marikina-heights.webp",
    description: "A bright neighborhood cafe made for catch-ups, quiet afternoons, and fresh-from-the-oven favorites.",
    hours: [
      { days: "Monday–Friday", time: "11:00 AM–9:00 PM" },
      { days: "Saturday–Sunday", time: "10:00 AM–9:00 PM" },
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=14.64891%2C121.11572",
  },
];

export function LocationExplorer() {
  const mapElement = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<LeafletMap | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<StoreLocation | null>(null);

  useEffect(() => {
    if (!mapElement.current || mapInstance.current) return;
    let cancelled = false;

    void import("leaflet").then((L) => {
      if (cancelled || !mapElement.current) return;
      const map = L.map(mapElement.current, { scrollWheelZoom: false, zoomControl: true });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      locations.forEach((location, index) => {
        const icon = L.divIcon({
          className: "location-map-marker-wrap",
          html: `<span class="location-map-marker"><b>${index + 1}</b></span>`,
          iconSize: [42, 50],
          iconAnchor: [21, 48],
        });
        L.marker(location.coordinates, { icon, keyboard: true, title: location.name })
          .addTo(map)
          .bindTooltip(location.shortName, { direction: "top", offset: [0, -38] })
          .on("click", () => setSelected(location));
      });

      map.fitBounds(L.latLngBounds(locations.map((location) => location.coordinates)), { padding: [38, 38] });
      mapInstance.current = map;
    });

    return () => {
      cancelled = true;
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
  }, []);

  useEffect(() => {
    if (selected && !dialog.current?.open) {
      dialog.current?.showModal();
      document.body.classList.add("modal-open");
    }
    if (!selected && dialog.current?.open) dialog.current.close();
    if (!selected) document.body.classList.remove("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, [selected]);

  return <>
    <div className="locations-explorer">
      <div className="locations-map-shell">
        <div ref={mapElement} className="locations-map" role="region" aria-label="Map of BakeHaus locations in Marikina City" />
        <p className="map-hint"><MapPin size={15} aria-hidden="true" /> Select a pin to see store details.</p>
      </div>
      <div className="location-list" aria-label="Marikina branches">
        {locations.map((location, index) => <button className="location-select" type="button" key={location.id} onClick={() => setSelected(location)}>
          <span className="location-number" aria-hidden="true">{index + 1}</span>
          <span><strong>{location.name}</strong><small>{location.address}</small></span>
          <span className="location-view">View store <ArrowUpRight size={15} aria-hidden="true" /></span>
        </button>)}
      </div>
    </div>

    <dialog ref={dialog} className="location-modal" onClose={() => setSelected(null)} onCancel={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
      {selected && <article>
        <button className="location-modal-close" type="button" onClick={() => setSelected(null)} aria-label="Close location details"><X size={20} aria-hidden="true" /></button>
        <div className="location-modal-image"><Image src={selected.image} alt={`${selected.name} storefront`} fill sizes="(max-width: 700px) 100vw, 520px" /></div>
        <div className="location-modal-copy">
          <p className="eyebrow">Marikina branch</p>
          <h2>{selected.name}</h2>
          <p className="location-description">{selected.description}</p>
          <div className="location-detail"><MapPin size={19} aria-hidden="true" /><div><strong>Exact location</strong><p>{selected.address}</p></div></div>
          <div className="location-detail"><Clock3 size={19} aria-hidden="true" /><div><strong>Business hours</strong>{selected.hours.map((hours) => <p key={hours.days}><span>{hours.days}</span><span>{hours.time}</span></p>)}</div></div>
          <a className="button location-directions" href={selected.mapsUrl} target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </article>}
    </dialog>
  </>;
}
