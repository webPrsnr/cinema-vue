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

export const films: FilmInfo[] = [
  {
    id: 1,
    name: 'Крик',
    country: 'США',
    duration: 86,
    ageLimit: 18,
    director: 'Тайлер МакИнтайр',
    start: new Date(2023, 12, 21),
    genres: ['комедия', 'ужасы'],
    starring: [
      'Джейн Уиддоп',
      'Джоэл Макхэйл',
      'Джастин Лонг',
      'Джессика Маклауд',
      'Кэтрин Изабель',
      'Эйден Ховард',
      'Эрин Бойес',
      'Шон Депнер',
      'Зэния Маршалл',
      'Джейсон Фернандес'
    ],
    description:
      'Год назад, в канун Рождества, Уинни спасла всю округу от психопата, серийного убийцы. Теперь на грядущее Рождество у девушки только одно желание – не рождаться на этот свет. Ее желание сбывается, и она оказывается в параллельной реальности, в которой убийца все еще на свободе. Ей придется поймать его, чтобы вернуться назад.',
    imgTitle: 'krik',
    dates: [
      {
        date: 1704353994763,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [3, 7] },
          { time: '14.00', totalSeats: 48, reserved: [1, 15] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [] },
          { time: '20.00', totalSeats: 48, reserved: [] }
        ]
      },
      {
        date: 1704453994763,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [3, 7] },
          { time: '14.00', totalSeats: 48, reserved: [1, 15] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [] },
          { time: '20.00', totalSeats: 48, reserved: [] }
        ]
      },
      {
        date: 1704590579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [3, 7] },
          { time: '14.00', totalSeats: 48, reserved: [1, 15] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [] },
          { time: '20.00', totalSeats: 48, reserved: [] }
        ]
      },
      {
        date: 1704690579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [] },
          { time: '16.00', totalSeats: 48, reserved: [3, 6, 10] },
          { time: '18.00', totalSeats: 48, reserved: [] },
          { time: '20.00', totalSeats: 48, reserved: [8, 11, 17, 25] }
        ]
      },
      {
        date: 1704790579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [11, 12, 13] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [14, 15, 16, 18] },
          { time: '20.00', totalSeats: 48, reserved: [] }
        ]
      },
      {
        date: 1704890579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [19, 25, 44, 48] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [1, 2, 3] },
          { time: '20.00', totalSeats: 48, reserved: [10, 19, 20, 22] }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Ферарри',
    country: 'США, Великобритания, Италия',
    duration: 138,
    ageLimit: 18,
    director: 'Майкл Манн',
    start: new Date(2023, 12, 21),
    genres: ['исторический', 'драма', 'биография'],
    starring: ['Адам Драйвер', 'Пенелопа Крус', 'Шейлин Вудли'],
    description:
      'Об автомобилях Ferrari мечтают миллионы, а имеют единицы. Это символ роскошной жизни, известный во всем мире. Но блестящий фасад скрывает трагическую историю основателя компании Энцо Феррари. Семейные проблемы, финансовый кризис, ужасные аварии и даже гнев Ватикана – все это в свое время преодолел гениальный конструктор и бизнесмен, чтобы вписать свое имя в историю автопрома навсегда.',
    imgTitle: 'ferrari',
    dates: [
      {
        date: 1704590579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [3, 7] },
          { time: '14.00', totalSeats: 48, reserved: [1, 15] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [] },
          { time: '20.00', totalSeats: 48, reserved: [] }
        ]
      },
      {
        date: 1704690579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [] },
          { time: '16.00', totalSeats: 48, reserved: [3, 6, 10] },
          { time: '18.00', totalSeats: 48, reserved: [] },
          { time: '20.00', totalSeats: 48, reserved: [8, 11, 17, 25] }
        ]
      },
      {
        date: 1704790579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [11, 12, 13] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [14, 15, 16, 18] },
          { time: '20.00', totalSeats: 48, reserved: [] }
        ]
      },
      {
        date: 1704890579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [19, 25, 44, 48] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [1, 2, 3] },
          { time: '20.00', totalSeats: 48, reserved: [10, 19, 20, 22] }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Елки 10',
    country: 'Россия',
    duration: 102,
    ageLimit: 12,
    director: 'Дамир Мифтахов, Иван Чехов',
    start: new Date(2023, 12, 7),
    genres: ['комедия'],
    starring: [
      'Елена Валюшкина',
      'Галина Польских',
      'Юрий Кузнецов',
      'Борис Щербаков',
      'Регина Тодоренко',
      'Егор Корешков',
      'Филипп Киркоров',
      'Виталий Кищенко',
      'Ольга Дибцева',
      'Александр Баширов',
      'Эльдар Калимулин',
      'Софья Присс',
      'Айдар Гараев',
      'Амиран Сардаров',
      'Даня Киселёв',
      'Даша Дошик'
    ],
    description:
      'В новогоднюю ночь всегда есть место чуду, даже если ты вдруг перестал в него верить. Геннадьич, коротающий свой век в доме престарелых, обретёт свою настоящую семью. Начинающей блогерше Ларисе из Тюмени предстоит узнать, на что ради своих близких готов решиться её супруг. Марине из Татарстана – научиться любить то, что действительно важно для её мужа. А девушка-геймерша по имени Таня поймёт, что настоящая любовь – это совсем не игра. Ведь в самую волшебную ночь года каждый имеет шанс обрести своеперсональное счастье.',
    imgTitle: 'elki',
    dates: [
      {
        date: 1704590579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [3, 7] },
          { time: '14.00', totalSeats: 48, reserved: [1, 15] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [] },
          { time: '20.00', totalSeats: 48, reserved: [] }
        ]
      },
      {
        date: 1704690579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [] },
          { time: '16.00', totalSeats: 48, reserved: [3, 6, 10] },
          { time: '18.00', totalSeats: 48, reserved: [] },
          { time: '20.00', totalSeats: 48, reserved: [8, 11, 17, 25] }
        ]
      },
      {
        date: 1704790579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [11, 12, 13] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [14, 15, 16, 18] },
          { time: '20.00', totalSeats: 48, reserved: [] }
        ]
      },
      {
        date: 1704890579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [19, 25, 44, 48] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [1, 2, 3] },
          { time: '20.00', totalSeats: 48, reserved: [10, 19, 20, 22] }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Три богатыря и Пуп Земли',
    country: 'Россия',
    duration: 92,
    ageLimit: 12,
    director: 'Константин Феоктистов',
    start: new Date(2023, 12, 28),
    genres: ['комедия', 'анимационное приключение'],
    starring: [
      'Олег Куликович',
      'Валерий Соловьев',
      'Дмитрий Быковский-Ромашов',
      'Сергей Маковецкий',
      'Дмитрий Высоцкий'
    ],
    description:
      'По сказкам мы знаем, что было давным-давно, но что было еще давным-давнее? Трем богатырям предстоит узнать ответ на этот вопрос, хоть они его и не задавали. Тут такое началось, что игогошеньки! Горыныч вдруг находит динозаврика, а Алеша Попович с Князем и конем Юлием буквально проваливаются сквозь землю. Теперь надо срочно понять, как вернуть их назад в будущее. А главное, узнать, кто или что такое загадочный Пуп Земли.',
    imgTitle: 'bogatir',
    dates: [
      {
        date: 1704590579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [3, 7] },
          { time: '14.00', totalSeats: 48, reserved: [1, 15] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [] },
          { time: '20.00', totalSeats: 48, reserved: [] }
        ]
      },
      {
        date: 1704690579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [] },
          { time: '16.00', totalSeats: 48, reserved: [3, 6, 10] },
          { time: '18.00', totalSeats: 48, reserved: [] },
          { time: '20.00', totalSeats: 48, reserved: [8, 11, 17, 25] }
        ]
      },
      {
        date: 1704790579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [11, 12, 13] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [14, 15, 16, 18] },
          { time: '20.00', totalSeats: 48, reserved: [] }
        ]
      },
      {
        date: 1704890579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [19, 25, 44, 48] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [1, 2, 3] },
          { time: '20.00', totalSeats: 48, reserved: [10, 19, 20, 22] }
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'Астрал. Новые души',
    country: 'Индонезия',
    duration: 112,
    ageLimit: 18,
    director: 'Гинанти Рона, Тембанг Сари',
    start: new Date(2024, 1, 4),
    genres: ['хоррор'],
    starring: ['Эмир Махира', 'Эндрю Баррет'],
    description:
      'Старшеклассник Ракка обладает сверхъестественным даром видеть души умерших. Когда он переходит в новую школу, его начинает преследовать призрак таинственной девушки. Парню удается выяснить, что она мстит своим обидчикам за буллинг. Однако вскоре он понимает, что ее сила растет: теперь она хочет забрать все души, опасность нависла над всей школой.',
    imgTitle: 'asstral',
    dates: [
      {
        date: 1704590579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [3, 7] },
          { time: '14.00', totalSeats: 48, reserved: [1, 15] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [] },
          { time: '20.00', totalSeats: 48, reserved: [] }
        ]
      },
      {
        date: 1704690579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [] },
          { time: '16.00', totalSeats: 48, reserved: [3, 6, 10] },
          { time: '18.00', totalSeats: 48, reserved: [] },
          { time: '20.00', totalSeats: 48, reserved: [8, 11, 17, 25] }
        ]
      },
      {
        date: 1704790579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [11, 12, 13] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [14, 15, 16, 18] },
          { time: '20.00', totalSeats: 48, reserved: [] }
        ]
      },
      {
        date: 1704890579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [19, 25, 44, 48] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [1, 2, 3] },
          { time: '20.00', totalSeats: 48, reserved: [10, 19, 20, 22] }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Бременские музыканты',
    country: 'Россия',
    duration: 126,
    ageLimit: 6,
    director: 'Алексей Нужный',
    start: new Date(2024, 1, 1),
    genres: ['сказочное приключение'],
    starring: [
      'Сергей Бурунов',
      'Мария Аронова',
      'Константин Хабенский',
      'Тихон Жизневский',
      'Ирина Горбачева',
      'Дмитрий Дюжев',
      'Роман Курцын',
      'Валентина Ляпина',
      'Аскар Нигамедзянов'
    ],
    description:
      'Они снова в сборе – самая легендарная группа бродячих артистов! Трубадур и его друзья-самозванцы - Пес, Кошка, Осел и самовлюбленный Петух - объединились, чтобы совершить подвиг! Бродячие музыканты во главе с новым лидером снова сплотятся, чтобы вернуть смех и радость на мрачные улицы Бремена. И прежде всего они должны рассмешить дочь Короля, но встреча с Принцессой грозит опасным приключением! Против Трубадура и его друзей – коварные враги, интриги и ловушки, но за любовь надо сражаться. А тут еще Принцесса сбежала из дворца! В одном клубке - преступные схемы Разбойников, интриги Сыщика, капризы и тайны королевской семейки, но веселые музыканты с неутомимым Трубадуром заставят всех плясать под свою дудку! На что готовы Бременские музыканты ради подвига?',
    imgTitle: 'bremen',
    dates: [
      {
        date: 1704590579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [3, 7] },
          { time: '14.00', totalSeats: 48, reserved: [1, 15] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [] },
          { time: '20.00', totalSeats: 48, reserved: [] }
        ]
      },
      {
        date: 1704690579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [] },
          { time: '16.00', totalSeats: 48, reserved: [3, 6, 10] },
          { time: '18.00', totalSeats: 48, reserved: [] },
          { time: '20.00', totalSeats: 48, reserved: [8, 11, 17, 25] }
        ]
      },
      {
        date: 1704790579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [11, 12, 13] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [14, 15, 16, 18] },
          { time: '20.00', totalSeats: 48, reserved: [] }
        ]
      },
      {
        date: 1704890579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [19, 25, 44, 48] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [1, 2, 3] },
          { time: '20.00', totalSeats: 48, reserved: [10, 19, 20, 22] }
        ]
      }
    ]
  },
  {
    id: 7,
    name: 'Холоп 2',
    country: 'Россия',
    duration: 133,
    ageLimit: 12,
    director: 'Клим Шипенко',
    start: new Date(2024, 1, 1),
    genres: ['комедия'],
    starring: [
      'Аглая Тарасова',
      'Милош Антонио Бикович',
      'Иван Охлобыстин',
      'Александр Самойленко',
      'Мария Миронова',
      'Ольга Дибцева'
    ],
    description:
      'Гриша, бывший мажор, побывавший холопом и ставший человеком, после путешествия в «прошлое» чутко реагирует на любую несправедливость. И, конечно, не может пройти мимо беспредела, который творит наглая и избалованная Катя. Ничего удивительного, что вскоре мажорка обнаруживает себя в другом времени…',
    imgTitle: 'holop',
    dates: [
      {
        date: 1704590579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [3, 7] },
          { time: '14.00', totalSeats: 48, reserved: [1, 15] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [] },
          { time: '20.00', totalSeats: 48, reserved: [] }
        ]
      },
      {
        date: 1704690579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [] },
          { time: '16.00', totalSeats: 48, reserved: [3, 6, 10] },
          { time: '18.00', totalSeats: 48, reserved: [] },
          { time: '20.00', totalSeats: 48, reserved: [8, 11, 17, 25] }
        ]
      },
      {
        date: 1704790579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [11, 12, 13] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [14, 15, 16, 18] },
          { time: '20.00', totalSeats: 48, reserved: [] }
        ]
      },
      {
        date: 1704890579265,
        session: [
          { time: '10.00', totalSeats: 48, reserved: [2, 3, 4, 10] },
          { time: '12.00', totalSeats: 48, reserved: [] },
          { time: '14.00', totalSeats: 48, reserved: [19, 25, 44, 48] },
          { time: '16.00', totalSeats: 48, reserved: [] },
          { time: '18.00', totalSeats: 48, reserved: [1, 2, 3] },
          { time: '20.00', totalSeats: 48, reserved: [10, 19, 20, 22] }
        ]
      }
    ]
  }
]
