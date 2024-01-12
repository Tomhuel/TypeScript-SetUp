#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'node:fs';
import path from 'node:path';
import { generagePackageJson } from './generatePackageJson.mjs';
import { generateGitIgnore } from './generateGitIgnore.mjs';
import { JestConfig } from './generateJestConfig.mjs';

(async () => {
    await main();
})();

async function main() {
    process.argv.splice(0, 2);

    const currentDirectory = process.cwd();
    const currentDirectorySplitted = currentDirectory.split(path.sep);
    let projectName = "";
    let test = false;
    if (process.argv[0] !== "--test" && process.argv[0] !== undefined) {
        projectName = process.argv[0]
        test = process.argv[1] === '--test';
    } else {
        projectName = currentDirectorySplitted[currentDirectorySplitted.length - 1];
        test = process.argv[0] === '--test';
    }
    const projectUbi = projectName == currentDirectorySplitted[currentDirectorySplitted.length - 1] ? currentDirectory : path.join(currentDirectory, projectName);

    if (projectUbi !== currentDirectory) {
        fs.mkdirSync(projectName, { recursive: true });
    }
    process.chdir(projectUbi);

    if (!fs.existsSync('src')) {
        fs.mkdirSync('src');
    }
    const packageJson = generagePackageJson(projectName, test);
    console.log('Generating Package Json...')
    console.log(packageJson);
    fs.writeFileSync('package.json', packageJson, { encoding: 'utf-8' });
    fs.writeFileSync(path.join('src', 'app.ts'), `console.log("Hello Project");`, { encoding: 'utf-8' });

    console.log('Generating .gitignore...');
    fs.writeFileSync('.gitignore', generateGitIgnore, { encoding: 'utf-8' });

    console.log('Installing Dependencies...');
    execSync('npm install');

    console.log('Creating tsconfig.json');
    execSync('npx tsc --init --outDir dist/ --rootDir src');

    const tsconfigContent = fs.readFileSync('./tsconfig.json', { encoding: 'utf-8' });
    const tsconfig = tsconfigContent.split("\n");
    tsconfig.splice(1, 0, `\t"exclude": ["node_modules", "dist", "tests", "jest.config.ts"],`);
    fs.writeFileSync('tsconfig.json', tsconfig.join('\n'), { encoding: 'utf-8' });


    if (!test) {
        console.log('No testing setup')
    } else {
        const describeApp = `describe('App Suit Test', () => {
    
})`;
        console.log('Configuring Jest...');
        fs.mkdirSync('tests');
        fs.writeFileSync(path.join('tests', 'app.test.ts'), describeApp, { encoding: 'utf-8' });
        execSync('npx jest --init');
        fs.writeFileSync('jest.config.ts', JestConfig, { encoding: 'utf-8' })
    }

    console.log('Proyect generated succesfully!');
}