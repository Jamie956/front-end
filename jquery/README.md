```
===命名===
var $variable = jQuery 对象;
var variable = DOM 对象;

===jQuery对象转换为DOM对象===
variable = $variable[index];
variable = $variable.get(index);

===DOM对象转换为jQuery对象===
$variable = $(variable)

//事件处理中，this 表示 DOM 对象 $(this) 表示 jQuery 对象

```

```
===选择器===
$(element)//标签选择器
$(#id)//id
$(.class)//class
$(selector1, selector2)//群组选择器
$(*)

$("ancestor descendant")-选取 ancestor 元素里的所有 descendant 后代元素
$("parant > child")-选取 parent 元素下的 child 子元素
$("prev + next")-选取紧接在 prev 元素后的 next 元素
$("prev ~ siblings")-选取 prev 元素之后的所有 siblings 兄弟元素
```

```
6. 过滤选择器

(1)基本过滤选择器

• :first-选取第 1 个元素，返回单元素

• :last-选取最后一个元素，返回单元素

• :not(selector)-去除所有与给定选择器匹配的元素

• :even-选取索引是偶数的所有元素，索引从 0 开始

• :odd-选取索引是奇数的索引元素，索引从 0 开始

• :eq(index)-选取索引等于 index 的元素，index 从 0 开始，返回单元素

• :gt(index)-选取索引大于 index 的元素，index 从 0 开始

• :lt(index)-选取索引小于 index 的元素，index 从 0 开始

• :header-选取所有的标题元素，如 h1，h2，h3等等

• :animated-选取当前正在执行动画的所有元素

(2)内容过滤选择器

• :contains(text)-选取含有文本内容为 text 的元素

• :empty-选取不包含子元素或者文本的空元素

• :has(selector)-选取含有选择器所匹配的元素的元素

• :parent-选取含有子元素的或者文本的元素

(3)可见性过滤选择器

• :hidden-选取所有不可见的元素

• :visible-选取所有可见的元素

(4)属性过滤选择器

• [attribute]-选取拥有此属性的元素

• [attribute=value]-选取属性的值为 value 的元素

• [attribute!=value]-选取属性的值不等于 value 的元素

• [attribute\^=value]-选取属性的值以 value 开始的元素

• [attribute\$=value]-选取属性的值以 value 结束的元素

• [attribute*=value]-选取属性的值含有 value 的元素

• [selector1][selector2][...]-用属性选择器合并成一个符合属性选择器，满足多个条件

(5)子元素过滤选择器

• :nth-child(index/even/odd/equation)-选取每个元素下的第 index 个子元素或者奇偶元素，index 从 1 算起

• :first-child-选取每个父元素的第 1 个子元素

• :last-child-选取每个父元素的最后一个子元素

• :only-child-选取只有一个元素的元素

(6)表单对象属性过滤选择器

• :enabled-选取所有可用元素

• :disabled-选取所以不可用元素

• :checked-选取所有被选中的元素（单选框，复选框）

• :selected-选取所以被选中的选项元素（下拉列表）

7. 表单选择器

• :input-选取所有的 input、textarea、select 和 button 元素

• :text-选取所有的单行文本框

• :password-选取所有的密码框

• :radio-选取所有的单选框

• :checkbox-选取所有的多选框

• :submit-选取所有的提交按钮

• :image-选取所有的图像按钮

• :reset-选取所有的重置按钮

• :button-选取所有的 button 按钮

• :file-选取所有的上传域

• :hidden-选取所有的不可见元素

8. 选择器中的一些注意事项

(1)含有特殊字符-使用转义符转义

(2)不能在属性前添加@符号

(3)后代选择器带空格，过滤性选择器不能带空格
```

```
$('.video').length //class选择多个节点，获取这些节点的长度
```
