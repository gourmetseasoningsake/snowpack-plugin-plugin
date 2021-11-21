import { execSync } from 'child_process'


const version = 
  execSync('npm version patch', { encoding: 'utf8'})
  .trim()
  .substring(1)


console.log(version)