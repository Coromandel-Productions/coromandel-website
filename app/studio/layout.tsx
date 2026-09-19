import localFont from "next/font/local";

const cormorantLocal = localFont({
  src: [
    {
      path: "../../public/fonts/Cormorant_Garamond/CormorantGaramond-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cormorant_Garamond/CormorantGaramond-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-cormorant",
});

const jostLocal = localFont({
  src: [
    {
      path: "../../public/fonts/Jost/Jost-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/Jost/Jost-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-jost",
});

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${cormorantLocal.variable} ${jostLocal.variable} ${jostLocal.className} min-h-screen`}>
      {children}
    </div>
  );
}
