import pkg from './package.json'
import { execSync } from 'child_process'


const blub = execSync('npm version patch --json', { encoding: 'utf8'})


//const version = execSync(`npm view ${pkg.name} version`, { encoding: 'utf8'}).trim()


console.log(blub)