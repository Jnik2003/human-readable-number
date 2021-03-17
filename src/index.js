module.exports = function toReadable(number) {
    // цифры и числа
    const names = [];
    names[1] = 'one';
    names[2] = 'two';
    names[3] = 'three';
    names[4] = 'four';
    names[5] = 'five';
    names[6] = 'six';
    names[7] = 'seven';
    names[8] = 'eight';
    names[9] = 'nine';
    names[10] = 'ten';
    names[11] = 'eleven';
    names[12] = 'twelve';
    names[13] = 'thirteen';
    names[14] = 'fourteen';
    names[15] = 'fifteen';
    names[16] = 'sixteen';
    names[17] = 'seventeen';
    names[18] = 'eighteen';
    names[19] = 'nineteen';
    names[20] = 'twenty';
    names[30] = 'thirty';
    names[40] = 'forty';
    names[50] = 'fifty';
    names[60] = 'sixty';
    names[70] = 'seventy';
    names[80] = 'eighty';
    names[90] = 'ninety';
    names[100] = 'hundred';
    names[1000] = 'thousand';

    if (number == 0) {
        return 'zero'
    }

    let trine;
    let y = number;
    // выделим тройки

    trine = y % 1000;
    y = Math.floor(y / 1000);
    let d = [];
    
		// выделим в тройке сотни, десятки и единицы
    d = [];
    d[0] = trine % 10; // единицы
    d[10] = trine % 100 - d[0]; // десятки
    d[11] = trine % 100; // две правых цифры в виде числа
    d[100] = trine - d[10] - d[0]; // сотни		

    let r = '';
    // выводим сотен
    if (d[100] >= 100) { // есть сотни
        r += names[d[100] / 100] + ' ' + (names[100]);
    }

    // выводим двузначное число, если оно есть
    if (names[d[11]]) {
        if (d[100] >= 100) {
            r += ' '
        }
        r += (names[d[11]]);
    }
    // иначе выводим десятки и однозначные по отдельности
    else {
        // выводим десятки				
        if (names[d[10]]) {
            if (d[100] >= 100) {
                r += ' '
            }
            r += (names[d[10]]);
        }
        // выводим однозначные
        if (names[d[0]]) {
            if (d[100] >= 100 || names[d[10]]) {
                r += ' '
            }
            r += (names[d[0]]);
        }
    }
    return r;
}
