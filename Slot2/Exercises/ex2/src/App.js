import './App.css';

function App() {
  let chao1 = (name) => `Xin chao, ${name}!`;
  // Khai bao 1 doi tuong Person co cac thuoc tinh id, name, age, address
  let person = {
    id: 1,
    name: "An",
    age: 20,
    address: "Ha Noi"
  };

  return (
    <>
    <h1>Xin chào, đây là bài tập về hàm trong React!</h1>
    <h2>Toi la LoanTTB</h2>
    <button onClick={() => console.log(chao1("LoanTTB"))}>Gọi hàm Chao1</button>
    <div>
      <h3>Thông tin người dùng:</h3>
      <p>ID: {person.id}</p>
      <p>Tên: {person.name}</p>
      <p>Tuổi: {person.age}</p>
      <p>Địa chỉ: {person.address}</p>
    </div>
    </>
  );
}

export default App;
