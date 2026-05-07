const state = {
  step: 0,
  answers: {},
  scores: {
    energy: 0,
    meaning: 0,
    growth: 0,
    autonomy: 0,
    readiness: 0,
  },
  lead: {
    name: "",
    email: "",
  },
  timers: [],
  consultationRequested: false,
};

const axes = {
  energy: "Энергия",
  meaning: "Смысл",
  growth: "Рост и доход",
  autonomy: "Автономия",
  readiness: "Готовность",
};

const directions = {
  analytical: {
    title: "Аналитическое направление",
    roles: "аналитик данных, продуктовый аналитик, BI-специалист",
    note: "Подходит, если вам важно видеть закономерности, принимать решения на фактах и работать с понятной логикой.",
  },
  creative: {
    title: "Творческое направление",
    roles: "UX/UI-дизайнер, графический дизайнер, контент-дизайнер",
    note: "Подходит, если вам хочется создавать видимый результат и соединять вкус, структуру и пользу для людей.",
  },
  communication: {
    title: "Коммуникационное направление",
    roles: "маркетолог, SMM-специалист, менеджер проектов",
    note: "Подходит, если вам близко понимать людей, объяснять идеи и запускать процессы вокруг продукта.",
  },
  system: {
    title: "Системное направление",
    roles: "тестировщик, бизнес-аналитик, операционный специалист",
    note: "Подходит, если вы любите порядок, ясные критерии качества и задачи, где важна внимательность.",
  },
  technical: {
    title: "Техническое направление",
    roles: "frontend-разработчик, no-code-разработчик, технический специалист",
    note: "Подходит, если вам интересны инструменты, понятная сборка решений и ощущение, что вы можете построить новое.",
  },
};

const professionProfiles = {
  communication: {
    name: "Маркетолог",
    learnName: "маркетолога",
    matchLabel: "совместимость",
    salary: "72 000 ₽",
    traits: ["работа в команде", "креативность", "гибкое мышление", "эмпатия", "исследование людей"],
    description:
      "Маркетолог делает так, чтобы нужная группа людей узнала о продукте или бизнесе, поняла его ценность и захотела им воспользоваться. В этой профессии важно чувствовать людей, ясно формулировать смыслы и превращать наблюдения в понятные действия.",
    duties:
      "Специалист изучает аудиторию, запускает рекламные кампании, пишет гипотезы, анализирует реакцию людей и помогает продукту говорить с рынком на понятном языке.",
    learn: ["базовая цифровая грамотность", "умение понимать аудиторию", "готовность тестировать гипотезы в срок"],
    talent: "презентация",
    talentText:
      "Скорее всего, вы умеете доносить мысль так, чтобы другим было проще увидеть ценность идеи. Таким людям подходит роль, где нужно объяснять, убеждать и связывать продукт с потребностями людей.",
    qualities: ["хорошо чувствуете людей", "умеете объяснять сложное простыми словами", "можете организовать встречу или обсуждение", "справляетесь с задачами, где нужно придумать нестандартный ход"],
  },
  creative: {
    name: "UX/UI-дизайнер",
    learnName: "UX/UI-дизайнера",
    matchLabel: "совместимость",
    salary: "78 000 ₽",
    traits: ["визуальное мышление", "эмпатия", "структура", "внимание к деталям", "пользовательский опыт"],
    description:
      "UX/UI-дизайнер проектирует цифровые интерфейсы так, чтобы человеку было удобно, понятно и приятно ими пользоваться. Здесь важны наблюдательность, вкус и способность превращать хаос пожеланий в ясный экран.",
    duties:
      "Специалист изучает пользователей, собирает прототипы, продумывает сценарии, визуально оформляет экраны и помогает команде сделать продукт проще и полезнее.",
    learn: ["базовая работа с компьютером", "готовность изучать поведение людей", "аккуратность и внимание к деталям"],
    talent: "визуальное мышление",
    talentText:
      "У вас есть потенциал видеть, как устроен опыт человека: что мешает, где непонятно, где можно сделать лучше. Именно таким людям часто подходит дизайн интерфейсов.",
    qualities: ["замечаете детали", "думаете о том, как будет удобно человеку", "умеете собирать разрозненное в систему", "готовы пробовать и улучшать"],
  },
  analytical: {
    name: "Аналитик данных",
    learnName: "аналитика данных",
    matchLabel: "совместимость",
    salary: "85 000 ₽",
    traits: ["логика", "структурность", "внимательность", "поиск закономерностей", "работа с данными"],
    description:
      "Аналитик данных помогает бизнесу принимать решения на фактах, а не на ощущениях. Он собирает данные, ищет закономерности, объясняет выводы и показывает, где у продукта или процесса есть точки роста.",
    duties:
      "Специалист работает с таблицами и дашбордами, проверяет гипотезы, считает показатели и переводит цифры в понятные рекомендации для команды.",
    learn: ["уверенная работа с компьютером", "базовая математика", "готовность разбираться в таблицах и логике процессов"],
    talent: "структурное мышление",
    talentText:
      "Похоже, вам важно видеть причинно-следственные связи и понимать, почему что-то происходит. У таких людей есть хороший потенциал в аналитике.",
    qualities: ["любите ясность", "умеете замечать закономерности", "не боитесь разбираться в деталях", "можете объяснить выводы без лишней воды"],
  },
  system: {
    name: "Тестировщик",
    learnName: "тестировщика",
    matchLabel: "совместимость",
    salary: "70 000 ₽",
    traits: ["внимательность", "системность", "качество", "логика", "ответственность"],
    description:
      "Тестировщик проверяет цифровые продукты и помогает команде находить ошибки до того, как с ними столкнется пользователь. Эта профессия подходит людям, которые умеют видеть слабые места и спокойно доводить задачу до качества.",
    duties:
      "Специалист проверяет сайты и приложения, описывает ошибки, повторяет сценарии пользователя и помогает разработчикам выпускать более стабильный продукт.",
    learn: ["базовая компьютерная грамотность", "внимательность к инструкциям", "готовность работать с повторяющимися проверками"],
    talent: "качество и порядок",
    talentText:
      "У вас есть потенциал замечать то, что другие пропускают. Именно таким людям подходит тестирование: там ценятся внимательность, спокойствие и умение думать сценариями.",
    qualities: ["замечаете несостыковки", "любите понятные критерии", "можете спокойно проверять детали", "умеете описывать проблему конкретно"],
  },
  technical: {
    name: "Frontend-разработчик",
    learnName: "frontend-разработчика",
    matchLabel: "совместимость",
    salary: "95 000 ₽",
    traits: ["логика", "создание интерфейсов", "техническое мышление", "самостоятельность", "решение задач"],
    description:
      "Frontend-разработчик создает видимую часть сайтов и приложений: экраны, кнопки, формы, анимации и взаимодействия. Это роль для людей, которым нравится собирать работающие решения и видеть результат сразу.",
    duties:
      "Специалист пишет код интерфейсов, соединяет дизайн с логикой продукта, исправляет ошибки и делает так, чтобы пользователь мог удобно пользоваться сервисом.",
    learn: ["готовность изучать код постепенно", "логическое мышление", "умение доводить задачу до работающего результата"],
    talent: "сборка решений",
    talentText:
      "Похоже, вам важно не просто обсуждать идеи, а собирать что-то рабочее. У таких людей есть потенциал в разработке, если идти через понятную практику.",
    qualities: ["любите разбираться в инструментах", "не боитесь пошагового обучения", "хотите видеть конкретный результат", "готовы искать решение, если с первого раза не получилось"],
  },
};

