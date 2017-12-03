import React, {Component} from 'react';
import classnames from 'classnames';
import { Icon } from 'antd';
import styles from './Drawer.less';

const Drawer = (
  {
    open,
    onChange,
    mask,
    style,
    maskStyle,
    children,
    maskClosable,
    width,
    foldWidth
  }) => {
  return(
    <div>
      <div
        style={{
          display: open && mask ? 'block' : 'none',
          ...maskStyle
        }}
        className={classnames({[styles.drawer_background]: mask })}
        onClick={maskClosable && onChange}
      />
      <div
        className={classnames(styles.drawer, {[styles.open_drawer]: open }, {[styles.fold_drawer] : !open})}
        style={{
          ...style,
          width: open ? `${(width || 700)}px` : `${(foldWidth || 0)}px`
        }}
      >
        <div className={styles.drawer_header}>
          <div className={styles.drawer_header_bar} onClick={onChange}>
            {open ? <Icon type="menu-unfold" /> : <Icon type="menu-fold" />}
          </div>
        </div>
        <div className={styles.container}>
          {(open || foldWidth) && children}
        </div>
      </div>
    </div>
  )
}

export default Drawer;


