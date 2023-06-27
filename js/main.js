const API = "http://localhost:8000/katalog";

const card = document.querySelector(".main-card");
const silver = document.querySelector("#silver");
const gold = document.querySelector("#gold");
const man = document.querySelector("#man");
const woman = document.querySelector("#woman");

let filter = "";
let gender = "";

async function render() {
  const res = await fetch(
    `${API}?gender_like=${gender}&&material_like=${filter}&`
  );
  const data = await res.json();

  return data;
}

async function paintCard() {
  const data = await render();

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

silver.addEventListener("click", () => {
  filter = "серебро";

  paintCard();
});

gold.addEventListener("click", () => {
  filter = "золото";

  paintCard();
});

man.addEventListener("click", () => {
  gender - "man";

  paintCard();
});

woman.addEventListener("click", () => {
  gender = "woman";

  paintCard();
});