const screens = [
  {
    type: "intro",
    eyebrow: "Квиз на 6 минут",
    title: "Кажется, вы устали не от жизни, а от того, как она сейчас устроена?",
    text: "Сначала настроим диагностику под вас: зададим несколько коротких вопросов про состояние, энергию и контекст. Потом покажем, что сейчас забирает силы и куда можно двигаться.",
    button: "Настроить диагностику",
  },
  {
    type: "single",
    eyebrow: "Настройка 1 из 3",
    title: "Что точнее всего описывает последние месяцы?",
    text: "Можно не искать идеальный ответ. Выберите то, что ближе прямо сейчас.",
    key: "state",
    options: [
      { label: "Устаю даже после нормального дня", scores: { energy: 3 } },
      { label: "Потерялся смысл: делаю, но не понимаю зачем", scores: { meaning: 3 } },
      { label: "Есть потолок: стараюсь, а роста почти нет", scores: { growth: 3 } },
      { label: "Раздражают мелочи, которые раньше не цепляли", scores: { energy: 2, autonomy: 1 } },
      { label: "Не знаю. Просто что-то не так", scores: { meaning: 1, energy: 1 } },
    ],
  },
  {
    type: "range",
    eyebrow: "Настройка 2 из 3",
    title: "Сколько сил остается после обычного дня?",
    text: "0 — хочется лечь и молчать. 10 — есть энергия на себя, людей и планы.",
    key: "energyAfterDay",
    min: 0,
    max: 10,
    initial: 4,
  },
  {
    type: "profile_name",
    eyebrow: "Настройка 3 из 3",
    title: "Как к вам обращаться в результате?",
    text: "Мы уже видим первые сигналы. Имя нужно только для того, чтобы дальше показывать выводы мягче и точнее.",
    key: "name",
  },
  {
    type: "loader",
    eyebrow: "Персональная настройка",
    title: "{name}, настраиваем диагностику под ваши ответы",
    text: "Сверяем состояние, уровень энергии и тон дальнейших вопросов.",
    duration: 17000,
    steps: ["Считываем общий фон", "Подбираем сценарии", "Убираем лишние вопросы"],
  },
  {
    type: "insight",
    eyebrow: "Важно",
    title: "Такое состояние часто начинается не с большого кризиса.",
    text: "Сначала кажется, что нужно просто выспаться. Потом отдых перестает помогать, потому что источник напряжения остается на месте.",
    tags: ["это не слабость", "это сигнал", "с ним можно разобраться"],
    button: "Узнать, где источник",
  },
  {
    type: "single",
    eyebrow: "Ситуация",
    title: "Понедельник утром. Что происходит внутри?",
    text: "Представьте обычное начало недели, без драматичных событий.",
    key: "monday",
    options: [
      { label: "Собираюсь как на автопилоте", note: "День еще не начался, а я уже внутри него устал", scores: { energy: 2 } },
      { label: "Думаю: опять одно и то же", note: "Есть ощущение замкнутого круга", scores: { meaning: 2 } },
      { label: "Прикидываю, сколько еще так можно терпеть", scores: { readiness: 2, autonomy: 1 } },
      { label: "В целом нормально, но без интереса", scores: { meaning: 1 } },
    ],
  },
  {
    type: "single",
    eyebrow: "Ситуация",
    title: "Задача, которая раньше была нормальной, теперь снова на столе.",
    text: "Какая первая реакция ближе?",
    key: "oldTask",
    options: [
      { label: "Хочу закончить быстрее и забыть", scores: { energy: 2 } },
      { label: "Раздражает, что это никак меня не развивает", scores: { growth: 2, meaning: 1 } },
      { label: "Сразу думаю, как бы сделать по-своему", scores: { autonomy: 2 } },
      { label: "Пытаюсь улучшить процесс, даже если никто не просил", scores: { system: 2, readiness: 1 } },
    ],
  },
  {
    type: "drag",
    eyebrow: "Разложим по полкам",
    title: "Что чаще всего забирает силы?",
    text: "Перетащите главный фактор в зону “сильнее всего”. Остальные можно оставить ниже.",
    key: "drain",
    items: [
      { id: "people", label: "Люди и коммуникации", scores: { autonomy: 2, energy: 1 } },
      { id: "tasks", label: "Однотипные задачи", scores: { meaning: 2, growth: 1 } },
      { id: "money", label: "Доходный потолок", scores: { growth: 3 } },
      { id: "control", label: "Мало влияния", scores: { autonomy: 3 } },
      { id: "growth", label: "Нет развития", scores: { meaning: 1, growth: 2 } },
    ],
  },
  {
    type: "insight",
    eyebrow: "Промежуточный вывод",
    title: "Паттерн уже начинает проявляться.",
    text: "Когда усталость связана с ритмом, задачами, ростом и влиянием, обычный отдых помогает ненадолго. Нужен не только перерыв, а новая траектория.",
    tags: ["ритм", "задачи", "рост", "влияние"],
    button: "Проверить на ситуациях",
  },
  {
    type: "single",
    eyebrow: "Рабочий контекст",
    title: "Коллега или руководитель просит “просто быстро поправить”.",
    text: "Вы уже заняты, но просьба прилетает как срочная.",
    key: "colleagues",
    options: [
      { label: "Соглашаюсь, потом злюсь на себя", scores: { autonomy: 2, energy: 1 } },
      { label: "Делаю, но внутри думаю: почему всегда я?", scores: { autonomy: 2 } },
      { label: "Стараюсь объяснить границы", scores: { readiness: 2 } },
      { label: "Мне нормально, если понятно зачем", scores: { meaning: 1 } },
    ],
  },
  {
    type: "single",
    eyebrow: "Выходные",
    title: "Как обычно проходят воскресные вечера?",
    text: "Это хороший маркер того, восстановление работает или только маскирует проблему.",
    key: "weekend",
    options: [
      { label: "Появляется тревога перед новой неделей", scores: { energy: 2, autonomy: 1 } },
      { label: "Пытаюсь успеть пожить за два дня", scores: { energy: 2 } },
      { label: "Думаю, что надо что-то менять", scores: { readiness: 2, meaning: 1 } },
      { label: "Восстанавливаюсь, но интерес не возвращается", scores: { meaning: 2 } },
    ],
  },
  {
    type: "multi",
    eyebrow: "Что откладывается",
    title: "Что вы чаще всего переносите “на потом”?",
    text: "Выберите до трех вариантов.",
    key: "postpone",
    limit: 3,
    options: [
      { label: "Отдых без чувства вины", scores: { energy: 2 } },
      { label: "Обучение чему-то новому", scores: { readiness: 1, growth: 1 } },
      { label: "Поиск другой работы", scores: { readiness: 2 } },
      { label: "Разговор о повышении", scores: { growth: 2, autonomy: 1 } },
      { label: "Личный проект", scores: { meaning: 1, readiness: 1 } },
    ],
  },
  {
    type: "drag_ranking",
    eyebrow: "Расставьте приоритеты",
    title: "Что сейчас важнее всего вернуть в жизнь?",
    text: "Перетащите карточки сверху вниз: от самого важного к менее важному. На телефоне можно двигать стрелками.",
    key: "priorities",
    items: [
      { id: "money", label: "Деньги", axis: "growth" },
      { id: "interest", label: "Интерес", axis: "meaning" },
      { id: "stability", label: "Стабильность", axis: "energy" },
      { id: "freedom", label: "Свобода", axis: "autonomy" },
    ],
  },
  {
    type: "loader",
    eyebrow: "Анализируем приоритеты",
    title: "Собираем вашу карту мотивации",
    text: "Смотрим, что сильнее влияет на выбор: деньги, интерес, стабильность или свобода.",
    duration: 16000,
    steps: ["Сверяем приоритеты", "Ищем главный конфликт", "Готовим следующий блок"],
  },
  {
    type: "proof",
    eyebrow: "Вы не один в этом",
    title: "У многих поворот начинается с таких же маленьких сигналов.",
    text: "Не с громкого “я все бросаю”, а с честного признания: прежний формат больше не работает.",
    cards: [
      { title: "Мягкая статистика", text: "Чаще всего люди замечают проблему через усталость, а уже потом видят связь с задачами и ростом." },
      { title: "История перехода", text: "“Я думала, что просто ленюсь. На диагностике поняла: мне нужен другой тип задач и понятный план обучения”." },
      { title: "Экспертный взгляд", text: "Карьерный эксперт помогает отделить временную усталость от сигнала к смене деятельности." },
    ],
  },
  {
    type: "single",
    eyebrow: "Поведенческий кейс",
    title: "Вам предлагают новую задачу с неопределенным результатом.",
    text: "Что вы сделаете первым?",
    key: "newTask",
    options: [
      { label: "Разберу вводные и построю структуру", direction: "analytical", scores: { readiness: 1 } },
      { label: "Представлю, как это должно выглядеть для человека", direction: "creative", scores: { meaning: 1 } },
      { label: "Пойму, с кем нужно договориться", direction: "communication", scores: { autonomy: 1 } },
      { label: "Найду слабые места и риски", direction: "system", scores: { growth: 1 } },
      { label: "Пойду собирать рабочее решение", direction: "technical", scores: { readiness: 1 } },
    ],
  },
  {
    type: "loop",
    eyebrow: "Текущая петля",
    title: "Сейчас все может выглядеть примерно так.",
    text: "Петля не ломается силой воли. Обычно ее меняют через новую роль, новые навыки и более подходящий тип задач.",
    steps: ["Устаю", "Терплю", "Виню себя", "Снова устаю"],
  },
  {
    type: "single",
    eyebrow: "Рост и доход",
    title: "Насколько справедливо сейчас соотношение “усилия → результат”?",
    text: "Речь не только о деньгах, но и о признании, росте, перспективах.",
    key: "fairness",
    options: [
      { label: "Я вкладываюсь больше, чем получаю", scores: { growth: 3 } },
      { label: "Доход уперся в потолок", scores: { growth: 3 } },
      { label: "Результат есть, но он меня не радует", scores: { meaning: 2 } },
      { label: "В целом честно, но хочется большего", scores: { readiness: 1, growth: 1 } },
    ],
  },
  {
    type: "single",
    eyebrow: "Смысл",
    title: "Что должно измениться, чтобы снова появился интерес?",
    text: "Выберите не мечту на всю жизнь, а ближайший честный ориентир.",
    key: "meaning",
    options: [
      { label: "Хочу видеть понятный рост", scores: { growth: 2 } },
      { label: "Хочу делать задачи, где есть польза и смысл", scores: { meaning: 3 } },
      { label: "Хочу больше самостоятельности", scores: { autonomy: 3 } },
      { label: "Хочу освоить новую область и начать заново аккуратно", scores: { readiness: 3 } },
    ],
  },
  {
    type: "free_draw",
    eyebrow: "Линия состояния",
    title: "Если бы ваше состояние было линией — какой бы она была?",
    text: "Проведите линию пальцем или мышью. Ниже выберите, на что она больше похожа: так мы аккуратно интерпретируем динамику.",
    key: "stateLine",
    options: [
      { id: "sharp", label: "Резкая", text: "много рывков и напряжения", scores: { energy: 2, autonomy: 1 } },
      { id: "wavy", label: "Волнистая", text: "то лучше, то снова откат", scores: { meaning: 2 } },
      { id: "falling", label: "Падающая", text: "сил и интереса становится меньше", scores: { energy: 2, growth: 1 } },
    ],
  },
  {
    type: "insight",
    eyebrow: "Главный поворот",
    title: "{name}, похоже, дело не только в отдыхе.",
    text: "По вашим ответам главная причина с высокой вероятностью связана с текущей деятельностью: задачами, ростом, влиянием и тем, как вы видите свое будущее.",
    tags: ["не диагноз", "а карьерная гипотеза", "ее можно проверить"],
    button: "Понять, как менять безопасно",
  },
  {
    type: "multi",
    eyebrow: "Безопасный переход",
    title: "Что сильнее всего мешает сделать шаг?",
    text: "Выберите до трех страхов. Это поможет подобрать реалистичный маршрут.",
    key: "fears",
    limit: 3,
    options: [
      { label: "Страшно ошибиться с профессией", scores: { readiness: 1 } },
      { label: "Не хочется потерять доход", scores: { growth: 1 } },
      { label: "Нет времени на обучение", scores: { energy: 1 } },
      { label: "Не понимаю, с чего начать", scores: { readiness: 2 } },
      { label: "Кажется, что уже поздно", scores: { meaning: 1 } },
    ],
  },
  {
    type: "build_scene",
    eyebrow: "Соберите идеальную жизнь",
    title: "Что есть сейчас, а чего хочется больше?",
    text: "Перетащите карточки в зоны “сейчас” и “хочу”. На телефоне можно нажимать: первый тап отправит в “хочу”, второй — в “сейчас”.",
    key: "lifeScene",
    items: [
      { id: "calm", label: "Спокойствие", axis: "energy" },
      { id: "money", label: "Деньги", axis: "growth" },
      { id: "interest", label: "Интерес", axis: "meaning" },
      { id: "freedom", label: "Свобода", axis: "autonomy" },
      { id: "stability", label: "Стабильность", axis: "energy" },
    ],
  },
  {
    type: "multi",
    eyebrow: "Направления",
    title: "Какие задачи кажутся живее остальных?",
    text: "Выберите до трех. Это не финальный выбор профессии, а карта интереса.",
    key: "directions",
    limit: 3,
    options: [
      { label: "Анализировать и находить закономерности", direction: "analytical" },
      { label: "Создавать визуальные решения", direction: "creative" },
      { label: "Общаться, убеждать, запускать процессы", direction: "communication" },
      { label: "Систематизировать и проверять качество", direction: "system" },
      { label: "Собирать цифровые решения руками", direction: "technical" },
    ],
  },
  {
    type: "insight",
    eyebrow: "Почему обучение",
    title: "{name}, смена деятельности редко происходит одним рывком.",
    text: "Самый спокойный путь — выбрать гипотезу, проверить ее с экспертом, затем учиться по маршруту, который учитывает ваш опыт, деньги и время.",
    tags: ["без резких увольнений", "с планом", "с понятным первым шагом"],
    button: "Собрать мой профиль",
  },
  {
    type: "loader",
    eyebrow: "Анализируем результаты",
    title: "Собираем персональный профиль",
    text: "Соединяем ответы, интерактивы и карту направлений в один результат.",
    duration: 19000,
    steps: ["Считаем 5 осей состояния", "Подбираем архетип", "Собираем 2–3 направления"],
  },
  {
    type: "lead",
    eyebrow: "Ваш результат готов",
    title: "{name}, куда отправить персональный профиль?",
    text: "Введите email. Результат откроется сразу на следующем экране.",
  },
  {
    type: "result",
  },
  {
    type: "offer",
  },
];

