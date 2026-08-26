export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AU — на главную">
          <img src="./assets/au-logo.webp" alt="" />
          <span>AU</span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#how">Как работает</a>
          <a href="#result">Результат</a>
          <a href="#team">Команда</a>
        </nav>
        <a className="header-contact" href="mailto:a.arinicheva@g.nsu.ru">
          Связаться
        </a>
      </header>

      <section className="hero" id="top">
        <div className="circuit-lines" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Telegram-бот для психологов</p>
          <h1>Сессия закончилась.<br />Работа с ней — нет.</h1>
          <p className="hero-lead">
            AU расшифровывает консультацию, собирает конспект и подсвечивает
            когнитивные искажения — чтобы психолог видел важное, а не боролся
            с заметками.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#how">Как это работает <span>↓</span></a>
            <a className="button button-light" href="mailto:a.arinicheva@g.nsu.ru">Написать команде</a>
          </div>
          <ul className="hero-tags" aria-label="Основные возможности">
            <li>Конспект сессии</li>
            <li>Разметка искажений</li>
            <li>Отчёт о динамике</li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="Интерфейс AU">
          <div className="visual-orbit orbit-one" aria-hidden="true" />
          <div className="visual-orbit orbit-two" aria-hidden="true" />
          <figure className="phone-card phone-card-back">
            <img src="./assets/phone-report.webp" alt="Отчёт о состоянии клиента в AU" />
          </figure>
          <figure className="phone-card phone-card-front">
            <img src="./assets/phone-client.webp" alt="Карточка клиента в AU" />
          </figure>
          <div className="floating-note note-top">
            <span className="note-dot green" />
            <div><b>Конспект готов</b><small>после загрузки аудио</small></div>
          </div>
          <div className="floating-note note-bottom">
            <span className="note-dot violet" />
            <div><b>5 паттернов</b><small>подсвечено в диалоге</small></div>
          </div>
        </div>
      </section>

      <section className="intro-strip" aria-label="Коротко о продукте">
        <p>Один бот. Три результата.</p>
        <div><span>01</span> Расшифровка</div>
        <div><span>02</span> Структурированный конспект</div>
        <div><span>03</span> Аналитика сессии</div>
      </section>

      <section className="section problem-section" id="problem">
        <div className="section-heading split-heading">
          <p className="section-kicker">Зачем это нужно</p>
          <h2>Внимание психолога должно быть у клиента.</h2>
          <p className="section-summary">
            Во время консультации специалист одновременно слушает, наблюдает,
            задаёт вопросы и ведёт записи. AU забирает работу с материалом
            сессии после разговора.
          </p>
        </div>
        <div className="problem-grid">
          <article className="problem-card card-wide">
            <span className="card-index">01</span>
            <h3>Информация теряется</h3>
            <p>Ручной конспект неизбежно оставляет за кадром детали речи и контекст диалога.</p>
          </article>
          <article className="problem-card">
            <span className="card-index">02</span>
            <h3>Рутина отнимает ресурс</h3>
            <p>После сессии нужно восстановить заметки, собрать выводы и подготовиться к следующей встрече.</p>
          </article>
          <article className="problem-card card-accent">
            <span className="card-index">03</span>
            <h3>Динамику сложно увидеть</h3>
            <p>Повторяющиеся паттерны легче заметить, когда материалы нескольких сессий собраны в одной структуре.</p>
          </article>
        </div>
      </section>

      <section className="section how-section" id="how">
        <div className="section-heading light-heading">
          <p className="section-kicker">Как работает AU</p>
          <h2>От аудио до понятного отчёта.</h2>
        </div>
        <div className="steps-grid">
          <article className="step-card">
            <span>01</span>
            <div className="step-icon">●</div>
            <h3>Загрузить запись</h3>
            <p>Психолог отправляет в Telegram-бот аудиофайл консультации или голосовое сообщение.</p>
          </article>
          <article className="step-card">
            <span>02</span>
            <div className="step-icon">≋</div>
            <h3>Получить расшифровку</h3>
            <p>Сервис переводит разговор в текст и формирует структурированный конспект сессии.</p>
          </article>
          <article className="step-card">
            <span>03</span>
            <div className="step-icon">↗</div>
            <h3>Проверить аналитику</h3>
            <p>AU подсвечивает найденные паттерны и собирает сводный PDF-отчёт для специалиста.</p>
          </article>
        </div>
        <figure className="workflow-figure">
          <img src="./assets/workflow.webp" alt="Схема работы AU: аудиозапись, Telegram-бот и отчёт психолога" />
          <figcaption>Текущий сценарий MVP в Telegram</figcaption>
        </figure>
      </section>

      <section className="section result-section" id="result">
        <div className="section-heading split-heading">
          <p className="section-kicker">Что получает специалист</p>
          <h2>Не чёрный ящик, а материал для проверки.</h2>
          <p className="section-summary">
            Разметка показывает фрагменты речи, на которых основан вывод.
            Психолог может согласиться с результатом или скорректировать его.
          </p>
        </div>
        <div className="result-grid">
          <article className="result-card result-transcript">
            <div className="result-card-head">
              <div><span>01</span><h3>Размеченный конспект</h3></div>
              <p>Цветом выделены эмоции, ситуации и возможные когнитивные искажения.</p>
            </div>
            <img src="./assets/transcript.webp" alt="Пример цветовой разметки конспекта консультации" />
          </article>
          <article className="result-card result-progress">
            <div className="result-card-head">
              <div><span>02</span><h3>Отчёт о динамике</h3></div>
              <p>Сводные показатели помогают сравнивать наблюдения от сессии к сессии.</p>
            </div>
            <img src="./assets/progress.webp" alt="Пример отчёта AU о динамике когнитивных искажений" />
          </article>
        </div>
      </section>

      <section className="section proof-section" aria-labelledby="proof-title">
        <div className="proof-copy">
          <p className="section-kicker">Технологический подход</p>
          <h2 id="proof-title">Интерпретируемость заложена в продукт.</h2>
          <p>
            Алгоритм анализирует текстовые признаки и показывает специалисту,
            какие слова и фразы повлияли на результат. Это делает выводы
            проверяемыми и позволяет улучшать модель на обратной связи.
          </p>
          <p className="proof-note">AU — вспомогательный инструмент. Итоговую профессиональную оценку всегда делает психолог.</p>
        </div>
        <div className="metric-panel">
          <p>Внутренние испытания алгоритма</p>
          <div className="metric-row"><strong>&gt;90%</strong><span>точность бинарной классификации</span></div>
          <div className="metric-row"><strong>&gt;70%</strong><span>точность мультиклассового распознавания</span></div>
          <small>Показатели приводятся по материалам проекта и будут актуализированы после следующего цикла тестирования.</small>
        </div>
      </section>

      <section className="section price-section" id="pricing">
        <div className="section-heading center-heading">
          <p className="section-kicker">Тарифы MVP</p>
          <h2>Стоимость зависит только от объёма практики.</h2>
          <p className="section-summary">Во всех тарифах доступны конспект, разметка и отчёт о динамике.</p>
        </div>
        <div className="price-grid">
          <article className="price-card">
            <p className="price-name">Basic</p>
            <div className="price"><strong>1 499 ₽</strong><span>/ месяц</span></div>
            <p className="price-limit">До 25 консультаций в месяц</p>
            <ul><li>Расшифровка аудио</li><li>Конспект сессии</li><li>Разметка когнитивных искажений</li></ul>
          </article>
          <article className="price-card price-featured">
            <div className="popular-badge">Оптимальный</div>
            <p className="price-name">Pro</p>
            <div className="price"><strong>2 499 ₽</strong><span>/ месяц</span></div>
            <p className="price-limit">До 50 консультаций в месяц</p>
            <ul><li>Всё из тарифа Basic</li><li>Больше сессий</li><li>Отчёты о динамике клиента</li></ul>
          </article>
          <article className="price-card">
            <p className="price-name">Super Pro</p>
            <div className="price"><strong>3 999 ₽</strong><span>/ месяц</span></div>
            <p className="price-limit">Более 50 консультаций в месяц</p>
            <ul><li>Всё из тарифа Pro</li><li>Для интенсивной практики</li><li>Приоритетная обратная связь</li></ul>
          </article>
        </div>
        <p className="price-caption">Тарифы приведены по актуальной презентации MVP. Условия подключения будут уточнены перед запуском.</p>
      </section>

      <section className="section roadmap-section" id="roadmap">
        <div className="section-heading split-heading">
          <p className="section-kicker">Развитие проекта</p>
          <h2>От исследования — к пилоту.</h2>
          <p className="section-summary">Команда прошла первые программы поддержки, сформировала партнёрства и развивает MVP вместе с практикующими психологами.</p>
        </div>
        <ol className="roadmap">
          <li className="done"><span>2024</span><strong>Победа в А:СТАРТ</strong><p>Комплексная аналитика проекта и более 40 интервью с целевой аудиторией.</p></li>
          <li className="done"><span>2024</span><strong>Партнёрства</strong><p>НГУ, РАНХиГС и Ассоциация психологов Ульяновской области.</p></li>
          <li className="done"><span>2025</span><strong>Студенческий стартап</strong><p>Победа в VI волне программы Фонда содействия инновациям.</p></li>
          <li><span>Следующий этап</span><strong>Тестирование и запуск</strong><p>Пилоты с профессионалами, доработка функций и первые подключения.</p></li>
        </ol>
      </section>

      <section className="section team-section" id="team">
        <div className="section-heading center-heading">
          <p className="section-kicker">Команда</p>
          <h2>Математика, продукт и практика.</h2>
        </div>
        <div className="team-grid">
          <article className="team-card">
            <img src="./assets/anna.webp" alt="Ариничева Анна" />
            <div><h3>Ариничева Анна</h3><p>Руководитель проекта, маркетолог</p><small>Опыт проектной деятельности более двух лет</small></div>
          </article>
          <article className="team-card">
            <img src="./assets/anton.webp" alt="Колонин Антон" />
            <div><h3>Колонин Антон</h3><p>Научный руководитель проекта</p><small>Проекты «Здоровье Онлайн», Aigents и другие</small></div>
          </article>
          <article className="team-card">
            <img src="./assets/evgeny.webp" alt="Евгений Бражников" />
            <div><h3>Евгений Бражников</h3><p>Разработчик Backend, ML</p><small>Опыт корпоративной разработки более двух лет</small></div>
          </article>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-box">
          <div>
            <p className="section-kicker">Связаться с командой</p>
            <h2>Хотите принять участие в тестировании AU?</h2>
            <p>Расскажите о своей практике — мы ответим на вопросы и сообщим о следующих этапах проекта.</p>
          </div>
          <a className="button button-white" href="mailto:a.arinicheva@g.nsu.ru">a.arinicheva@g.nsu.ru <span>↗</span></a>
        </div>
      </section>

      <section className="grant-section" aria-label="Поддержка проекта">
        <p className="grant-label">Проект поддержан</p>
        <div className="grant-logos">
          <img className="fund-logo" src="./assets/fund-logo.png" alt="Фонд содействия инновациям" />
          <img className="platform-logo" src="./assets/platform-logo.svg" alt="Платформа университетского технологического предпринимательства" />
        </div>
        <p className="grant-text">
          Проект реализован при поддержке Фонда содействия инновациям в рамках программы «Студенческий стартап» мероприятия «Платформа университетского технологического предпринимательства» федерального проекта «Технологии».
        </p>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top"><img src="./assets/au-logo.webp" alt="" /><span>AU</span></a>
        <p>Ассистент психолога</p>
        <a href="mailto:a.arinicheva@g.nsu.ru">a.arinicheva@g.nsu.ru</a>
        <p>© 2026 AU</p>
      </footer>
    </main>
  );
}
