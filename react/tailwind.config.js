/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",


  ],
  theme: {
    extend: {},
  },
  plugins: [
<<<<<<< HEAD
    require("@tailwindcss/forms")
  ],
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ]
}
=======
    require("@tailwindcss/forms"),
>>>>>>> b16d8e890427e8895c653c105450e806d764c353

  ],
}