## Q

Sync / Await写法



## API



### FileSystem

#### Read File

```js
fs.readFile("./resource.json", "utf8", function(err, data) {});
```

#### Read Stream

```js
fs.createReadStream("./resource.json", { encoding: "utf8" })
    .on("data", function(chunk) {
    console.log(chunk);
})
    .on("end", function() {
    console.log("done");
});
```





 





















