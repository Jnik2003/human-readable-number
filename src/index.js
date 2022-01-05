module.exports = function toReadable(number) {
    let num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let lessTwenty = [
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty'
    ];

    let dozens = [
        '',
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];

    let str = '';
    let readebleNumber = String(number).split('');

    if (readebleNumber.length == 1) return num[number]

    if (number == 10) return str = lessTwenty[0];
    if (number == 20) return str = lessTwenty[10];

    if (number < 20) return lessTwenty[readebleNumber[1]];

    if (readebleNumber.length == 2 && number > 20 && number % 10 == 0) return dozens[readebleNumber[0]];
    if (readebleNumber.length == 2 && number > 20) return dozens[readebleNumber[0]] + ' ' + num[readebleNumber[1]];

    if (number % 100 == 0) return num[readebleNumber[0]] + ' hundred';

    if (readebleNumber[2] == 0) {
        str = num[readebleNumber[0]] + ' hundred ' + dozens[readebleNumber[1]];
        return str;
    }

    if (readebleNumber[1] == 1 && readebleNumber[2] > 0) return num[readebleNumber[0]] + ' hundred ' + lessTwenty[readebleNumber[2]];

    if (readebleNumber[1] == 0) return num[readebleNumber[0]] + ' hundred ' + num[readebleNumber[2]]

    str = num[readebleNumber[0]] + ' hundred ' + dozens[readebleNumber[1]] + ' ' + num[readebleNumber[2]];


    return str;
}
