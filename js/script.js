document.querySelectorAll('.order-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const productName = btn.closest('.product-card')?.querySelector('h3')?.innerText;
    if (productName) {
      alert(`شكرًا! تم اختيار "${productName}". سيتم التواصل معك قريبًا.`);
    }
  });
});
 