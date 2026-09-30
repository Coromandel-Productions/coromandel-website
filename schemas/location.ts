import { defineType, defineField } from "sanity";

export const locationSchema = defineType({
  name: "location",
  title: "Production Location",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Name of the location (e.g., Singapore, Japan, Australia)",
    }),
    defineField({
      name: "country",
      title: "Country Code",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "2-letter country code (e.g., SG, JP, AU)",
    }),
    defineField({
      name: "longitude",
      title: "Longitude",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "latitude",
      title: "Latitude",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "e.g., Global HQ, Production, India Studio",
    }),
    defineField({
      name: "detail",
      title: "Detail",
      type: "text",
      rows: 2,
      description: "Short description of the location's role",
    }),
    defineField({
      name: "isHQ",
      title: "Is Production Hub?",
      type: "boolean",
      description: "Check if this is a main Hub (will show in the 'Production Hubs' tab instead of 'Production Locations')",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "country",
      isHQ: "isHQ",
    },
    prepare({ title, subtitle, isHQ }) {
      return {
        title: title,
        subtitle: `${subtitle} ${isHQ ? "(HUB)" : ""}`,
      };
    },
  },
});
