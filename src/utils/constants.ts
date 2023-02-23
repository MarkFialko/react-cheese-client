import {IMenuItem} from "../components/Menu/MenuMobile";
import {ISearchItem} from "../components/Search/SearchList";
import {IProductItem} from "../components/Product/ProductItem";
import productOne from "../assets/product-1.png";
import productTwo from "../assets/product-2.png";
import productThree from "../assets/product-3.png";
import productFour from "../assets/product-4.png";
import productFive from "../assets/product-5.png";
import productSix from "../assets/product-6.png";
import productSeven from "../assets/product-7.png";
import {IAchievement} from "../components/Achievment/Achievement";
import delivery from "../assets/delivery.svg";
import wallet from "../assets/wallet.svg";
import defender from "../assets/defender.svg";

export const topNavItems: Array<IMenuItem> = [
    {
        name: "О компании",
        link: "/"
    },
    {
        name: "Преимущества",
        link: "/"
    },
    {
        name: "Акционные товары",
        link: "/"
    }
]
export const bottomNavItems: Array<IMenuItem> = [
    {
        name: 'Рецепты',
        children: [
            {
                name: 'Молодые сыры',
                link: "/"

            },
            {
                name: 'Полутвердые сыры',
                link: '/',
            },
            {
                name: 'Паста Филата',
                link: '/'
            },
            {
                name: 'Сывороточные сыры',
                link: '/',

            },
            {
                name: 'Сыры с плесенью',
                link: "/"
            },
            {
                name: 'Твердые сыры',
                link: '/'
            },
            {
                name: 'Творожные сыры',
                link: '/'
            },
            {
                name: 'Кисломолочные продукты',
                link: '/'
            },
            {
                name: 'Все рецепты',
                link: '/'
            },

        ]
    },
    {
        name: "Доставка и оплата",
        link: "/"
    },
    {
        name: "Калькулятор Сыродела",
        link: "/"
    },
    {
        name: "Отзывы",
        link: "/"
    },
    {
        name: "Вопросы и ответы",
        link: "/"
    },
    {
        name: "Контакты",
        link: "/"
    },
]
export const ingredientFilter: Array<ISearchItem> = [
    {
        name: "Закваски для сыра",
        link: "",
    },
    {
        name: "Ферменты для сыра",
        link: "",
    },
    {
        name: "Хлористый кальций",
        link: "",

    },
    {
        name: "Плесень для сыра",
        link: "",
    },
    {
        name: "Кисломолочные закваски",
        link: "",
        children: [
            {
                name: "Мезофильная закваска Hansen Flora Danica (50U)",
                link: "",
            },
        ]
    },
    {
        name: "Красители для сыра",
        link: "",

    },
    {
        name: "Специи для сыра",
        link: "",
    },
]
export const bowlFilter: Array<ISearchItem> = [
    {
        name: "Формы для сыра",
        link: "",
    },
    {
        name: "Латексное покрытие",
        link: "",
    },
    {
        name: "Воск для сыра",
        link: "",

    },
    {
        name: "Дренажные коврики",
        link: "",
    },
    {
        name: "Дренажные контейнеры",
        link: "",

    },

]

export const achievements: Array<IAchievement> = [
    {
        image: delivery,
        textTop: 'Бесплатная',
        textBottom: 'доставка',
        tippyText: 'Дарим бесплатную доставку в пределах России при заказе товара на сумму от 2500 руб.'
    },
    {
        image: wallet,
        textTop: 'Скидка при',
        textBottom: 'оплате на сайте',
        tippyText: 'Оплачивайте на сайте и получите скидку!'
    },
    {
        image: defender,
        textTop: 'Защита',
        textBottom: 'покупателей',
        tippyText: 'Храним Ваши данные в безопасном месте.'
    },
]