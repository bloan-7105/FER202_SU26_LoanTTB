let tong = (a, b) => a + b;
console.log(tong(2, 3)); // Output: 5

let chao = () => `Xin chao!`;
console.log(chao()); // Output: Xin chao!

// 1. Viet ham Chao nhan 1 tham so la ten va in ra loi chao voi ten do. Sau do goi ham.
let chao1 = (ten) => `Xin chao, ${ten}!`;
console.log(chao1("LoanTTB")); // Output: Xin chao, LoanTTB!

// 2. Viet ham Chao2 nhan 1 tham so la 1 doi tuong Person co cac thuoc tinh id, name, age, address.
// Sau do in ra loi chao voi ten cua doi tuong do.
// Goi ham Chao2 voi mot doi tuong person mau.
let chao2 = (person) => `Xin chao, ${person.name}!`;
let person = {
    id: 1,
    name: "An",
    age: 20,
    address: "Ha Noi"
};
console.log(chao2(person)); // Output: Xin chao, An!