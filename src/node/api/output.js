import colors from 'cli-color'

export default {
  namespace: colors.magenta('[Box]'),

  welcomeMessage: `
    ----------------------
    | Welcome to Box CLI |
    ----------------------
  `,

  warn(msg){
    this.write({
      msg,
      type: 'Warning',
      color: colors.yellow,
    })
    return this
  },

  error(msg){
    this.write({
      msg,
      type: 'Error',
      color: colors.red
    })
    return this
  },

  success(msg){
    this.write({
      msg,
      type: 'Success',
      color: colors.green
    })
    return this
  },

  write({ msg, type, color }){
    console.log(
      this.namespace,
      color(`[${type}]`),
      msg,
    )
    return this
  },

  writeWelcomeMessage(){
    console.log(this.welcomeMessage)
    return this
  },
}