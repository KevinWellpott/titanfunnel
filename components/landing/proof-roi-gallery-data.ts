/**
 * Case-Study-Galerie: Screenshots pro Kategorie (.webp).
 * Bilder in public/case-study/ ablegen:
 *   Kundenmagnet: kundenmagnet-1.webp … kundenmagnet-8.webp
 *   Fullfillment: fullfillment-1.webp … fullfillment-3.webp
 *   Kontrollzentrum: kontrollzentrum-1.webp … kontrollzentrum-5.webp
 */
export interface GalleryCategory {
  id: string;
  label: string;
  images: string[];
}

export const proofRoiGalleryCategories: GalleryCategory[] = [
  {
    id: "kundenmagnet",
    label: "Kundenmagnet",
    images: [
      "/case-study/kundenmagnet-1.webp",
      "/case-study/kundenmagnet-2.webp",
      "/case-study/kundenmagnet-3.webp",
      "/case-study/kundenmagnet-4.webp",
      "/case-study/kundenmagnet-5.webp",
      "/case-study/kundenmagnet-6.webp",
      "/case-study/kundenmagnet-7.webp",
      "/case-study/kundenmagnet-8.webp",
    ],
  },
  {
    id: "fullfillmentsystem",
    label: "Fullfillmentsystem",
    images: [
      "/case-study/fullfillment-1.webp",
      "/case-study/fullfillment-2.webp",
      "/case-study/fullfillment-3.webp",
    ],
  },
  {
    id: "kontrollzentrum",
    label: "Kontrollzentrum",
    images: [
      "/case-study/kontrollzentrum-1.webp",
      "/case-study/kontrollzentrum-2.webp",
      "/case-study/kontrollzentrum-3.webp",
      "/case-study/kontrollzentrum-4.webp",
      "/case-study/kontrollzentrum-5.webp",
    ],
  },
];
