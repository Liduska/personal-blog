module.exports = {
  plugins: [
    require("postcss-import"),
    require("precss"),
    require(`tailwindcss`)(`./src/styles/tailwind.js`),
    require(`autoprefixer`)()
  ]
}