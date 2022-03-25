##  $('#table').bootstrapTable({})
```js
$('#table').bootstrapTable({
  url: './api/dashboard',         //请求后台的URL（*）
  method: 'get',                      //请求方式（*）
  toolbar: '#toolbar',                //工具按钮用哪个容器
  striped: true,                      //是否显示行间隔色
  cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
  pagination: true,                   //是否显示分页（*）
  sortable: true,                     //是否启用排序
  sortOrder: "asc",                   //排序方式
  queryParams: function(params){},    //请求服务器数据时，重写参数添加额外参数
  sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
  pageNumber: 1,                       //初始化加载第一页，默认第一页
  pageSize: 10,                       //每页的记录行数（*）
  pageList: [2, 5, 10, 25, 50, 100],        //可供选择的每页的行数（*）
  search: false,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
  strictSearch: true,
  showColumns: true,                  //是否显示所有的列
  showRefresh: true,                  //是否显示刷新按钮
  minimumCountColumns: 2,             //最少允许的列数
  clickToSelect: true,                //是否启用点击选中行
  height: 500,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
  uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
  showToggle: true,                    //是否显示详细视图和列表视图的切换按钮
  cardView: false,                    //是否显示详细视图
  detailView: false,                   //是否显示父子表
  showPaginationSwitch: false,         //是否显示分页条
  onClickRow: function (row) {}　//单击一行的回调函数
  responseHandler: function(res){},//加载服务器数据之前的处理程序
  classes: 'table table-no-bordered'
  data: 
  columns:
})
```
## $('#table').bootstrapTable({ columns:[] }) 
```js
$('#table').bootstrapTable({
  columns:[{
    field:
    title:
    formatter: //处理columns
    sortable: 'true',//是否可搜索
    visible: true,//是否可见
    checkbox: true,
  }]
})
```
## $table.bootstrapTable('');
```js
$table.bootstrapTable('refresh');//刷新table
```



## Example

### checkbox & formatter
```js
{
  field: 'state',
  title: 'State',
  checkbox: true,
  formatter: function (value, row, index) {
    if (index === 1) {
      return {
        disabled: true,
        checked: true
      }
    }
    return value;
  }
}
```
### page
```js
$('#page').change(function (e) {
  $table.bootstrapTable('selectPage', parseInt($(this).val()));
});
```
### click
```js
{
  field: 'statte',
  title: 'Statte',
  formatter: function (value, row, index) {
    return `<a class="option">click</a>`;
  },
  events: {
    "click .option": function (e, value, row, index) {
      alert('click');
    }
  }
}
```
### change
```js
//input
{
  field: 'statte',
  title: 'Statte',
  formatter: function (value, row, index) {
    return `<input type="text" class="option"/>`;
  },
  events: {
    "change .option": function (e, value, row, index) {
      alert('change');
    }
  }
}
//select
{
  field: 'statte',
  title: 'Statte',
  formatter: function (value, row, index) {
    return `
      <select class="option">
        <option value ="volvo">Volvo</option>
        <option value ="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    `;
  },
  events: {
    "change .option": function (e, value, row, index) {
      alert('change');
    }
  }
}
```























