// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж.
// При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>,
// та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let form1 = document.forms.form1;

let items = [];
form1.onsubmit = (e) => {
    e.preventDefault();

    if(localStorage.getItem('items')){

     items= JSON.parse(localStorage.getItem('items'));

    }

    items.push(
        {
            itemName: form1.itemName.value,
            itemsQuantity: form1.itemsQuantity.value,
            itemPrice: form1.itemPrice.value,
            itemImg: form1.itemImg.value,
        }
    );
    localStorage.setItem('items', JSON.stringify(items));
};