const totalScreens = screens.length;

const screenEl = document.querySelector("#quizScreen");
const phoneEl = document.querySelector(".phone");
const backButton = document.querySelector("#backButton");
const stepLabel = document.querySelector("#stepLabel");
const timeLabel = document.querySelector("#timeLabel");
const progressFill = document.querySelector("#progressFill");

function render() {
  const screen = screens[state.step];
  clearTimers();
  phoneEl.classList.toggle("result-mode", screen.type === "result");
  stepLabel.textContent = `${state.step + 1} из ${totalScreens}`;
  timeLabel.textContent = state.step < screens.length - 2 ? "6 минут" : "результат";
  progressFill.style.width = `${((state.step + 1) / totalScreens) * 100}%`;
  backButton.disabled = state.step === 0;

  const renderers = {
    intro: renderIntro,
    profile_name: renderProfileName,
    loader: renderLoader,
    single: renderSingle,
    multi: renderMulti,
    range: renderRange,
    insight: renderInsight,
    drag: renderDrag,
    drag_ranking: renderDragRanking,
    free_draw: renderFreeDraw,
    build_scene: renderBuildScene,
    proof: renderProof,
    loop: renderLoop,
    lead: renderLead,
    result: renderResult,
    offer: renderOffer,
  };

  screenEl.innerHTML = "";
  screenEl.appendChild(renderers[screen.type](screen));
}

