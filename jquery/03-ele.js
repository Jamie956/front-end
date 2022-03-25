//创建ul标签
let $ul = $("<ul></ul>");
//创建li标签
let $li = $("<li></li>");
$li.text("hello world");
$li.addClass("item");
$ul.append($li);

$("#root").append($ul);
