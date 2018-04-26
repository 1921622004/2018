// 1.输入姓名、年龄和简介信息，实时展示对应的信息
// 2.点击移除信息按钮后，姓名、年龄和简介信息置空
// 3.信息的数据类型为一个必须包含name、age和des三个属性的对象，其对应的数据类型分别为string、number和string
import san, { DataTypes } from 'san/dist/san.dev.js';
var MyApp = san.defineComponent({
    template: ''
        + '<div id="box">'
        + '<input type="text" class="input" value="{= person.name =}" placeholder="姓名">'
        + '<input type="text" class="input" value="{= person.age =}" placeholder="年龄">'
        + '<input type="text" class="input" value="{= person.des =}" placeholder="简介">'
        + '<p>信息：<input type="button" value="移除信息" on-click="del"></p>'
        + '<p>姓名：<span>{{person.name}}</span></p>'
        + '<p>年龄：<span>{{person.age}}</span></p>'
        + '<p>简介：<span>{{person.des}}</span></p>'
        + '</div>'
    ,

    attached:function(){
        this.data.set('person',{
            name:'',
            age:'',
            des:'',
        }),
        this.updateNumber();
    },
    updateNumber:function(data){
        this.data.apply('person',function(person){
            return{
                name:person.name,
                age:person.age,
                des:person.des
            }
        })
    },
    person:DataTypes.shape({
        name:san.DataTypes.string,
        age:san.DataTypes.age,
        des:san.DataTypes.string
    }),
    del: function () {
        var person = this.data.get('person');
        for(var attr in person){
            person[attr] = ''
        }
        this.updateNumber()
    }
})
var myApp = new MyApp();
myApp.attach(document.body)