function setName(name) {
    return "당신의 이름은 <b>" + name + "</b> 입니다";
}

function plusNums(x, y) {
    if($.isNumeric(x, y)){
        let sum = parseInt(x) + parseInt(y); //외부 입력 데이터를 무조건 문자로 취급함!!
        return '두 수의 합은 <b>' + sum + '</b>입니다';
    } else {
        console.log('숫자가 아닙니다');
    }
}