# Coromandel Productions - Website

This is the front-end codebase and CMS integration for the Coromandel Productions website, built by Lune Studio.

## Technology Stack
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** Tailwind CSS + Framer Motion
- **CMS:** [Sanity.io](https://www.sanity.io)
- **Map:** react-simple-maps

---

## 1. Local Setup

To run this project on your local machine:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Create a `.env.local` file in the root directory (you can copy the `.env.example` file) and add your Sanity credentials:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 2. Managing Content (Sanity CMS)

The website is connected to Sanity CMS. The Sanity Studio is embedded directly into this application.

1. Run the local dev server (`npm run dev`).
2. Navigate to [http://localhost:3000/studio](http://localhost:3000/studio).
3. Log in with your Sanity account.
4. From here, you can manage:
   - **Projects & Films**
   - **Client Brands** (Logos)
   - **Site Settings** (Global text, contact emails, and the Hero Video URL)

*Note: Changes made in the CMS take effect immediately on the front-end when refreshed.*

---

## 3. Deploying to Vercel

The easiest way to deploy this site live is through Vercel.

1. Push this repository to your own GitHub account.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import the GitHub repository.
4. **Important:** In the Vercel deployment settings, expand **Environment Variables** and add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` with your actual project ID.
   - `NEXT_PUBLIC_SANITY_DATASET` set to `production`.
5. Click **Deploy**.

For future updates, any code pushed to the `main` branch will automatically trigger a new deployment. Content updates made in Sanity Studio will immediately reflect on the live site without needing a redeployment.
