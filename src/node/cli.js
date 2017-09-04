#!/usr/bin/env node
import commander from 'commander'
import color from 'cli-color'
import api from './api'
import boxPkg from '../../package.json'
import { exec } from 'child_process'

// Get config from client the package.json file
let config = require(`${process.cwd()}/box.config.js`)

config.name = config.name || 'Box'
config.color = config.color || 'magenta'

commander
  .version(boxPkg.version)

commander
  .command('dc <name>')
  .action((name) => {
    console.log(`${color[config.color](`[${config.name}]`)} Hot drop-in component: %s`, name)
    api.dropInComponent(name)
  })

commander
  .command('dv <name>')
  .action((name) => {
    console.log(`${color[config.color](`[${config.name}]`)} Hot drop-in view: %s`, name)
    api.dropInView(name)
  })

commander
  .command('clear')
  .action(() => {
    console.log(`${color[config.color](`[${config.name}]`)} Clearing Hot drop-in`)
    api.clear()
  })

commander
  .command('xcode')
  .action(() => {
    exec(`open ${process.cwd()}/ios/wayke.xcodeproj`)
  })

commander
  .command('workspace')
  .action(() => {
    exec(`subl .`)
    exec(`open ${process.cwd()}/ios/wayke.xcodeproj`)
  })

commander.parse(process.argv)
