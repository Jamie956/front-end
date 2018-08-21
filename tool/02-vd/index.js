var vd = require("validator");

function test01() {
  var re;
  //是否合法邮箱
  rs = vd.isEmail("foo@bar.com");
  console.log(rs);
  //是否为空
  rs = vd.isEmpty("");
  console.log(rs);
  //是否json
  rs = vd.isJSON(JSON.stringify({ name: "tom" }));
  console.log(rs);
  //是否数字
  rs = vd.isNumeric("123");
  console.log(rs);
  //是否小写
  rs = vd.isLowercase("a");
  console.log(rs);
  //是否大写
  rs = vd.isUppercase("a");
  console.log(rs);
  //过滤字符串中指定字符
  rs = vd.blacklist("abcdefga", "a");
  console.log(rs);
  //转义
  rs = vd.escape("< - > - & - /");
  console.log(rs);
  //字符串长度是否在范围里
  rs = vd.isLength("1234567", { min: 2, max: 6 });
  console.log(rs);
}

test01();
