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
    salaryPotential: "160 000–240 000 ₽",
    traits: ["коммуникация", "продуктовое мышление", "гибкость", "понимание задач бизнеса", "работа с AI"],
    description:
      "Специалист по нейросетям для бизнеса помогает командам внедрять AI-инструменты в повседневные процессы: тексты, аналитику, клиентский сервис, маркетинг, обучение и операционные задачи.",
    duties:
      "Он разбирает бизнес-задачу, подбирает подходящий AI-сервис, пишет промпты, тестирует сценарии и объясняет команде, как использовать инструмент без хаоса.",
    learn: ["базовая цифровая грамотность", "умение формулировать задачи", "готовность тестировать AI-инструменты на практике"],
    realTasks: ["собрать AI-бота для поддержки клиентов", "ускорить подготовку постов и писем", "описать понятную инструкцию для команды"],
    vacancies: [
      { title: "Менеджер Digital-проектов", company: "Lead Zeppelin", salary: "80 000–140 000 ₽", meta: "hh.ru, Москва, можно удаленно" },
      { title: "Программист AI-вайбкодер", company: "Бизнес Решение", salary: "30 000–80 000 ₽", meta: "hh.ru, AI-инструменты" },
      { title: "Junior Маркетолог", company: "ИП Рыбаков", salary: "от 50 000 ₽", meta: "hh.ru, без опыта" },
    ],
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
    salaryPotential: "140 000–220 000 ₽",
    traits: ["визуальное мышление", "насмотренность", "креатив", "композиция", "AI-графика"],
    description:
      "Графический дизайнер создает визуальный язык брендов, презентаций, соцсетей, упаковки и рекламных материалов. AI-инструменты помогают быстрее искать идеи, собирать варианты и усиливать визуал.",
    duties:
      "Специалист подбирает стиль, работает с цветом и типографикой, создает макеты и адаптирует их под разные задачи бизнеса.",
    learn: ["базовая работа с компьютером", "готовность развивать вкус", "интерес к визуальным AI-инструментам"],
    realTasks: ["сделать баннер для акции", "оформить презентацию для клиента", "собрать визуал для соцсетей в едином стиле"],
    vacancies: [
      { title: "UI/UX дизайнер Junior/Middle", company: "Современные информационные технологии", salary: "от 65 000 ₽", meta: "hh.ru, удаленно" },
      { title: "Digital Designer UX/UI Junior", company: "NeuroCity", salary: "от 60 000 ₽", meta: "hh.ru, без опыта" },
      { title: "Web/графический дизайнер", company: "HR-агентство A2", salary: "50 000–70 000 ₽", meta: "hh.ru, можно удаленно" },
    ],
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
    salaryPotential: "220 000–350 000 ₽",
    traits: ["аналитика", "математическая логика", "данные", "модели", "исследование гипотез"],
    description:
      "Machine Learning Engineer работает с данными и моделями машинного обучения: помогает системам находить закономерности, делать прогнозы и автоматизировать сложные решения.",
    duties:
      "Специалист готовит данные, обучает модели, проверяет качество результата и помогает внедрять AI-решения в продукты и процессы.",
    learn: ["готовность разбираться в данных", "интерес к логике и моделям", "регулярная практика программирования"],
    realTasks: ["найти причину падения продаж в данных", "собрать прогноз спроса", "проверить, какая гипотеза дала результат"],
    vacancies: [
      { title: "Junior Data Analyst", company: "evrone.ru", salary: "до 100 000 ₽", meta: "hh.ru, можно удаленно" },
      { title: "Младший аналитик данных", company: "ИП Панина", salary: "от 80 000 ₽", meta: "hh.ru, без опыта" },
      { title: "Data Engineer / ETL Developer", company: "FOM GROUP", salary: "2 500–4 500 $", meta: "hh.ru, рост после опыта" },
    ],
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
    salaryPotential: "150 000–230 000 ₽",
    traits: ["внимательность", "качество", "сценарии", "логика", "AI-помощники"],
    description:
      "Инженер по тестированию проверяет сайты, приложения и сервисы, чтобы пользователи не сталкивались с ошибками. AI помогает быстрее готовить сценарии проверок и анализировать результаты.",
    duties:
      "Специалист ищет баги, описывает проблемы, проверяет логику продукта и помогает команде выпускать более стабильные решения.",
    learn: ["базовая компьютерная грамотность", "внимательность к инструкциям", "готовность работать по сценариям"],
    realTasks: ["проверить оплату в приложении", "описать баг так, чтобы разработчик быстро понял", "пройти сценарий пользователя перед релизом"],
    vacancies: [
      { title: "Junior QA Engineer", company: "evrone.ru", salary: "до 100 000 ₽", meta: "hh.ru, можно удаленно" },
      { title: "Тестировщик ПО / QA", company: "Shark Ads", salary: "от 30 000 ₽", meta: "hh.ru, без опыта" },
      { title: "Начинающий тестировщик", company: "ServiOn", salary: "105 000–170 000 ₽", meta: "hh.ru, без опыта" },
    ],
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
    salaryPotential: "200 000–320 000 ₽",
    traits: ["логика", "код", "автоматизация", "AI-инструменты", "решение задач"],
    description:
      "Python-разработчик создает программы, сервисы, автоматизации и инструменты, которые решают конкретные задачи. AI помогает быстрее писать код, искать ошибки и собирать прототипы.",
    duties:
      "Специалист пишет код, подключает данные и сервисы, автоматизирует повторяющиеся процессы и собирает рабочие цифровые решения.",
    learn: ["готовность изучать код постепенно", "логическое мышление", "умение доводить задачу до работающего результата"],
    realTasks: ["написать скрипт, который сам собирает отчет", "подключить API к сервису", "исправить ошибку и выкатить обновление"],
    vacancies: [
      { title: "Junior Python-developer", company: "Workmate", salary: "от 70 000 ₽", meta: "hh.ru, без опыта, удаленно" },
      { title: "Программист Python junior", company: "CDNvideo", salary: "90 000–140 000 ₽", meta: "hh.ru, Москва" },
      { title: "Python-разработчик / AI-интегратор", company: "SCorp", salary: "от 40 000 ₽", meta: "hh.ru, без опыта, удаленно" },
    ],
    talent: "сборка работающих решений",
    talentText:
      "Похоже, вам важно не просто обсуждать идеи, а собирать что-то рабочее. У таких людей есть потенциал в разработке, если идти через понятную практику.",
    qualities: ["любите разбираться в инструментах", "не боитесь пошагового обучения", "хотите видеть конкретный результат", "готовы искать решение, если с первого раза не получилось"],
  },
};

