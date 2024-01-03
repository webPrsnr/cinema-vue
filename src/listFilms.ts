export interface FilmInfo {
  id: number
  name: string
  country: string
  duration: number
  genres: string[]
  ageLimit: number
  start: Date
  director: string
  starring: string[]
  description: string
  dates: RentalDate[]
  imgTitle: string
}

export interface RentalDate {
  date: number
  session: FilmSession[]
}

export interface FilmSession {
  time: string
  totalSeats: number
  reserved: number[]
}

const film: FilmInfo = {
  id: 1,
  imgTitle: `https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/5efa3117-4056-4b50-9485-e30eeb0ffbe6/300x450`,
  name: 'Праздники',
  country: 'Россия',
  ageLimit: 12,
  director: 'Борис Дегчарев',
  duration: 80,
  genres: ['комедия'],
  start: new Date(2023, 10, 27),
  starring: [
    'Мария Аронова',
    'Виталий Хаев',
    'Анастасия Калашникова',
    'Яна Енжаева',
    'Никита Павленко',
    'Вячеслав Чепурченко',
    'Инга Оболдина',
    'Денис Парамонов'
  ],
  description:
    'В жизни Натальи Пыжовой всё отлично: крепкий дом, любящий муж, дружная семья. Для полного счастья осталось только дочерей замуж выдать. Но идеальная картина рушится в одночасье, когда выясняется, что муж, оказывается, изменник, а дочери со своими женихами, мягко говоря, не очень-то счастливы. Когда всё семейство собирается вместе на очередное торжество, становится понятно, что эти праздники или разрушат семью до основания, или сделают её только крепче.',
  dates: [
    {
      date: 1703942400000,
      session: [
        { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
        { time: '12.00', totalSeats: 48, reserved: [] },
        { time: '14.00', totalSeats: 48, reserved: [] },
        { time: '16.00', totalSeats: 48, reserved: [] },
        { time: '18.00', totalSeats: 48, reserved: [] },
        { time: '20.00', totalSeats: 48, reserved: [] }
      ]
    },
    {
      date: 1703149004150,
      session: [
        { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
        { time: '12.00', totalSeats: 48, reserved: [] },
        { time: '14.00', totalSeats: 48, reserved: [] },
        { time: '16.00', totalSeats: 48, reserved: [] },
        { time: '18.00', totalSeats: 48, reserved: [] },
        { time: '20.00', totalSeats: 48, reserved: [] }
      ]
    },
    {
      date: 1701205200000,
      session: [
        { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
        { time: '12.00', totalSeats: 48, reserved: [] },
        { time: '14.00', totalSeats: 48, reserved: [] },
        { time: '16.00', totalSeats: 48, reserved: [] },
        { time: '18.00', totalSeats: 48, reserved: [] },
        { time: '20.00', totalSeats: 48, reserved: [] }
      ]
    },
    {
      date: 1701291600000,
      session: [
        { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
        { time: '12.00', totalSeats: 48, reserved: [] },
        { time: '14.00', totalSeats: 48, reserved: [] },
        { time: '16.00', totalSeats: 48, reserved: [] },
        { time: '18.00', totalSeats: 48, reserved: [] },
        { time: '20.00', totalSeats: 48, reserved: [] }
      ]
    }
  ]
}

const secondFilm: FilmInfo = {
  id: 2,
  imgTitle: `https://cinema5.cinemabox.team/api/v1/movies/9759/poster`,
  ageLimit: 6,
  name: 'Баба Яга. Спасает мир',
  country: 'Россия',
  director: 'Карен Захаров',
  duration: 93,
  genres: ['комедия', 'семейный'],
  start: new Date(2023, 9, 5),
  starring: [
    'Ян Цапник',
    'Людмила Артемьева',
    'Глафира Тарханова',
    'Григорий Сиятвинда',
    'Олеся Железняк',
    'Александр Ильин'
  ],
  description:
    'Любопытный школьник Сенька каким-то чудом попадает в сказочный древний лес. Он скрыт от людских глаз мощным заклятием Бабы Яги, призванным защитить людей и весь мир от дремлющих там темных сил. В лесу явно творится что-то неладное. Тревожные сигналы возвещают о том, что заклятие больше не действует и пробуждение зловещего волшебства и давно поверженных врагов – это лишь вопрос времени. Чтобы наложить заклятие снова, Яга вынуждена отправиться в современный город на поиск мощнейшего оружия волшебников, дивноцвета. Там ее ожидает встреча с множеством причуд современного мира, а в темном подземелье уже тысячу лет прячется Кощей Бессмертный, жаждущий отмщения, ведь именно Яга помогла одолеть его много веков назад. Сенька попал в сказку, но сможет ли он вырваться обратно, помочь спасти наш мир и на чьей стороне примет бой – добра и зла, всесильного Кощея или хитрой Яги?',
  dates: [
    {
      date: 1696539600000,
      session: [
        { time: '10.00', totalSeats: 20, reserved: [2, 3, 4, 10] },
        { time: '12.00', totalSeats: 20, reserved: [] },
        { time: '14.00', totalSeats: 20, reserved: [] },
        { time: '16.00', totalSeats: 20, reserved: [] },
        { time: '18.00', totalSeats: 20, reserved: [] },
        { time: '20.00', totalSeats: 20, reserved: [] }
      ]
    }
  ]
}
const film3: FilmInfo = {
  id: 3,
  imgTitle: `https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/5efa3117-4056-4b50-9485-e30eeb0ffbe6/300x450`,
  name: 'Праздники',
  country: 'Россия',
  ageLimit: 12,
  director: 'Борис Дегчарев',
  duration: 80,
  genres: ['комедия'],
  start: new Date(2023, 10, 27),
  starring: [
    'Мария Аронова',
    'Виталий Хаев',
    'Анастасия Калашникова',
    'Яна Енжаева',
    'Никита Павленко',
    'Вячеслав Чепурченко',
    'Инга Оболдина',
    'Денис Парамонов'
  ],
  description:
    'В жизни Натальи Пыжовой всё отлично: крепкий дом, любящий муж, дружная семья. Для полного счастья осталось только дочерей замуж выдать. Но идеальная картина рушится в одночасье, когда выясняется, что муж, оказывается, изменник, а дочери со своими женихами, мягко говоря, не очень-то счастливы. Когда всё семейство собирается вместе на очередное торжество, становится понятно, что эти праздники или разрушат семью до основания, или сделают её только крепче.',
  dates: [
    {
      date: 1705942400000,
      session: [
        { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
        { time: '12.00', totalSeats: 48, reserved: [] },
        { time: '14.00', totalSeats: 48, reserved: [] },
        { time: '16.00', totalSeats: 48, reserved: [] },
        { time: '18.00', totalSeats: 48, reserved: [] },
        { time: '20.00', totalSeats: 48, reserved: [] }
      ]
    },
    {
      date: 1703149004150,
      session: [
        { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
        { time: '12.00', totalSeats: 48, reserved: [] },
        { time: '14.00', totalSeats: 48, reserved: [] },
        { time: '16.00', totalSeats: 48, reserved: [] },
        { time: '18.00', totalSeats: 48, reserved: [] },
        { time: '20.00', totalSeats: 48, reserved: [] }
      ]
    },
    {
      date: 1701205200000,
      session: [
        { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
        { time: '12.00', totalSeats: 48, reserved: [] },
        { time: '14.00', totalSeats: 48, reserved: [] },
        { time: '16.00', totalSeats: 48, reserved: [] },
        { time: '18.00', totalSeats: 48, reserved: [] },
        { time: '20.00', totalSeats: 48, reserved: [] }
      ]
    },
    {
      date: 1701291600000,
      session: [
        { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
        { time: '12.00', totalSeats: 48, reserved: [] },
        { time: '14.00', totalSeats: 48, reserved: [] },
        { time: '16.00', totalSeats: 48, reserved: [] },
        { time: '18.00', totalSeats: 48, reserved: [] },
        { time: '20.00', totalSeats: 48, reserved: [] }
      ]
    }
  ]
}

export const list: FilmInfo[] = [film, secondFilm, film3]
