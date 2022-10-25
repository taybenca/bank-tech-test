class Display {
    constructor(statement) {
        this.statement = statement
    }

    displayStatement(){
        console.table(this.statement.reverse())
    }
}

module.exports = Display;