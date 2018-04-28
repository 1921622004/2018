// 使用循环指令渲染表格
// 根据不同的审核状态值，显示对应的状态文案和操作按钮
// 点击「添加」按钮，增加一条数据项；点击「删除」按钮，删除该条数据；点击「审核」按钮，将审核状态修改为合格
import san from 'san/dist/san.dev.js';
var MyBox = san.defineComponent({
    template: `<div class="{{isTrue?'':'select'}}" on-click="toggle"></div>`,
    initdata:function () {
        return {
            isTrue:true
        }
    },
    toggle:function(){
        var isTrue = this.data.get('isTrue');
        if(isTrue){
            this.data.set('isTrue',false)
        }else{
            this.data.set('isTrue',true)
        }
        
    }
});
var myBox = new MyBox();
myBox.attach(document.body);