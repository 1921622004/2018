class EventEmitter{
    constructor(){
        this.listener = {}
    }
    on(type,listener){
        this.listener[type] = [];
        this.listener[type].push(listener);
    }
    off(type,listener){
        let ary = this.listener[type];
        ary.forEach((item,index)=>{
            if(obj === listener){
                ary[index] = null;
            }
        })
    }
    emit(type){
        console.log(this);
        
        let ary = this.listener[type];
        ary.forEach(obj => {
            obj && obj.call(this)
        });
    }
    once(type,listener){
        let fn = () => {
            listener()
            this.off(type,fn)
        }
        this.on(type,fn);
    }
}
