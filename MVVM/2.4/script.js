import style from './css/main.css';
import san from 'san/dist/san.dev.js';
var Child = san.defineComponent({
    template: `
    <div class="child">子组件：
    <input type="text" value="{= input =}">
    <a href="javascript:void(0)" on-click="submit">通知父组件</a>
    </div>
    `,
    initData:function(){
        return {
            input:''
        }
    },
    submit: function () {
        var data = this.data.get('input');
        console.log(data);
    }
})

var Parent = san.defineComponent({
    template: `
    <div class="parent">
        <ui-child></ui-child>
        <p> 我是父组件：静静等待用户输入</p>
    </div>
    `,
    components:{
        'ui-child':Child
    }
})

var GrandParent = san.defineComponent({
    template:`
        <div class="grandparent">
            <ui-parent></ui-parent>
            <p>我是更高层父组件：静静等待用户输入</p> 
        </div>
        `,
    components:{
        'ui-parent':Parent
    }
})

var grandParent = new GrandParent();
grandParent.attach(document.getElementById('wrapper'));
console.log(parent,grandParent)