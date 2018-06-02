var _ = require("lodash");

//get k-v by key arr
var b = _.pick({ id: 0, name: "aaa", age: 33 }, ["name", "age"]);
console.log(b);

//get objct all keys
var c = _.keys({ id: 0, name: "aaa", age: 33 });
console.log(c);

//get by key
var d = _.find(
  [{ id: 0, name: "aaa", age: 33 }, { id: 1, name: "bbb", age: 25 }],
  ["id", 0]
);
console.log(d);

//arr to obj and set key with name
var a = _.keyBy(
  [{ id: 0, name: "aaa", age: 33 }, { id: 1, name: "bbb", age: 25 }],
  "name"
);
console.log(a);

//filter by k-v
var e = _.filter(
  [{ id: 0, name: "aaa", age: 33 }, { id: 1, name: "bbb", age: 25 }],
  ["name", "aaa"]
);
console.log(e);

var f = _.max([1, 2, 3, 4]);
var g = _.min([1, 2, 3, 4]);
var h = _.sum([1, 2, 3, 4]);
console.log(f);
console.log(g);
console.log(h);

//find max id in json arr
var i = [{ id: 0, name: "aaa", age: 33 }, { id: 1, name: "bbb", age: 25 }];
var j = _.find(i, ["id", _.max(_.map(i, "id"))]);
console.log(j);

//update json arr
let k = _.keyBy(
  [{ id: 0, name: "aaa", age: 33 }, { id: 1, name: "bbb", age: 25 }],
  "id"
);
k[0].name = "ccc";
var l = _.map(k);
console.log(l);

//find obj deep
var m = _.map(
  [
    {
      owner: "Colin",
      pets: [{ name: "dog1" }, { name: "dog2" }]
    },
    {
      owner: "John",
      pets: [{ name: "dog3" }, { name: "dog4" }]
    }
  ],
  "pets[0].name"
);
console.log(m);

//random
var n = _.random(15, 20);
console.log(n);

//same as extend
var o = _.assign({ name: "colin", car: "suzuki" }, { name: "james", age: 17 });
console.log(o);

//delete json ele
var p = _.omit({ name: "colin", car: "suzuki", age: 17 }, ["car", "age"]);
console.log(p);

//handle convert error
// JSON.parse('a');
var q = _.attempt(JSON.parse.bind(null, "a")); //Return an error object
console.log(q);

//remove: 0 false 空格
var r = _.compact([-1, 0, 1, false, 2, "", 3, "jj"]);
console.log(r);

//diff
var s = _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
console.log(s);

//groupBy
_.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }

// The `_.property` iteratee shorthand.
_.groupBy(["one", "two", "three"], "length");
// => { '3': ['one', 'two'], '5': ['three'] }
