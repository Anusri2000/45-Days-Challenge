let list = document.querySelector("#list");
let btn = document.querySelector("#btn");

async function getData() {
  let res = await fetch("https://api.quotable.io/random");
  let info = await res.json();
  // console.log(info)

  list.innerHTML = `
        <div class="max-w-xl bg-white shadow-lg rounded-xl p-6 text-center">
            <p class="text-lg text-red-700 leading-relaxed mb-4">
                "${info.content}"
            </p>
            <h1 class="text-xl font-semibold text-gray-900">
                — ${info.author}
            </h1>
        </div>
    `;
}
// getData()

btn.addEventListener("click", function () {
  getData();
});
