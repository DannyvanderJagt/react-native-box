import React, { PureComponent } from 'react'

export default class PresetPureComponent extends PureComponent {
  combinePropsWithPreset(presets){
    const { preset } = this.props
    return {...this.props, ...presets[preset].props}
  }
}