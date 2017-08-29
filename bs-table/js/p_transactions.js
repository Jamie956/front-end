var objTransactions = {

  container: {
    '_id': 'p_transactionTableContanner',
    '_isInit': true,
  },

  ajax: {
    '_url': 'json/transaction.json',
    '_method': 'get',
  },

  columns: [{
    field: 'created_time',
    title: 'Date',
    align: 'left',
    valign: 'middle',
    sortable: true,
    searchable: true
  }, {
    field: 'id',
    title: 'Transaction ID',
    align: 'left',
    valign: 'middle',
    sortable: true,
    searchable: true,
    visible: true
  }, {
    field: 'currency',
    title: 'Currency',
    align: 'left',
    valign: 'middle',
    sortable: false,
    searchable: false,
    visible: true
  }, {
    field: 'amount',
    title: 'Total Amount',
    align: 'left',
    valign: 'middle',
    sortable: true,
    searchable: true,
    visible: true
  }],
  options: {
    sortName: 'order_ids',
    sortOrder: 'desc',
    search: false,
    showToggle: false,
    showRefresh: true,
    showColumns: true,
  }
}

function initTransactionsTable() {
  var _container = objTransactions.container;
  var _ajax = objTransactions.ajax;
  var _columns = objTransactions.columns;
  var _options = objTransactions.options;
  var initTransactionsTable = new baseTableView(_container, _ajax, _columns, _options);
}

initTransactionsTable();