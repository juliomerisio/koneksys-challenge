function getFileNames() {
  return require.context(
    './',
    true,
    process.env.NODE_ENV === 'production' ? /\.js$/ : /\.ts$/
  )
}

const context = getFileNames()
const files = context
  .keys()
  .filter((fileName) => fileName !== './index.ts')
  .reduce((translations, fileName) => {
    const fileTranslations = context(fileName)

    const [language] = fileName
      .replace('./', '')
      .replace(process.env.NODE_ENV === `production` ? '.js' : '.ts', '')
      .split('/')

    return {
      ...translations,
      [language]: fileTranslations[language],
    }
  }, {})

export const en = files
