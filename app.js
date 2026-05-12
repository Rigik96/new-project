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
    phone: "",
  },
  discount: null,
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
    name: "Нейросети для бизнеса",
    learnName: "специалиста по нейросетям для бизнеса",
    matchLabel: "совместимость",
    salary: "90 000 ₽",
    traits: ["коммуникация", "продуктовое мышление", "гибкость", "понимание задач бизнеса", "работа с AI"],
    description:
      "Специалист по нейросетям для бизнеса помогает командам внедрять AI-инструменты в повседневные процессы: тексты, аналитику, клиентский сервис, маркетинг, обучение и операционные задачи.",
    duties:
      "Он разбирает бизнес-задачу, подбирает подходящий AI-сервис, пишет промпты, тестирует сценарии и объясняет команде, как использовать инструмент без хаоса.",
    learn: ["базовая цифровая грамотность", "умение формулировать задачи", "готовность тестировать AI-инструменты на практике"],
    talent: "перевод задач на понятный язык",
    talentText:
      "Похоже, вам близко связывать людей, задачи и инструменты. Таким людям подходит направление, где нужно не просто знать нейросети, а понимать, как они помогают бизнесу.",
    qualities: ["умеете объяснять сложное простыми словами", "видите пользу инструмента для людей", "можете организовать процесс", "готовы пробовать новые AI-сценарии"],
  },
  creative: {
    name: "Графический дизайнер PRO + ИИ",
    learnName: "графического дизайнера с AI-инструментами",
    matchLabel: "совместимость",
    salary: "85 000 ₽",
    traits: ["визуальное мышление", "насмотренность", "креатив", "композиция", "AI-графика"],
    description:
      "Графический дизайнер создает визуальный язык брендов, презентаций, соцсетей, упаковки и рекламных материалов. AI-инструменты помогают быстрее искать идеи, собирать варианты и усиливать визуал.",
    duties:
      "Специалист подбирает стиль, работает с цветом и типографикой, создает макеты и адаптирует их под разные задачи бизнеса.",
    learn: ["базовая работа с компьютером", "готовность развивать вкус", "интерес к визуальным AI-инструментам"],
    talent: "визуальная сборка смысла",
    talentText:
      "У вас есть потенциал замечать настроение, форму и детали. Таким людям подходит дизайн, где можно превращать идею в понятную картинку.",
    qualities: ["замечаете визуальные детали", "любите сравнивать варианты", "чувствуете стиль", "готовы доводить макет до аккуратного результата"],
  },
  analytical: {
    name: "Machine Learning Engineer + ИИ",
    learnName: "Machine Learning Engineer",
    matchLabel: "совместимость",
    salary: "120 000 ₽",
    traits: ["аналитика", "математическая логика", "данные", "модели", "исследование гипотез"],
    description:
      "Machine Learning Engineer работает с данными и моделями машинного обучения: помогает системам находить закономерности, делать прогнозы и автоматизировать сложные решения.",
    duties:
      "Специалист готовит данные, обучает модели, проверяет качество результата и помогает внедрять AI-решения в продукты и процессы.",
    learn: ["готовность разбираться в данных", "интерес к логике и моделям", "регулярная практика программирования"],
    talent: "поиск закономерностей",
    talentText:
      "Похоже, вам интересно не просто видеть результат, а понимать, почему он получился. Это важное качество для работы с данными и AI-моделями.",
    qualities: ["умеете искать закономерности", "любите проверять гипотезы", "готовы разбираться в деталях", "спокойно относитесь к сложным задачам"],
  },
  system: {
    name: "Инженер по тестированию + ИИ",
    learnName: "инженера по тестированию с AI-инструментами",
    matchLabel: "совместимость",
    salary: "85 000 ₽",
    traits: ["внимательность", "качество", "сценарии", "логика", "AI-помощники"],
    description:
      "Инженер по тестированию проверяет сайты, приложения и сервисы, чтобы пользователи не сталкивались с ошибками. AI помогает быстрее готовить сценарии проверок и анализировать результаты.",
    duties:
      "Специалист ищет баги, описывает проблемы, проверяет логику продукта и помогает команде выпускать более стабильные решения.",
    learn: ["базовая компьютерная грамотность", "внимательность к инструкциям", "готовность работать по сценариям"],
    talent: "замечать слабые места",
    talentText:
      "У вас есть потенциал видеть то, что другие пропускают. Это сильная база для тестирования, где ценятся спокойствие, внимательность и умение думать сценариями.",
    qualities: ["замечаете несостыковки", "любите понятные критерии", "можете спокойно проверять детали", "умеете описывать проблему конкретно"],
  },
  technical: {
    name: "Python-разработчик + ИИ",
    learnName: "Python-разработчика с AI-инструментами",
    matchLabel: "совместимость",
    salary: "110 000 ₽",
    traits: ["логика", "код", "автоматизация", "AI-инструменты", "решение задач"],
    description:
      "Python-разработчик создает программы, сервисы, автоматизации и инструменты, которые решают конкретные задачи. AI помогает быстрее писать код, искать ошибки и собирать прототипы.",
    duties:
      "Специалист пишет код, подключает данные и сервисы, автоматизирует повторяющиеся процессы и собирает рабочие цифровые решения.",
    learn: ["готовность изучать код постепенно", "логическое мышление", "умение доводить задачу до работающего результата"],
    talent: "сборка работающих решений",
    talentText:
      "Похоже, вам важно не просто обсуждать идеи, а собирать что-то рабочее. У таких людей есть потенциал в разработке, если идти через понятную практику.",
    qualities: ["любите разбираться в инструментах", "не боитесь пошагового обучения", "хотите видеть конкретный результат", "готовы искать решение, если с первого раза не получилось"],
  },
};

