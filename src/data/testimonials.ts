import oscar from "@/../public/testimonials/oscar.webp";
import iggy from "@/../public/testimonials/iggy.webp";
import tionee from "@/../public/testimonials/tionee.jpg";
import type { StaticImageData } from "next/image";

export type Testimonial = {
  name: string;
  review: string;
  imageUrl?: StaticImageData;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Oscar Halling",
    review:
      "Amazing work as always! Using Hassan and his team for backend tasks outside of my capabilities on every project now.",
    imageUrl: oscar,
  },

  {
    name: "Valentin Pitard",
    review: "verry nice i recommande !",
  },
  {
    name: "Iggy Gullstrand",
    review:
      "Fanstastic first work with Hassan. He and his collegue helped evaluate our new platform and went above and beyond to accomodate from our needs by not only giving us bug reports, but also invaluable feedback on how we can make the site better.  ",
    imageUrl: iggy,
  },
  {
    name: "Tionee Smith",
    review: "Hassan is one of the best to work with!",
    imageUrl: tionee,
  },
  {
    name: "Larry Lewis",
    review:
      "Hassan is very diligent and professional. Easy to work with and delivered above and beyond what I asked for.",
  },
  {
    name: "Mohamed Mudassir",
    review:
      "Friendly and professional. Perfect communication and code. Will definitely hire again.",
  },
  {
    name: "Stacey Hernandez",
    review:
      "Had a quick experience with Hassan. He was supportive, and up to the mark. AI integration to my platform was smooth. I highly recommend him.",
  },
];

export default TESTIMONIALS;
