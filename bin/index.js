#! /usr/bin/env node

import chalk from 'chalk'
import { execSync } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const CURR_DIR = process.cwd()

const runCommand = async (command) => {
    try {
        execSync(command, { stdio: 'inherit' })
    } catch (err) {
        throw chalk.red(err)
    }
}

const getNewProjectPath = async (currentDir, projectName) => {
    let newProjectPath = `${currentDir}/${projectName}`
    if (fs.existsSync(newProjectPath)) {
        throw chalk.red('Directory Already exists, please try a different name')
    } else {
        fs.mkdirSync(newProjectPath)
    }
    return newProjectPath
}

const renaming = async (projectPath, projectName) => {
    fs.renameSync(`${projectPath}/env`, `${projectPath}/.env`)
    const packageJsonContent = fs.readFileSync(`${projectPath}/package.json`)
    packageJsonContent.name = projectName
    fs.writeFileSync(`${projectPath}/package.json` , packageJsonContent)
}

const getProjectName = async () => {
    if (process.argv.length < 3) {
        throw chalk.cyan('Please provide a project name as argument')
    } else {
        const projectName = process.argv[2]
        return projectName
    }
}

const generateProject = async (starterKit, projectPath) => {
    const dirsToCopy = fs.readdirSync(starterKit)
    dirsToCopy.forEach((file) => {
        const orgFilePath = path.join(starterKit, `${file}`)
        const fileStats = fs.statSync(orgFilePath)
        if (fileStats.isFile()) {
            const contentToWrite = fs.readFileSync(orgFilePath, 'utf-8')
            const writePath = `${projectPath}/${file}`
            fs.writeFileSync(writePath, contentToWrite, 'utf-8')
        } else if (fileStats.isDirectory()) {
            fs.mkdirSync(`${projectPath}/${file}`)

            generateProject(`${starterKit}/${file}`, `${projectPath}/${file}`)
        }
    })
}

const success = (projectName) => {
    const successText = `Success! Created ${chalk.cyan(
        projectName
    )} at ${chalk.cyan(CURR_DIR)} 
      \n\nRun the following to get started:\n\n\t
      ${chalk.cyan('cd')} ${projectName}
      \n    Changes directory
      \n  ${chalk.cyan('npm install')}
      \n    Installs all dependencies.
      \n\nAnd you're all set!
      \nInside that directory, you can run several commands:
      \n  ${chalk.cyan('npm run build')}
      \n    Builds the app.
      \n  ${chalk.cyan('npm run lint')}
      \n    Checks if the code is linted correctly. 
      \n  ${chalk.cyan('npm run lint:fix')}
      \n   Fix the linting erros.
      \n  ${chalk.cyan('npm run dev')}
      \n    Starts the dev server.
      \n  ${chalk.cyan('npm run dev:db')}
      \n   Setup the development database.
      \n  ${chalk.cyan('npm run dev:db-server')}
      \n   Setup the development database and start the server.
      \n  ${chalk.cyan('npm run db-generate')}
      \n   To generate prisma DB migration.
      `;

    console.log(successText);
}

const execute = async () => {
    const starterKit = path.join(__dirname, '../starter-kit')
    const projectName = await getProjectName()
    const newProjectPath = await getNewProjectPath(CURR_DIR, projectName)

    console.log(chalk.yellow(`Initiating project at ${newProjectPath}`))
    console.log(chalk.cyan(`Cloning project into ${newProjectPath}`))

    await generateProject(starterKit, newProjectPath)
    await renaming(newProjectPath, projectName)
    console.log(chalk.blue(`Installing dependencies`))

    await runCommand(` cd ${newProjectPath} &&  npm install`)

    await runCommand('git init')
    console.log(chalk.green('Project Setup done'))

    success(projectName)
}

try {
    execute()
} catch (err) {
    console.log(err)
}