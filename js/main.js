const API = "http://localhost:8000/katalog";

const card = document.querySelector(".main-card");

async function render() {
  const res = await fetch(API);
  const data = await res.json();

  return data;
}

async function paintCard() {
  const data = await render();

  console.log(data);
  card.innerText = "";

  data.forEach((item) => {
    card.innerHTML += `<div class="card">
    <div class="card-image"><img src="${item.photo}" alt=""></div>
    <p class="card-title">${item.title}</p>
    <p class="card-body">
      ${item.description}
    </p>
    <p class="card-price">${item.price} ₽</p>
  </div>`;
  });
}

paintCard();
