function BitmapHoles(strArr) {
let matrix = [];
for (let i = 0; i < strArr.length; i++) {
    matrix.push(strArr[i].split(''));
}

let holes = 0;

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] === '0') {
        holes++;
        fill(matrix, i, j);
    }
    }
}

return holes;

return strArr;
}

function fill(matrix, i, j) {
if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[i].length || matrix[i][j] === '1') {
    return;
}

matrix[i][j] = '1';
fill(matrix, i + 1, j);
fill(matrix, i - 1, j);
fill(matrix, i, j + 1);
fill(matrix, i, j - 1);
}


console.log(BitmapHoles(readline()));