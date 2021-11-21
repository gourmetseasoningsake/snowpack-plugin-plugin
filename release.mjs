import { execSync } from 'child_process'


const version = execSync('npm version patch', { encoding: 'utf8'}).substring(1)


console.log(version)