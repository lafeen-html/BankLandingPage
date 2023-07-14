import {
  people01,
  people02,
  people03,
  facebook,
  telegram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Главная",
  },
  {
    id: "features",
    title: "Возможности",
  },
  {
    id: "product",
    title: "Услуги",
  },
  {
    id: "clients",
    title: "Клиенты",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Привилегии",
    content:
      "Участвуйте в акциях и получайте бонусы с помощью наших кредитных карт.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% безопасность",
    content:
      "Мы предпринимаем все необходимые меры, чтобы обеспечить сохранность Вашей информации и переводов.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Денежные переводы",
    content:
      "Пользуйтесь нашими денежными переводами без комиссий. Это поможет сэкономить ещё больше.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Деньги - это всего лишь инструмент. Они доставят вас туда, куда вы пожелаете, но не заменят вам водителя.",
    name: "Иван Иванов",
    title: "Директор",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Обычно по-настоящему богаты люди, занимающиеся денежным бизнесом, финансами и торговлей.",
    name: "Светлана Сидорова",
    title: "Аналитик",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Деньги облегчают вашу жизнь. Если вам повезло, что у вас они есть, значит, вам повезло.",
    name: "Петр Петров",
    title: "Аудитор",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Пользователей",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Клиентов-компаний",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Транзакций",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Полезные ссылки",
    links: [
      {
        name: "Контент",
        link: "#",
      },
      {
        name: "Как это работает",
        link: "#",
      },
      {
        name: "Создать",
        link: "#",
      },
      {
        name: "Изучить",
        link: "#",
      },
      {
        name: "Условия и услуги",
        link: "#",
      },
    ],
  },
  {
    title: "Сообщество",
    links: [
      {
        name: "Справочный центр",
        link: "#",
      },
      {
        name: "Партнёры",
        link: "#",
      },
      {
        name: "Предложения",
        link: "#",
      },
      {
        name: "Блог",
        link: "#",
      },
      {
        name: "Новостная рассылка",
        link: "#",
      },
    ],
  },
  {
    title: "Сотрудничество",
    links: [
      {
        name: "Наши партнёры",
        link: "#",
      },
      {
        name: "Стать партнёром",
        link: "#",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: telegram,
    link: "#",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "#",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "#",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "#",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: dropbox,
  },
  {
    id: "client-4",
    logo: coinbase,
  },
];
