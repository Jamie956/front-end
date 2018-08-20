var _ = require("lodash");

function test01() {
  var rs;

  rs = _.pick({ id: 0, name: "tom", age: 33 }, ["name", "age"]);
  console.log(rs); //{ name: 'tom', age: 33 }

  _.keys({ id: 0, name: "aaa", age: 33 });
  //[ 'id', 'name', 'age' ]

  _.find([{ id: 0, name: "aaa" }, { id: 1, name: "bbb" }], ["id", 0]);
  //{ id: 0, name: 'aaa', age: 33 }

  _.keyBy([{ id: 0, name: "aaa" }, { id: 1, name: "bbb" }], "name");
  //{ aaa: { id: 0, name: 'aaa' }, bbb: { id: 1, name: 'bbb' } }

  _.filter([{ id: 0, name: "aaa" }, { id: 1, name: "bbb" }], ["name", "aaa"]);
  // [ { id: 0, name: 'aaa' } ]

  _.max([1, 2, 3, 4]); //4
  _.min([1, 2, 3, 4]); //1
  _.sum([1, 2, 3, 4]); //10

  //find max id in json arr
  var i = [{ id: 0, name: "aaa" }, { id: 1, name: "bbb" }];
  _.find(i, ["id", _.max(_.map(i, "id"))]);
  //{ id: 1, name: 'bbb' }

  //update json arr
  let k = _.keyBy([{ id: 0, name: "Tom" }, { id: 1, name: "Bob" }], "id");
  k[0].name = "Muji";
  _.map(k); //[ { id: 0, name: 'Muji' }, { id: 1, name: 'Bob' } ]

  //find obj deep
  _.map(
    [
      {
        owner: "Colin",
        pets: [{ name: "cat" }, { name: "dog" }]
      },
      {
        owner: "John",
        pets: [{ name: "eye" }, { name: "deer" }]
      }
    ],
    "pets[0].name"
  );
  //[ 'cat', 'eye' ]

  //random
  _.random(15, 20); //15-20

  //same as extend
  _.assign({ name: "colin", car: "suzuki" }, { name: "james", age: 17 });
  // { name: 'james', car: 'suzuki', age: 17 }

  //delete json ele
  _.omit({ name: "colin", car: "suzuki", age: 17 }, ["car", "age"]);
  // { name: 'colin' }

  //handle convert error
  // JSON.parse('a');
  _.attempt(JSON.parse.bind(null, "a")); //Return an error object

  //remove: 0 false 空格
  _.compact([-1, 0, 1, false, 2, "", 3, "jj"]);
  // [ -1, 1, 2, 3, 'jj' ]

  //diff
  _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
  // [ 1, 3, 4 ]

  //groupBy
  _.groupBy([6.1, 4.2, 6.3], Math.floor);
  // => { '4': [4.2], '6': [6.1, 6.3] }

  // The `_.property` iteratee shorthand.
  _.groupBy(["one", "two", "three"], "length");
  // => { '3': ['one', 'two'], '5': ['three'] }
}

test01();
