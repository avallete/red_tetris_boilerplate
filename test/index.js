import glob from 'glob'

console.log(__dirname)
const files = glob.sync('src/server#<{(||)}>#*.js')
files.forEach(file => {
  console.log(file)
  // eslint-disable-next-line
  require(`../${ file}`)
})
