/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { manrope: "Manrope sans-serif" },
    extend: {
      colors: {
        gray: {
          0: "#FFFFFF",
          100: "#FAFAFA",
          200: "#F1F1F1",
        },
        black: {
          soft: "#101010",
          full: "#000000",
        },
        orange: {
          primary: "#D87D4A",
          secondary: "#FBAF85",
        },
      },
      backgroundImage: {
        "hero-image": "url('/image-hero.jpg')",
        "hero-image-mobile": "url('/image-header.jpg')",
        "second-speaker-mobile": "url('/image-speaker-second-mobile.jpg')",
        "second-speaker-tablet": "url('/image-speaker-second-tablet.jpg')",
        "second-speaker": "url('/image-speaker-second.jpg')",
        "third-speaker-mobile": "url('/image-speaker-third-mobile.jpg')",
        "third-speaker-tablet": "url('/image-speaker-third-tablet.jpg')",
        "third-speaker": "url('/image-speaker-third.jpg')",
      },
    },
  },
  plugins: [],
};
