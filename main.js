//Bai 1
//ax + b = 0
function equation(a,b) {
    let x1 = 0 - b;
    let x = x1/a;
    console.log("x = " + x);
}
equation(5,8)
//Bai 2

function find(a,b) {
    let x1 = a*a + b*b;
    let c = Math.sqrt(x1)
    let S = a*b/2;
    let h = S/c;
    let g1 = Math.sin(b/c);
    let g2 = Math.cos(a/c);
    console.log("Chiều dài cạnh huyền là: " + c);
    console.log("Chiều dài của đường cao là: " + h);
    console.log("2 góc nhọn của tam giác là: " + g1 + ", " + g2);
}
find(4,3);