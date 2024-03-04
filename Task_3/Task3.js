let calculate_average_price = (products) => 
{
    let total_price = 0;
    for (let i = 0; i < products.length; i++) 
    {
      total_price += parseInt(products[i].price);
    }
    const average_price = total_price / products.length;
    return average_price;
  }
  
  const products = [];
  const numProducts = parseInt(prompt("Введите количество продуктов:"));
  
  for (let i = 0; i < numProducts; i++) 
  {
    
    const price = parseInt(prompt(`Введите цену продукта номер ${i + 1}:`));
    products.push({ price: price });
  }
  
  const average_price = calculate_average_price(products);
  console.log(`Средняя цена товаров: ${average_price}`);