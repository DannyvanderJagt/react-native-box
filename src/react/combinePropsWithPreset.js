export default (scope, presets) => {
  const { preset } = scope.props

  if(!preset){
    return scope.props
  }

  return {...scope.props, ...presets[preset].props}
}