function baseContent(screen) {
  const wrap = document.createElement("div");
  wrap.className = "content";
  if (screen.eyebrow) wrap.appendChild(el("div", "eyebrow", personalize(screen.eyebrow)));
  if (screen.title) wrap.appendChild(el(screen.type === "intro" ? "h1" : "h2", "", personalize(screen.title)));
  if (screen.text) wrap.appendChild(el("p", "", personalize(screen.text)));
  return wrap;
}

function renderIntro(screen) {
  const wrap = baseContent(screen);
  const art = el("div", "hero-art");
  art.appendChild(el("div", "hero-chip", `${totalScreens} коротких экранов • mobile first`));
  wrap.appendChild(art);
  wrap.appendChild(button(screen.button, "primary", next));
  return wrap;
}

function renderProfileName(screen) {
  const wrap = baseContent(screen);
  const card = el("form", "form-card fields");
  const name = field("Имя", "text", "Например, Анна", state.lead.name);
  const error = el("div", "error");
  card.appendChild(name.wrap);
  card.appendChild(error);
  const submit = button("Продолжить", "primary");
  submit.type = "submit";
  card.appendChild(submit);
  card.addEventListener("submit", (event) => {
    event.preventDefault();
    state.lead.name = name.input.value.trim();
    if (state.lead.name.length < 2) {
      error.textContent = "Введите имя, чтобы мы могли обращаться к вам в тесте.";
      return;
    }
    state.answers[screen.key] = state.lead.name;
    next();
  });
  wrap.appendChild(card);
  return wrap;
}

function renderLoader(screen) {
  const wrap = baseContent(screen);
  const card = el("div", "loader-card");
  card.appendChild(el("div", "loader-orbit", "<span></span><span></span><span></span>"));
  const loaderProgress = el("div", "loader-progress", "<span></span>");
  loaderProgress.style.setProperty("--loader-duration", `${screen.duration || 1600}ms`);
  card.appendChild(loaderProgress);
  const list = el("div", "loader-steps");
  screen.steps.forEach((step, index) => {
    list.appendChild(el("div", `loader-step${index === 0 ? " active" : ""}`, step));
  });
  card.appendChild(list);
  wrap.appendChild(card);

  const duration = screen.duration || 1600;
  screen.steps.forEach((_, index) => {
    const timer = window.setTimeout(() => {
      const items = card.querySelectorAll(".loader-step");
      items.forEach((item, itemIndex) => {
        item.classList.toggle("active", itemIndex <= index);
      });
    }, Math.round((duration / screen.steps.length) * index));
    state.timers.push(timer);
  });
  state.timers.push(window.setTimeout(next, duration));
  return wrap;
}

function renderSingle(screen) {
  const wrap = baseContent(screen);
  const options = el("div", "options");
  screen.options.forEach((option) => {
    options.appendChild(choiceButton(option, state.answers[screen.key] === option.label, () => {
      state.answers[screen.key] = option.label;
      applyOption(option);
      if (option.direction) bumpDirection(option.direction, 2);
      next();
    }));
  });
  wrap.appendChild(options);
  return wrap;
}

