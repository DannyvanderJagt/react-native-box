#!/usr/bin/env node
var _commander=require('commander');var _commander2=_interopRequireDefault(_commander);var _cliColor=require('cli-color');var _cliColor2=_interopRequireDefault(_cliColor);var _api=require('./api');var _api2=_interopRequireDefault(_api);var _package=require('../package.json');var _package2=_interopRequireDefault(_package);var _child_process=require('child_process');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var pkg=require(process.cwd()+'/package.json');var config=pkg.box;config.name=config.name||'Box';config.color=config.color||'magenta';_commander2.default.version(_package2.default.version);_commander2.default.command('dc <name>').action(function(name){console.log(_cliColor2.default[config.color]('['+config.name+']')+' Hot drop-in component: %s',name);_api2.default.dropInComponent(name);});_commander2.default.command('dv <type> <name>').action(function(type,name){console.log(_cliColor2.default[config.color]('['+config.name+']')+' Hot drop-in view: %s/%s',type,name);_api2.default.dropInView(type,name);});_commander2.default.command('clear').action(function(){console.log(_cliColor2.default[config.color]('['+config.name+']')+' Clearing Hot drop-in');_api2.default.clear();});_commander2.default.command('xcode').action(function(){(0,_child_process.exec)('open '+process.cwd()+'/ios/wayke.xcodeproj');});_commander2.default.command('workspace').action(function(){(0,_child_process.exec)('subl .');(0,_child_process.exec)('open '+process.cwd()+'/ios/wayke.xcodeproj');});_commander2.default.parse(process.argv);