const screens = [
  {
    type: "intro",
    title: "Устали? Потеряли интерес? Чувствуете, что живете на автопилоте?",
    text: "Это может быть не просто усталостью, а признаком эмоционального выгорания. С этим важно разобраться.",
    points: [
      "Определим, куда уходит энергия",
      "Найдем причину состояния",
      "Соберем персональный профиль",
      "Дадим план выхода из состояния",
    ],
    proof: {
      active: "127 человек проходят прямо сейчас",
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
    title: "А мы — Skillbox.",
    text: "Уже 10 лет помогаем людям находить новую профессию и двигаться к ней с самого нуля понятными шагами.",
    button: "Приятно познакомиться, Skillbox",
    cards: [
      { icon: "🎓", title: "141 000+", text: "выпускников уже нашли работу мечты" },
      { icon: "🤝", title: "700+", text: "компаний доверяют выпускникам Skillbox" },
      { icon: "⭐", title: "№1", text: "по качеству обучения" },
      { icon: "💼", title: "85%", text: "студентов находят работу в первые 3 месяца после обучения" },
      { icon: "📚", title: "700+", text: "программ для карьеры и жизни" },
      { icon: "🛟", title: "Гарантия", text: "помогаем найти работу или полностью возвращаем деньги за обучение" },
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
    title: "{name}, настраиваем диагностику под ваш контекст",
    text: "Учитываем ваш ритм, фон и то, что хочется вернуть в жизнь.",
    duration: 15000,
    steps: ["Собираем эмоциональный фон", "Определяем зоны напряжения", "Настраиваем логику результата"],
  },
  {
    type: "stage",
    eyebrow: "Глубина состояния",
    visual: "recovery",
    visualOnly: true,
    title: "{name}, теперь посмотрим глубже",
    text: "Мы настроили диагностику под вас. Сейчас посмотрим, возвращает ли вам отдых силы, спокойствие и интерес — после сна, выходных, прогулок или времени для себя.",
    badge: "Если после отдыха сил не становится больше, причина может быть глубже обычной усталости.",
    image: "assets/recovery-depth-illustration.png",
    tags: ["перезагрузка", "отключение от дел", "глубина состояния"],
    source: "Sonnentag & Fritz, модель восстановления от рабочего стресса",
    button: "Проверить глубину состояния",
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
    type: "single",
    eyebrow: "Будущее",
    title: "Какой уровень дохода у вас сейчас?",
    text: "Это поможет понять, насколько сильно деньги добавляют напряжения и какой рост будет ощутимым.",
    key: "currentIncome",
    options: [
      { icon: "🧊", label: "Сейчас нет дохода", scores: { growth: 2, readiness: 1 } },
      { icon: "🌱", label: "До 60 000 ₽", scores: { growth: 1 } },
      { icon: "💼", label: "60 000–100 000 ₽", scores: { growth: 2 } },
      { icon: "📈", label: "100 000–150 000 ₽", scores: { growth: 2, readiness: 1 } },
      { icon: "🎢", label: "150 000+ или нестабильно", scores: { growth: 3, autonomy: 1, readiness: 1 } },
    ],
  },
  {
    type: "loader",
    title: "Секундочку",
    text: "Записываем ваши ответы для составления персонального профиля.",
    duration: 3000,
    icon: "⏳",
    variant: "technical",
    steps: ["Фиксируем ответы", "Собираем первые сигналы", "Готовим следующий блок"],
  },
  {
    type: "stage",
    eyebrow: "Ищем источник состояния",
    visual: "work",
    title: "Проверим, как на вас влияет работа",
    text: "Часто усталость, потеря интереса и ощущение «автопилота» связаны не с человеком, а со средой, в которой он проводит большую часть дня. Работа, профессия, задачи и уровень нагрузки могут незаметно забирать ресурс. Давайте проверим, есть ли это у вас.",
    badge: "Один из главных источников напряжения — то, чем мы заняты каждый день",
    image: "assets/work-impact-illustration.png",
    tags: ["ежедневная среда", "работа и задачи", "самочувствие"],
    button: "Оценить влияние работы",
  },
  {
    type: "single_reveal",
    eyebrow: "Работа и деятельность",
    title: "Что в вашей текущей деятельности забирает больше всего сил?",
    text: "Выберите до 3 факторов. Обычно выматывает не что-то одно, а несколько повторяющихся вещей.",
    key: "drain",
    max: 3,
    options: [
      {
        id: "people",
        icon: "🗣️",
        label: "Много общения и созвонов",
        scores: { autonomy: 2, energy: 1 },
        reveal: "Похоже, ресурс уходит не только на задачи, но и на необходимость постоянно быть включенным в людей.",
      },
      {
        id: "online",
        icon: "📲",
        label: "Постоянно быть на связи",
        scores: { autonomy: 2, energy: 2 },
        reveal: "Когда сообщения, срочность и ожидание ответа не заканчиваются, отдыхать становится сложнее даже вне работы.",
      },
      {
        id: "urgent",
        icon: "🔥",
        label: "Срочные задачи без пауз",
        scores: { energy: 3 },
        reveal: "Постоянный режим “надо вчера” быстро съедает запас сил и не дает нервной системе выдохнуть.",
      },
      {
        id: "unclear",
        icon: "🌫️",
        label: "Непонятно, чего от меня ждут",
        scores: { autonomy: 1, energy: 2 },
        reveal: "Неясные ожидания заставляют держать много напряжения в голове и постоянно перепроверять себя.",
      },
      {
        id: "routine",
        icon: "🔁",
        label: "Одинаковые задачи по кругу",
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
        label: "Мало роста и влияния",
        scores: { meaning: 1, growth: 2, autonomy: 1 },
        reveal: "Похоже, вас выматывает ощущение потолка: хочется больше влияния, развития и видимого результата.",
      },
      {
        id: "support",
        icon: "🧯",
        label: "Ответственность без поддержки",
        scores: { energy: 2, autonomy: 1 },
        reveal: "Когда ответственность большая, а поддержки мало, работа начинает ощущаться как постоянное удерживание всего на себе.",
      },
      {
        id: "meaning",
        icon: "🕳️",
        label: "Не вижу смысла в том, что делаю",
        scores: { meaning: 3, growth: 1 },
        reveal: "Если в задачах мало смысла или пользы, силы уходят быстрее: становится трудно понимать, ради чего стараться.",
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
    type: "loader",
    title: "Секундочку",
    text: "Сверяем ваши ответы и ищем главный источник напряжения.",
    duration: 3000,
    icon: "⏳",
    variant: "technical",
    steps: ["Проверяем ответы о работе", "Сопоставляем с признаками усталости", "Готовим вывод"],
  },
  {
    type: "insight",
    eyebrow: "Важный вывод",
    visual: "research",
    title: "Возможно, вам пора сменить вектор",
    text: "По вашим ответам видно: текущая деятельность может быть одним из главных источников усталости и потери интереса. Теперь проверим ваши склонности и сильные стороны, чтобы подобрать потенциальные направления для перехода.",
    image: "assets/vector-change-illustration.png",
    facts: [
      { value: "62%", label: "россиян пересмотрели бы выбор профессии" },
      { value: "23%", label: "уже сменили профессию за последние 2 года" },
      { value: "30+", label: "частый возраст для смены карьерного вектора" },
    ],
    tags: ["это не редкость", "можно проверить новое направление", "переход без резкого рывка"],
    button: "Оценить мои склонности",
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
    eyebrow: "Рабочая среда",
    title: "В каком формате вам легче раскрыться?",
    text: "Сравним не профессии, а ощущения от работы: с кем, как и в каком темпе вам комфортнее двигаться.",
    key: "workFormat",
    sliders: [
      { id: "people_systems", left: "Чаще общаться с людьми", right: "Больше работать с задачами и системами", leftDirection: "communication", rightDirection: "system" },
      { id: "new_improve", left: "Придумывать с нуля", right: "Улучшать то, что уже есть", leftDirection: "creative", rightDirection: "system" },
      { id: "fast_deep", left: "Быстро пробовать гипотезы", right: "Спокойно доводить до качества", leftDirection: "technical", rightDirection: "analytical" },
      { id: "text_numbers", left: "Работать со смыслами и текстом", right: "Работать с цифрами и логикой", leftDirection: "communication", rightDirection: "analytical" },
      { id: "expert_coord", left: "Быть сильным специалистом", right: "Координировать людей и процессы", leftDirection: "technical", rightDirection: "system" },
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
    type: "favorite_work",
    eyebrow: "Идеальные условия",
    title: "Соберите свою идеальную работу",
    text: "Представьте, что ваша будущая работа — это нить. А условия ниже — бусины. Нанижите 3–5 самых важных, без которых вам сложно чувствовать интерес, рост и энергию.",
    key: "favoriteWork",
    min: 3,
    max: 5,
    options: [
      { icon: "🌿", label: "Без вечной гонки", direction: "analytical", scores: { energy: 1 } },
      { icon: "🏡", label: "Работать из дома", direction: "technical", scores: { autonomy: 1 } },
      { icon: "🗓️", label: "Гибкий график", direction: "system", scores: { autonomy: 1 } },
      { icon: "⚡", label: "Чтобы было живо", direction: "technical", scores: { readiness: 1 } },
      { icon: "🎨", label: "Делать по-своему", direction: "creative", scores: { meaning: 1 } },
      { icon: "📈", label: "Видеть, что расту", direction: "analytical", scores: { growth: 1 } },
      { icon: "🕊️", label: "Больше свободы", direction: "technical", scores: { autonomy: 1 } },
      { icon: "💰", label: "Доход без тревоги", direction: "analytical", scores: { growth: 1 } },
      { icon: "🎯", label: "Понимать, зачем", direction: "communication", scores: { meaning: 1 } },
      { icon: "🤝", label: "Люди, с кем спокойно", direction: "system", scores: { autonomy: 1 } },
      { icon: "🧩", label: "Ясные задачи", direction: "system", scores: { readiness: 1 } },
    ],
  },
  {
    type: "insight",
    eyebrow: "Почти готово",
    visual: "plan",
    title: "У вас есть сильные стороны для нового старта",
    text: "По ответам видно: у вас есть потенциал для перехода. Менять всё резко не нужно — путь можно пройти мягко.",
    badge: "Skillbox уже помог тысячам студентов освоить новую профессию и сделать первый шаг к работе мечты",
    startVisual: true,
    supportCards: [
      { icon: "🎓", title: "Обучение", text: "Освоить новое направление постепенно" },
      { icon: "🧩", title: "Практика", text: "Попробовать себя на первых проектах" },
      { icon: "🤝", title: "Поддержка", text: "Двигаться рядом с наставниками" },
    ],
    tags: ["влияние работы заметно", "без резких увольнений", "с понятным первым шагом"],
    button: "Собрать мой результат",
  },
  {
    type: "single",
    eyebrow: "Честная самопроверка",
    title: "{name}, честно: вы готовы менять свою жизнь?",
    text: "Перед тем как показать результат, важно зафиксировать не “правильный” ответ, а ваш настоящий. Признайтесь себе честно: вы хотите перемен или пока только присматриваетесь?",
    highlight: "Перед тем как показать результат",
    saveHint: {
      title: "Учитываем ваш ответ",
      text: "в персональном результате",
    },
    key: "changeReadiness",
    options: [
      { icon: "✅", label: "Да, я хочу перемен и готов(а) действовать", scores: { readiness: 3, meaning: 1 } },
      { icon: "😟", label: "Да, хочу, но мне страшно", scores: { readiness: 2, energy: 1 } },
      { icon: "🤔", label: "Пока не уверен(а), но хочу разобраться", scores: { readiness: 1, meaning: 1 } },
      { icon: "⏳", label: "Нет, пока не готов(а)", scores: { readiness: 0 } },
    ],
  },
  {
    type: "loader",
    eyebrow: "Анализируем результаты",
    title: "Собираем ваш профиль",
    text: "Соединяем ответы, мини-задачи и карту направлений в один результат.",
    duration: 15000,
    steps: ["Считаем 5 осей состояния", "Подбираем архетип", "Собираем 2–3 профессии"],
  },
  {
    type: "lead",
    eyebrow: "Ваш результат готов",
    title: "{name}, ваш профиль собран",
    text: "Оставьте email и телефон, чтобы открыть персональный результат.",
  },
  {
    type: "discount_game",
    eyebrow: "Бонус перед результатом",
    title: "{name}, откройте персональную скидку на обучение",
    text: "Мы хотим, чтобы путь к новой жизни начался для вас на максимально выгодных условиях. Поэтому перед результатом разыгрываем большую скидку на обучение в Skillbox — выберите карту, к которой тянет сильнее всего.",
    hint: "Выбирайте быстро: здесь важна первая реакция",
    key: "discountGame",
    cards: [
      { id: "left", label: "Карта A" },
      { id: "center", label: "Карта B" },
      { id: "right", label: "Карта C" },
    ],
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

const previewMode = new URLSearchParams(window.location.search).get("preview");
if (previewMode === "discount") {
  state.step = screens.findIndex((screen) => screen.type === "discount_game");
  state.lead.name = "Анастасия";
  state.discount = {
    percent: 50,
    code: createPromoCode(state.lead.name),
    deadline: getDiscountDeadline(),
  };
  state.answers.discountGame = "center";
  state.answers.discountGameRevealing = false;
}

if (previewMode === "lead") {
  state.step = screens.findIndex((screen) => screen.type === "lead");
  state.lead.name = "Анастасия";
  state.scores = { energy: 3, meaning: 7, growth: 8, autonomy: 6, readiness: 8 };
  state.answers = {
    ...state.answers,
    projectStart: "Понять людей",
    firstTasks: ["Провести интервью и найти инсайты", "Придумать рекламный креатив"],
  };
}

if (previewMode === "vector") {
  state.step = screens.findIndex((screen) => screen.title === "Возможно, вам пора сменить вектор");
  state.lead.name = "Анастасия";
}

if (previewMode === "favorite") {
  state.step = screens.findIndex((screen) => screen.key === "favoriteWork");
  state.lead.name = "Анастасия";
}

if (previewMode === "strengths") {
  state.step = screens.findIndex((screen) => screen.title === "У вас есть сильные стороны для нового старта");
  state.lead.name = "Анастасия";
}

function render() {
  const screen = screens[state.step];
  const progressPercent = Math.round(((state.step + 1) / totalScreens) * 100);
  clearTimers();
  phoneEl.classList.toggle("result-mode", screen.type === "result");
  phoneEl.classList.toggle("intro-mode", screen.type === "intro");
  stepLabel.textContent = `${progressPercent}%`;
  timeLabel.textContent = getRemainingTimeLabel();
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
  const renderedScreen = renderers[screen.type](screen);
  if (shouldShowSaveHint(screen)) {
    renderedScreen.appendChild(renderSaveHint());
  }
  screenEl.appendChild(renderedScreen);
}

function shouldShowSaveHint(screen) {
  return !["intro", "stage", "insight", "loader", "discount_game", "lead", "result", "offer", "proof"].includes(screen.type);
}

function renderSaveHint() {
  const screen = screens[state.step];
  const hint = screen.saveHint || { title: "Сохраняем ответ", text: "для персонального результата" };
  return el(
    "div",
    "save-hint",
    `<span aria-hidden="true"></span><strong>${hint.title}</strong><small>${hint.text}</small>`,
  );
}

function getRemainingTimeLabel() {
  const resultIndex = screens.findIndex((screen) => screen.type === "result");
  if (resultIndex === -1 || state.step >= resultIndex - 1) return "результат";
  const remainingSteps = Math.max(0, resultIndex - state.step - 1);
  const minutes = Math.max(1, Math.ceil((remainingSteps / Math.max(1, resultIndex)) * 7));
  return `${minutes} ${pluralizeMinute(minutes)}`;
}

function pluralizeMinute(value) {
  const lastTwo = value % 100;
  const last = value % 10;
  if (lastTwo >= 11 && lastTwo <= 14) return "минут";
  if (last === 1) return "минута";
  if (last >= 2 && last <= 4) return "минуты";
  return "минут";
}

function scrollToScreenTop() {
  window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0 }));
}

function baseContent(screen) {
  const wrap = document.createElement("div");
  wrap.className = "content";
  if (shouldShowEyebrow(screen)) wrap.appendChild(el("div", "eyebrow", getEyebrowText(screen)));
  if (screen.title) wrap.appendChild(el(screen.type === "intro" ? "h1" : "h2", "", personalize(screen.title)));
  if (screen.text) wrap.appendChild(el("p", "", formatScreenText(screen)));
  return wrap;
}

function shouldShowEyebrow(screen) {
  return Boolean(screen.eyebrow && (isSetupEyebrow(screen) || ["stage", "insight", "lead", "discount_game"].includes(screen.type)));
}

function isSetupEyebrow(screen) {
  return typeof screen.eyebrow === "string" && screen.eyebrow.startsWith("Настройка");
}

function getEyebrowText(screen) {
  return isSetupEyebrow(screen) ? "Настраиваем тест под вас" : personalize(screen.eyebrow);
}

function formatScreenText(screen) {
  const text = personalize(screen.text);
  if (!screen.highlight) return text;
  const highlight = personalize(screen.highlight);
  return text.replace(highlight, `<mark>${highlight}</mark>`);
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
  `;
  wrap.appendChild(art);
  if (screen.proof) {
    const proof = el("div", "intro-proof");
    proof.innerHTML = `
      <span class="live-dot" aria-hidden="true"></span>
      <strong>${screen.proof.active}</strong>
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
  if (screen.image) {
    wrap.appendChild(el("div", "stage-image", `<img src="${screen.image}" alt="" />`));
  }
  if (screen.badge) {
    wrap.appendChild(el("div", "stage-mini-badge", personalize(screen.badge)));
  }
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
    wrap.appendChild(el("div", "eyebrow", "Настраиваем тест под вас"));
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
  const card = el("div", `loader-card${screen.variant ? ` ${screen.variant}` : ""}`);
  if (screen.icon) {
    card.appendChild(el("div", "loader-symbol", screen.icon));
  } else {
    card.appendChild(el("div", "loader-orbit", "<span></span><span></span><span></span>"));
  }
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
  const max = screen.max || 1;
  const rawAnswer = state.answers[screen.key];
  const selectedLabels = Array.isArray(rawAnswer) ? rawAnswer : rawAnswer ? [rawAnswer] : [];
  const selectedOptions = screen.options.filter((option) => selectedLabels.includes(option.label));
  const options = el("div", "options reveal-options");
  screen.options.forEach((option) => {
    const isSelected = selectedLabels.includes(option.label);
    options.appendChild(choiceButton(option, isSelected, () => {
      let nextSelected = selectedLabels;
      if (isSelected) {
        nextSelected = selectedLabels.filter((label) => label !== option.label);
      } else if (selectedLabels.length < max) {
        nextSelected = [...selectedLabels, option.label];
      }
      state.answers[screen.key] = max === 1 ? nextSelected[0] || "" : nextSelected;
      render();
    }));
    if (isSelected && option.reveal) {
      options.appendChild(
        el(
          "div",
          "reveal-note",
          `<span>Что это может значить</span><p>${option.reveal}</p>`,
        ),
      );
    }
  });
  wrap.appendChild(options);

  const nextButton = button("Продолжить", "primary", () => {
    selectedOptions.forEach((option) => {
      applyOption(option);
      if (option.direction) bumpDirection(option.direction, 2);
    });
    next();
  });
  nextButton.disabled = selectedOptions.length < (screen.min || 1);
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
  const selected = new Set(Array.isArray(state.answers[screen.key]) ? state.answers[screen.key] : []);
  const min = screen.min || 3;
  const max = screen.max || 5;
  const form = el("div", "favorite-work bead-work");
  const string = el("div", "bead-string");
  const selectedOptions = screen.options.filter((option) => selected.has(option.label));

  string.appendChild(el("div", "bead-counter", `На нити: ${selected.size} из ${max}`));
  string.appendChild(el("div", "bead-cord", "<span></span>"));
  const selectedBeads = el("div", "selected-beads");
  if (selectedOptions.length) {
    selectedOptions.forEach((option) => {
      const selectedBead = el("button", "selected-bead", `${option.icon}<span>${option.label}</span>`);
      selectedBead.type = "button";
      selectedBead.addEventListener("click", () => {
        selected.delete(option.label);
        state.answers[screen.key] = [...selected];
        render();
      });
      selectedBeads.appendChild(selectedBead);
    });
  } else {
    selectedBeads.appendChild(el("em", "", "Нажимайте на бусины — они появятся на нити"));
  }
  string.appendChild(selectedBeads);
  form.appendChild(string);

  const beads = el("div", "bead-bank");
  screen.options.forEach((option) => {
    const isSelected = selected.has(option.label);
    const bead = el("button", `work-bead${isSelected ? " selected" : ""}`, `<span>${option.icon}</span><strong>${option.label}</strong>`);
    bead.type = "button";
    bead.addEventListener("click", () => {
      if (isSelected) {
        selected.delete(option.label);
      } else if (selected.size < max) {
        selected.add(option.label);
      }
      state.answers[screen.key] = [...selected];
      render();
    });
    beads.appendChild(bead);
  });
  form.appendChild(beads);
  wrap.appendChild(form);

  const nextButton = button(selected.size >= min ? "Продолжить" : `Выберите еще ${min - selected.size}`, "primary", next);
  nextButton.disabled = selected.size < min;
  wrap.appendChild(nextButton);
  return wrap;
}

function favoriteGroup(screen, saved, key) {
  const group = screen.groups[key];
  const node = el("div", `favorite-group ${key}`);
  node.appendChild(el("strong", "", group.label));
  const options = el("div", "favorite-options");
  group.options.forEach((option) => {
    const selected = saved[key] === option.label;
    const buttonNode = el("button", `favorite-chip${selected ? " selected" : ""}`, `${option.icon} ${option.label}`);
    buttonNode.type = "button";
    buttonNode.addEventListener("click", () => {
      const nextValue = { ...saved, [key]: option.label };
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
  if (screen.facts?.length) {
    const facts = el("div", "insight-facts");
    screen.facts.forEach((fact) => {
      facts.appendChild(el("div", "insight-fact", `<strong>${fact.value}</strong><span>${fact.label}</span>`));
    });
    wrap.appendChild(facts);
  }
  if (screen.image) {
    wrap.appendChild(el("div", `stage-image${screen.facts?.length ? " compact" : ""}`, `<img src="${screen.image}" alt="" />`));
  }
  if (screen.startVisual) {
    wrap.appendChild(
      el(
        "div",
        "new-start-visual",
        `
          <span class="start-dot one"></span>
          <span class="start-dot two"></span>
          <span class="start-dot three"></span>
          <div class="start-path"></div>
          <strong>Новый старт</strong>
        `,
      ),
    );
  }
  if (screen.supportCards?.length) {
    const support = el("div", "support-cards");
    screen.supportCards.forEach((card) => {
      support.appendChild(el("div", "support-card", `<span>${card.icon}</span><strong>${card.title}</strong><p>${card.text}</p>`));
    });
    wrap.appendChild(support);
  }
  if (screen.badge) {
    wrap.appendChild(el("div", "stage-mini-badge", personalize(screen.badge)));
  }
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
    chips.appendChild(el("em", "", "Добавьте до 4 пунктов, которые хочется вернуть"));
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
  const reactions = state.answers.proofReactions || {};
  const defaultReactions = [428, 316, 219, 503, 284, 197];
  screen.cards.forEach((card, index) => {
    const node = el("button", `proof-card${reactions[index] ? " reacted" : ""}`);
    const reactionCount = (defaultReactions[index] || 180) + (reactions[index] ? 1 : 0);
    node.type = "button";
    node.addEventListener("click", () => {
      state.answers.proofReactions = {
        ...reactions,
        [index]: reactions[index] ? "" : "👍",
      };
      render();
    });
    node.appendChild(el("span", "proof-icon", card.icon || "✓"));
    const copy = el("div", "proof-card-copy");
    copy.appendChild(el("strong", "", card.title));
    copy.appendChild(el("p", "", card.text));
    node.appendChild(copy);
    node.appendChild(el("span", `proof-reaction-badge${reactions[index] ? " active" : ""}`, `<b>👍</b><strong>${reactionCount}</strong>`));
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
    const modal = el("div", "discount-modal");
    modal.appendChild(
      el(
        "div",
        "discount-result",
        `<strong>Вау, вот это интуиция — вы открыли максимальную скидку 50%</strong><span>Ваш промокод: <b>${state.discount.code}</b></span><span>Скидка действует до ${state.discount.deadline}</span>`,
      ),
    );
    modal.appendChild(button("Забрать результат и скидку", "primary", next));
    wrap.appendChild(game);
    wrap.appendChild(modal);
    return wrap;
  }

  game.appendChild(el("div", "discount-hint", `Подсказка: ${screen.hint || "выбирайте быстро, здесь важна первая реакция."}`));
  wrap.appendChild(game);
  return wrap;
}

function renderLead(screen) {
  const wrap = baseContent(screen);
  const result = calculateResult();
  const topProfession = result.professions[0];
  const preview = el(
    "div",
    "locked-result-preview",
    `
      <div class="locked-card main">
        <div class="lock-badge" aria-hidden="true">🔒</div>
        <span>Ваше направление</span>
        <strong>${topProfession.name}</strong>
        <div><b>${topProfession.percent}%</b><em>совместимость</em></div>
      </div>
      <div class="locked-card">
        <span>Доход на старте</span>
        <strong>от ${topProfession.salary}</strong>
      </div>
      <div class="locked-card">
        <span>Через 2–3 года</span>
        <strong>${topProfession.salaryPotential}</strong>
      </div>
    `,
  );
  const card = el("form", "form-card fields lead-unlock-card");
  const email = field("Email", "email", "name@email.com", state.lead.email);
  const phone = field("Телефон", "tel", "+7 999 123-45-67", state.lead.phone);
  const consent = el(
    "label",
    "consent-check",
    `<input type="checkbox" ${state.lead.consent ? "checked" : ""} /> <span>Я соглашаюсь на <a href="https://skillbox.ru/legal-docs/chou/file/soglasie_na_obrabotku_personalnyh_dannyh/version-170226.pdf" target="_blank" rel="noopener noreferrer">обработку персональных данных</a></span>`,
  );
  const consentInput = consent.querySelector("input");
  const error = el("div", "error");
  card.appendChild(email.wrap);
  card.appendChild(phone.wrap);
  card.appendChild(consent);
  card.appendChild(error);
  const submit = button("Открыть результат", "primary");
  submit.type = "submit";
  card.appendChild(submit);
  consentInput.addEventListener("change", () => {
    state.lead.consent = consentInput.checked;
  });
  card.addEventListener("submit", (event) => {
    event.preventDefault();
    state.lead.email = email.input.value.trim();
    state.lead.phone = phone.input.value.trim();
    state.lead.consent = consentInput.checked;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.lead.email)) {
      error.textContent = "Введите корректный email, чтобы открыть результат.";
      return;
    }
    const phoneDigits = state.lead.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      error.textContent = "Введите номер телефона, чтобы эксперт мог связаться с вами.";
      return;
    }
    if (!state.lead.consent) {
      error.textContent = "Подтвердите согласие на обработку персональных данных.";
      return;
    }
    next();
  });
  const gate = el("div", "result-gate");
  gate.appendChild(preview);
  gate.appendChild(card);
  wrap.appendChild(gate);
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
      <p class="result-muted">Ваше направление</p>
      <h2>${topProfession.name}</h2>
    </div>
    <div class="match-badge">
      <span>${topProfession.matchLabel}</span>
      <strong>${topProfession.percent}%</strong>
    </div>
    <div class="chips-row">
      ${topProfession.traits.map((trait) => `<span>${trait}</span>`).join("")}
    </div>
    <div class="result-emoji-row"><span>✨ интерес</span><span>🧭 понятный путь</span><span>💼 новая работа</span></div>
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
  const money = el("section", "result-card-dark money-card");
  money.innerHTML = `
    <h3>Доход</h3>
    <div class="salary-grid">
      <div class="salary-box"><span>Старт</span><strong>от ${topProfession.salary}</strong></div>
      <div class="salary-box accent"><span>Через 2–3 года</span><strong>${topProfession.salaryPotential}</strong></div>
    </div>
    <p>Рост зависит от практики, портфолио, собеседований и выбранного формата работы.</p>
  `;
  middleGrid.appendChild(money);

  const tasks = el("section", "result-card-light task-card");
  tasks.innerHTML = `
    <h2>Чем вы будете заниматься</h2>
    <div class="task-grid">
      ${topProfession.realTasks.map((item) => `<div class="task-pill"><span>✅</span><strong>${item}</strong></div>`).join("")}
    </div>
    <p>${topProfession.duties}</p>
  `;
  middleGrid.appendChild(tasks);
  wrap.appendChild(middleGrid);

  wrap.appendChild(el("h2", "result-section-title", "Как может выглядеть путь"));
  const progress = el("section", "result-card-light progress-card");
  progress.innerHTML = `
    <div class="progress-rail">
      <div><span>Сегодня</span><strong>старт без рывка</strong></div>
      <div><span>1–2 мес.</span><strong>первые навыки</strong></div>
      <div><span>3–5 мес.</span><strong>портфолио</strong></div>
      <div><span>6–9 мес.</span><strong>отклики</strong></div>
      <div class="dream"><span>9–12 мес.</span><strong>новая работа + ощущение “я на своем месте”</strong></div>
    </div>
    <div class="dream-card"><span>🏁</span><b>Финальная точка</b><p>Больше сил, любимая работа, понятная траектория роста и ощущение, что жизнь снова ваша.</p></div>
  `;
  wrap.appendChild(progress);

  wrap.appendChild(el("h2", "result-section-title", "Вакансии на hh.ru сейчас"));
  const vacancies = el("div", "vacancy-shots");
  topProfession.vacancies.forEach((vacancy) => {
    vacancies.appendChild(
      el(
        "article",
        "vacancy-shot",
        `<div><span class="hh-badge">hh</span><small>${vacancy.meta}</small></div><h3>${vacancy.title}</h3><strong>${vacancy.salary}</strong><p>${vacancy.company}</p>`,
      ),
    );
  });
  wrap.appendChild(vacancies);

  const reasonGrid = el("div", "result-two-grid");
  const archetype = el("section", "result-card-light archetype-card compact-result");
  archetype.innerHTML = `
    <p class="result-muted">Почему это похоже на вас</p>
    <h2>${result.title}</h2>
    <div class="qualities-list light-list">
      ${topProfession.qualities.map((item) => `<p>💡 ${item}</p>`).join("")}
    </div>
  `;
  reasonGrid.appendChild(archetype);

  const learning = el("section", "result-card-dark skills-card compact-result");
  learning.innerHTML = `
    <h3>Что поможет стартовать</h3>
    <div class="mini-learning-grid">
      ${topProfession.learn.map((item) => `<span>⚡ ${item}</span>`).join("")}
    </div>
    <div class="gradient-note">Не нужно “сначала стать другим человеком” — нужен понятный маршрут и практика.</div>
  `;
  reasonGrid.appendChild(learning);
  wrap.appendChild(reasonGrid);

  wrap.appendChild(el("h2", "result-section-title", "Почему Skillbox"));
  const skillbox = el("section", "result-card-light skillbox-result");
  skillbox.innerHTML = `
    <div class="skillbox-proof-grid">
      <div><span>🎓</span><strong>141 000+</strong><p>выпускников уже нашли работу мечты</p></div>
      <div><span>🤝</span><strong>700+</strong><p>компаний доверяют выпускникам</p></div>
      <div><span>💼</span><strong>Центр карьеры</strong><p>резюме, портфолио, вакансии, подготовка к собеседованиям</p></div>
      <div><span>🛟</span><strong>Вернем деньги</strong><p>если не найдете работу по условиям программы</p></div>
      <div><span>🕒</span><strong>Гибкий график</strong><p>можно совмещать с работой и личной жизнью</p></div>
      <div><span>👩‍🏫</span><strong>Кураторы рядом</strong><p>проверяют работы и дают понятную обратную связь</p></div>
    </div>
  `;
  wrap.appendChild(skillbox);

  wrap.appendChild(el("h2", "result-section-title", "Истории студентов"));
  const stories = el("div", "student-stories");
  [
    "Я освоил профессию в IT после 20 лет на железной дороге",
    "Как воспитатель стала менеджером маркетплейсов",
    "Аналитика любому возрасту покорна",
    "Приняла оффер через месяц после обучения",
  ].forEach((story, index) => {
    stories.appendChild(el("article", "story-card", `<span>${["🚆", "🛍️", "📊", "🎉"][index]}</span><strong>${story}</strong><p>Реальная история успеха студента Skillbox</p>`));
  });
  wrap.appendChild(stories);

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
      if (Array.isArray(answer)) {
        screen.options
          .filter((option) => answer.includes(option.label))
          .forEach((option) => addScores(scores, option));
        return;
      }
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
      screen.options
        .filter((option) => answer.includes(option.label))
        .forEach((option) => addScores(scores, option));
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
    scrollToScreenTop();
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
    scrollToScreenTop();
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
  state.lead = { name: "", email: "", phone: "", consent: false };
  state.discount = null;
  state.consultationRequested = false;
  render();
  scrollToScreenTop();
}

backButton.addEventListener("click", back);
render();
scrollToScreenTop();
