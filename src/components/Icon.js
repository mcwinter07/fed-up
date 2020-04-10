import React from 'react';

const Icon = props => {
  const { iconClass, iconSource } = props;

  return (
    <img className={iconClass} src={iconSource} alt=""/>
  )
}

export default Icon;