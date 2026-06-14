function setMode(mode) {
    const storesMode = document.getElementById('storesMode');
    const deliveryMode = document.getElementById('deliveryMode');
    const btnStores = document.getElementById('btnStores');
    const btnDelivery = document.getElementById('btnDelivery');

    if (mode === 'stores') {
        storesMode.classList.remove('hidden');
        deliveryMode.classList.remove('show');
        btnStores.classList.add('active');
        btnDelivery.classList.remove('active');
    } else {
        storesMode.classList.add('hidden');
        deliveryMode.classList.add('show');
        btnStores.classList.remove('active');
        btnDelivery.classList.add('active');
    }
}

function selectStore(card) {
    // Remove seleção anterior
    document.querySelectorAll('.store-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');

    const name = card.querySelector('h3').textContent;
    const lat = card.dataset.lat;
    const lng = card.dataset.lng;
    const id = card.dataset.id;

    document.getElementById('mapFrame').src =
        `https://www.google.com/maps?q=${lat},${lng}&output=embed`;
    document.getElementById('mapLabel').textContent = name;

    const actions = document.getElementById('storeActions');
    actions.classList.add('show');

    document.getElementById('linkWarehouse').href = `produtos.html?store=${id}`;
}