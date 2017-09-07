import React, { Component } from 'react'

export default class PresetComponent extends Component {
  combinePropsWithPreset(presets){
    const { preset } = this.props
    return {...this.props, ...presets[preset].props}
  }
}

// export default {

//   primary: {
//     props: {
//       title: 'The title of a primary badge',

//       backgroundColor: colors.primary,
//       textColor: colors.white,
//     },

//     styles: {
//       container: { backgroundColor: colors.primary },
//       text: {},
//     }
//   }


// }
