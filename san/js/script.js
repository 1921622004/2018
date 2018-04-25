import san from 'san';
var MyApp = san.defineComponent({
    template: `<p>hello {{name}}!</p>`,

    initData: function () {
        return {
            name: 'san'
        };
    }
});

var myApp = new MyApp();
myApp.attach(document.body)