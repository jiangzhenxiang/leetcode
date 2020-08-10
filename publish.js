class Events {
    constructor(props) {
        this.stack = {};
    }

    on(type, callback) {
        this.stack[type] = this.stack[type] ? this.stack[type] : [];
        this.stack[type].push(callback);
    }

    emit(type) {
        this.stack[type].forEach(cb => {
            cb();
        })
    }

}

const school = new Events();
school.on('订阅书籍', function () {
    console.log('看书',)
})
school.emit('订阅书籍');
