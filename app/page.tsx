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
          <h1>Запись сессии — в текст и отчёт.</h1>
          <p className="hero-lead">
            Отправьте аудиозапись в Telegram-бот. AU вернёт расшифровку,
            конспект, разметку когнитивных искажений и PDF-отчёт.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#how">Посмотреть процесс <span>↓</span></a>
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
        <p>AU формирует</p>
        <div><span>01</span> Расшифровка</div>
        <div><span>02</span> Структурированный конспект</div>
        <div><span>03</span> Аналитика сессии</div>
      </section>

      <section className="section problem-section" id="problem">
        <div className="section-heading split-heading">
          <p className="section-kicker">Задача</p>
          <h2>Меньше ручной работы после сессии.</h2>
          <p className="section-summary">
            Разбор записи, конспект и сравнение встреч требуют отдельного
            времени. AU собирает эти материалы автоматически.
          </p>
        </div>
        <div className="problem-grid">
          <article className="problem-card card-wide">
            <span className="card-index">01</span>
            <h3>Сохранить детали разговора</h3>
            <p>Расшифровка фиксирует реплики клиента и психолога целиком, а не только заметки, сделанные во время сессии.</p>
          </article>
          <article className="problem-card">
            <span className="card-index">02</span>
            <h3>Получить конспект</h3>
            <p>После обработки бот собирает основные темы разговора в структурированный документ.</p>
          </article>
          <article className="problem-card card-accent">
            <span className="card-index">03</span>
            <h3>Сравнить сессии</h3>
            <p>В отчёте можно посмотреть, как меняется выраженность отмеченных когнитивных искажений.</p>
          </article>
        </div>
      </section>

      <section className="section how-section" id="how">
        <div className="section-heading light-heading">
          <p className="section-kicker">Как работает AU</p>
          <h2>Три шага внутри Telegram.</h2>
        </div>
        <div className="steps-grid">
          <article className="step-card">
            <span>01</span>
            <div className="step-icon">●</div>
            <h3>Отправить аудио</h3>
            <p>Психолог отправляет в Telegram-бот аудиофайл консультации или голосовое сообщение.</p>
          </article>
          <article className="step-card">
            <span>02</span>
            <div className="step-icon">≋</div>
            <h3>Дождаться обработки</h3>
            <p>Партнёрский сервис расшифровывает запись, после чего AU анализирует полученный текст.</p>
          </article>
          <article className="step-card">
            <span>03</span>
            <div className="step-icon">↗</div>
            <h3>Скачать PDF</h3>
            <p>Бот возвращает расшифровку, конспект, разметку и график по когнитивным искажениям в одном файле.</p>
          </article>
        </div>
        <figure className="workflow-figure">
          <img src="./assets/workflow.webp" alt="Схема работы AU: аудиозапись, Telegram-бот и отчёт психолога" />
          <figcaption>Текущий сценарий MVP в Telegram</figcaption>
        </figure>
      </section>

      <section className="section result-section" id="result">
        <div className="section-heading split-heading">
          <p className="section-kicker">Результат</p>
          <h2>Каждую метку можно сверить с расшифровкой.</h2>
          <p className="section-summary">
            AU выделяет фрагменты текста, по которым алгоритм отнёс реплику
            к определённому когнитивному искажению.
          </p>
        </div>
        <div className="result-grid">
          <article className="result-card result-transcript">
            <div className="result-card-head">
              <div><span>01</span><h3>Размеченный конспект</h3></div>
              <p>В тексте отмечены фразы клиента и соответствующие им категории искажений.</p>
            </div>
            <img src="./assets/transcript.webp" alt="Пример цветовой разметки конспекта консультации" />
          </article>
          <article className="result-card result-progress">
            <div className="result-card-head">
              <div><span>02</span><h3>Отчёт о динамике</h3></div>
              <p>Диаграмма показывает изменение отмеченных категорий по сессиям.</p>
            </div>
            <img src="./assets/progress.webp" alt="Пример отчёта AU о динамике когнитивных искажений" />
          </article>
        </div>
      </section>

      <section className="section proof-section" aria-labelledby="proof-title">
        <div className="proof-copy">
          <p className="section-kicker">Как принимается решение</p>
          <h2 id="proof-title">Основание для метки видно в тексте.</h2>
          <p>
            Алгоритм ищет в расшифровке текстовые шаблоны и характерные признаки.
            Фразы, на которых основана метка, выделяются в тексте. Психолог
            проверяет разметку и при необходимости сообщает об ошибке.
          </p>
          <p className="proof-note">AU не ставит диагноз и не заменяет психолога. Разметку проверяет специалист.</p>
        </div>
        <div className="metric-panel">
          <p>Результаты внутренних тестов</p>
          <div className="metric-row"><strong>&gt;90%</strong><span>точность при разделении текста на два класса</span></div>
          <div className="metric-row"><strong>&gt;70%</strong><span>точность при распознавании нескольких классов</span></div>
          <small>Данные команды для текущей версии алгоритма. Метрики будут пересчитаны после расширения тестовой выборки.</small>
        </div>
      </section>

      <section className="section price-section" id="pricing">
        <div className="section-heading center-heading">
          <p className="section-kicker">Тарифы MVP</p>
          <h2>Три тарифа Telegram-бота.</h2>
          <p className="section-summary">Набор функций одинаковый; меняется месячный лимит консультаций.</p>
        </div>
        <div className="price-grid">
          <article className="price-card">
            <p className="price-name">Basic</p>
            <div className="price"><strong>1 499 ₽</strong><span>/ месяц</span></div>
            <p className="price-limit">До 25 консультаций в месяц</p>
            <ul><li>Расшифровка и конспект</li><li>Разметка искажений</li><li>PDF-отчёт</li></ul>
          </article>
          <article className="price-card price-featured">
            <p className="price-name">Pro</p>
            <div className="price"><strong>2 499 ₽</strong><span>/ месяц</span></div>
            <p className="price-limit">До 50 консультаций в месяц</p>
            <ul><li>Расшифровка и конспект</li><li>Разметка искажений</li><li>PDF-отчёт</li></ul>
          </article>
          <article className="price-card">
            <p className="price-name">Super Pro</p>
            <div className="price"><strong>3 999 ₽</strong><span>/ месяц</span></div>
            <p className="price-limit">Более 50 консультаций в месяц</p>
            <ul><li>Расшифровка и конспект</li><li>Разметка искажений</li><li>PDF-отчёт</li></ul>
          </article>
        </div>
        <p className="price-caption">Бот находится на этапе MVP. Дату подключения и условия оплаты команда сообщит перед запуском.</p>
      </section>

      <section className="section roadmap-section" id="roadmap">
        <div className="section-heading split-heading">
          <p className="section-kicker">Статус проекта</p>
          <h2>Что сделано к 2026 году.</h2>
          <p className="section-summary">Проведено более 40 интервью, заключены партнёрства и получена поддержка программы «Студенческий стартап».</p>
        </div>
        <ol className="roadmap">
          <li className="done"><span>2024</span><strong>Программа А:СТАРТ</strong><p>Проведено более 40 интервью с психологами и собрана аналитика по продукту.</p></li>
          <li className="done"><span>2024</span><strong>Партнёрства</strong><p>НГУ, РАНХиГС и Ассоциация психологов Ульяновской области.</p></li>
          <li className="done"><span>2025</span><strong>Грант «Студенческий стартап»</strong><p>Проект вошёл в VI волну программы Фонда содействия инновациям.</p></li>
          <li><span>Далее</span><strong>Тестирование MVP</strong><p>Проверка бота с практикующими психологами и доработка по обратной связи.</p></li>
        </ol>
      </section>

      <section className="section team-section" id="team">
        <div className="section-heading center-heading">
          <p className="section-kicker">Команда</p>
          <h2>Команда AU.</h2>
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
            <h2>Записаться на тестирование AU</h2>
            <p>Напишите на почту: укажите специализацию и примерное число консультаций в месяц.</p>
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
