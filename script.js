







let input = document.querySelector('.input')
let operType = ''
let values = {
    prev: null,
    new: null,
    total: null
}
let lastBtnNumber = false;

function getNumber(num) {
    if (lastBtnNumber) {
        let outcome;
        if (values.new) {
            outcome = values.new + '' + num
            values.new = outcome
            input.value = outcome
        } else {
            outcome = values.prev + '' + num
            values.prev = outcome
            input.value = outcome
        }
    } else {
        input.value = num
        if (values.prev) {
            values.new = num
        } else {
            values.prev = num
        }
        lastBtnNumber = true
    }


  
}


function getOperator(oper) {

    operType = oper
    lastBtnNumber = false

}

function result() {
    if (!values.new) {
        return

    }
    if (values.new && values.prev && operType) {

        if (operType === "+") {
            let newValue = values.prev + values.new
            input.value = newValue
            values.prev = newValue
        }
        if (operType === "-") {
            let newValue = values.prev - values.new
            input.value = newValue
            values.prev = newValue
        }
        if (operType === "/") {
            let newValue = values.prev / values.new
            input.value = newValue
            values.prev = newValue
        }
        if (operType === "*") {
            let newValue = values.prev * values.new
            input.value = newValue
            values.prev = newValue
        }
    }
    lastBtnNumber = false

}