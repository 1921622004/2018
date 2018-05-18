function diyTrim(str) {
    var res = str,
        indexS = 0,
        indexE = 0
    for (var i = res.length - 1; i > 0; i--) {
        if (res[i] !== ' ') {
            indexE = i;
            break;
        }
    }
    for (var j = 0; j < res.length; j++) {
        if (res[j] !== ' ') {
            indexS = j;
            break;
        }
    }
    res = res.slice(indexS, indexE + 1);
    return res
}

// 测试用例
console.log(diyTrim(' a f b    ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(' ')); // ->
console.log(diyTrim('　')); // ->
console.log(diyTrim('')); // ->

/*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if(result.indexOf(str[i]) <0 ){
            result += str[i];
        }
        
    }
    return result;
}

// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc