// tính bình phương 1 số
// input 4
// output 16
const tinhBP = (number) => {
        // tiến hành viết logic
        // tính bình phương công thức number * number
        return number * number;
    }
    // console.log(tinhBP(4)); // BP 16
    // console.log(tinhBP(23)); // BP 100
    // console.log(tinhBP(30)); // BP 900


// tìm 1 từ trùng trong 1 câu văn
// input function('hello world', 'hello') => output : true
const findTextInString = (stringText, wordText) => {
    // console.log({ stringText, wordText });
    // b1 chuyển stringText từ string => array
    // b2 duyệt mảng tìm từng phần tử trùng với wordText
    // b3 kiểm tra nếu đúng => true; sai => false
    const stringArr = stringText.split(" ");
    // ["hello", "world"]
    if (stringArr.includes(wordText)) {
        console.log("text in string text");
    } else return console.log("text not in string text");
    // for (const i = 1; i <= stringArr.length; i++) {
    //     if (stringArr[i] == wordText) {
    //         return true;
    //     } else return false;
    // }
};

findTextInString("hello world", "world")