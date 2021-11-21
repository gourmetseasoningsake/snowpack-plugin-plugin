import pkg from './package.json'
import { execSync } from 'child_process'


execSync('npm version patch')


const version = execSync(`npm view ${pkg.name} version`, { encoding: 'utf8'}).trim()


console.log(version)