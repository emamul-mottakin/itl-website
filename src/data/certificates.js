// Certificates and standards shown in the "Compliance & Standards" strip.
// NOTE: names are placeholders (used as image alt text). Replace them with the real certificate
// names, and keep the order in which they should appear. `logo` is a file in public/assets/certificates/.
const files = [
  '872ce', '11f49', 'ea52a', '92804', 'd7de2', '30219', 'ff170', 'c2cd1', 'ab850', '3b07a',
  'af624', '5fd60', 'd74cf', 'dde94', '5aa0e', 'b1f03', 'edacb', '7d1b4', 'ee8e4',
]

export const certificates = files.map((file, index) => ({
  name: `Certificate ${index + 1}`,
  logo: `${file}.png`,
}))
