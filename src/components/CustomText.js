import React, { Component } from 'react';
import { Text } from 'react-native';

class CustomText extends Component {
  setFontType = type => {
    switch (type) {
      case 'black':
        return 'Raleway-Black';
      case 'bold':
        return 'Raleway-Bold';
      case 'regular':
        return 'Raleway-Regular';
      case 'light':
        return 'Raleway-Light';
      default:
        return 'Raleway-Medium';
    }
  };

  render() {
    const font = this.setFontType(this.props.type ? this.props.type : 'normal');
    const style = [{ fontFamily: font }, this.props.style || {}];
    const allProps = Object.assign({}, this.props, { style: style });
    return <Text {...allProps}>{this.props.children}</Text>;
  }
}
export default CustomText;
