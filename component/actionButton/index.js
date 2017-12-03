import React, { Component } from 'react';
import styles from './style.less';
const grey = '#F2F4F4';
const textColor = '#666';
const disableColor = '#a2a2a2'

const borderRadius = 4;

const defaultContainerStyle = {
  fontSize: 12,
  padding: '2px 8px',
  display: 'inline-block',
  width: 'auto',
  cursor: 'pointer',
};

class ActionButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      backgroundColor: 'transparent',
      color: props.disabled ? disableColor : textColor
    }
  }

  render() {
    const { children, icon, text, hover, disabled, location, background, click, style, ...rest } = this.props;
    const borderRadiusMap = {
      left: { borderTopLeftRadius: borderRadius, borderBottomLeftRadius: borderRadius },
      right: { borderTopRightRadius: borderRadius, borderBottomRightRadius: borderRadius },
      middle: { borderRadius: 'none' },
      alone: { borderRadius },
    }

    const realBorderRadius = location ? borderRadiusMap[location] : borderRadiusMap.alone;
    return (
      <span
        className={styles.actionButtonContainer}
        onMouseOver={() => {
          if (hover) {
            this.setState({ backgroundColor: background || grey });
          }
          if(!disabled){
            this.setState({ color: "#108ee9"})
          }
        }}
        onMouseOut={() => {
          if (hover) {
            this.setState({ backgroundColor: 'transparent' });
          }
          this.setState({color: disabled ? disableColor : textColor})
        }}
        style={{
          ...defaultContainerStyle,
          backgroundColor: hover ? this.state.backgroundColor : background || grey,
          cursor: disabled ? "not-allowed" : "pointer",
          color: this.state.color,
          ...realBorderRadius,
          ...style,
        }}
        onClick={click}
        {...rest}
      >
        <div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-around' }}>
          {
            children
              ?
              <span>
                {
                  children.length >= 2
                    ?
                    children.map((child, index) => (
                      index ? <span key={index} style={{ paddingLeft: index >= 1 ? 'auto' : '8'}}>{child || ' '}</span> : child
                    ))
                    :
                    children
                }
              </span>
              :
              <span>
                {
                  icon ? <Img src={icon}/>: null
                }
                <span>
                  { text || ' ' }
                </span>
              </span>
          }
        </div>
      </span>
    )
  }
}

export default ActionButton;
