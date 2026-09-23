export default function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Coromandel Productions",
    "url": "https://coromandel.sg",
    "logo": "https://coromandel.sg/Logo_Light.svg",
    "founder": {
      "@type": "Person",
      "name": "Veeru Murugappan"
    },
    "sameAs": [
      "https://vimeo.com/coromandelproductions",
      "https://www.instagram.com/coromandel.productions/"
    ]
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Coromandel Productions",
    "image": "https://coromandel.sg/Coromandel%20x%20Lune/07_BTS_Images/bts-4.jpg",
    "url": "https://coromandel.sg",
    "priceRange": "$$$",
    "description": "A boutique video production company creating high-end commercials, branded content, documentaries, and narrative films.",
    "founder": {
      "@type": "Person",
      "name": "Veeru Murugappan"
    },
    "location": [
      {
        "@type": "Place",
        "name": "Singapore Office",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Singapore",
          "addressCountry": "SG"
        }
      },
      {
        "@type": "Place",
        "name": "Chennai Office",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
    </>
  );
}
