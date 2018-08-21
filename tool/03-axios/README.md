```js
//返回promise对象
return axios.get("/product");
return axios.get("/product/123");

//传入参数
return axios.get("/product/get", {
  params: {
    id: 4399
  }
});

//post 数据
return axios.post("/product", {
  data: {
    id: "01",
    name: "tom"
  }
});

//配置
return axios({
  method: "post",
  url: "/product",
  data: {
    id: "01",
    name: "tom"
  }
});
```
