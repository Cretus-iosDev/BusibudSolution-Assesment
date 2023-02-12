function TreeConstructor(strArr) {
let tree = {};

for (let i = 0; i < strArr.length; i++) {
    let node = strArr[i];
    let parent = node.split(',')[1].replace(/[^0-9]/g, '');
    let child = node.split(',')[0].replace(/[^0-9]/g, '');

    if (!tree[parent]) {
        tree[parent] = [child];
    } else {
        if (tree[parent].length >= 2) {
        return false;
        } else {
        tree[parent].push(child);
        }
    }
}

return true;

return strArr;

}

console.log(TreeConstructor(readline()));