function renderMulti(screen) {
  const wrap = baseContent(screen);
  const selected = new Set(state.answers[screen.key] || []);
  const options = el("div", "options");
  const nextButton = button("Продолжить", "primary", () => {
    state.answers[screen.key] = [...selected];
    screen.options
      .filter((option) => selected.has(option.label))
      .forEach((option) => {
        applyOption(option);
        if (option.direction) bumpDirection(option.direction, 2);
      });
    next();
  });
  nextButton.disabled = selected.size === 0;

  screen.options.forEach((option) => {
    const item = choiceButton(option, selected.has(option.label), () => {
      if (selected.has(option.label)) {
        selected.delete(option.label);
      } else if (selected.size < screen.limit) {
        selected.add(option.label);
      }
      state.answers[screen.key] = [...selected];
      wrap.replaceWith(renderMulti(screen));
    });
    options.appendChild(item);
  });

  wrap.appendChild(options);
  wrap.appendChild(nextButton);
  return wrap;
}

function renderRange(screen) {
  const wrap = baseContent(screen);
  let value = state.answers[screen.key] ?? screen.initial;
  const card = el("div", "meter-card");
  const valueRow = el("div", "range-value");
  valueRow.innerHTML = `<strong>${value}</strong><span>из 10</span>`;
  const input = document.createElement("input");
  input.type = "range";
  input.min = screen.min;
  input.max = screen.max;
  input.value = value;
  input.addEventListener("input", () => {
    value = Number(input.value);
    valueRow.innerHTML = `<strong>${value}</strong><span>из 10</span>`;
  });
  card.appendChild(valueRow);
  card.appendChild(el("div", "visual-scale"));
  card.appendChild(input);
  wrap.appendChild(card);
  wrap.appendChild(button("Продолжить", "primary", () => {
    state.answers[screen.key] = value;
    state.scores.energy += Math.max(0, 10 - value);
    next();
  }));
  return wrap;
}

function renderInsight(screen) {
  const wrap = baseContent(screen);
  const card = el("div", "insight-card");
  const tags = el("div", "tags");
  screen.tags.forEach((tag) => tags.appendChild(el("span", "tag", tag)));
  card.appendChild(tags);
  wrap.appendChild(card);
  wrap.appendChild(button(screen.button, "primary", next));
  return wrap;
}

function renderDrag(screen) {
  const wrap = baseContent(screen);
  const area = el("div", "drag-area");
  const bank = el("div", "drag-bank");
  const zones = el("div", "drop-zones");
  let selected = state.answers[screen.key];

  screen.items.forEach((item) => {
    const node = el("div", "drag-item", item.label);
    node.draggable = true;
    node.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", item.id);
    });
    node.addEventListener("click", () => selectDrain(item.id));
    bank.appendChild(node);
  });

  [
    ["high", "Сильнее всего"],
    ["medium", "Тоже влияет"],
    ["low", "Иногда мешает"],
  ].forEach(([level, label]) => {
    const zone = el("div", "drop-zone", `<span>${label}</span><strong>${selected?.level === level ? getDragItem(screen, selected.id).label : ""}</strong>`);
    zone.addEventListener("dragover", (event) => {
      event.preventDefault();
      zone.classList.add("active");
    });
    zone.addEventListener("dragleave", () => zone.classList.remove("active"));
    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.classList.remove("active");
      selectDrain(event.dataTransfer.getData("text/plain"), level);
    });
    if (selected?.level === level) zone.classList.add("filled");
    zones.appendChild(zone);
  });

  function selectDrain(id, level = "high") {
    selected = { id, level };
    state.answers[screen.key] = selected;
    render();
  }

  area.appendChild(bank);
  area.appendChild(zones);
  wrap.appendChild(area);
  const nextButton = button("Продолжить", "primary", () => {
    const item = getDragItem(screen, selected.id);
    applyOption(item);
    next();
  });
  nextButton.disabled = !selected;
  wrap.appendChild(nextButton);
  return wrap;
}

function renderDragRanking(screen) {
  const wrap = baseContent(screen);
  let order = state.answers[screen.key] || screen.items.map((item) => item.id);
  const list = el("div", "ranking-list");
  let draggedId = null;

  order.forEach((id, index) => {
    const item = screen.items.find((entry) => entry.id === id);
    const row = el("div", "ranking-card");
    row.draggable = true;
    row.dataset.id = id;
    row.innerHTML = `
      <span class="rank-number">${index + 1}</span>
      <strong>${item.label}</strong>
      <span class="rank-actions">
        <button type="button" aria-label="Поднять ${item.label}">↑</button>
        <button type="button" aria-label="Опустить ${item.label}">↓</button>
      </span>
    `;
    row.addEventListener("dragstart", () => {
      draggedId = id;
      row.classList.add("dragging");
    });
    row.addEventListener("dragend", () => row.classList.remove("dragging"));
    row.addEventListener("dragover", (event) => event.preventDefault());
    row.addEventListener("drop", (event) => {
      event.preventDefault();
      if (!draggedId || draggedId === id) return;
      order = moveBefore(order, draggedId, id);
      state.answers[screen.key] = order;
      render();
    });
    const buttons = row.querySelectorAll("button");
    buttons[0].addEventListener("click", () => moveRank(id, -1));
    buttons[1].addEventListener("click", () => moveRank(id, 1));
    list.appendChild(row);
  });

  function moveRank(id, delta) {
    const from = order.indexOf(id);
    const to = Math.max(0, Math.min(order.length - 1, from + delta));
    if (from === to) return;
    const nextOrder = [...order];
    nextOrder.splice(from, 1);
    nextOrder.splice(to, 0, id);
    state.answers[screen.key] = nextOrder;
    render();
  }

  wrap.appendChild(list);
  wrap.appendChild(button("Зафиксировать приоритеты", "primary", () => {
    state.answers[screen.key] = order;
    next();
  }));
  return wrap;
}

function renderFreeDraw(screen) {
  const wrap = baseContent(screen);
  const saved = state.answers[screen.key] || {};
  const board = el("div", "draw-board");
  const canvas = document.createElement("canvas");
  canvas.width = 330;
  canvas.height = 170;
  canvas.setAttribute("aria-label", "Поле для рисования линии состояния");
  const ctx = canvas.getContext("2d");
  const selected = saved.type || "";
  const points = saved.points || [];
  let drawing = false;

  board.appendChild(canvas);
  wrap.appendChild(board);
  drawCanvas(ctx, canvas, points);

  function pointFromEvent(event) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * canvas.width,
      y: ((event.clientY - rect.top) / rect.height) * canvas.height,
    };
  }

  function startDraw(event) {
    event.preventDefault();
    drawing = true;
    state.answers[screen.key] = { ...state.answers[screen.key], points: [pointFromEvent(event)] };
    drawCanvas(ctx, canvas, state.answers[screen.key].points);
  }

  function continueDraw(event) {
    if (!drawing) return;
    event.preventDefault();
    state.answers[screen.key].points.push(pointFromEvent(event));
    drawCanvas(ctx, canvas, state.answers[screen.key].points);
  }

  function endDraw() {
    drawing = false;
  }

  canvas.addEventListener("pointerdown", startDraw);
  canvas.addEventListener("pointermove", continueDraw);
  canvas.addEventListener("pointerup", endDraw);
  canvas.addEventListener("pointerleave", endDraw);

  const options = el("div", "line-options");
  screen.options.forEach((option) => {
    const item = choiceButton({ label: option.label, note: option.text }, selected === option.id, () => {
      state.answers[screen.key] = {
        ...(state.answers[screen.key] || {}),
        type: option.id,
      };
      render();
    });
    options.appendChild(item);
  });
  wrap.appendChild(options);

  const actions = el("div", "inline-actions");
  actions.appendChild(button("Очистить линию", "secondary", () => {
    state.answers[screen.key] = { type: selected, points: [] };
    render();
  }));
  wrap.appendChild(actions);

  const nextButton = button("Интерпретировать линию", "primary", next);
  nextButton.disabled = !state.answers[screen.key]?.type;
  wrap.appendChild(nextButton);
  return wrap;
}

