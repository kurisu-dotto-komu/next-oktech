module.exports = {
  printWidth: 100,
  importOrder: [
    "^.+\\.css$",
    "^react$",
    "<THIRD_PARTY_MODULES>",
    "^@/(?!app/components/)(.*)$",
    "^@/app/components/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
};
