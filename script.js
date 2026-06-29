const whatsAppNumber = "962798015744";

function openWhatsApp(message) {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${whatsAppNumber}?text=${encoded}`, "_blank", "noreferrer");
}

document.querySelectorAll(".product-card").forEach((card) => {
  const productName = card.dataset.product;
  const button = card.querySelector(".wa-button");

  button.addEventListener("click", () => {
    openWhatsApp(`مرحبا، بدي أستفسر عن ${productName} من منتجات Let's Bake.`);
  });
});

document.querySelector("#leadForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = new FormData(event.currentTarget);
  const message = [
    "مرحبا، عندي طلب جملة لمنتجات Let's Bake:",
    `اسم النشاط: ${form.get("business")}`,
    `المدينة: ${form.get("city")}`,
    `نوع النشاط: ${form.get("type")}`,
    `المنتجات والكميات: ${form.get("items")}`,
  ].join("\n");

  openWhatsApp(message);
});
