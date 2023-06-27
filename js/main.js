const API = "http://localhost:8000/katalog";

const card = document.querySelector(".card");

async function render() {
  const res = await fetch(API);
  const data = res.json();

  console.log(data);
}

render();