const screens = [
  {
    type: "intro",
    title: "Бесплатная диагностика внутреннего состояния",
    text: "Устали? Потеряли интерес? Чувствуете, что живете на автопилоте? Это может быть не просто усталостью, а признаком эмоционального выгорания. С этим важно разобраться.",
    points: [
      "Настроим диагностику под вас",
      "Найдем, куда уходят силы и интерес",
      "Поймем главную причину",
      "Соберем профиль и план действий",
    ],
    proof: {
      passed: "18 430 человек уже прошли",
      active: "127 проходят прямо сейчас",
    },
    gifts: [
      { label: "Скидка до 60% на обучение в Skillbox" },
      { label: "Бесплатная карьерная консультация" },
    ],
    button: "Пройти диагностику",
  },
  {
    type: "profile_name",
    eyebrow: "Настройка 1 из 6",
    title: "Как к вам можно обращаться?",
    key: "name",
  },
  {
    type: "proof",
    title: "А мы — Skillbox. Помогаем людям находить новую профессию и двигаться к ней с самого нуля понятными шагами.",
    button: "Приятно познакомиться",
    cards: [
      { icon: "🎓", title: "141 000+", text: "выпускников уже нашли работу мечты" },
      { icon: "🤝", title: "700+", text: "компаний доверяют выпускникам Skillbox" },
      { icon: "⭐", title: "№1", text: "по качеству обучения, по данным сайта Skillbox" },
    ],
    reviews: [
      {
        name: "Марина",
        meta: "31 год, Казань",
        title: "Появился понятный маршрут",
        rating: 5,
        text: "Я долго думала, что уже поздно менять сферу. На курсе стало понятно, куда двигаться и какие шаги делать каждую неделю.",
      },
      {
        name: "Илья",
        meta: "27 лет, Москва",
        title: "Практика дала уверенность",
        rating: 5,
        text: "Больше всего помогли практика и обратная связь. Не просто смотришь уроки, а собираешь портфолио и видишь прогресс.",
      },
      {
        name: "Екатерина",
        meta: "35 лет, Санкт-Петербург",
        title: "Получилось учиться в своем темпе",
        rating: 5,
        text: "Мне было важно учиться без резкого рывка из жизни. В Skillbox получилось идти в своем темпе и постепенно выйти на новое направление.",
      },
      {
        name: "Андрей",
        meta: "29 лет, Новосибирск",
        title: "Первые проекты многое изменили",
        rating: 5,
        text: "После первых проектов появилась уверенность: я не просто прохожу курс, а правда осваиваю профессию.",
      },
    ],
  },
  {
    type: "profile_work",
    eyebrow: "Настройка 2 из 6",
    title: "Чем вы сейчас занимаетесь?",
    text: "Это поможет точнее понять, где именно на вас давит текущий ритм.",
    key: "occupationStatus",
    options: [
      { icon: "💼", label: "Работаю в найме", note: "офис, удаленка или гибрид" },
      { icon: "🎓", label: "Учусь", note: "в вузе, колледже или на курсах" },
      { icon: "🧩", label: "Фриланс / свое дело", note: "сам(а) отвечаю за задачи" },
      { icon: "⏸️", label: "Сейчас без работы", note: "пауза, поиск или другой этап" },
    ],
  },
  {
    type: "profile_role",
    skipIf: () => state.answers.occupationStatus === "Учусь",
    eyebrow: "Настройка 2 из 6",
    title: "А кем вы работаете или чем занимаетесь?",
    text: "Выберите из списка или напишите свой вариант.",
    key: "occupationRole",
    roles: [
      "Менеджер",
      "Специалист по продажам",
      "Администратор",
      "Маркетолог / SMM",
      "Бухгалтер / финансист",
      "HR / рекрутер",
      "Дизайнер",
      "Преподаватель / наставник",
      "Предприниматель",
      "Фрилансер",
      "Другое",
    ],
  },
  {
    type: "single",
    eyebrow: "Настройка 3 из 6",
    title: "Что вы чаще всего чувствуете в последнее время?",
    text: "Не надо выбирать “правильно” — отметьте то, что правда похоже на вас.",
    key: "emotionalBackground",
    options: [
      { icon: "🪫", label: "Устал(а) почти постоянно", note: "даже после обычного дня", scores: { energy: 2 } },
      { icon: "🧱", label: "Будто застрял(а)", note: "много дел, а движения нет", scores: { growth: 2, meaning: 1 } },
      { icon: "🌀", label: "Не понимаю, чего хочу", note: "внутри много тумана", scores: { meaning: 2 } },
      { icon: "🌱", label: "Хочу перемен", note: "но без резкого прыжка", scores: { readiness: 2, energy: 1 } },
    ],
  },
  {
    type: "single",
    eyebrow: "Настройка 4 из 6",
    title: "Что чаще всего выбивает вас из нормального ритма?",
    text: "Так мы поймем, где напряжение появляется первым.",
    key: "rhythmSource",
    options: [
      { icon: "📅", label: "Дел слишком много", note: "а пауз почти нет", scores: { energy: 2 } },
      { icon: "🗣️", label: "Люди сильно выматывают", note: "после общения пусто", scores: { autonomy: 1, energy: 1 } },
      { icon: "⏳", label: "Я все время не успеваю", note: "будто бегу за жизнью", scores: { readiness: 1, energy: 1 } },
      { icon: "🔁", label: "Дни похожи друг на друга", note: "как будто один и тот же круг", scores: { meaning: 2, growth: 1 } },
    ],
  },
  {
    type: "single",
    eyebrow: "Настройка 5 из 6",
    title: "В какой момент это чувство сильнее всего?",
    text: "Выберите ситуацию, где особенно заметно: “со мной что-то не так”.",
    key: "symptomContext",
    options: [
      { icon: "🌅", label: "Утром", note: "трудно включиться в день", scores: { energy: 2 } },
      { icon: "🌙", label: "Вечером", note: "на себя уже не остается сил", scores: { energy: 2, autonomy: 1 } },
      { icon: "🛋️", label: "В выходные", note: "отдыхаю, но легче ненадолго", scores: { meaning: 2 } },
      { icon: "💭", label: "Когда думаю о будущем", note: "деньги, смысл, планы", scores: { growth: 2, readiness: 1 } },
    ],
  },
  {
    type: "battery",
    eyebrow: "Настройка 6 из 6",
    title: "Что вам больше всего хочется вернуть в жизнь?",
    text: "Выберите до 4 пунктов. Лучше отметить несколько — так диагностика точнее поймет, чего вам сейчас не хватает.",
    key: "mainRequest",
    max: 4,
    items: [
      { id: "energy", icon: "⚡", label: "Просыпаться без тяжести", axis: "energy" },
      { id: "interest", icon: "✨", label: "Снова чем-то гореть", axis: "meaning" },
      { id: "money", icon: "💸", label: "Зарабатывать спокойнее", axis: "growth" },
      { id: "freedom", icon: "🕊️", label: "Больше решать за себя", axis: "autonomy" },
      { id: "clarity", icon: "🧭", label: "Понимать, куда иду", axis: "meaning" },
      { id: "confidence", icon: "💪", label: "Чувствовать уверенность", axis: "readiness" },
      { id: "growth", icon: "🌱", label: "Видеть рост и перспективу", axis: "growth" },
    ],
  },
  {
    type: "loader",
    eyebrow: "Настройка под вас",
    title: "{name}, настраиваем диагностику под ваш контекст",
    text: "Учитываем ваш ритм, фон и то, что хочется вернуть в жизнь.",
    duration: 17000,
    steps: ["Собираем эмоциональный фон", "Определяем зоны напряжения", "Настраиваем логику результата"],
  },
  {
    type: "stage",
    eyebrow: "Глубина состояния",
    visual: "recovery",
    visualOnly: true,
    title: "Проверим, помогает ли вам отдых",
    text: "Исследования восстановления после рабочего стресса показывают: важно не только сколько вы отдыхаете, но и получается ли мысленно отключиться от дел. Если пауза не перезагружает, это помогает понять глубину состояния.",
    tags: ["перезагрузка", "отключение от дел", "глубина состояния"],
    source: "Sonnentag & Fritz, модель восстановления от рабочего стресса",
    button: "Проверить",
  },
  {
    type: "range",
    eyebrow: "Восстановление",
    title: "Насколько вам удается восстановиться после обычного дня?",
    text: "0 — даже сон не помогает. 10 — отдохнул(а), и снова есть силы.",
    key: "energyAfterDay",
    min: 0,
    max: 10,
    initial: 4,
  },
  {
    type: "single",
    eyebrow: "Поведение",
    title: "Появился свободный час. Что обычно происходит?",
    text: "Это помогает понять: вы отдыхаете или просто пытаетесь заглушить усталость.",
    key: "recoveryBehavior",
    options: [
      { icon: "📱", label: "Залипаю", note: "чтобы выключить мысли", scores: { energy: 2 } },
      { icon: "🏃", label: "Догоняю дела", note: "иначе тревожно", scores: { energy: 2, autonomy: 1 } },
      { icon: "🙈", label: "Откладываю отдых", note: "сначала надо быть полезным", scores: { autonomy: 2, energy: 1 } },
      { icon: "💭", label: "Думаю о переменах", note: "но быстро глушу мысль", scores: { readiness: 2, meaning: 1 } },
    ],
  },
  {
    type: "single",
    eyebrow: "Внутренний диалог",
    title: "Какая мысль чаще всего крутится в голове?",
    text: "Выберите то, что больше похоже на внутренний фон в последние недели.",
    key: "innerDialogue",
    options: [
      { icon: "🔁", label: "“Каждый день как копия прошлого”", scores: { meaning: 2, energy: 1 } },
      { icon: "🪫", label: "“Я просто дотягиваю до вечера”", scores: { energy: 3 } },
      { icon: "📉", label: "“Я стараюсь, но ничего не меняется”", scores: { growth: 2, meaning: 1 } },
      { icon: "🧭", label: "“Хочу перемен, но не понимаю с чего начать”", scores: { readiness: 2, meaning: 1 } },
    ],
  },
  {
    type: "free_draw",
    eyebrow: "Динамика",
    title: "Если бы ваше состояние было линией — какой бы она была?",
    text: "Просто проведите линию пальцем или мышью.",
    key: "stateLine",
    options: [
      { id: "sharp", label: "Резкая", text: "много рывков и напряжения", scores: { energy: 2, autonomy: 1 } },
      { id: "wavy", label: "Волнистая", text: "то лучше, то снова откат", scores: { meaning: 2 } },
      { id: "falling", label: "Падающая", text: "сил и интереса становится меньше", scores: { energy: 2, growth: 1 } },
    ],
  },
  {
    type: "pair_compare",
    eyebrow: "Восстановление",
    title: "Что сильнее всего мешает восстановиться?",
    text: "Сравним варианты попарно. Выбирайте то, что мешает сильнее — после нескольких выборов мы соберем рейтинг.",
    key: "recoveryBlockers",
    rounds: 6,
    items: [
      { id: "thoughts", icon: "🌀", label: "Мысли крутятся", axis: "energy" },
      { id: "guilt", icon: "😔", label: "Вина за отдых", axis: "autonomy" },
      { id: "future", icon: "💸", label: "Тревога за деньги", axis: "growth" },
      { id: "unknown", icon: "🧩", label: "Не знаю, с чего начать", axis: "readiness" },
    ],
  },
  {
    type: "single",
    eyebrow: "Будущее",
    title: "Какой уровень дохода у вас сейчас?",
    text: "Это поможет понять, насколько сильно деньги добавляют напряжения и какой рост будет ощутимым.",
    key: "currentIncome",
    options: [
      { icon: "🌱", label: "До 60 000 ₽", scores: { growth: 1 } },
      { icon: "💼", label: "60 000–100 000 ₽", scores: { growth: 2 } },
      { icon: "📈", label: "100 000–150 000 ₽", scores: { growth: 2, readiness: 1 } },
      { icon: "🎢", label: "150 000+ или нестабильно", scores: { growth: 3, autonomy: 1, readiness: 1 } },
    ],
  },
  {
    type: "stage",
    eyebrow: "Ищем источник",
    visual: "work",
    title: "Проверим, как на вас влияет ежедневная среда",
    text: "ВОЗ относит перегруз, низкий контроль, неясную роль и слабую поддержку на работе к рискам для психического здоровья. Часто это связано с тем, чем человек занят каждый день. Давайте проверим, есть ли это у вас.",
    tags: ["ежедневная среда", "работа и задачи", "самочувствие"],
    button: "Проверить",
  },
  {
    type: "single_reveal",
    eyebrow: "Работа и деятельность",
    title: "Что в вашей текущей деятельности забирает больше всего сил?",
    text: "Выберите один главный фактор. После выбора покажем, что может стоять за этим напряжением.",
    key: "drain",
    options: [
      {
        id: "people",
        icon: "🗣️",
        label: "Люди и коммуникации",
        scores: { autonomy: 2, energy: 1 },
        reveal: "Похоже, вас больше всего выматывает не сама работа, а постоянное общение и необходимость быть включенным.",
      },
      {
        id: "tasks",
        icon: "🔁",
        label: "Одни и те же задачи",
        scores: { meaning: 2, growth: 1 },
        reveal: "Похоже, усталость усиливает повторяемость: вы вкладываетесь, но день редко дает ощущение движения вперед.",
      },
      {
        id: "money",
        icon: "💸",
        label: "Потолок в доходе",
        scores: { growth: 3 },
        reveal: "Похоже, напряжение держится вокруг отдачи: усилий много, а финансовый рост кажется слишком ограниченным.",
      },
      {
        id: "growth",
        icon: "🧱",
        label: "Нет роста и влияния",
        scores: { meaning: 1, growth: 2, autonomy: 1 },
        reveal: "Похоже, вас выматывает ощущение потолка: хочется больше влияния, развития и видимого результата.",
      },
    ],
  },
  {
    type: "single",
    eyebrow: "Желаемый результат",
    title: "Какой доход был бы для вас комфортной целью?",
    text: "Выберите ориентир, к которому хотелось бы прийти в ближайший этап.",
    key: "desiredIncome",
    options: [
      { icon: "💸", label: "80 000–120 000 ₽", scores: { growth: 1, readiness: 1 } },
      { icon: "💰", label: "120 000–180 000 ₽", scores: { growth: 2 } },
      { icon: "🚀", label: "180 000–250 000 ₽", scores: { growth: 3 } },
      { icon: "🏆", label: "250 000 ₽ и выше", scores: { growth: 3, readiness: 1 } },
    ],
  },
  {
    type: "single",
    eyebrow: "Темп перемен",
    title: "Когда вы хотели бы почувствовать первые изменения?",
    text: "Пока не делаем выводов — просто поймем, какой темп улучшений для вас был бы бережным и заметным.",
    key: "incomeTimeline",
    options: [
      { icon: "⚡", label: "3–6 месяцев", scores: { readiness: 3, energy: 1 } },
      { icon: "🗓️", label: "6–12 месяцев", scores: { readiness: 2 } },
      { icon: "🌿", label: "1–2 года", scores: { readiness: 1, energy: 1 } },
      { icon: "❔", label: "Пока не знаю", note: "хочу понять реалистично", scores: { readiness: 1 } },
    ],
  },
  {
    type: "insight",
    eyebrow: "Важный вывод",
    visual: "research",
    title: "{name}, похоже, дело может быть в текущей деятельности",
    text: "Это не значит, что с вами что-то не так. По опросу «Работа.ру» и «Подработка», 62% россиян изменили бы свой выбор профессии. Пересматривать направление нормально — особенно если текущая среда регулярно забирает силы.",
    stat: {
      value: "62%",
      label: "россиян изменили бы выбор профессии",
      source: "опрос «Работа.ру» и «Подработка»",
    },
    tags: ["это не редкость", "можно проверить новое направление", "переход без резкого рывка"],
    button: "Найти направление",
  },
  {
    type: "single",
    eyebrow: "Проверка интереса",
    title: "Представьте, что вам дали новый проект. С чего интереснее начать?",
    text: "Выберите первый шаг, который правда хочется сделать.",
    key: "projectStart",
    options: [
      { icon: "📊", label: "Разобраться в цифрах", note: "что работает, где потери", direction: "analytical", scores: { growth: 1 } },
      { icon: "🎨", label: "Красиво упаковать", note: "дизайн, контент, SMM", direction: "creative", scores: { meaning: 1 } },
      { icon: "🧠", label: "Понять людей", note: "кто они и почему покупают", direction: "communication", scores: { meaning: 1 } },
      { icon: "📌", label: "Навести порядок", note: "задачи, сроки, процессы", direction: "system", scores: { readiness: 1 } },
      { icon: "🛠️", label: "Собрать руками", note: "сайт, бот, автоматизация", direction: "technical", scores: { readiness: 1 } },
    ],
  },
  {
    type: "multi",
    eyebrow: "Мини-задание",
    title: "Какие 2 задачи вам было бы любопытнее попробовать уже сегодня?",
    text: "Выберите ровно две карточки — по ним точнее видно ваш рабочий интерес.",
    key: "firstTasks",
    min: 2,
    limit: 2,
    options: [
      { icon: "🖥️", label: "Сделать лендинг", direction: "technical" },
      { icon: "📉", label: "Посчитать падение продаж", direction: "analytical" },
      { icon: "✨", label: "Придумать рекламный креатив", direction: "creative" },
      { icon: "📊", label: "Настроить таблицу/дашборд", direction: "analytical" },
      { icon: "🎤", label: "Провести интервью и найти инсайты", direction: "communication" },
      { icon: "🎬", label: "Написать сценарий для видео", direction: "creative" },
      { icon: "🤖", label: "Собрать чат-бота", direction: "technical" },
      { icon: "🚀", label: "Организовать запуск проекта", direction: "system" },
    ],
  },
  {
    type: "work_sliders",
    eyebrow: "Формат работы",
    title: "Что вам комфортнее?",
    text: "Передвиньте каждый слайдер ближе к тому полюсу, который вам больше подходит.",
    key: "workFormat",
    sliders: [
      { id: "people_systems", left: "С людьми", right: "С задачами/системами", leftDirection: "communication", rightDirection: "system" },
      { id: "new_improve", left: "Придумывать новое", right: "Улучшать существующее", leftDirection: "creative", rightDirection: "system" },
      { id: "fast_deep", left: "Быстро тестировать", right: "Глубоко доводить", leftDirection: "technical", rightDirection: "analytical" },
      { id: "text_numbers", left: "Тексты и смыслы", right: "Цифры и логика", leftDirection: "communication", rightDirection: "analytical" },
      { id: "expert_coord", left: "Эксперт-исполнитель", right: "Координировать процессы", leftDirection: "technical", rightDirection: "system" },
    ],
  },
  {
    type: "quick_cards",
    eyebrow: "Естественные сильные стороны",
    title: "Отметьте фразы, которые больше похожи на вас",
    text: "Не думайте долго — выбирайте по ощущению.",
    key: "naturalTraits",
    items: [
      { id: "process_mess", icon: "📌", label: "Я быстро вижу, где в процессе бардак", direction: "system" },
      { id: "explain", icon: "💬", label: "Мне легко объяснять сложное простыми словами", direction: "communication" },
      { id: "numbers", icon: "📊", label: "Я люблю искать закономерности в цифрах", direction: "analytical" },
      { id: "visual", icon: "🎨", label: "Мне нравится делать визуально красиво и удобно", direction: "creative" },
      { id: "needs", icon: "🧠", label: "Я часто замечаю, что людям на самом деле нужно", direction: "communication" },
      { id: "tools", icon: "🛠️", label: "Мне интересно пробовать новые инструменты и технологии", direction: "technical" },
      { id: "team", icon: "🤝", label: "Я умею договариваться и собирать людей вокруг задачи", direction: "system" },
      { id: "ideas", icon: "✨", label: "Я люблю придумывать идеи и нестандартные ходы", direction: "creative" },
      { id: "deep", icon: "🔍", label: "Мне комфортно глубоко разбираться в одной теме", direction: "analytical" },
      { id: "result", icon: "⚡", label: "Я люблю видеть быстрый результат своей работы", direction: "technical" },
    ],
  },
  {
    type: "single",
    eyebrow: "Роль в запуске",
    title: "Команда запускает продукт за 2 недели. Какую роль интересно взять?",
    text: "Представьте быстрый запуск: где вам хотелось бы быть полезнее всего?",
    key: "launchRole",
    options: [
      { icon: "🔎", label: "Исследователь", note: "понять, кому это нужно", direction: "communication" },
      { icon: "♟️", label: "Стратег", note: "решить, что запускать", direction: "analytical" },
      { icon: "🎨", label: "Дизайнер", note: "сделать понятный интерфейс", direction: "creative" },
      { icon: "📣", label: "Маркетолог", note: "привлечь людей", direction: "communication" },
      { icon: "📈", label: "Аналитик", note: "настроить метрики", direction: "analytical" },
      { icon: "📌", label: "Проджект", note: "довести до запуска", direction: "system" },
      { icon: "🤖", label: "Технарь/no-code", note: "собрать прототип", direction: "technical" },
    ],
  },
  {
    type: "favorite_work",
    eyebrow: "Любимая работа",
    title: "Соберите комфортные условия работы",
    text: "Не профессию, а среду: ритм, формат, задачи и главную ценность.",
    key: "favoriteWork",
    groups: {
      rhythm: {
        label: "Ритм",
        options: [
          { icon: "🌿", label: "Спокойный", direction: "analytical" },
          { icon: "⚡", label: "Динамичный", direction: "technical" },
          { icon: "🚀", label: "Проектный", direction: "system" },
          { icon: "🧩", label: "Гибкий", direction: "creative" },
        ],
      },
      format: {
        label: "Формат",
        options: [
          { icon: "🏡", label: "Удаленно", direction: "technical" },
          { icon: "🔁", label: "Гибрид", direction: "communication" },
          { icon: "🏢", label: "Офис", direction: "system" },
          { icon: "✨", label: "Не важно", direction: "creative" },
        ],
      },
      taskTypes: {
        label: "Тип задач",
        limit: 3,
        options: [
          { icon: "📊", label: "Анализировать", direction: "analytical" },
          { icon: "🎨", label: "Создавать", direction: "creative" },
          { icon: "💬", label: "Общаться", direction: "communication" },
          { icon: "📌", label: "Управлять", direction: "system" },
          { icon: "🤝", label: "Помогать", direction: "communication" },
          { icon: "🧹", label: "Наводить порядок", direction: "system" },
          { icon: "💡", label: "Придумывать", direction: "creative" },
        ],
      },
      value: {
        label: "Главная ценность",
        options: [
          { icon: "💸", label: "Доход", direction: "analytical", scores: { growth: 1 } },
          { icon: "🕊️", label: "Свобода", direction: "technical", scores: { autonomy: 1 } },
          { icon: "🏡", label: "Стабильность", direction: "system", scores: { readiness: 1 } },
          { icon: "🧭", label: "Смысл", direction: "communication", scores: { meaning: 1 } },
          { icon: "🌱", label: "Рост", direction: "analytical", scores: { growth: 1 } },
          { icon: "🎨", label: "Творчество", direction: "creative", scores: { meaning: 1 } },
        ],
      },
    },
  },
  {
    type: "stage",
    eyebrow: "Маршрут перехода",
    visual: "route",
    title: "Собираем аккуратный маршрут",
    text: "Соединяем состояние, склонности и ограничения в безопасный первый шаг.",
    tags: ["страхи", "идеальный день", "направления"],
    button: "Собрать маршрут",
  },
  {
    type: "multi",
    eyebrow: "Ограничения",
    title: "Что может мешать вам начать менять работу или направление?",
    text: "Выберите до трех. Это нужно не для давления, а для безопасного плана.",
    key: "fears",
    limit: 3,
    options: [
      { icon: "😬", label: "Боюсь выбрать не то", scores: { readiness: 1 } },
      { icon: "💸", label: "Страшно потерять доход", scores: { growth: 1 } },
      { icon: "⏰", label: "Не понимаю, где взять время", scores: { energy: 1 } },
      { icon: "🧭", label: "Не знаю, с чего начать", scores: { readiness: 2 } },
    ],
  },
  {
    type: "single",
    eyebrow: "Ресурс на переход",
    title: "Если менять направление через обучение, какой платеж комфортен?",
    text: "В месяц в течение года. Можно выбрать осторожный вариант.",
    key: "educationBudget",
    options: [
      { icon: "🧊", label: "Пока 0 ₽", scores: { readiness: 1 } },
      { icon: "🌱", label: "До 5 000 ₽", scores: { readiness: 1 } },
      { icon: "💼", label: "5 000–15 000 ₽", scores: { readiness: 2 } },
      { icon: "🚀", label: "15 000 ₽ и выше", scores: { readiness: 3, growth: 1 } },
    ],
  },
  {
    type: "build_scene",
    eyebrow: "Идеальный день",
    title: "Соберите день, к которому хочется прийти",
    text: "Перетащите или тапайте карточки: что должно быть в вашей жизни чаще?",
    key: "lifeScene",
    zones: {
      now: "Не главное",
      want: "Мой день",
    },
    button: "Собрать идеальный день",
    items: [
      { id: "calm", icon: "🧘", label: "Спокойствие", axis: "energy" },
      { id: "money", icon: "💸", label: "Деньги", axis: "growth" },
      { id: "interest", icon: "✨", label: "Интерес", axis: "meaning" },
      { id: "learning", icon: "📚", label: "Рост", axis: "readiness" },
      { id: "freedom", icon: "🕊️", label: "Свобода", axis: "autonomy" },
      { id: "stability", icon: "🏡", label: "Стабильность", axis: "readiness" },
    ],
  },
  {
    type: "multi",
    eyebrow: "Направления",
    title: "Какие задачи кажутся вам живыми, а не выматывающими?",
    text: "Выберите до трех — по ним подберем профессии.",
    key: "directions",
    limit: 3,
    options: [
      { icon: "📊", label: "Разбираться в данных", direction: "analytical" },
      { icon: "🎨", label: "Придумывать визуал", direction: "creative" },
      { icon: "💬", label: "Общаться и убеждать", direction: "communication" },
      { icon: "🧪", label: "Проверять и улучшать", direction: "system" },
      { icon: "💻", label: "Собирать цифровые штуки", direction: "technical" },
    ],
  },
  {
    type: "insight",
    eyebrow: "Почти готово",
    visual: "plan",
    title: "{name}, менять жизнь одним рывком не обязательно.",
    text: "Дальше соберем профессии и план обучения без резких движений.",
    tags: ["влияние работы заметно", "без резких увольнений", "с понятным первым шагом"],
    button: "Собрать результат",
  },
  {
    type: "loader",
    eyebrow: "Анализируем результаты",
    title: "Собираем ваш профиль",
    text: "Соединяем ответы, мини-задачи и карту направлений в один результат.",
    duration: 19000,
    steps: ["Считаем 5 осей состояния", "Подбираем архетип", "Собираем 2–3 профессии"],
  },
  {
    type: "discount_game",
    eyebrow: "Бонус перед результатом",
    title: "{name}, проверьте интуицию и откройте персональную скидку",
    text: "Мы спрятали большую скидку в одной из карточек. Выберите ту, к которой тянет сильнее всего.",
    key: "discountGame",
    cards: [
      { id: "left", label: "Карта A" },
      { id: "center", label: "Карта B" },
      { id: "right", label: "Карта C" },
    ],
  },
  {
    type: "lead",
    eyebrow: "Ваш результат готов",
    title: "{name}, куда отправить персональный профиль?",
    text: "Оставьте email и телефон. Результат откроется сразу, а эксперт сможет подсказать, какое направление и обучение подойдут вам мягче.",
  },
  {
    type: "result",
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
  const progressPercent = Math.round(((state.step + 1) / totalScreens) * 100);
  clearTimers();
  phoneEl.classList.toggle("result-mode", screen.type === "result");
  phoneEl.classList.toggle("intro-mode", screen.type === "intro");
  stepLabel.textContent = `${progressPercent}%`;
  timeLabel.textContent = state.step < screens.length - 2 ? "7 минут" : "результат";
  progressFill.style.width = `${progressPercent}%`;
  backButton.disabled = state.step === 0;

  const renderers = {
    intro: renderIntro,
    stage: renderStage,
    profile_name: renderProfileName,
    profile_work: renderProfileWork,
    profile_role: renderProfileRole,
    loader: renderLoader,
    single: renderSingle,
    single_reveal: renderSingleReveal,
    work_sliders: renderWorkSliders,
    quick_cards: renderQuickCards,
    favorite_work: renderFavoriteWork,
    mini_task: renderMiniTask,
    multi: renderMulti,
    battery: renderBattery,
    range: renderRange,
    insight: renderInsight,
    drag: renderDrag,
    drag_ranking: renderDragRanking,
    pair_compare: renderPairCompare,
    free_draw: renderFreeDraw,
    build_scene: renderBuildScene,
    proof: renderProof,
    loop: renderLoop,
    discount_game: renderDiscountGame,
    lead: renderLead,
    result: renderResult,
    offer: renderOffer,
  };

  screenEl.innerHTML = "";
  screenEl.appendChild(renderers[screen.type](screen));
  window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0 }));
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
  wrap.classList.add("intro-content");
  if (screen.points?.length) {
    const steps = el("div", "intro-steps");
    screen.points.forEach((point) => {
      steps.appendChild(el("div", "intro-step", `<span>✓</span><strong>${point}</strong>`));
    });
    wrap.appendChild(steps);
  }
  const art = el("div", "hero-art");
  art.innerHTML = `
    <div class="result-preview" aria-hidden="true">
      <div class="preview-header">
        <span>Результат диагностики</span>
        <strong>92%</strong>
      </div>
      <div class="preview-title">Профиль состояния</div>
      <div class="preview-line wide"></div>
      <div class="preview-line"></div>
      <div class="preview-checks">
        <span>✓ причина</span>
        <span>✓ перспективы</span>
        <span>✓ план</span>
      </div>
    </div>
    <div class="preview-card small-a" aria-hidden="true">План действий</div>
    <div class="preview-card small-b" aria-hidden="true">Оценка перспектив</div>
  `;
  wrap.appendChild(art);
  if (screen.proof) {
    const proof = el("div", "intro-proof");
    proof.innerHTML = `
      <div class="proof-avatars" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
      </div>
      <div class="proof-copy">
        <strong>${screen.proof.passed}</strong>
        <span><b></b>${screen.proof.active}</span>
        ${screen.proof.expert ? `<small>${screen.proof.expert}</small>` : ""}
      </div>
    `;
    wrap.appendChild(proof);
  }
  wrap.appendChild(button(screen.button, "primary", next));
  wrap.appendChild(el("div", "intro-note", "~5 минут"));
  if (screen.gifts?.length) {
    const gifts = el("div", "intro-gifts");
    gifts.appendChild(el("span", "intro-gifts-label", "После прохождения"));
    screen.gifts.forEach((gift) => {
      gifts.appendChild(el("div", "intro-gift", `<span>🎁</span><strong>${gift.label}</strong>`));
    });
    wrap.appendChild(gifts);
  }
  return wrap;
}

