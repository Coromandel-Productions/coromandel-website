import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { projectSchema } from "./schemas/project";
import { clientBrandSchema } from "./schemas/clientBrand";
import { siteSettingsSchema } from "./schemas/siteSettings";
import { behindTheLensSchema } from "./schemas/behindTheLens";

export default defineConfig({
  name: "coromandel",
  title: "Coromandel Productions — CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Projects & Films")
              .child(S.documentTypeList("project").title("All Projects")),
            S.listItem()
              .title("Client Brands")
              .child(S.documentTypeList("clientBrand").title("Clients")),
            S.listItem()
              .title("Site Settings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.listItem()
              .title("Behind The Lens")
              .child(S.document().schemaType("behindTheLens").documentId("behindTheLens")),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [projectSchema, clientBrandSchema, siteSettingsSchema, behindTheLensSchema],
  },
});
