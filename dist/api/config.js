Object.defineProperty(exports,"__esModule",{value:true});var _output=require('./output');var _output2=_interopRequireDefault(_output);var _fs=require('./fs');var _fs2=_interopRequireDefault(_fs);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default={config:{},load:function load(){var config=void 0;try{config=require(process.cwd()+'/box.config.js');}catch(error){cli.error('could not find or read the box.config.js file.');}this.config=config;return this;},storeForReactNative:function storeForReactNative(){_fs2.default.store('global.config',this.config);return this;}};