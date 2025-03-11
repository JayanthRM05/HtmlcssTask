
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function calculateResult() {
    try {
        let expression = document.getElementById("display").value;
        let result = evaluateExpression(expression);
        document.getElementById("display").value = result;
    } catch {
        alert("Invalid Input");
    }
}

function evaluateExpression(expression) {
    let tokens = expression.match(/\d+|[.+\-*/%]/g);
    if (!tokens) {return ""};
    let stack = [], operator = null;
    while (tokens.length) {
        let token = tokens.shift();
        if (/[.+\-*/ %]/.test(token)) {
            operator = token;
        } else {
            let num = parseFloat(token);
            if (operator && stack.length) {
                let prevNum = stack.pop();
                switch (operator) {
                    case '+': stack.push(prevNum + num); break;
                    case '-': stack.push(prevNum - num); break;
                    case '*': stack.push(prevNum * num); break;
                    case '/': stack.push(prevNum / num); break;

                }
                operator = null;
            } else {
                stack.push(num);
            }
        }
    }
    return stack[0];
}

