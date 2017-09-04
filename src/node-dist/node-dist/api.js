Object.defineProperty(exports,"__esModule",{value:true});var _fs=require('fs');var _fs2=_interopRequireDefault(_fs);var _path=require('path');var _path2=_interopRequireDefault(_path);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var paths={config:_path2.default.join(process.cwd(),'node_modules/react-native-box-cli/src/temp/config.js'),component:_path2.default.join(process.cwd(),'node_modules/react-native-box-cli/src/temp/component.js'),presets:_path2.default.join(process.cwd(),'node_modules/react-native-box-cli/src/temp/presets.js')};var api={dropInComponent:function dropInComponent(name){this.setConfig({name:name,type:'component'});this.setComponent('../../../../src/styleguide/components/'+name);this.setPresets('../../../../src/styleguide/components/'+name+'/presets.js');},dropInView:function dropInView(type,name){this.setConfig({type:'view'});var relativePath='../../../../src/app/'+type+'/scenes/'+name;this.setComponent(relativePath);},clear:function clear(){this.setConfig({type:'clear',name:undefined});},setConfig:function setConfig(data){_fs2.default.writeFileSync(paths.config,'export default '+JSON.stringify(data));},setComponent:function setComponent(path){_fs2.default.writeFileSync(paths.component,'export { default as default } from \''+path+'\'');},setPresets:function setPresets(path){_fs2.default.writeFileSync(paths.presets,'export { default as default } from \''+path+'\'');}};exports.default=api;