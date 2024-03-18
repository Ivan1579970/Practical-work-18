const calculate = () =>
{
    const inputmilk = parseInt(document.querySelector('#milk').value);
    const inputlMilk = parseInt(document.querySelector('#lMilk').value);
    const inputegg = parseInt(document.querySelector('#egg').value);
    const inputlEgg = parseInt(document.querySelector('#lEgg').value);
    const inputvegetables = parseInt(document.querySelector('#vegetables').value);
    const inputlVegetables = parseInt(document.querySelector('#lVegetables').value);
    const inputfruits = parseInt(document.querySelector('#fruits').value);
    const inputlFruits = parseInt(document.querySelector('#lFruits').value);

    if( isNaN(inputmilk) || isNaN(inputlMilk) || isNaN(inputegg) || isNaN(inputlEgg) || isNaN(inputvegetables) || isNaN(inputlVegetables) || isNaN(inputfruits) || isNaN(inputlFruits))
    {
        alert("Заполните все поля!");
        return;
    }

    let productSum = (inputmilk * inputlMilk) + (inputegg * inputlEgg) + (inputvegetables * inputlVegetables) + (inputfruits * inputlFruits);

   

    const resultDiv = document.querySelector('#result');
    resultDiv.innerHTML = 
    `
     <p> Стоимость: ${productSum}</p>
    `
}