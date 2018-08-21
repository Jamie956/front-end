```js
// ejs的script获取json对象数据
var data =<%- JSON.stringify(DATA) %>
// ejs的script获取变量
var m = '<%= msg %>'
// ejs获取变量,转义标签
<%= msg %>
// ejs获取变量,不转义标签
<%- msg %>
//ejs导入其他ejs
<%- include('./script') %>
//ejs遍历
<% photos.forEach(function(photo) { %>
  <div class="photo">
    <%=photo.name%>
    <img src='<%=photo.path%>' />
  </div>
<% }) %>
```
