import { execSync } from 'child_process'



const args = process.argv.slice(2)
const releaseType = args[0]



const version = 
  execSync(`npm version ${releaseType}`, { encoding: 'utf8' })
  .trim()
  .substring(1)




console.log(version)