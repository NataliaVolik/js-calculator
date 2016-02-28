function getScreen(){
    return $('.screen').html();
}

function setScreen(v){
    $('.screen').html(v);
}


/**
 * 1 - calc state: accept first number
 * 2 - calc state: accept second number
 * 3 - calc state: output result
 */
var state;


var firstNumber;
var secondNumber;
var operator;

/**
 * Handle numbers from 0 to 9
 * @param number
 */
function handleNumButton(number){
    switch (state){
        case 1: //1 - calc state: accept first number
        case 2: //2 - calc state: accept second number

            if(getScreen() == "0"){
                setScreen(number);
            }else{
                setScreen(getScreen() + number);
            }

            break;
        case 3: //3 - calc state: output result
            break;
        default: //unknown state
            console.log("handleNumButton(): got unknown calc state!");
            break;
    }
}

function handleOperatorButton(action){
    switch (state){
        case 1: //1 - calc state: accept first number
            state = 2; //2 - calc state: accept second number
            firstNumber = parseFloat(getScreen());
            operator = action;
            setScreen(0);
            break;
        case 2: //2 - calc state: accept second number
            break;
        case 3: //3 - calc state: output result
            break;
        default: //unknown state
            console.log("handleNumButton(): got unknown calc state!");
            break;
    }
}

/**
 * Сложение
 * @param a
 * @param b
 */
function actionSum(a, b){
    return a + b;
}

/**
 * Вычитание
 * @param a
 * @param b
 */
function actionMinus(a, b){
 return a - b;
}

/**
 * Деление
 * @param a
 * @param b
 */
function actionDiv(a, b){
    if(b == 0){
        return "ERR: Zero division!"
    }
    return a / b;
}

/**
 * Умножение
 * @param a
 * @param b
 */
function actionMulti(a, b){
  return a * b;
}

function actionPercent(a, b){
    return a / 100 * b;
}


//function eval3op(first, second, op){
//    return eval(first + op + second);
//}

function calc(){
    secondNumber = parseFloat(getScreen());
    setScreen(operator(firstNumber, secondNumber));
    state = 3;
}

function resetCalc(){
    state = 1;
    setScreen(0);
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
}

function buttonClickHandler(eventObject){
    //this.className; //"button btn-9"

    switch (this.className){
        case 'button btn-0':
            handleNumButton(0);
            break;
        case 'button btn-1':
            handleNumButton(1);
            break;
        case 'button btn-2':
            handleNumButton(2);
            break;
        case 'button btn-3':
            handleNumButton(3);
            break;
        case 'button btn-4':
            handleNumButton(4);
            break;
        case 'button btn-5':
            handleNumButton(5);
            break;
        case 'button btn-6':
            handleNumButton(6);
            break;
        case 'button btn-7':
            handleNumButton(7);
            break;
        case 'button btn-8':
            handleNumButton(8);
            break;
        case 'button btn-9':
            handleNumButton(9);
            break;
        case 'button btn-sum':
            handleOperatorButton(actionSum);
            break;
        case 'button btn-minus':
            handleOperatorButton(actionMinus);
            break;
        case 'button btn-multiplication':
            handleOperatorButton(actionMulti);
            break;
        case 'button btn-percent':
            handleOperatorButton(actionPercent);
            break;
        case 'button btn-point':
            break;
        case 'button btn-division':
            handleOperatorButton(actionDiv);
            break;
        case 'button btn-eval':
            calc();
            break;
        case 'button btn-clear':
            resetCalc();
            break;
        default:
            alert('Unknown button!');
            break;
    }

}

$(document).ready(function(){
    $('.button').click(buttonClickHandler);
    resetCalc();
});