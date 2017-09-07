export default (scope, presets) => {
  const { preset } = scope.props
  return {...scope.props, ...presets[preset].props}
}