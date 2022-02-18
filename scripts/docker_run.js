#! /usr/bin/env node

const { spawnSync } = require('child_process')

const DOCKER_DEV_IMAGE_NAME = 'feature/dev'
const DOCKER_DEV_CONTAINER_NAME = 'feature-dev'
const DEV_PORT = 8080

const DOCKER_PROD_IMAGE_NAME = 'feature/prod'
const DOCKER_PROD_CONTAINER_NAME = 'feature-prod'
const PROD_PORT = 8080

let runningContainerId = null

const runDev = () => {
  const status = spawnSync(
    'docker',
    ['build', '-f', 'Dockerfile.dev', '.', '-t', DOCKER_DEV_IMAGE_NAME],
    { stdio: 'inherit' }
  ).status

  if (status !== 0) {
    console.error('Failed to build dev image')
    process.exit(4)
  }

  const { status: buildStatus, stderr: buildErr } = spawnSync('docker', [
    'run',
    '--name',
    'feature-dev',
    '-d',
    `-v${process.env.PWD}:/usr/app`,
    `-p${DEV_PORT}:3000`,
    DOCKER_DEV_IMAGE_NAME,
  ])

  if (buildStatus !== 0) {
    console.error(buildErr.toString())
    process.exit(4)
  }

  runningContainerId = DOCKER_DEV_CONTAINER_NAME
}

const runProd = () => {
  const status = spawnSync(
    'docker',
    ['build', '.', '-t', DOCKER_PROD_IMAGE_NAME],
    { stdio: 'inherit' }
  ).status

  if (status !== 0) {
    console.error('Failed to build dev image')
    process.exit(4)
  }

  const { status: buildStatus, stderr: buildErr } = spawnSync('docker', [
    'run',
    '--name',
    DOCKER_PROD_CONTAINER_NAME,
    '-d',
    `-p${PROD_PORT}:3000`,
    DOCKER_PROD_IMAGE_NAME,
  ])

  if (buildStatus !== 0) {
    console.error(buildErr.toString())
    process.exit(4)
  }

  runningContainerId = DOCKER_PROD_CONTAINER_NAME
}

const availableCommands = {
  dev: runDev,
  prod: runProd,
}

const killRunningContainer = () => {
  if (runningContainerId) {
    spawnSync('docker', ['kill', runningContainerId])
    spawnSync('docker', ['rm', runningContainerId])
  }
}

const main = async () => {
  process.on('SIGINT', killRunningContainer)

  if (process.argv.length !== 3) {
    console.error(
      `Usage: docker_run <${Object.keys(availableCommands).join(' | ')}>`
    )
    process.exit(1)
  }

  const cmd = process.argv[2]

  if (availableCommands[cmd] === undefined) {
    console.error(`Unknown command "${cmd}"`)
    process.exit(2)
  }

  // attempt to prevent possible conflicts at startup
  killRunningContainer()

  availableCommands[cmd]()

  if (runningContainerId) {
    spawnSync('docker', ['logs', '-f', runningContainerId], {
      stdio: 'inherit',
    })

    killRunningContainer()
  }
}

main()
