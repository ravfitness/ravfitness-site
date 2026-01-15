import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ravfitness.com.au/",
      lastModified: new Date(),
    },
    {
      url: "https://ravfitness.com.au/services",
      lastModified: new Date(),
    },
    {
      url: "https://ravfitness.com.au/about",
      lastModified: new Date(),
    },
    {
      url: "https://ravfitness.com.au/results",
      lastModified: new Date(),
    },
    {
      url: "https://ravfitness.com.au/contact",
      lastModified: new Date(),
    },
  ];
}
