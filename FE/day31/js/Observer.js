class Observer extends EventEmitter {
    constructor(el, index, _index) {
        super();
        this.isRun = false;
        this.el = el;
        this.index = index;
        this._index = _index;
        this.input = this.el.getElementsByTagName('input')[0];
        this.initValue = Number(this.input.value);
        this.handleEL();
    }
    handleEL() {
        this.el.onclick = () => {
            this.changeToWriteable()
        };
        this.input.onblur = () => {
            this.changeBack()
        };
        this.input.onkeyup = e => {
            if (e.keyCode === 13) {
                this.decide()
            } else if (e.keyCode === 27) {
                this.input.value = this.initValue;
            }
        }
    }
    changeToWriteable() {
        if (this.isRun) return;
        this.input.disabled = false;
    }
    decide() {
        this.value = Number(this.input.value);
        if (this.value !== this.initValue) {
            this.isRun = true;
            let a = window.confirm('确定要更改吗？');
            if (a) {
                this.sendAJAX()
                this.isRun = false;
                this.initValue = this.value;
                this.emit('change');
            } else {
                this.input.value = this.initValue;
            }

        };
    }
    sendAJAX() {
        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open('post', '/changeInfo');
            xhr.setRequestHeader('Content-Type', 'x-www-form-urlencoded');
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve()
                }
            }
            xhr.send(`value=${this.value}&index=${this.index}&Index=${this._index}`);
        })
    }
    changeBack() {
        this.decide();
        this.input.disabled = true;
    }
}