function renderStage(screen) {
  const wrap = baseContent(screen);
  const panel = el("div", "stage-panel");
  panel.appendChild(el("div", `stage-visual ${screen.visual || "route"}`, stageVisualMarkup(screen.visual, screen.visualOnly)));
  if (screen.source) {
    panel.appendChild(el("div", "stage-source", `<span>Основано на исследованиях</span><strong>${screen.source}</strong>`));
  }
  const tags = el("div", "stage-tags");
  screen.tags.forEach((tag) => tags.appendChild(el("span", "", tag)));
  panel.appendChild(tags);
  wrap.appendChild(panel);
  wrap.appendChild(button(screen.button, "primary", next));
  return wrap;
}

function stageVisualMarkup(type = "route", visualOnly = false) {
  const titles = {
    recovery: ["Энергия", "проверяем восстановление"],
    work: ["Работа", "ищем ежедневный источник"],
    signal: ["Сигнал", "дело не только в отдыхе"],
    research: ["62%", "пересмотрели бы профессию"],
    directions: ["Склонности", "смотрим тип задач"],
    route: ["Маршрут", "без резких прыжков"],
    plan: ["План", "профессии и обучение"],
  };
  const [title, caption] = titles[type] || titles.route;
  if (visualOnly) {
    return `
      <div class="visual-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
      <div class="visual-pulse" aria-hidden="true"><span></span><span></span><span></span></div>
    `;
  }
  return `
    <div class="visual-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="visual-card">
      <strong>${title}</strong>
      <span>${caption}</span>
    </div>
  `;
}

