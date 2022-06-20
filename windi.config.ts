import { defineConfig } from "windicss/helpers";
import { theme, forms as formsPlugin } from "@vejron/ue-design";
import animation from "@windicss/plugin-animations";
import typography from "windicss/plugin/typography";

export default defineConfig({
  darkMode: "class",
  safelist: "p-3 p-4 p-5",
  theme: {
    ...theme,
    extend: {
      ...theme.extend,
      fontFamily: {
        sans: ["RalewayVariable", "ui-sans-serif", "system-ui"],
        //sans: ["ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto" ]
      },
      boxShadow: {
        black: "0.25rem 0.25rem 10px 1px #264b0066",
      },
    },
  },
  plugins: [
    formsPlugin,
    typography,
    animation({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
  ],
});