function renderBuildScene(screen) {
  const wrap = baseContent(screen);
  const scene = state.answers[screen.key] || { now: [], want: [] };
  const bank = el("div", "scene-bank");
  const board = el("div", "scene-board");
  let draggedId = null;

  screen.items.forEach((item) => {
    if (scene.now.includes(item.id) || scene.want.includes(item.id)) return;
    bank.appendChild(sceneCard(item, "bank"));
  });

  ["now", "want"].forEach((zone) => {
    const zoneEl = el("div", `scene-zone ${zone}`);
    zoneEl.innerHTML = `<strong>${zone === "now" ? "Сейчас" : "Хочу"}</strong>`;
    zoneEl.addEventListener("dragover", (event) => {
      event.preventDefault();
      zoneEl.classList.add("active");
    });
    zoneEl.addEventListener("dragleave", () => zoneEl.classList.remove("active"));
    zoneEl.addEventListener("drop", (event) => {
      event.preventDefault();
      zoneEl.classList.remove("active");
      moveSceneCard(draggedId || event.dataTransfer.getData("text/plain"), zone);
    });
    scene[zone].forEach((id) => {
      const item = screen.items.find((entry) => entry.id === id);
      zoneEl.appendChild(sceneCard(item, zone));
    });
    board.appendChild(zoneEl);
  });

  function sceneCard(item, zone) {
    const card = el("div", "scene-card");
    card.draggable = true;
    card.textContent = item.label;
    card.addEventListener("dragstart", (event) => {
      draggedId = item.id;
      event.dataTransfer.setData("text/plain", item.id);
    });
    card.addEventListener("click", () => {
      const nextZone = zone === "want" ? "now" : "want";
      moveSceneCard(item.id, nextZone);
    });
    return card;
  }

  function moveSceneCard(id, zone) {
    if (!id) return;
    const nextScene = {
      now: scene.now.filter((itemId) => itemId !== id),
      want: scene.want.filter((itemId) => itemId !== id),
    };
    nextScene[zone].push(id);
    state.answers[screen.key] = nextScene;
    render();
  }

  wrap.appendChild(bank);
  wrap.appendChild(board);
  const nextButton = button("Показать контраст", "primary", next);
  nextButton.disabled = scene.now.length === 0 || scene.want.length === 0;
  wrap.appendChild(nextButton);
  return wrap;
}

function renderProof(screen) {
  const wrap = baseContent(screen);
  const grid = el("div", "proof-grid");
  screen.cards.forEach((card) => {
    const node = el("div", "proof-card");
    node.appendChild(el("strong", "", card.title));
    node.appendChild(el("p", "", card.text));
    grid.appendChild(node);
  });
  wrap.appendChild(grid);
  wrap.appendChild(button("Продолжить", "primary", next));
  return wrap;
}

function renderLoop(screen) {
  const wrap = baseContent(screen);
  const card = el("div", "loop-card");
  screen.steps.forEach((step, index) => {
    card.appendChild(el("div", "loop-step", `${index + 1}. ${step}`));
  });
  wrap.appendChild(card);
  wrap.appendChild(button("Выйти из петли", "primary", next));
  return wrap;
}

function renderLead(screen) {
  const wrap = baseContent(screen);
  const card = el("form", "form-card fields");
  const email = field("Email", "email", "name@email.com", state.lead.email);
  const error = el("div", "error");
  card.appendChild(email.wrap);
  card.appendChild(error);
  const submit = button("Показать результат", "primary");
  submit.type = "submit";
  card.appendChild(submit);
  card.addEventListener("submit", (event) => {
    event.preventDefault();
    state.lead.email = email.input.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.lead.email)) {
      error.textContent = "Введите корректный email, чтобы открыть результат.";
      return;
    }
    next();
  });
  wrap.appendChild(card);
  return wrap;
}

function renderResult() {
  const result = calculateResult();
  const [topProfession, secondProfession, thirdProfession] = result.professions;
  const wrap = el("div", "result-page");
  wrap.appendChild(el("div", "result-kicker", `${state.lead.name || "Ваш"} результат готов`));

  const topGrid = el("div", "result-top-grid");
  const matchCard = el("section", "result-card-light profession-main");
  matchCard.innerHTML = `
    <div>
      <p class="result-muted">Вам подходят профессии:</p>
      <h2>${topProfession.name}</h2>
    </div>
    <div class="match-badge">
      <span>${topProfession.matchLabel}</span>
      <strong>${topProfession.percent}%</strong>
    </div>
    <div class="chips-row">
      ${topProfession.traits.map((trait) => `<span>${trait}</span>`).join("")}
    </div>
  `;
  topGrid.appendChild(matchCard);

  const topThree = el("section", "result-card-dark top-three");
  topThree.innerHTML = `
    <p class="result-muted dark">Топ-3 по вашим ответам</p>
    ${result.professions
      .map(
        (profession, index) => `
          <div class="top-profession">
            <span>${index + 1}</span>
            <strong>${profession.name}</strong>
            <b>${profession.percent}%</b>
          </div>
        `,
      )
      .join("")}
  `;
  topGrid.appendChild(topThree);
  wrap.appendChild(topGrid);

  const middleGrid = el("div", "result-two-grid");
  const duties = el("section", "result-card-light profession-copy");
  duties.innerHTML = `
    <h2>Чем занимается специалист</h2>
    <p>${topProfession.description}</p>
    <p>${topProfession.duties}</p>
  `;
  middleGrid.appendChild(duties);

  const skills = el("section", "result-card-dark skills-card");
  skills.innerHTML = `
    <div class="salary-box">
      <span>Средняя зарплата начинающего специалиста в первый год работы:</span>
      <strong>от ${topProfession.salary}</strong>
    </div>
    <h3>Что надо знать и уметь, чтобы выучиться на ${topProfession.learnName}:</h3>
    <ul>
      ${topProfession.learn.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <div class="gradient-note">Здесь не нужны глубокие знания заранее: важнее интерес, регулярная практика и понятный план перехода</div>
  `;
  middleGrid.appendChild(skills);
  wrap.appendChild(middleGrid);

  wrap.appendChild(el("h2", "result-section-title", "Почему мы рекомендуем вам эти профессии"));

  const reasonGrid = el("div", "result-two-grid");
  const archetype = el("section", "result-card-light archetype-card");
  archetype.innerHTML = `
    <p class="result-muted">Ваш архетип:</p>
    <h2>${result.title}</h2>
    <p>${result.text}</p>
    <p><b>${result.potential}</b></p>
    <p><span class="blue-text">Именно таким людям подходят эти профессии:</span> здесь можно опереться на уже имеющиеся качества и постепенно перевести их в новую деятельность.</p>
  `;
  reasonGrid.appendChild(archetype);

  const qualities = el("section", "result-card-dark qualities-card");
  qualities.innerHTML = `
    <div class="photo-strip" aria-hidden="true">
      <span></span>
    </div>
    <h3>У вас уже есть базовые качества для работы:</h3>
    <div class="qualities-list">
      ${topProfession.qualities.map((item) => `<p>${item}</p>`).join("")}
    </div>
  `;
  reasonGrid.appendChild(qualities);
  wrap.appendChild(reasonGrid);

  if (result.interactions.length) {
    wrap.appendChild(el("h2", "result-section-title", "Что показали интерактивы"));
    const insightList = el("div", "interaction-list result-insights");
    result.interactions.forEach((item) => {
      const node = el("div", "interaction-card");
      node.appendChild(el("strong", "", item.title));
      node.appendChild(el("p", "", item.text));
      insightList.appendChild(node);
    });
    wrap.appendChild(insightList);
  }

  wrap.appendChild(button("Перейти к консультации", "primary", next));
  return wrap;
}

