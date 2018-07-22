import moment from 'moment';

// 默认时间套餐
const chartTimePackage = [
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

export {
  chartTimePackage,
}
