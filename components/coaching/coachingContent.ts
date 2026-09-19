export type CoachingOptionId = "one-to-one" | "semi-private" | "online" | "six-week" | "twelve-week" | "summer";

export type CoachingOption = Readonly<{
  id: CoachingOptionId;
  title: string;
  summary: readonly string[];
  supporting: string;
  groups: readonly Readonly<{ title?: string; items: readonly string[] }>[];
  howItWorks?: string;
  cta: string;
  href: string;
}>;

export const whatsappUrl = "https://wa.me/61412197390?text=Hi%20Rav%2C%20I%E2%80%99d%20like%20to%20enquire%20about%20coaching.";
const enquiryUrl = (service: string): string =>
  `https://wa.me/61412197390?text=${encodeURIComponent(`Hi Rav, I’d like to enquire about ${service}.`)}`;

export const coachingOptions: Readonly<Record<CoachingOptionId, CoachingOption>> = {
  "one-to-one": {
    id: "one-to-one", title: "One-to-One Personal Training",
    summary: ["Personalised coaching", "Individual progression", "Accountability"],
    supporting: "Private coaching built around you.",
    groups: [{ items: ["One-to-one sessions with Rav", "Personalised training program", "Technique and exercise coaching", "Strength, fitness and mobility", "Progress tracking and regular reviews", "Program adjustments as you progress", "Suitable for all training experience levels"] }],
    cta: "Book a Complimentary Session", href: "/book",
  },
  "semi-private": {
    id: "semi-private", title: "Partner & Semi-Private",
    summary: ["2–3 people", "Coached sessions", "Individual progression"],
    supporting: "Train together. Still get personal coaching.",
    groups: [{ items: ["Train with a partner or friend", "Small group of 2–3 people", "Coached training sessions", "Individual goals and progression", "Technique and exercise guidance", "Progress tracking"] }],
    cta: "Book a Complimentary Session", href: "/book",
  },
  online: {
    id: "online", title: "Online Coaching",
    summary: ["Personalised program", "Weekly progress review", "Program adjustments", "Video form feedback", "Accountability"],
    supporting: "Train independently. Stay coached.",
    groups: [{ items: ["Personalised training program", "Train at your own gym or location", "Weekly progress review", "Program adjustments as you progress", "Video form feedback", "Progress tracking", "Ongoing accountability and support"] }],
    howItWorks: "Complete your workouts independently. Rav reviews your progress, adjusts your program and provides feedback when needed.",
    cta: "Enquire About Online Coaching", href: enquiryUrl("Online Coaching"),
  },
  "six-week": {
    id: "six-week", title: "6-Week Program", summary: ["Build consistency with a structured starting plan."],
    supporting: "Build consistency with a structured starting plan.",
    groups: [{ items: ["Structured 6-week training plan", "Training based on your goals and ability", "Progressive training", "Progress tracking and regular reviews", "Program adjustments when needed", "Accountability and support"] }],
    cta: "Enquire About the 6-Week Program", href: enquiryUrl("the 6-Week Program"),
  },
  "twelve-week": {
    id: "twelve-week", title: "12-Week Transformation", summary: ["Structured longer-term progression."],
    supporting: "Build lasting progress with a longer structured plan.",
    groups: [{ items: ["Structured 12-week training plan", "Training based on your goals and ability", "Progressive training", "Regular progress reviews", "Program adjustments as you progress", "Ongoing accountability and support"] }],
    cta: "Enquire About the 12-Week Transformation", href: enquiryUrl("the 12-Week Transformation"),
  },
  summer: {
    id: "summer", title: "Summer Challenge", summary: ["A focused seasonal training challenge."],
    supporting: "A focused seasonal training challenge.",
    groups: [{ items: ["Structured training plan", "Clear strength and fitness goals", "Progressive training", "Progress tracking", "Program adjustments when needed", "Accountability and coaching support"] }],
    cta: "Enquire About the Summer Challenge", href: enquiryUrl("the Summer Challenge"),
  },
};