function renderOffer() {
  const wrap = el("div", "content");
  wrap.appendChild(el("div", "eyebrow", "Следующий шаг"));
  wrap.appendChild(el("h2", "", "Разберите результат с карьерным экспертом"));
  wrap.appendChild(el("p", "", "На консультации вы проверите гипотезу профессии, выберете реалистичный маршрут обучения и поймете, как переходить без резких движений."));
  const offer = el("div", "offer");
  offer.appendChild(el("strong", "", "Что получите на встрече"));
  offer.appendChild(el("p", "", "2–3 подходящих направления, первый учебный шаг, оценку рисков и понятный план перехода под ваш текущий график."));
  const cta = button(state.consultationRequested ? "Заявка отправлена" : "Оставить заявку на консультацию", "primary", () => {
    state.consultationRequested = true;
    render();
  });
  cta.disabled = state.consultationRequested;
  offer.appendChild(cta);
  wrap.appendChild(offer);
  wrap.appendChild(button("Пройти заново", "secondary", reset));
  return wrap;
}

function choiceButton(option, selected, onClick) {
  const node = document.createElement("button");
  node.type = "button";
  node.className = `choice${selected ? " selected" : ""}`;
  node.addEventListener("click", onClick);
  node.innerHTML = `
    <span class="choice-mark">${selected ? "✓" : ""}</span>
    <span class="choice-text">
      <span class="choice-title">${option.label}</span>
      ${option.note ? `<span class="choice-note">${option.note}</span>` : ""}
    </span>
  `;
  return node;
}

function field(label, type, placeholder, value) {
  const wrap = el("div", "field");
  const id = `${type}-${label}`;
  const input = document.createElement("input");
  input.id = id;
  input.type = type;
  input.placeholder = placeholder;
  input.value = value;
  wrap.appendChild(el("label", "", label, { for: id }));
  wrap.appendChild(input);
  return { wrap, input };
}

function button(text, className, onClick) {
  const node = document.createElement("button");
  node.type = "button";
  node.className = className;
  node.textContent = text;
  if (onClick) node.addEventListener("click", onClick);
  return node;
}

function personalize(text) {
  const name = state.lead.name || "вы";
  return text.replaceAll("{name}", name);
}

function clearTimers() {
  state.timers.forEach((timer) => window.clearTimeout(timer));
  state.timers = [];
}

function el(tag, className = "", content = "", attrs = {}) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (content) node.innerHTML = content;
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  return node;
}

function applyOption(option) {
  if (!option.scores) return;
  Object.entries(option.scores).forEach(([key, value]) => {
    if (key in state.scores) state.scores[key] += value;
  });
}

function bumpDirection(direction, value) {
  state.scores[direction] = (state.scores[direction] || 0) + value;
}

function getDragItem(screen, id) {
  return screen.items.find((item) => item.id === id);
}

function moveBefore(order, movedId, targetId) {
  const nextOrder = order.filter((id) => id !== movedId);
  const targetIndex = nextOrder.indexOf(targetId);
  nextOrder.splice(targetIndex, 0, movedId);
  return nextOrder;
}

function drawCanvas(ctx, canvas, points = []) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#e4e7e4";
  ctx.lineWidth = 1;
  for (let x = 30; x < canvas.width; x += 54) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 34; y < canvas.height; y += 34) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
  ctx.strokeStyle = "#151515";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.stroke();
  if (!points.length) {
    ctx.fillStyle = "#69706f";
    ctx.font = "700 15px Graphik LC TT, Graphik, sans-serif";
    ctx.fillText("Нарисуйте линию здесь", 74, 92);
  }
}

