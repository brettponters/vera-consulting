import { Geist } from "next/font/google";

// Geist — modern geometric humanist sans-serif. Used for both display and body.
// Display: weight 600-700, tracking -0.02em (set via CSS on headings).
// Body: weight 400-500, default tracking.
export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});
