module.exports = {
  catalogs: [
    {
      path: "src/locales/{locale}",
      include: ["src/**/*.tsx", "src/**/*.ts"],
      exclude: [
        'src/**/*.d.ts',
      ]
    }
  ],
  fallbackLocales: {
    default: "en-US"
  },
  format: "po",
  locales: ["en-US"],
  sourceLocale: "en-US"
};