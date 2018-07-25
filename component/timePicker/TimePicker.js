import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import { Button } from 'antd';
import Time from './Time';
import { chartTimePackage } from './util';
import styles from './style.less';

const ButtonGroup = Button.Group;

const defaultDateFormat = 'YYYY-MM-DD HH:mm';

const genType = (key, active) => {
  if (key === active) {
    return 'primary';
  }
  return 'default';
};

class TimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list || chartTimePackage,
      custom: props.custom,
      visible: false,
      active: props.defaultActive,
      lastActive: null,
      customStartTime: null,
      customEndTime: null,
      dateFormat: props.dateFormat || defaultDateFormat,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.list !== this.props.list) {
      this.setState({
        list: nextProps.list,
      });
    }
    if (nextProps.active !== this.props.active) {
      this.setState({
        active: nextProps.active,
        visible: nextProps.active === 'custom' ? true : this.state.visible,
      });
    }

    this.props = nextProps;
  }

  genDefaultValue = (last) => {
    const { customStartTime, customEndTime, dateFormat, list } = this.state;
    switch (last) {
      case 'custom':
        return (
          (customStartTime && customEndTime) ?
            [
              moment(customStartTime, dateFormat), moment(customEndTime, dateFormat),
            ] : []
        );
      default:
        const time = list.filter(item => item.key === last)[0];
        if (time) {
          return ([
            moment(time.startTime, dateFormat), moment(time.endTime, dateFormat),
          ]);
        }
        return [];
    }
  };

  changeActive = (key) => {
    const { list } = this.state;
    const lastActive = this.state.active;
    const time = list.filter(item => item.key === key)[0];
    this.setState({
      active: key,
      lastActive,
    });
    if (key !== 'custom') {
      if (this.props.onChange) {
        this.props.onChange({
          key,
          time: {
            startTime: moment(time.startTime), endTime: moment(time.endTime),
          },
        });
      }
      this.setState({
        visible: false,
      });
    }
    if (key === 'custom') {
      this.setState({
        visible: !this.state.visible,
      });
    }
  };

  handleTimeOk = (value) => {
    if (value) {
      const startTime = value[0];
      const endTime = value[1];
      this.setState({
        customStartTime: startTime,
        customEndTime: endTime,
        visible: false,
      });
      if (this.props.onChange) {
        this.props.onChange({ key: 'custom', time: { startTime, endTime } });
      }
    }
    return null;
  };

  render() {
    const { list, visible, custom, active, lastActive, dateFormat } = this.state;
    return (
      <ButtonGroup>
        {
          list.map((item) => {
            return (
              <Button
                key={item.key}
                type={genType(item.key, active)}
                onClick={() => this.changeActive(item.key)}
              >
                {item.label}
              </Button>
            );
          })
        }
        {
          custom && <Button
            key={'custom'}
            type={genType('custom', active)}
            onClick={() => this.changeActive('custom')}
            className={styles.customBtn}
            style={{ top: visible ? '1px' : '0' }}
          >
            自定义
            {visible && <Time
              visible={visible}
              onOk={this.handleTimeOk}
              defaultValue={this.genDefaultValue(lastActive)}
              dateFormat={dateFormat}
            />}
          </Button>
        }
      </ButtonGroup>
    )
  }
}

TimePicker.PropTypes = {
  list: propTypes.array,
  custom: propTypes.bool,
  defaultActive: propTypes.string,
  dateFormat: propTypes.string,
  onChange: propTypes.func,
};

export default TimePicker;
