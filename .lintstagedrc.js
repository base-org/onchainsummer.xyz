const path = require('path')

const exclusions = [
  'generated/tw721.ts',
  'wagmi.config.ts',
  'arweave.ts',
  'conrtracts.ts',
  'tweets.ts'
]

const buildEslintCommand = (filenames) => {
  const filteredFilenames = filenames
    .map((f) => path.relative(process.cwd(), f))
    .filter((f) => !exclusions.includes(f))

  return `yarn eslint --fix ${filteredFilenames.join(' ')}`
}

const buildPrettierdCommand = (filenames) => {
  const filteredFilenames = filenames
    .map((f) => path.relative(process.cwd(), f))
    .filter((f) => !exclusions.includes(f))

  return `yarn prettier --write ${filteredFilenames.join(' ')}`
}

module.exports = {
  '**/*.(ts|tsx)': [
    'tsc-files --noEmit --pretty next-env.d.ts',
    buildEslintCommand,
    buildPrettierdCommand,
  ],
}
