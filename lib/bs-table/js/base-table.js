function baseTableView( container, ajax, columns, options){
  this._id = container._id;
  this._table = container._id + '_table';
  this._toolbar = container._id + '_toolbar';
  this._page = container._id + '_page';
  this._del_btn = container._id + '_del_btn';
  this._adv_search_btn = container._id + '_adv_search_btn';
  this._columns = columns;
  this._isInit = container._isInit;

  this._default_options = {
    pagination: true,
    striped: true,
    pageSize: 10,
    pageNumber:1,
    pageList: [2,5,10,25,50,100],
    search: true,
    searchAlign: 'right',
    searchTimeOut: 1500,
    showColumns: true,
    showRefresh: true,
    minimumCountColumns: 2,
    showFirstLast: true,
    queryParams: function (p) {
      return {
          limit: p.limit,
          offset: p.offset,
          sort: p.sort,
          order: p.order,
          search: p.search,
      };
    },
    toolbar: ".toolbar",
    toolbarName: "toolbarName",
    toolbarAlign: 'left',
    showToggle: true,

    method: ajax._method,
    url : ajax._url,
    sidePagination: "server", 
    dataType: "json",
    contentType: "application/x-www-form-urlencoded",

    columns: columns,    
  };

  if (location.search) {
    var _options = this._initParams(this);
    this._default_options = $.extend(this._default_options, _options);// extend
  }

  this._default_options = $.extend(this._default_options, options);// extend
  if(this._isInit){
	this._init();  
  }
}

baseTableView.prototype._initParams = function(that) {
  var initParams = {};
  var parts = location.search.substring(1).split('&');
  
  for (var i = 0; i < parts.length; i++) {
    var nv = parts[i].split('=');
    if (!nv[0]) continue;
    initParams[nv[0]] = nv[1] || true;
  }

  if(typeof initParams.offset !== 'undefined' && typeof initParams.limit !== 'undefined'
    && typeof initParams.sort !== 'undefined') {
    var options = {
      sortName: initParams.sort,
      sortOrder: initParams.order,
      pageNumber: initParams.offset/initParams.limit + 1,
      pageSize: initParams.limit,
      //searchText: initParams.search,
    };
  }

  if(typeof initParams.search != 'undefined'){
    if(initParams.search !== true){
      options.searchText = initParams.search;
    }
  }
  return options;
}

baseTableView.prototype._initIfNeed = function() {
	if(!this._isInit){
		this._isInit = true;
		this._init();  
	}
}

baseTableView.prototype._init = function() {
  this._initHtml();
  this._initTable();
  this._initPage();
}
baseTableView.prototype._initHtml = function() {
  var _that = this;
  var _HtmlTable = this._initTableHtml();
  $('#' + this._id).html(_HtmlTable);

  var $table = $('#' + this._id);  
  $('#' + _that._toolbar).find('button[name="Search"]').off('click').on('click', function() {
    var _default_options = {
      queryParams: function (p) {
                  return {
                      limit: p.limit,
                      offset: p.offset,
                      sort: p.sort,
                      order: p.order,
                      search: p.search,
                      sfilter: 'sfilter',
                  };
      }
    };
    _that._default_options = $.extend(_that._default_options, _default_options);// extend
    $table.bootstrapTable('refresh');
  });
}
baseTableView.prototype._initTableHtml = function() {
  var _that = this;
  return  [
           '<table id="'+ _that._table +'">',
           '</table>'
          ].join('');  
}

baseTableView.prototype._initTable = function() {
  var _that = this;
  var $table = $('#' + this._id);
  $table.bootstrapTable(this._default_options);
}

baseTableView.prototype._initPage = function() {
  var $table = $('#' + this._id);
  var $page = $('#' + this._page);
  $page.click(function () {
    $table.bootstrapTable('selectPage', +$page.val());
  });
  $page.keyup(function (e) {
  	$table.bootstrapTable('selectPage', +$page.val());
  });  
}