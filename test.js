const minimatch = require("minimatch")
const picomatch = require("picomatch")

const PATTERN = '**/subdir/*.bar'
const TARGET_STRING_1 = 'subdir/foo.bar'
const TARGET_STRING_2 = 'dir/subdir/foo.bar'

console.log()

console.log('Glob Pattern:', PATTERN)
console.log('Target 1:', TARGET_STRING_1)
console.log('Target 2:', TARGET_STRING_2)

console.log()

console.log('Testing minimatch w/ matchBase = false')
console.log('  Target 1 matches:', minimatch(TARGET_STRING_1, PATTERN, { matchBase: false }))
console.log('  Target 2 matches:', minimatch(TARGET_STRING_2, PATTERN, { matchBase: false }))

console.log()

console.log('Testing minimatch w/ matchBase = true')
console.log('  Target 1 matches:', minimatch(TARGET_STRING_1, PATTERN, { matchBase: true }))
console.log('  Target 2 matches:', minimatch(TARGET_STRING_2, PATTERN, { matchBase: true }))

console.log()

console.log('Testing picomatch w/ matchBase = false')
const isMatchWithMatchBaseFalse = picomatch(PATTERN, { matchBase: false })
console.log('  Target 1 matches:', isMatchWithMatchBaseFalse(TARGET_STRING_1))
console.log('  Target 2 matches:', isMatchWithMatchBaseFalse(TARGET_STRING_2))

console.log()

console.log('Testing picomatch w/ matchBase = true')
const isMatchWithMatchBaseTrue = picomatch(PATTERN, { matchBase: true })
console.log('  Target 1 matches:', isMatchWithMatchBaseTrue(TARGET_STRING_1))
console.log('  Target 2 matches:', isMatchWithMatchBaseTrue(TARGET_STRING_2))

console.log()

console.log('Testing picomatch w/ basename = false')
const isMatchWithBasenameFalse = picomatch(PATTERN, { basename: false })
console.log('  Target 1 matches:', isMatchWithBasenameFalse(TARGET_STRING_1))
console.log('  Target 2 matches:', isMatchWithBasenameFalse(TARGET_STRING_2))

console.log()

console.log('Testing picomatch w/ basename = true')
const isMatchWithBasenameTrue = picomatch(PATTERN, { basename: true })
console.log('  Target 1 matches:', isMatchWithBasenameTrue(TARGET_STRING_1))
console.log('  Target 2 matches:', isMatchWithBasenameTrue(TARGET_STRING_2))

console.log()
