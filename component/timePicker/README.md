TimePicker
----------
<img src="./timepicker.jpg">

### 功能描述
一个支持自定义选项的Timeicker

### API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| list | 时间列表	 | array | arr(见下面) |
| custom | 是否显示自定义按钮 | boolean | false |
| defaultActive | 默认值(key值，如：'custom') | string | 无 |
| dateFormat | 自定义时间框中展示的日期格式 | sting | 'YYYY-MM-DD HH:mm' |
| onChange | 时间发生变化的回调 | function(key: string, times: moment, moment) | 无 |


list的默认值：
```
const list = [
  {
    label: '今天',
    key: 'today',
    startTime: moment().format('YYYY-MM-DD 00:00:00'),
    endTime: moment().add(1, 'days').format('YYYY-MM-DD 00:00:00'),
  },
  {
    label: '昨天',
    key: 'yesterday',
    startTime: moment().subtract(1, 'days').format('YYYY-MM-DD 00:00:00'),
    endTime: moment().format('YYYY-MM-DD 00:00:00'),
  },
  {
    label: '3天',
    key: '3d',
    startTime: moment().subtract(3, 'days').format('YYYY-MM-DD 00:00:00'),
    endTime: moment().format('YYYY-MM-DD 00:00:00'),
  },
  {
    label: '1周',
    key: '1W',
    startTime: moment().subtract(7, 'days').format('YYYY-MM-DD 00:00:00'),
    endTime: moment().format('YYYY-MM-DD 00:00:00'),
  },
  {
    label: '1月',
    key: '1M',
    startTime: moment().subtract(1, 'M').format('YYYY-MM-DD 00:00:00'),
    endTime: moment().format('YYYY-MM-DD 00:00:00'),
  },
];
```


