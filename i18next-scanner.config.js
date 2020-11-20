module.exports = {
  input: ['src/**/*.{js,jsx}'],
  output: './',
  options: {
    debug: true,
    func: {
      list: ['t'],
      extensions: ['.js', '.jsx'],
    },
    trans: false,
    lngs: ['en', 'ja'],
    ns: ['translation'],
    defaultLng: 'en',
    defaultNs: 'translation',
    defaultValue: '__STRING_NOT_TRANSLATED__',
    resource: {
      loadPath: 'public/locales/{{lng}}/{{ns}}.json',
      savePath: 'public/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: false, // namespace separator
    keySeparator: '.', // key separator
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
};
