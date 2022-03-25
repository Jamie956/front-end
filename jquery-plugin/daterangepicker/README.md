```js
$('input[name="picker"]').daterangepicker(
  {
    startDate: start,//初始化开始时间
    endDate: end,//初始化结束时间
    singleDatePicker: true, //是否单选
    showDropdowns: true,
    timePicker: true,//是否显示时间选择
    timePickerIncrement: 30,//时间选择范围
    locale: {//选择时间格式
        format: 'MM/DD/YYYY h:mm A'
    }
  },
  function(date) {}//单选回调函数
  function (start, end) {}//多选回调函数
);
```
