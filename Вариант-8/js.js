document.addEventListener('DOMContentLoaded', () => 
{
    const contractForm = document.querySelector('#contractForm');
    const contractCardsContainer = document.querySelector('.contract-cards');

    contractForm.addEventListener('submit', event => 
    {
        event.preventDefault();

        const contractName = document.querySelector('#contractName').value;
        const contractDeadline = document.querySelector('#contractDeadline').valueAsDate;
        const contractDescription = document.querySelector('#contractDescription').value;
        const contractStatus = document.querySelector('#contractStatus').value;
        const contractImage = document.querySelector('#contractImage').files[0];

        if (!contractName || !contractDeadline || !contractDescription || !contractStatus || !contractImage) 
        {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function () 
        {
            const contractCard = document.createElement('div');
            contractCard.classList.add('contract-card');
            contractCard.style.backgroundColor = getComputedStyle(document.body).getPropertyValue('--primary-color');
            contractCard.innerHTML = `
                <div class="contract-info">
                    <h3>${contractName}</h3>
                    <p><strong>Срок выполнения:</strong> ${formatDate(contractDeadline)}</p>
                    <p><strong>Описание:</strong> ${contractDescription}</p>
                    <p><strong>Статус:</strong> ${contractStatus}</p>
                </div>
                <img src="${reader.result}" alt="contract Image">
            `;
            contractCardsContainer.appendChild(contractCard);
        };
        reader.readAsDataURL(contractImage);
    });
});

const formatDate = (date) =>
{
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ru-RU', options);
}

