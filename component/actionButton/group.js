import React, { Component } from 'react';
const deepGrey = '#DCDCDC';

const ActionButtonGroup = ({children, style}) => {
  if(!children) {
    return null;
  }
  const _children = children.filter ? children.filter(child => child) : children;
  const getLocation = (index) => {
    const length = _children.length;
    if(length > 1) {
      if(index === 0) {
        return 'left';
      } else if(index === _children.length - 1) {
        return 'right';
      }
      return 'middle';
    }
    return 'alone';
  };

  return (
    <span
      style={{
        display: 'inline-flex',
        flexDirection: 'row',
        borderRadius: '5px',
        ...style,
      }}
    >
      {
        _children.length >= 2 ? _children.map((child, index) => {
          if(!child){
            return null;
          }
          const _child = React.cloneElement(child, { location: getLocation(index) });
          return (
            <div
              key={index}
              style={{
                  borderRight: index !== _children.length - 1 ? `1px dashed ${deepGrey}` : 'none',
              }}
            >
              {_child}
            </div>
          )
        }) : React.cloneElement(_children, { location: getLocation() })
      }
    </span>
  );
};

export default ActionButtonGroup;
