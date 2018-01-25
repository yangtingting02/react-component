import React from 'react';
import classnames from 'classnames';
import styles from './Modal.less';

class MyModal extends React.Component {
  constructor(props){
    super(props);
    this.state={
      mask: props.mask === undefined ? true : props.mask,
    }
  }

  saveRef = (dialog) => {
    this.dialog = dialog;
    if (this.props.visible) {
      this.changeModalState('show')
    } else {
      this.changeModalState('close')
    };
  };

  changeModalState = (state) => {
    if (state === 'close') {
      this.dialog.close();
      return;
    }

    if (state === 'show') {
      if(this.state.mask) {
        this.dialog.showModal();
      } else {
        this.dialog.show();
      }
      return;
    }
  };

  componentWillReceiveProps(nextProps){
    if(nextProps !== this.props) {
      if (nextProps.visible) {
        this.changeModalState('show')
      } else {
        this.changeModalState('close')
      };

      if(nextProps.mask !== this.props.mask) {
        this.setState({
          mask: nextProps.mask === 'undefined' ? true : nextProps.mask
        })
      }
    }

    this.props =  nextProps;
  }


  render(){
    const { children, title="Title", header=true, onCancel, onOk } = this.props;
    return(
        <dialog className={styles.my_modal} ref={this.saveRef}>
          <button className={styles.modal_close} onClick={() => this.changeModalState('close')}>
            <span className={styles.modal_close_x}></span>
          </button>
          <div className={styles.modal_header} style={{visibility: header ? 'visible' : 'hidden'}}>
            <div className={styles.modal_title}>{title}</div>
          </div>
          <div className={styles.modal_content}>
            {children}
          </div>
          <div className={styles.modal_footer}>
            <button className={classnames(styles.btn, styles.btn_primary)} onClick={onOk}><span>确定</span></button>
            <button className={styles.btn} onClick={onCancel}><span>取消</span></button>
          </div>
        </dialog>
    )
  }
}


export default MyModal;
