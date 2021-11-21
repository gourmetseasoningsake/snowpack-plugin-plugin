import pkg from './package.json'
import { execSync } from 'child_process'


execSync('npm version patch')


const version = execSync(`npm verision ${pkg.name}`)


console.log(version)