function calculateResult() {
  const scores = recomputeScores();
  const scoreEntries = Object.entries(scores).filter(([key]) => key in axes);
  const dominant = scoreEntries.sort((a, b) => b[1] - a[1])[0]?.[0] || "meaning";
  const normalizedScores = Object.fromEntries(
    Object.keys(axes).map((key) => [key, Math.min(100, Math.round(((scores[key] || 0) / 14) * 100))]),
  );
  const professions = buildProfessionMatches(scores);

  const archetypes = {
    energy: {
      title: "Застряли в режиме выживания",
      text: "Вы не просто устали. Ответы показывают, что текущая деятельность регулярно забирает больше сил, чем возвращает. Если ничего не менять, отдых будет помогать все короче.",
      potential: "Ваш потенциал — в умении замечать, где система перегружает человека, и искать более спокойный, понятный формат работы.",
      tags: ["энергия на нуле", "нужен новый ритм", "важен бережный переход"],
    },
    meaning: {
      title: "Устали от чужого сценария",
      text: "Главный сигнал — потеря смысла. Похоже, ваша текущая деятельность больше не совпадает с тем, что вам важно делать и развивать дальше.",
      potential: "Ваш потенциал — в способности быстро чувствовать, где есть польза, интерес и настоящая включенность.",
      tags: ["мало смысла", "хочется пользы", "нужна новая траектория"],
    },
    growth: {
      title: "Переросли текущую роль",
      text: "В ваших ответах много напряжения вокруг роста и отдачи. Похоже, вы уже уперлись в потолок текущей деятельности и хотите видеть более честную связь усилий с результатом.",
      potential: "Ваш потенциал — в готовности расти, монетизировать опыт и выбирать среду, где усилия превращаются в результат.",
      tags: ["потолок дохода", "мало роста", "можно монетизировать опыт"],
    },
    autonomy: {
      title: "Устали жить в чужом режиме",
      text: "Вам важно больше влияния на задачи, ритм и решения. Текущая деятельность, похоже, слишком часто оставляет вас в позиции исполнителя без пространства для выбора.",
      potential: "Ваш потенциал — в самостоятельности: вам подходят роли, где можно принимать решения и видеть вклад в общий результат.",
      tags: ["мало влияния", "нужны границы", "подойдет самостоятельная роль"],
    },
    readiness: {
      title: "Готовы к смене, но нужен безопасный план",
      text: "Вы уже видите, что прежний формат не работает. Главная задача сейчас — не бросаться в первое обучение, а выбрать направление и маршрут с понятным риском.",
      potential: "Ваш потенциал — в зрелом подходе к переменам: вы не хотите хаоса, вам нужен маршрут, который можно проверить и пройти по шагам.",
      tags: ["готовность есть", "важен план", "нужна проверка гипотезы"],
    },
  };

  return {
    ...archetypes[dominant],
    normalizedScores,
    professions,
    interactions: buildInteractionInsights(scores),
  };
}

function buildProfessionMatches(scores) {
  const professionKeys = Object.keys(professionProfiles);
  const maxDirectionScore = Math.max(...professionKeys.map((key) => scores[key] || 0), 1);
  const modifiers = {
    analytical: Math.round((scores.growth || 0) * 1.2 + (scores.readiness || 0) * 0.7),
    creative: Math.round((scores.meaning || 0) * 1.1 + (scores.autonomy || 0) * 0.6),
    communication: Math.round((scores.meaning || 0) * 0.8 + (scores.growth || 0) * 0.8),
    system: Math.round((scores.energy || 0) * 0.5 + (scores.readiness || 0) * 0.8),
    technical: Math.round((scores.readiness || 0) * 1.1 + (scores.autonomy || 0) * 0.7),
  };

  return professionKeys
    .map((key) => {
      const directionScore = scores[key] || 0;
      const raw = 66 + Math.round((directionScore / maxDirectionScore) * 19) + Math.min(10, modifiers[key] || 0);
      return {
        ...professionProfiles[key],
        key,
        percent: Math.max(68, Math.min(96, raw)),
      };
    })
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 3)
    .map((profile, index) => ({
      ...profile,
      percent: Math.max(67, profile.percent - index * 2),
    }));
}

function recomputeScores() {
  const scores = {
    energy: 0,
    meaning: 0,
    growth: 0,
    autonomy: 0,
    readiness: 0,
    analytical: 0,
    creative: 0,
    communication: 0,
    system: 0,
    technical: 0,
  };

  screens.forEach((screen) => {
    const answer = state.answers[screen.key];
    if (!answer) return;

    if (screen.type === "range") {
      scores.energy += Math.max(0, 10 - Number(answer));
      return;
    }

    if (screen.type === "single") {
      const option = screen.options.find((item) => item.label === answer);
      addScores(scores, option);
      return;
    }

    if (screen.type === "multi") {
      screen.options
        .filter((option) => answer.includes(option.label))
        .forEach((option) => addScores(scores, option));
      return;
    }

    if (screen.type === "drag") {
      const item = screen.items.find((option) => option.id === answer.id);
      addScores(scores, item);
      return;
    }

    if (screen.type === "drag_ranking") {
      answer.forEach((id, index) => {
        const item = screen.items.find((option) => option.id === id);
        if (!item) return;
        scores[item.axis] += Math.max(1, 4 - index);
      });
      return;
    }

    if (screen.type === "free_draw") {
      const option = screen.options.find((item) => item.id === answer.type);
      addScores(scores, option);
      return;
    }

    if (screen.type === "build_scene") {
      answer.want.forEach((id) => {
        const item = screen.items.find((option) => option.id === id);
        if (item) scores[item.axis] += 2;
      });
    }
  });

  return scores;
}

function addScores(target, option) {
  if (!option) return;
  if (option.scores) {
    Object.entries(option.scores).forEach(([key, value]) => {
      if (key in target) target[key] += value;
    });
  }
  if (option.direction && option.direction in target) {
    target[option.direction] += 2;
  }
}

function buildInteractionInsights() {
  const insights = [];
  const priorityScreen = screens.find((screen) => screen.key === "priorities");
  const priorityAnswer = state.answers.priorities;
  if (priorityScreen && priorityAnswer?.length) {
    const top = priorityScreen.items.find((item) => item.id === priorityAnswer[0]);
    const second = priorityScreen.items.find((item) => item.id === priorityAnswer[1]);
    insights.push({
      title: "Главный приоритет",
      text: `На первом месте у вас “${top.label}”, следом “${second.label}”. Это помогает не выбирать профессию абстрактно, а проверять, даст ли она нужный тип изменений.`,
    });
  }

  const lineScreen = screens.find((screen) => screen.key === "stateLine");
  const lineAnswer = state.answers.stateLine;
  if (lineScreen && lineAnswer?.type) {
    const line = lineScreen.options.find((option) => option.id === lineAnswer.type);
    insights.push({
      title: "Линия состояния",
      text: `Вы выбрали линию “${line.label.toLowerCase()}”: ${line.text}. Это похоже на сигнал, что проблема держится не только на усталости, а на повторяющемся сценарии.`,
    });
  }

  const sceneScreen = screens.find((screen) => screen.key === "lifeScene");
  const scene = state.answers.lifeScene;
  if (sceneScreen && scene?.now?.length && scene?.want?.length) {
    const labels = (ids) => ids.map((id) => sceneScreen.items.find((item) => item.id === id)?.label).filter(Boolean);
    insights.push({
      title: "Контраст сейчас / хочу",
      text: `Сейчас: ${labels(scene.now).join(", ")}. Хочется больше: ${labels(scene.want).join(", ")}. Именно этот разрыв стоит учитывать при выборе обучения и новой деятельности.`,
    });
  }

  return insights;
}

function next() {
  if (state.step < screens.length - 1) {
    state.step += 1;
    render();
  }
}

function back() {
  if (state.step > 0) {
    state.step -= 1;
    render();
  }
}

function reset() {
  clearTimers();
  state.step = 0;
  state.answers = {};
  state.scores = { energy: 0, meaning: 0, growth: 0, autonomy: 0, readiness: 0 };
  state.lead = { name: "", email: "" };
  state.consultationRequested = false;
  render();
}

backButton.addEventListener("click", back);
render();
