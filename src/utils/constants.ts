import {IMenuItem} from "../components/Menu/MenuMobile";
import {ISearchItem} from "../components/Search/SearchList";
import {IAchievement} from "../components/Achievment/Achievement";
import delivery from "../assets/delivery.svg";
import wallet from "../assets/wallet.svg";
import defender from "../assets/defender.svg";

export const topNavItems: Array<IMenuItem> = [
    {
        name: "О компании",
        link: "/about"
    },
    {
        name: "Преимущества",
        link: "/advantages"
    },
    {
        name: "Акционные товары",
        link: "/discount"
    }
]
export const bottomNavItems: Array<IMenuItem> = [
    {
        name: 'Рецепты',
        children: [
            {
                name: 'Молодые сыры',
                link: "/recipes"

            },
            {
                name: 'Полутвердые сыры',
                link: '/1',
            },
            {
                name: 'Паста Филата',
                link: '/2'
            },
            {
                name: 'Сывороточные сыры',
                link: '/3',

            },
            {
                name: 'Сыры с плесенью',
                link: "/4"
            },
            {
                name: 'Твердые сыры',
                link: '/5'
            },
            {
                name: 'Творожные сыры',
                link: '/6'
            },
            {
                name: 'Кисломолочные продукты',
                link: '/7'
            },
            {
                name: 'Все рецепты',
                link: '/8'
            },

        ]
    },
    {
        name: "Доставка и оплата",
        link: "/delivery"
    },
    {
        name: "Калькулятор Сыродела",
        link: "/calculator"
    },
    {
        name: "Отзывы",
        link: "/reviews"
    },
    {
        name: "Вопросы и ответы",
        link: "/questions"
    },
    {
        name: "Контакты",
        link: "/contacts"
    },
]
export const ingredientFilter: Array<ISearchItem> = [
    {
        name: "Закваски для сыра",
        link: "/z",
    },
    {
        name: "Ферменты для сыра",
        link: "/za",
    },
    {
        name: "Хлористый кальций",
        link: "/zaz",

    },
    {
        name: "Плесень для сыра",
        link: "/zaza",
    },
    {
        name: "Кисломолочные закваски",
        link: "/zazaz",
        children: [
            {
                name: "Мезофильная закваска Hansen Flora Danica (50U)",
                link: "/zazaza",
            },
        ]
    },
    {
        name: "Красители для сыра",
        link: "/zazazzz",

    },
    {
        name: "Специи для сыра",
        link: "/zzz",
    },
]
export const bowlFilter: Array<ISearchItem> = [
    {
        name: "Формы для сыра",
        link: "/zzzzzz",
    },
    {
        name: "Латексное покрытие",
        link: "/q",
    },
    {
        name: "Воск для сыра",
        link: "/qq",

    },
    {
        name: "Дренажные коврики",
        link: "/qqq",
    },
    {
        name: "Дренажные контейнеры",
        link: "/hyju",

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