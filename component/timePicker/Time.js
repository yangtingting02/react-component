import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import { DatePicker } from 'antd';
import styles from './style.less';

const { RangePicker } = DatePicker;
const defaultDateFormat = 'YYYY-MM-DD HH:mm';
const defaultTimeFormat = 'HH:mm';

function Time(
  {
    visible,
    onOk,
    defaultValue,
    dateFormat = defaultDateFormat,
    timeFormat = defaultTimeFormat,
  }
) {
  function disabledDate(current) {
    // Can not select days after today
    return current && current > moment().endOf('day');
  }
  return (
    <RangePicker
      className={styles.timePicker}
      open={visible}
      showTime={{ format: timeFormat }}
      format={dateFormat}
      onOk={onOk}
      disabledDate={disabledDate}
      defaultValue={defaultValue}
    />
  );
}

Time.PropTypes = {
  visible: propTypes.bool,
  onOk: propTypes.func,
  handleOpenChange: propTypes.func,
  dateFormat: propTypes.string,
  timeFormat: propTypes.string,
};

export default Time;
