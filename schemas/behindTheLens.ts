import { defineType, defineField } from "sanity";

export const behindTheLensSchema = defineType({
  name: "behindTheLens",
  title: "Behind The Lens",
  type: "document",
  fields: [
    defineField({
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "text", // changed to text so they can press Enter
      rows: 2,
      description: "Use *asterisks* to make text italic and orange. Press Enter for a line break. Example: BEYOND\n*THE LENS.*",
    }),
    defineField({
      name: "originStory",
      title: "Origin Story",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "coreTeam",
      title: "Core Team",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "role", title: "Role", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "coreTeamPhotos",
      title: "Core Team Photos (Film Strip)",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "btsImages",
      title: "Life on Set (Masonry Grid)",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
  ],
});
