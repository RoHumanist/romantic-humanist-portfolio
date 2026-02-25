import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Romantic Humanist | Portfolio",
  description: "We're all going to die anyway — so why do we live? A narrative portfolio exploring the worldview and work of a Romantic Humanist.",
  keywords: ["Romantic Humanist", "portfolio", "personal branding", "philosophy", "humanism"],
  authors: [{ name: "Romantic Humanist" }],
  openGraph: {
    title: "Romantic Humanist | Portfolio",
    description: "We're all going to die anyway — so why do we live?",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Romantic Humanist",
    description: "We're all going to die anyway — so why do we live?",
  },
  alternates: {
    canonical: "/en",
    languages: {
      "ko": "/",
      "en": "/en",
    },
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
