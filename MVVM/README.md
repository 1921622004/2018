#关于SAN的学习

`这些都比较琐碎，记录的都是些在官方文档上没有看到的`

- 在操作数组数据时，例如如下，需要使用`` 进行包裹
```javascript
    this.data.set(`list[${index}].status`, 1);//这种格式是正确的
    this.data.get('list')[index].status//这种格式用来获取数据可以，但是不能用来设置

    this.data.set('list[index].status',1)//这样不可以
```