function renderProfileName(screen) {
  if (state.answers.nameGreetingShown) {
    const wrap = el("div", "content name-greeting");
    wrap.appendChild(el("div", "eyebrow", "Настройка 1 из 6"));
    wrap.appendChild(el("div", "name-emoji", getNameEmoji(state.lead.name), { "aria-hidden": "true" }));
    wrap.appendChild(el("h2", "", `Приятно познакомиться, ${state.lead.name}!`));
    const meaning = getNameMeaning(state.lead.name);
    wrap.appendChild(el("div", "name-meaning", `<span>Небольшой факт для настроения</span><p>${meaning}</p>`));
    wrap.appendChild(button("Продолжить", "primary", next));
    return wrap;
  }

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
    state.answers.nameGreetingShown = true;
    render();
  });
  wrap.appendChild(card);
  return wrap;
}

function renderProfileWork(screen) {
  const wrap = baseContent(screen);
  const selected = state.answers.occupationStatus;
  const options = el("div", "options");
  screen.options.forEach((option) => {
    options.appendChild(choiceButton(option, selected === option.label, () => {
      state.answers.occupationStatus = option.label;
      state.answers[screen.key] = option.label;
      if (option.label === "Учусь") {
        state.answers.occupationRole = "";
      }
      next();
    }));
  });

  wrap.appendChild(options);
  return wrap;
}

