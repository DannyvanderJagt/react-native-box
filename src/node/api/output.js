import colors from 'cli-color'

export default {
  namespace: colors.magenta('[Box]'),

  warn(msg){
    this.write({
      msg,
      type: 'Warning',
      color: colors.yellow,
    })
  },

  error(msg){
    this.write({
      msg,
      type: 'Error',
      color: colors.red
    })
  },

  write({ msg, type, color }){
    console.log(
      this.namespace,
      color(`[${type}]`),
      msg,
    )
  }
}