import { defineType, defineField } from "sanity";

export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Hero Title", type: "string", description: "Default: STORIES UNBOUND" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "string", description: "Default: Singapore. Chennai. UK. Worldwide." }),
    defineField({ name: "studioBio", title: "Studio Bio", type: "text", rows: 5 }),
    defineField({ name: "contactEmail", title: "Contact Email", type: "string" }),
    defineField({ name: "address", title: "Studio Address", type: "string" }),
    defineField({ name: "bookingWindow", title: "Booking Window", type: "string", description: "E.g. 'Q4 2026'" }),
    defineField({
      name: "heroVideoUrl",
      title: "Hero Background Video URL",
      type: "string",
      description: "URL for the main hero video (e.g. from Vimeo, AWS, or local public folder like /Coromandel%20x%20Lune/04_Showreels/showreel_final.mp4)",
    }),
  ],
});