function renderProfileRole(screen) {
  const wrap = baseContent(screen);
  const card = el("form", "form-card fields");
  const roleSelect = selectField("Сфера или роль", screen.roles, state.answers.occupationRoleChoice || "");
  const isOther = roleSelect.input.value === "Другое";
  const role = isOther ? field("Свой вариант", "text", "Например: менеджер проекта", state.answers.occupationRoleCustom || "") : null;
  const error = el("div", "error");
  card.appendChild(roleSelect.wrap);
  roleSelect.input.addEventListener("change", () => {
    state.answers.occupationRoleChoice = roleSelect.input.value;
    if (roleSelect.input.value !== "Другое") state.answers.occupationRoleCustom = "";
    render();
  });
  if (role) card.appendChild(role.wrap);
  card.appendChild(error);
  const submit = button("Продолжить", "primary");
  submit.type = "submit";
  card.appendChild(submit);
  card.addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedRole = roleSelect.input.value;
    const customRole = role ? role.input.value.trim() : "";
    if (!selectedRole) {
      error.textContent = "Выберите роль из списка или укажите свой вариант.";
      return;
    }
    if (selectedRole === "Другое" && customRole.length < 2) {
      error.textContent = "Напишите свой вариант — можно коротко.";
      return;
    }
    const value = selectedRole === "Другое" ? customRole : selectedRole;
    state.answers.occupationRoleChoice = selectedRole;
    state.answers.occupationRoleCustom = customRole;
    state.answers[screen.key] = value;
    state.answers.occupation = `${state.answers.occupationStatus}: ${value}`;
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

function renderSingleReveal(screen) {
  const wrap = baseContent(screen);
  const selectedLabel = state.answers[screen.key];
  const selectedOption = screen.options.find((option) => option.label === selectedLabel);
  const options = el("div", "options reveal-options");
  screen.options.forEach((option) => {
    options.appendChild(choiceButton(option, selectedLabel === option.label, () => {
      state.answers[screen.key] = option.label;
      render();
    }));
  });
  wrap.appendChild(options);

  if (selectedOption?.reveal) {
    wrap.appendChild(
      el(
        "div",
        "reveal-note",
        `<span>Что это может значить</span><p>${selectedOption.reveal}</p>`,
      ),
    );
  }

  const nextButton = button("Продолжить", "primary", () => {
    applyOption(selectedOption);
    next();
  });
  nextButton.disabled = !selectedOption;
  wrap.appendChild(nextButton);
  return wrap;
}

function renderMiniTask(screen) {
  const wrap = el("div", "content mini-task-content");
  wrap.appendChild(el("div", `mini-visual ${screen.visual}`, miniTaskVisual(screen.visual)));
  const card = el("div", "mini-task-card");
  card.appendChild(el("div", "mini-task-meta", `<span>${screen.eyebrow}</span><strong>${screen.percent}</strong>`));
  card.appendChild(el("h2", "", personalize(screen.title)));
  if (screen.text) card.appendChild(el("p", "", personalize(screen.text)));
  const options = el("div", "mini-options");
  screen.options.forEach((option) => {
    options.appendChild(choiceButton(option, state.answers[screen.key] === option.label, () => {
      state.answers[screen.key] = option.label;
      applyOption(option);
      if (option.direction) bumpDirection(option.direction, 2);
      next();
    }));
  });
  card.appendChild(options);
  wrap.appendChild(card);
  return wrap;
}

function miniTaskVisual(type) {
  if (type === "site") {
    return `
      <div class="site-frame" aria-hidden="true">
        <span class="site-top"></span>
        <span class="site-title"></span>
        <span class="site-copy a"></span>
        <span class="site-copy b"></span>
        <span class="site-button"></span>
        <span class="site-alert">−27%</span>
      </div>
    `;
  }
  if (type === "interface") {
    return `
      <div class="ui-card-preview" aria-hidden="true">
        <span class="ui-image"></span>
        <span class="ui-title"></span>
        <span class="ui-price"></span>
        <span class="ui-button">Купить</span>
        <span class="ui-warning"></span>
      </div>
    `;
  }
  if (type === "chart") {
    return `
      <div class="chart-frame" aria-hidden="true">
        <span class="grid-line a"></span><span class="grid-line b"></span><span class="grid-line c"></span>
        <span class="bar bar-a"></span><span class="bar bar-b"></span>
        <b class="legend a">Компания A</b><b class="legend b">Компания Б</b>
      </div>
    `;
  }
  if (type === "maze") {
    return `
      <div class="maze-frame" aria-hidden="true">
        <span class="wall w1"></span><span class="wall w2"></span><span class="wall w3"></span><span class="wall w4"></span>
        <span class="wall w5"></span><span class="wall w6"></span><span class="wall w7"></span><span class="wall w8"></span>
        <b>старт</b><strong>выход</strong>
      </div>
    `;
  }
  return `
    <div class="closet-frame" aria-hidden="true">
      <span class="rail"></span>
      <span class="cloth c1"></span><span class="cloth c2"></span><span class="cloth c3"></span><span class="cloth c4"></span>
      <span class="pile p1"></span><span class="pile p2"></span><span class="pile p3"></span><span class="pile p4"></span>
    </div>
  `;
}

function renderMulti(screen) {
  const wrap = baseContent(screen);
  const selected = new Set(state.answers[screen.key] || []);
  const options = el("div", "options");
  const min = screen.min || 1;
  const max = screen.limit || screen.options.length;
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
  nextButton.disabled = selected.size < min;

  screen.options.forEach((option) => {
    const item = choiceButton(option, selected.has(option.label), () => {
      if (selected.has(option.label)) {
        selected.delete(option.label);
      } else if (selected.size < max) {
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

function renderWorkSliders(screen) {
  const wrap = baseContent(screen);
  const defaultValues = Object.fromEntries(screen.sliders.map((slider) => [slider.id, 50]));
  const saved = state.answers[screen.key] || { values: defaultValues, touched: screen.sliders.map((slider) => slider.id) };
  const touched = new Set(saved.touched || []);
  const values = { ...defaultValues, ...saved.values };
  state.answers[screen.key] = { values, touched: [...touched] };
  const list = el("div", "slider-stack");
  const nextButton = button("Продолжить", "primary", next);

  screen.sliders.forEach((slider) => {
    const value = values[slider.id] ?? 50;
    const row = el("div", "work-slider");
    row.innerHTML = `
      <div class="slider-labels">
        <span>${slider.left}</span>
        <span>${slider.right}</span>
      </div>
      <input type="range" min="0" max="100" value="${value}" aria-label="${slider.left} — ${slider.right}" />
    `;
    const input = row.querySelector("input");
    input.addEventListener("input", () => {
      values[slider.id] = Number(input.value);
      touched.add(slider.id);
      state.answers[screen.key] = { values, touched: [...touched] };
      nextButton.disabled = touched.size < screen.sliders.length;
    });
    list.appendChild(row);
  });

  wrap.appendChild(list);
  nextButton.disabled = false;
  wrap.appendChild(nextButton);
  return wrap;
}

function renderQuickCards(screen) {
  const saved = state.answers[screen.key] || { index: 0, selected: [], rejected: [] };
  const index = Math.min(saved.index || 0, screen.items.length - 1);
  const item = screen.items[index];
  const wrap = baseContent(screen);
  wrap.appendChild(el("div", "quick-progress", `<span>${index + 1} из ${screen.items.length}</span><strong>${Math.round((index / screen.items.length) * 100)}%</strong>`));
  wrap.appendChild(el("div", "quick-card", `<span>${item.icon}</span><strong>${item.label}</strong>`));
  const actions = el("div", "quick-actions");
  actions.appendChild(button("Не про меня", "secondary-pill", () => answerQuick(false)));
  actions.appendChild(button("Про меня", "primary-pill", () => answerQuick(true)));
  wrap.appendChild(actions);

  function answerQuick(isSelected) {
    const selected = new Set(saved.selected || []);
    const rejected = new Set(saved.rejected || []);
    if (isSelected) {
      selected.add(item.id);
      rejected.delete(item.id);
    } else {
      rejected.add(item.id);
      selected.delete(item.id);
    }
    const nextIndex = index + 1;
    state.answers[screen.key] = { index: nextIndex, selected: [...selected], rejected: [...rejected] };
    if (nextIndex >= screen.items.length) {
      next();
      return;
    }
    render();
  }

  return wrap;
}

function renderFavoriteWork(screen) {
  const wrap = baseContent(screen);
  const saved = state.answers[screen.key] || { rhythm: "", format: "", taskTypes: [], value: "" };
  const form = el("div", "favorite-work");

  form.appendChild(favoriteGroup(screen, saved, "rhythm"));
  form.appendChild(favoriteGroup(screen, saved, "format"));
  form.appendChild(favoriteGroup(screen, saved, "taskTypes"));
  form.appendChild(favoriteGroup(screen, saved, "value"));
  wrap.appendChild(form);

  const nextButton = button("Продолжить", "primary", next);
  nextButton.disabled = !saved.rhythm || !saved.format || !saved.value || !saved.taskTypes?.length;
  wrap.appendChild(nextButton);
  return wrap;
}

function favoriteGroup(screen, saved, key) {
  const group = screen.groups[key];
  const node = el("div", `favorite-group ${key}`);
  node.appendChild(el("strong", "", group.label));
  const options = el("div", "favorite-options");
  group.options.forEach((option) => {
    const isMulti = key === "taskTypes";
    const selected = isMulti ? saved[key]?.includes(option.label) : saved[key] === option.label;
    const buttonNode = el("button", `favorite-chip${selected ? " selected" : ""}`, `${option.icon} ${option.label}`);
    buttonNode.type = "button";
    buttonNode.addEventListener("click", () => {
      const nextValue = { ...saved, taskTypes: [...(saved.taskTypes || [])] };
      if (isMulti) {
        if (nextValue.taskTypes.includes(option.label)) {
          nextValue.taskTypes = nextValue.taskTypes.filter((item) => item !== option.label);
        } else if (nextValue.taskTypes.length < (group.limit || 3)) {
          nextValue.taskTypes.push(option.label);
        }
      } else {
        nextValue[key] = option.label;
      }
      state.answers[screen.key] = nextValue;
      render();
    });
    options.appendChild(buttonNode);
  });
  node.appendChild(options);
  return node;
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
    state.scores[screen.axis || "energy"] += Math.max(0, 10 - value);
    next();
  }));
  return wrap;
}

function renderInsight(screen) {
  const wrap = baseContent(screen);
  const card = el("div", "insight-card");
  if (screen.stat) {
    card.classList.add("research-insight");
    card.appendChild(
      el(
        "div",
        "research-stat",
        `<strong>${screen.stat.value}</strong><span>${screen.stat.label}</span><small>${screen.stat.source}</small>`,
      ),
    );
    card.appendChild(
      el(
        "div",
        "research-bars",
        "<span style=\"--bar: 62%\"></span><span style=\"--bar: 44%\"></span><span style=\"--bar: 28%\"></span>",
      ),
    );
  } else {
    card.appendChild(el("div", `stage-visual insight ${screen.visual || "signal"}`, stageVisualMarkup(screen.visual || "signal")));
  }
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
    const node = el("div", "drag-item");
    node.innerHTML = optionVisual(item);
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
    const selectedItem = selected?.level === level ? getDragItem(screen, selected.id) : null;
    const zone = el("div", "drop-zone", `<span>${label}</span><strong>${selectedItem ? optionVisual(selectedItem) : ""}</strong>`);
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
  const list = el("div", "ranking-list ranking-pyramid");
  let draggedId = null;

  order.forEach((id, index) => {
    const item = screen.items.find((entry) => entry.id === id);
    const row = el("div", `ranking-card rank-level-${index + 1}`);
    row.draggable = true;
    row.dataset.id = id;
    row.innerHTML = `
      <span class="rank-number">${index === 0 ? "↑" : index + 1}</span>
      <strong>${optionVisual(item)}</strong>
      <em>${index === 0 ? "самое важное" : index === order.length - 1 ? "менее важно" : "важно"}</em>
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

function renderPairCompare(screen) {
  const wrap = baseContent(screen);
  const pairs = getComparisonPairs(screen.items);
  const saved = state.answers[screen.key] || {
    comparisons: [],
    wins: Object.fromEntries(screen.items.map((item) => [item.id, 0])),
  };
  const round = Math.min(saved.comparisons.length, screen.rounds || pairs.length);
  const pair = pairs[round % pairs.length];
  const left = screen.items.find((item) => item.id === pair[0]);
  const right = screen.items.find((item) => item.id === pair[1]);

  wrap.appendChild(
    el(
      "div",
      "compare-progress",
      `<span>Сравнение ${round + 1} из ${Math.min(screen.rounds || pairs.length, pairs.length)}</span><strong>${Math.round((round / Math.min(screen.rounds || pairs.length, pairs.length)) * 100)}%</strong>`,
    ),
  );

  const card = el("div", "compare-card");
  card.appendChild(el("div", "compare-question", `Что мешает сильнее?`));
  const choices = el("div", "compare-choices");
  [left, right].forEach((item) => {
    const node = el("button", "compare-choice", optionVisual(item));
    node.type = "button";
    node.addEventListener("click", () => choosePairWinner(item.id));
    choices.appendChild(node);
  });
  card.appendChild(choices);
  wrap.appendChild(card);

  const standings = el("div", "compare-standings");
  getPairRanking(screen.items, saved.wins).forEach((item, index) => {
    standings.appendChild(el("span", index === 0 ? "leading" : "", `${index + 1}. ${item.label}`));
  });
  wrap.appendChild(standings);

  function choosePairWinner(winnerId) {
    const wins = { ...saved.wins, [winnerId]: (saved.wins[winnerId] || 0) + 1 };
    const comparisons = [...saved.comparisons, { left: left.id, right: right.id, winner: winnerId }];
    const order = getPairRanking(screen.items, wins).map((item) => item.id);
    state.answers[screen.key] = { comparisons, wins, order };
    if (comparisons.length >= Math.min(screen.rounds || pairs.length, pairs.length)) {
      next();
      return;
    }
    render();
  }

  return wrap;
}

function renderBattery(screen) {
  const wrap = baseContent(screen);
  const max = screen.max || 4;
  let selected = state.answers[screen.key] || [];
  const percent = Math.round((selected.length / max) * 100);

  const batteryCard = el("div", "battery-card");
  const meter = el("div", "battery-meter", `<span>${percent}%</span>`);
  meter.style.setProperty("--charge", `${percent}%`);
  const chips = el("div", "battery-chips");
  if (selected.length) {
    selected.forEach((id) => {
      const item = screen.items.find((entry) => entry.id === id);
      if (item) chips.appendChild(el("span", "", `${item.icon} ${item.label}`));
    });
  } else {
    chips.appendChild(el("em", "", "Добавьте несколько пунктов, которые хочется вернуть"));
  }
  batteryCard.appendChild(meter);
  batteryCard.appendChild(chips);
  wrap.appendChild(batteryCard);

  const options = el("div", "battery-options");
  screen.items.forEach((item) => {
    const isSelected = selected.includes(item.id);
    const node = el("button", `battery-option${isSelected ? " selected" : ""}`, optionVisual(item));
    node.type = "button";
    node.addEventListener("click", () => {
      if (isSelected) {
        selected = selected.filter((id) => id !== item.id);
      } else if (selected.length < max) {
        selected = [...selected, item.id];
      }
      state.answers[screen.key] = selected;
      render();
    });
    options.appendChild(node);
  });
  wrap.appendChild(options);

  const nextButton = button(selected.length > 1 ? "Продолжить" : "Выбрать и продолжить", "primary", () => {
    state.answers[screen.key] = selected;
    next();
  });
  nextButton.disabled = selected.length < 1;
  wrap.appendChild(nextButton);
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
    state.answers[screen.key] = { points: [pointFromEvent(event)] };
    drawCanvas(ctx, canvas, state.answers[screen.key].points);
    renderFreeDrawButtonState();
  }

  function continueDraw(event) {
    if (!drawing) return;
    event.preventDefault();
    state.answers[screen.key].points.push(pointFromEvent(event));
    drawCanvas(ctx, canvas, state.answers[screen.key].points);
    renderFreeDrawButtonState();
  }

  function endDraw() {
    drawing = false;
  }

  canvas.addEventListener("pointerdown", startDraw);
  canvas.addEventListener("pointermove", continueDraw);
  canvas.addEventListener("pointerup", endDraw);
  canvas.addEventListener("pointerleave", endDraw);

  const actions = el("div", "inline-actions");
  actions.appendChild(button("Очистить линию", "secondary", () => {
    state.answers[screen.key] = { points: [] };
    render();
  }));
  wrap.appendChild(actions);

  const nextButton = button("Продолжить", "primary", () => {
    const currentPoints = state.answers[screen.key]?.points || [];
    state.answers[screen.key] = {
      points: currentPoints,
      type: detectLineType(currentPoints),
    };
    next();
  });
  function renderFreeDrawButtonState() {
    nextButton.disabled = (state.answers[screen.key]?.points || []).length < 4;
  }
  renderFreeDrawButtonState();
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
    zoneEl.innerHTML = `<strong>${screen.zones?.[zone] || (zone === "now" ? "Сейчас" : "Хочу")}</strong>`;
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
    card.innerHTML = optionVisual(item);
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
  const nextButton = button(screen.button || "Показать контраст", "primary", next);
  nextButton.disabled = scene.want.length < 3;
  wrap.appendChild(nextButton);
  return wrap;
}

function renderProof(screen) {
  const wrap = baseContent(screen);
  wrap.classList.add("proof-content");
  const grid = el("div", "proof-grid");
  screen.cards.forEach((card) => {
    const node = el("div", "proof-card");
    node.appendChild(el("span", "proof-icon", card.icon || "✓"));
    const copy = el("div", "proof-card-copy");
    copy.appendChild(el("strong", "", card.title));
    copy.appendChild(el("p", "", card.text));
    node.appendChild(copy);
    grid.appendChild(node);
  });
  wrap.appendChild(grid);

  if (screen.reviews?.length) {
    const current = state.answers.proofReviewIndex || 0;
    const review = screen.reviews[current % screen.reviews.length];
    const carousel = el("div", "review-carousel");
    carousel.appendChild(el("div", "review-label", "Реальные истории выпускников"));
    carousel.appendChild(el("div", "review-stars", "★".repeat(review.rating || 5)));
    carousel.appendChild(
      el(
        "div",
        "review-head",
        `<strong>${review.title}</strong><span>${review.name}, ${review.meta}</span>`,
      ),
    );
    carousel.appendChild(el("p", "review-text", `“${review.text}”`));
    const dots = el("div", "review-dots");
    screen.reviews.forEach((_, index) => {
      const dot = el("button", index === current ? "active" : "", "", { "aria-label": `Показать отзыв ${index + 1}` });
      dot.type = "button";
      dot.addEventListener("click", () => {
        state.answers.proofReviewIndex = index;
        render();
      });
      dots.appendChild(dot);
    });
    carousel.appendChild(dots);
    wrap.appendChild(carousel);
    const timer = window.setTimeout(() => {
      if (screens[state.step] !== screen) return;
      state.answers.proofReviewIndex = (current + 1) % screen.reviews.length;
      render();
    }, 6500);
    state.timers.push(timer);
  }

  wrap.appendChild(button(screen.button || "Продолжить", "primary", next));
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

function renderDiscountGame(screen) {
  const wrap = baseContent(screen);
  const selected = state.answers[screen.key];
  const isRevealing = state.answers[`${screen.key}Revealing`];
  const isRevealed = Boolean(selected) && !isRevealing;
  const game = el("div", "discount-game");
  const grid = el("div", "discount-cards");
  screen.cards.forEach((card, index) => {
    const isSelected = selected === card.id;
    const visibleDiscount = isRevealed ? getDiscountForCard(card.id, selected, index) : "?";
    const node = document.createElement("button");
    node.type = "button";
    node.className = `discount-card${isSelected ? " selected" : ""}${isRevealed ? " revealed" : ""}`;
    node.disabled = isRevealed;
    node.innerHTML = `
      <span>${card.label}</span>
      <strong>${isRevealed ? `${visibleDiscount}%` : "?"}</strong>
    `;
    node.addEventListener("click", () => {
      state.answers[screen.key] = card.id;
      state.answers[`${screen.key}Revealing`] = true;
      state.discount = {
        percent: 50,
        code: createPromoCode(state.lead.name),
        deadline: getDiscountDeadline(),
      };
      render();
      state.timers.push(
        window.setTimeout(() => {
          state.answers[`${screen.key}Revealing`] = false;
          render();
        }, 1800),
      );
    });
    grid.appendChild(node);
  });
  game.appendChild(grid);

  if (isRevealing) {
    game.appendChild(
      el(
        "div",
        "discount-drumroll",
        "<strong>Барабанная дробь...</strong><span></span><span></span><span></span>",
      ),
    );
    wrap.appendChild(game);
    return wrap;
  }

  if (isRevealed) {
    wrap.appendChild(
      el(
        "div",
        "fireworks-overlay",
        "<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>",
      ),
    );
    game.appendChild(
      el(
        "div",
        "discount-result",
        `<strong>Вау, вот это интуиция — вы открыли максимальную скидку 50%</strong><span>Ваш промокод: <b>${state.discount.code}</b></span><span>Скидка действует до ${state.discount.deadline}</span>`,
      ),
    );
    wrap.appendChild(game);
    wrap.appendChild(button("Забрать результат и скидку", "primary", next));
    return wrap;
  }

  game.appendChild(el("div", "discount-hint", "Подсказка: выбирайте быстро, здесь важна первая реакция."));
  wrap.appendChild(game);
  return wrap;
}

function renderLead(screen) {
  const wrap = baseContent(screen);
  const card = el("form", "form-card fields");
  const email = field("Email", "email", "name@email.com", state.lead.email);
  const phone = field("Телефон", "tel", "+7 999 123-45-67", state.lead.phone);
  const error = el("div", "error");
  card.appendChild(email.wrap);
  card.appendChild(phone.wrap);
  card.appendChild(error);
  const submit = button("Показать результат", "primary");
  submit.type = "submit";
  card.appendChild(submit);
  card.addEventListener("submit", (event) => {
    event.preventDefault();
    state.lead.email = email.input.value.trim();
    state.lead.phone = phone.input.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.lead.email)) {
      error.textContent = "Введите корректный email, чтобы открыть результат.";
      return;
    }
    const phoneDigits = state.lead.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      error.textContent = "Введите номер телефона, чтобы эксперт мог связаться с вами.";
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
  if (state.discount) {
    wrap.appendChild(
      el(
        "div",
        "result-discount",
        `<div class="result-discount-copy"><span>Ваша персональная скидка на обучение:</span><strong>${state.discount.percent}%</strong><span>Промокод ${state.discount.code} действует до ${state.discount.deadline}</span></div><button class="discount-reserve" type="button">Забронировать скидку</button>`,
      ),
    );
  }

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

  const cta = button(state.consultationRequested ? "Заявка отправлена" : "Оставить заявку на консультацию", "primary", () => {
    state.consultationRequested = true;
    render();
  });
  cta.disabled = state.consultationRequested;
  wrap.appendChild(cta);
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
    ${option.icon ? `<span class="choice-icon">${option.icon}</span>` : ""}
    <span class="choice-text">
      <span class="choice-title">${option.label}</span>
      ${option.note ? `<span class="choice-note">${option.note}</span>` : ""}
    </span>
  `;
  return node;
}

function optionVisual(option) {
  return `${option.icon ? `<span class="option-icon">${option.icon}</span>` : ""}<span>${option.label}</span>`;
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

function selectField(label, options, value) {
  const wrap = el("div", "field");
  const id = `select-${label}`;
  const input = document.createElement("select");
  input.id = id;
  input.innerHTML = `<option value="">Выберите вариант</option>${options.map((option) => `<option value="${option}">${option}</option>`).join("")}`;
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

function getDiscountForCard(cardId, selectedId, index) {
  if (cardId === selectedId) return 50;
  return [20, 30, 25][index] || 20;
}

function createPromoCode(name = "") {
  const translit = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "i",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ы: "y",
    э: "e",
    ю: "yu",
    я: "ya",
  };
  const normalized = name
    .toLowerCase()
    .replace(/[ъь]/g, "")
    .split("")
    .map((char) => translit[char] || char)
    .join("")
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 8)
    .toUpperCase();
  return `${normalized || "SKILL"}50`;
}

function getDiscountDeadline() {
  const deadline = new Date(Date.now() + 48 * 60 * 60 * 1000);
  return deadline.toLocaleString("ru-RU", {
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getNameMeaning(name = "") {
  const key = name.trim().toLowerCase().replace(/ё/g, "е");
  const meanings = {
    анна: "Анна часто переводят как “милость” или “благодать”. Спокойная сила, которую не всегда видно сразу.",
    анастасия: "Анастасия означает “возрождение”. Очень подходящее имя для момента, когда хочется перезапустить жизнь.",
    настя: "Настя происходит от Анастасии: “возрождение”. В этом есть красивая идея нового этапа.",
    мария: "Мария связывают с глубиной, стойкостью и внутренней опорой.",
    екатерина: "Екатерина часто трактуется как “чистая” или “ясная”. Хороший символ поиска ясности.",
    катя: "Катя происходит от Екатерины: “ясная”, “чистая”. Как будто уже есть запрос на понятный путь.",
    ольга: "Ольга означает “святая” или “мудрая”. В этом имени много внутреннего достоинства.",
    елена: "Елена часто связывают со светом. Красивый знак: найти то, что снова зажигает.",
    дарья: "Дарья означает “обладающая добром”. В этом имени много щедрости и силы.",
    ирина: "Ирина означает “мир” или “спокойствие”. Возможно, именно этого сейчас особенно хочется.",
    юлия: "Юлия часто ассоциируется с мягкостью, живостью и умением адаптироваться.",
    ксения: "Ксения связывают с гостеприимством и открытостью к новому опыту.",
    наталья: "Наталья означает “родная”. В этом имени есть тепло и чувство опоры.",
    александр: "Александр означает “защитник”. Иногда таким людям важно научиться защищать и свои силы тоже.",
    алексей: "Алексей тоже связан с идеей защиты. Хороший повод бережнее отнестись к себе.",
    дмитрий: "Дмитрий ассоциируется с землей и устойчивостью. Возможно, вам важен понятный фундамент.",
    сергей: "Сергей часто связывают с высоким статусом и внутренним достоинством.",
    михаил: "Михаил переводят как “кто как Бог?”. Имя с сильным ощущением масштаба и вопроса к себе.",
    иван: "Иван означает “Бог милостив”. В этом имени много простоты и надежной силы.",
    леонид: "Леонид означает “подобный льву”. В этом имени много внутренней силы, смелости и достоинства.",
    артем: "Артем часто связывают со здоровьем, силой и собранностью. В этом имени есть ощущение внутреннего стержня.",
    евгения: "Евгения означает “благородная”. В этом имени есть чувство достоинства, глубины и внутренней опоры.",
    александра: "Александра несет идею защиты и силы. Похоже, сейчас важно направить эту силу не только на других, но и на себя.",
    саша: "Саша связан(а) с идеей защиты. Иногда новый этап начинается с решения бережнее защищать свои силы и желания.",
    алиса: "Алиса часто воспринимается как имя любопытства и самостоятельности. В нем есть готовность открывать новые двери.",
    алена: "Алена ассоциируется со светом и теплом. Хороший образ для периода, когда хочется вернуть себе ясность и интерес.",
    алина: "Алина звучит мягко, но в нем много внутренней собранности. Такой баланс часто помогает спокойно менять курс.",
    алла: "Алла связывается с яркостью и цельностью. В этом имени есть ощущение человека, которому важно быть собой.",
    альбина: "Альбина означает “белая”, “светлая”. В этом имени есть образ ясности, которую можно вернуть шаг за шагом.",
    амелия: "Амелия часто связывают с трудолюбием и внутренним движением. В этом есть хороший потенциал для нового этапа.",
    ангелина: "Ангелина ассоциируется с вестью и внутренним светом. Возможно, сейчас важно услышать собственный сигнал к переменам.",
    анжелика: "Анжелика звучит мягко и ярко одновременно. В этом имени есть энергия заметности и нового раскрытия.",
    арина: "Арина близка к Ирине и идее мира. Возможно, ваш следующий шаг связан с возвращением спокойствия и опоры.",
    варвара: "Варвара звучит сильно и самобытно. В этом имени есть право идти своим путем, даже если он не самый очевидный.",
    валентина: "Валентина связана с силой и жизненностью. Хороший знак для момента, когда хочется снова почувствовать ресурс.",
    валерия: "Валерия означает “сильная”, “здоровая”. В этом имени много энергии восстановления и движения вперед.",
    вера: "Вера говорит сама за себя: опора, доверие и способность держаться выбранного направления.",
    вероника: "Вероника часто трактуется как “несущая победу”. В этом имени есть ощущение, что перемены могут стать вашей сильной стороной.",
    виктория: "Виктория означает “победа”. Важно только выбрать не рывок, а победу, которая действительно ваша.",
    виолетта: "Виолетта ассоциируется с тонкостью, вкусом и вниманием к нюансам. Это может стать сильной стороной в новом маршруте.",
    галина: "Галина связывается со спокойствием. Иногда именно спокойная ясность помогает решиться на важные перемены.",
    диана: "Диана звучит независимо и точно. В этом имени есть энергия фокуса, выбора и движения к своему.",
    дина: "Дина короткое и собранное имя. В нем есть ощущение внутреннего темпа и готовности действовать.",
    ева: "Ева означает “жизнь”. Очень красивый символ для момента, когда хочется вернуть себе энергию и интерес.",
    елизавета: "Елизавета звучит уверенно и достойно. В этом имени есть ощущение масштаба, который можно раскрывать постепенно.",
    лиза: "Лиза происходит от Елизаветы. В этом имени есть мягкость, ум и потенциал для уверенного нового шага.",
    жанна: "Жанна связана с внутренней силой и стойкостью. Похоже, у вас есть ресурс пройти через перемены без потери себя.",
    зоя: "Зоя означает “жизнь”. В этом имени много простого, но сильного импульса: снова почувствовать себя живо.",
    инна: "Инна ассоциируется с потоком и движением. Возможно, сейчас важно убрать то, что мешает этому движению.",
    карина: "Карина звучит ярко и цельно. В этом имени есть энергия человека, который может выбрать более смелую траекторию.",
    кристина: "Кристина ассоциируется с внутренней опорой и верностью себе. Это помогает не теряться в период перемен.",
    лариса: "Лариса звучит свободно и тепло. В этом имени есть ощущение пространства, которого иногда очень не хватает.",
    лидия: "Лидия несет спокойное достоинство и практичность. Такой ресурс особенно ценен, когда нужно менять жизнь без хаоса.",
    любовь: "Любовь говорит о тепле, глубине и способности вкладываться. Важно, чтобы эта сила работала и на вас тоже.",
    людмила: "Людмила означает “милая людям”. В этом имени много контакта, но сейчас важно не забыть о собственном ресурсе.",
    маргарита: "Маргарита означает “жемчужина”. В этом имени есть идея ценности, которую не всегда видно с первого взгляда.",
    милана: "Милана звучит тепло и современно. В этом имени есть мягкая сила и потенциал к красивому развороту.",
    надежда: "Надежда говорит о способности видеть продолжение. Иногда именно она помогает начать новый этап.",
    ника: "Ника означает “победа”. В этом имени есть короткая, ясная энергия движения вперед.",
    нина: "Нина звучит спокойно и уверенно. В этом имени есть внутренняя устойчивость, на которую можно опереться.",
    оксана: "Оксана близка к Ксении и идее открытости. В этом имени есть готовность к новому опыту.",
    полина: "Полина звучит светло и собранно. В этом имени есть сочетание мягкости и ясного внутреннего выбора.",
    раиса: "Раиса ассоциируется с легкостью и достоинством. Возможно, сейчас важно вернуть себе больше пространства.",
    регина: "Регина означает “царица”. В этом имени есть ощущение права занимать свое место без лишних оправданий.",
    светлана: "Светлана буквально несет идею света. Хороший символ для поиска ясности и нового интереса.",
    софия: "София означает “мудрость”. В этом имени есть способность видеть глубже и выбирать зрелые перемены.",
    соня: "Соня происходит от Софии: “мудрость”. В этом есть намек на спокойный, но точный выбор своего пути.",
    тамара: "Тамара звучит устойчиво и тепло. В этом имени есть ощущение корней и силы, которая раскрывается постепенно.",
    татьяна: "Татьяна часто связывается с умением устраивать и задавать порядок. Это сильное качество для нового этапа.",
    ульяна: "Ульяна звучит живо и самобытно. В этом имени есть энергия человека, которому важно не жить по инерции.",
    яна: "Яна короткое, ясное и сильное имя. В нем есть ощущение самостоятельного выбора и внутреннего вектора.",
    аделина: "Аделина ассоциируется с благородством и тонкостью. В этом имени есть потенциал раскрыться бережно, но заметно.",
    айгуль: "Айгуль часто переводят как “лунный цветок”. В этом имени есть мягкая сила и способность расти в своем темпе.",
    амина: "Амина означает “надежная”, “верная”. В этом имени много внутренней опоры и спокойной силы.",
    алия: "Алия связывается с высотой и достоинством. Возможно, сейчас пришло время поднять планку для собственной жизни.",
    гульнара: "Гульнара означает “цветок граната”. В этом имени есть яркость, глубина и потенциал к раскрытию.",
    зарина: "Зарина ассоциируется с золотом и сиянием. В этом имени есть ощущение ценности, которую важно не прятать.",
    камилла: "Камилла звучит мягко и уверенно. В этом имени есть баланс гибкости и внутренней силы.",
    лейла: "Лейла ассоциируется с глубиной и притягательностью. В этом имени есть способность чувствовать тонкие сигналы перемен.",
    мадина: "Мадина звучит спокойно и основательно. В этом имени есть чувство опоры, которое помогает двигаться без суеты.",
    майя: "Майя ассоциируется с обновлением, теплом и жизнью. Хороший образ для старта нового периода.",
    малика: "Малика означает “царица”. В этом имени есть достоинство и право выбирать более сильную позицию.",
    сабина: "Сабина звучит мягко, но уверенно. В этом имени есть способность сохранять себя и при этом меняться.",
    сауле: "Сауле означает “солнце”. В этом имени много тепла, света и потенциала снова зажечь интерес.",
    фатима: "Фатима ассоциируется с глубиной, стойкостью и заботой. Важно, чтобы эта забота возвращалась и к вам.",
    адам: "Адам означает “человек”. В этом имени есть простая сильная идея: начать с себя и своей реальной жизни.",
    андрей: "Андрей часто трактуется как “мужественный”. В этом имени есть решимость, которую можно направить на честные перемены.",
    антон: "Антон звучит собранно и уверенно. В этом имени есть способность держать курс, когда решение уже принято.",
    борис: "Борис часто связывают с борьбой и силой. Сейчас эта сила может пригодиться не для борьбы, а для нового выбора.",
    вадим: "Вадим звучит независимо и немного дерзко. В этом имени есть энергия выйти из привычного сценария.",
    валерий: "Валерий означает “сильный”, “здоровый”. В этом имени есть тема восстановления ресурса.",
    василий: "Василий связывается с достоинством и внутренней опорой. Хорошая база для спокойных перемен.",
    виктор: "Виктор означает “победитель”. Важно выбрать такую победу, после которой останутся силы и интерес.",
    владимир: "Владимир связывают с миром и влиянием. В этом имени есть масштаб и способность выстраивать свою систему.",
    владислав: "Владислав звучит уверенно и амбициозно. В этом имени есть потенциал занять более сильное место.",
    вячеслав: "Вячеслав связан с признанием и достоинством. Возможно, вам важно, чтобы усилия наконец имели видимый смысл.",
    георгий: "Георгий ассоциируется с трудом, стойкостью и практичностью. Это хорошая опора для постепенных перемен.",
    глеб: "Глеб звучит спокойно и крепко. В этом имени есть ощущение надежного внутреннего фундамента.",
    григорий: "Григорий часто связывают с внимательностью и бодрствованием. В этом имени есть способность вовремя заметить важный сигнал.",
    данил: "Данил звучит спокойно и по-деловому. В этом имени есть ресурс действовать без лишнего шума.",
    даниил: "Даниил ассоциируется с ясностью и внутренней справедливостью. Это помогает честно смотреть на свой путь.",
    денис: "Денис звучит живо и энергично. В этом имени есть потенциал вернуть движение и интерес.",
    егор: "Егор часто связывают с практичностью и устойчивостью. В этом имени есть способность доводить решения до результата.",
    илья: "Илья звучит сильно и прямо. В этом имени есть энергия действия, когда появляется понятная цель.",
    кирилл: "Кирилл ассоциируется с достоинством и умением держать позицию. Это важно, когда выбираешь новый маршрут.",
    константин: "Константин означает “постоянный”, “стойкий”. В этом имени есть ресурс идти к переменам без резких рывков.",
    костя: "Костя происходит от Константина: стойкость и постоянство. Такой ресурс помогает пройти новый этап спокойно.",
    макар: "Макар означает “счастливый”. В этом имени есть теплый намек на право выбирать жизнь, в которой больше радости.",
    максим: "Максим связан с идеей большого масштаба. Возможно, ваш потенциал шире, чем текущая роль.",
    матвей: "Матвей звучит спокойно и надежно. В этом имени есть ощущение внутренней опоры.",
    никита: "Никита связывается с победой. В этом имени есть энергия справиться и выйти на новый уровень.",
    николай: "Николай означает “победитель народов”. В современном смысле это про силу влияния и уверенный выбор.",
    олег: "Олег означает “священный” или “светлый”. В этом имени есть спокойное достоинство и самостоятельность.",
    павел: "Павел звучит просто и надежно. В этом имени есть способность начинать с малого и приходить к большему.",
    петр: "Петр означает “камень”. В этом имени много устойчивости, которая помогает строить новый фундамент.",
    роман: "Роман звучит тепло и уверенно. В этом имени есть чувство масштаба и готовность к новому сюжету.",
    руслан: "Руслан ассоциируется с силой и смелостью. Важно направить эту энергию туда, где есть рост.",
    семен: "Семен связывается с умением слышать. Возможно, сейчас особенно важно услышать себя.",
    станислав: "Станислав связан с признанием и становлением. В этом имени есть потенциал выйти на более заметный уровень.",
    степан: "Степан ассоциируется с достоинством и спокойной силой. Такой ресурс помогает менять жизнь без суеты.",
    тимофей: "Тимофей звучит мягко и надежно. В этом имени есть сочетание глубины и практичности.",
    тимур: "Тимур ассоциируется с твердостью и характером. В этом имени есть энергия решительного нового шага.",
    федор: "Федор звучит основательно и тепло. В этом имени есть ощущение надежности и внутренней силы.",
    юрий: "Юрий часто связывают с практичностью и движением. В этом имени есть готовность перейти от мысли к действию.",
    ярослав: "Ярослав звучит ярко и сильно. В этом имени есть потенциал проявиться заметнее и смелее.",
  };
  return meanings[key] || "Редкое имя часто помогает не растворяться в общем фоне. Возможно, именно эта индивидуальность сейчас и станет вашей точкой роста: в вас больше потенциала к переменам, чем кажется на усталом участке пути.";
}

function getNameEmoji(name = "") {
  const key = name.trim().toLowerCase().replace(/ё/g, "е");
  const emojis = {
    анна: "🌿",
    анастасия: "🌅",
    настя: "🌅",
    мария: "🌊",
    екатерина: "✨",
    катя: "✨",
    ольга: "🕊️",
    елена: "☀️",
    дарья: "🎁",
    ирина: "🕊️",
    юлия: "🌸",
    ксения: "🧭",
    наталья: "🏡",
    александр: "🛡️",
    алексей: "🛡️",
    дмитрий: "🌳",
    сергей: "⭐",
    михаил: "⚡",
    иван: "🌾",
    леонид: "🦁",
    артем: "🎯",
    евгения: "👑",
    александра: "🛡️",
    саша: "🛡️",
    алиса: "🧭",
    алена: "☀️",
    алина: "✨",
    алла: "⭐",
    альбина: "💎",
    амелия: "⚙️",
    ангелина: "☀️",
    анжелика: "✨",
    арина: "🕊️",
    варвара: "🔥",
    валентина: "💪",
    валерия: "💪",
    вера: "🧡",
    вероника: "🏆",
    виктория: "🏆",
    виолетта: "💜",
    галина: "🕊️",
    диана: "🎯",
    дина: "⚡",
    ева: "🌱",
    елизавета: "👑",
    лиза: "👑",
    жанна: "💪",
    зоя: "🌱",
    инна: "🌊",
    карина: "⭐",
    кристина: "✨",
    лариса: "🌤️",
    лидия: "🌳",
    любовь: "🧡",
    людмила: "🤝",
    маргарита: "💎",
    милана: "🌸",
    надежда: "🌅",
    ника: "🏆",
    нина: "🌿",
    оксана: "🧭",
    полина: "✨",
    раиса: "🌤️",
    регина: "👑",
    светлана: "☀️",
    софия: "🧠",
    соня: "🧠",
    тамара: "🌳",
    татьяна: "📌",
    ульяна: "⚡",
    яна: "🎯",
    аделина: "💎",
    айгуль: "🌙",
    амина: "🌿",
    алия: "⭐",
    гульнара: "🌺",
    зарина: "✨",
    камилла: "🌿",
    лейла: "🌙",
    мадина: "🌳",
    майя: "🌱",
    малика: "👑",
    сабина: "🌿",
    сауле: "☀️",
    фатима: "🧡",
    адам: "🌱",
    андрей: "💪",
    антон: "📌",
    борис: "💪",
    вадим: "⚡",
    валерий: "💪",
    василий: "👑",
    виктор: "🏆",
    владимир: "🌍",
    владислав: "⭐",
    вячеслав: "⭐",
    георгий: "🌳",
    глеб: "🌳",
    григорий: "👁️",
    данил: "📌",
    даниил: "📌",
    денис: "⚡",
    егор: "🌳",
    илья: "⚡",
    кирилл: "📌",
    константин: "🌳",
    костя: "🌳",
    макар: "🌤️",
    максим: "🚀",
    матвей: "🌿",
    никита: "🏆",
    николай: "🏆",
    олег: "☀️",
    павел: "🌱",
    петр: "🪨",
    роман: "📖",
    руслан: "⚡",
    семен: "👂",
    станислав: "⭐",
    степан: "🌳",
    тимофей: "🌿",
    тимур: "📌",
    федор: "🌳",
    юрий: "🧭",
    ярослав: "🔥",
  };
  return emojis[key] || "✨";
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

function getComparisonPairs(items) {
  const ids = items.map((item) => item.id);
  const pairs = [];
  for (let first = 0; first < ids.length; first += 1) {
    for (let second = first + 1; second < ids.length; second += 1) {
      pairs.push([ids[first], ids[second]]);
    }
  }
  return pairs;
}

function getPairRanking(items, wins = {}) {
  return [...items].sort((a, b) => {
    const scoreDiff = (wins[b.id] || 0) - (wins[a.id] || 0);
    if (scoreDiff !== 0) return scoreDiff;
    return items.findIndex((item) => item.id === a.id) - items.findIndex((item) => item.id === b.id);
  });
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

function detectLineType(points = []) {
  if (points.length < 4) return "wavy";
  const first = points[0];
  const last = points[points.length - 1];
  const verticalDrop = last.y - first.y;
  const directionChanges = points.slice(2).reduce((count, point, index) => {
    const previous = points[index + 1];
    const beforePrevious = points[index];
    const slopeA = previous.y - beforePrevious.y;
    const slopeB = point.y - previous.y;
    return count + (Math.sign(slopeA) !== Math.sign(slopeB) && Math.abs(slopeA - slopeB) > 8 ? 1 : 0);
  }, 0);
  if (verticalDrop > 36) return "falling";
  if (directionChanges >= 3) return "sharp";
  return "wavy";
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
      scores[screen.axis || "energy"] += Math.max(0, 10 - Number(answer));
      return;
    }

    if (screen.type === "single" || screen.type === "single_reveal") {
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

    if (screen.type === "pair_compare") {
      answer.order?.forEach((id, index) => {
        const item = screen.items.find((option) => option.id === id);
        if (!item) return;
        scores[item.axis] += Math.max(1, screen.items.length - index);
      });
      return;
    }

    if (screen.type === "work_sliders") {
      screen.sliders.forEach((slider) => {
        const value = answer.values?.[slider.id];
        if (typeof value !== "number") return;
        if (value < 45 && slider.leftDirection in scores) scores[slider.leftDirection] += 2;
        if (value > 55 && slider.rightDirection in scores) scores[slider.rightDirection] += 2;
        if (value >= 45 && value <= 55) {
          if (slider.leftDirection in scores) scores[slider.leftDirection] += 1;
          if (slider.rightDirection in scores) scores[slider.rightDirection] += 1;
        }
      });
      return;
    }

    if (screen.type === "quick_cards") {
      screen.items
        .filter((item) => answer.selected?.includes(item.id))
        .forEach((item) => addScores(scores, item));
      return;
    }

    if (screen.type === "favorite_work") {
      Object.entries(screen.groups).forEach(([groupKey, group]) => {
        const selected = Array.isArray(answer[groupKey]) ? answer[groupKey] : [answer[groupKey]];
        group.options
          .filter((option) => selected.includes(option.label))
          .forEach((option) => addScores(scores, option));
      });
      return;
    }

    if (screen.type === "battery") {
      answer.forEach((id) => {
        const item = screen.items.find((option) => option.id === id);
        if (item) scores[item.axis] += 2;
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
  const priorityScreen = screens.find((screen) => screen.key === "mainRequest");
  const priorityAnswer = state.answers.mainRequest;
  if (priorityScreen && priorityAnswer?.length) {
    const top = priorityScreen.items.find((item) => item.id === priorityAnswer[0]);
    const second = priorityScreen.items.find((item) => item.id === priorityAnswer[1]);
    insights.push({
      title: "Главный приоритет",
      text: second
        ? `Сильнее всего вам хочется вернуть “${top.label}”, а рядом с этим — “${second.label}”. Это помогает не выбирать профессию абстрактно, а проверять, даст ли она нужный тип изменений.`
        : `Сильнее всего вам хочется вернуть “${top.label}”. Это помогает не выбирать профессию абстрактно, а проверять, даст ли она нужный тип изменений.`,
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
      title: "Идеальный день",
      text: `В вашем идеальном дне важны: ${labels(scene.want).join(", ")}. Это стоит учитывать при выборе обучения и новой деятельности.`,
    });
  }

  return insights;
}

function next() {
  if (state.step < screens.length - 1) {
    let nextStep = state.step + 1;
    while (nextStep < screens.length && shouldSkipScreen(screens[nextStep])) {
      nextStep += 1;
    }
    state.step = nextStep;
    render();
  }
}

function back() {
  if (state.step > 0) {
    let previousStep = state.step - 1;
    while (previousStep > 0 && shouldSkipScreen(screens[previousStep])) {
      previousStep -= 1;
    }
    state.step = previousStep;
    render();
  }
}

function shouldSkipScreen(screen) {
  return typeof screen.skipIf === "function" && screen.skipIf();
}

function reset() {
  clearTimers();
  state.step = 0;
  state.answers = {};
  state.scores = { energy: 0, meaning: 0, growth: 0, autonomy: 0, readiness: 0 };
  state.lead = { name: "", email: "", phone: "" };
  state.discount = null;
  state.consultationRequested = false;
  render();
}

backButton.addEventListener("click", back);
render();
