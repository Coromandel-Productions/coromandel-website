import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ Queries
export const projectsQuery = `*[_type == "project"] | order(year desc) {
  _id,
  id,
  title,
  category,
  thumbnail,
  slug,
  vimeoId,
  description,
  year,
  location
}`;

export const clientsQuery = `*[_type == "clientBrand"] | order(_createdAt asc) {
  _id,
  name,
  logo,
  context,
  location
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  studioBio,
  contactEmail,
  address,
  bookingWindow,
  heroVideoUrl
}`;

export const behindTheLensQuery = `*[_type == "behindTheLens"][0] {
  heroImage,
  heroTitle,
  originStory,
  coreTeam,
  coreTeamPhotos,
  btsImages
}`;
