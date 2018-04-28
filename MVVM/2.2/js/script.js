// 使用循环指令渲染表格
// 根据不同的审核状态值，显示对应的状态文案和操作按钮
// 点击「添加」按钮，增加一条数据项；点击「删除」按钮，删除该条数据；点击「审核」按钮，将审核状态修改为合格
import san from 'san/dist/san.dev.js';
var MyComponent = san.defineComponent({
    template: '' +
        '<div>' + 
        '<table>' +
        '<tr>' +
        '<th>姓名</th>' +
        '<th>审核状态</th>' +
        '<th>操作</th>' +
        '</tr>' +
        '<tr s-for="p ,index in list">' +
        '<td>{{p.name}}</td>' +
        '<td>{{p.status === 1?"合格":(p.status === 2?"待审核":"不合格")}}</td>' +
        '<td><a href="javascript:void(0)" on-click="show(index)">{{p.status===2?"审核":"删除"}}</a></td>' +
        '</tr>' +
        '</table>' +
        '<lable>姓名：<input type="text" value="{= new.name =}"></lable>' + 
        '<lable>状态：' +
        '<select value="{= new.status =}">' +
        '<option value="1">合格</option>' +
        '<option value="2">待审核</option>' +
        '<option value="3">不合格</option>' +
        '</select>' +
        '</lable>' +
        '<a href="javascript:void(0)" on-click="new">新增</a>' +
        '</div>',
    initData: function () {
        return {
            new:{
                name:'',
                status:''
            },
            list: [{
                name: '张三',
                status: 1
            },
            {
                name: "李四",
                status: 3
            },
            {
                name: "王五",
                status: 2
            },
            {
                name: "赵六",
                status: 2
            },
            {
                name: "孙七",
                status: 2
            }
            ]
        }
    },
    show: function (index) {
        var a = this.data.get('list')[index].status;
        if (a === 2) {
            this.data.set(`list[${index}].status`, 1)//
        } else {
            this.data.removeAt('list', index);
        }
    },
    new:function(){
        var a = this.data.get('new');
        a.status = Number(a.status);
        this.data.push('list',a);
    }
});
var myComponent = new MyComponent();
myComponent.attach(document.body)
console.log(myComponent);
