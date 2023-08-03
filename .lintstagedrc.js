const path = require('path')

const exclusions = [
  'generated/tw721.ts'
]

const buildEslintCommand = (filenames) => {
  const filteredFilenames = filenames
    .map((f) => path.relative(process.cwd(), f))
    .filter((f) => !exclusions.includes(f))

  return `next lint --fix --file ${filteredFilenames.join(' --file ')}`
}

module.exports = {
  '**/*.(ts|tsx)': [
    buildEslintCommand,
    'tsc-files --noEmit --pretty next-env.d.ts',
  ],
}
