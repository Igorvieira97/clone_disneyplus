document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabs = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (event) {
            const abaAlvo = event.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);

            // Esconde todas as abas
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('shows__list--is-active');
            }

            // Remove destaque de todos os botões
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].classList.remove('shows__tabs__button--is-active');
            }

            // Mostra a aba clicada
            aba.classList.add('shows__list--is-active');

            // Destaca o botão clicado
            event.target.classList.add('shows__tabs__button--is-active');
        });
    }
});