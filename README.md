# AU — ассистент психолога

Лендинг приложения AU: расшифровка консультаций, структурированный конспект, разметка когнитивных искажений и отчёт о динамике клиента.

## Публикация

Сайт автоматически собирается и публикуется в GitHub Pages после изменений в ветке `main`.

Адрес: https://au-psy-assistan.github.io/au-psy.github.io/

## Обновление содержания

- Основная страница: `app/page.tsx`
- Стили: `app/globals.css`
- Изображения: `public/assets/`
- Метаданные и превью ссылки: `app/layout.tsx`, `public/og.png`

## Локальный запуск

Требуются Node.js 22+ и pnpm.

```bash
pnpm install
pnpm dev
```

## Сборка для GitHub Pages

```bash
NEXT_PUBLIC_BASE_PATH=/au-psy.github.io pnpm run build:pages
```
