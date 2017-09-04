#!/usr/bin/env node
import commander from 'commander'
import color from 'cli-color'
import pkg from '../package.json'
import api from './api'

commander
  .version(pkg.version)

commander
  .command('dc <name>')
  .action((name) => {
    console.log(`${color.magenta(`[Wayke]`)} Hot drop-in component: %s`, name)
    api.dropInComponent(name)
  })

commander
  .command('dv <type> <name>')
  .action((type, name) => {
    console.log(`${color.magenta(`[Wayke]`)} Hot drop-in view: %s/%s`, type, name)
    api.dropInView(type, name)
  })

commander
  .command('clear')
  .action(() => {
    console.log(`${color.magenta(`[Wayke]`)} Clearing Hot drop-in`)
    api.clear()
  })

commander.parse(process.argv)
