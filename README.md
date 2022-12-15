# Курсовая работа. Библиотека React.

# Разработка музыкального сервиса

Финальный результат этого задания - реализация музыкального сервиса, аналогичного “Яндекс.Музыке”. Описание проекта c пояснениями доступно [здесь](https://www.figma.com/community/file/1150022779859940953). 

## Состав проекта

Проект состоит из двух частей: фронтенд и бэкенд. 

### Бэкенд

Бекэнд: [Music Project API](https://painassasin.online/swagger/)

### Запросы к бэкенду

### **Пользователи**

| Описание запроса | Тип запроса | Пример запроса |
| --- | --- | --- |
| Зарегистрироваться | POST | https://painassasin.online/user/signup/ |
| Войти | POST | https://painassasin.online/user/login/ |
| Получить ключ | POST | https://painassasin.online/user/token/ |
| Обновить ключ | POST | https://painassasin.online/user/token/refresh/ |

### Треки

| Описание запроса | Тип запроса | Пример запроса |
| --- | --- | --- |
| Получить все треки | GET | https://painassasin.online/catalog/track/all/ |
| Получить трек по id | GET | https://painassasin.online/catalog/track/<id> |
| Получить трек по названию | GET | https://painassasin.online/catalog/track/<name> |
| Получить трек в избранное по id | POST | https://painassasin.online/catalog/track/int:pk/favorite/ |
| Удалить трек из избранного по id | DELETE | https://painassasin.online/catalog/track/int:pk/favorite/ |
| Добавить треки в избранное по id | POST | https://painassasin.online/catalog/track/favorite?id=int:pk,int:pk/ |
| Удалить треки из избранного по id | DELETE | https://painassasin.online/catalog/track/int:pk/favorite/ |
| Добавить треки из избранного по id | POST | https://painassasin.online/catalog/track/favorite?id=int:pk,int:pk/ |
| Посмотреть подборки | GET | https://painassasin.online/catalog/selection/ |
| Посмотреть подборку по id | GET | https://painassasin.online/catalog/selection/int:pk/ |
| Удалить трек из подборки по id | DELETE | https://painassasin.online/catalog/track/int:pk/delete/ |
| Добавить трек в подборку по id | POST | https://painassasin.online/catalog/int:pk/update/ |

**Основные возможности бэкенда:**

- Регистрация (log in)
- Возможность залогиниться и разлогиниться (sign up, sign out)
- Получение информации о текущем пользователе
- Витрина с доступными треками
- Встроенный в приложение плеер (прослушивание музыки, постановка на паузу и снятие с нее, перемотка, повтор трека, shuffle плейлиста)
- Добавление трека в избранное
- Список подборок

## Список экранов проекта

### Экран авторизации

Стартовый экран - экран "Войти".

Пользователю предлагается ввести логин и пароль, если он уже зарегистрирован, и нажать "Войти". Если пользователь еще не зарегистрирован, ему необходимо нажать "Зарегистрироваться". 

### Экран регистрации

На экране регистрации пользователь придумывает логин и пароль, а также повторяет пароль. После этого он нажимает “Зарегистрироваться”. После регистрации пользователь снова попадает на стартовый экран “Войти”, где вводит логин и пароль заново.

### Экран “Треки”

Главный экран, на котором отражаются все доступные треки. Во время загрузки показывается экран скелетона. 

Изначально нижний плеер скрыт. Он показывается, только когда пользователь нажимает на любой из треков. При перезагрузке страницы плеер тоже скрыт. 

На главном экране реализуется сортировка треков. Пользователь вводит название трека в строке “Поиск”, и происходит их фильтрация по названию. Это значит, что, если пользователь ввел "tro", ему выдаст трек с названием "Elektro" и все треки, в названиях которых есть строка tro: "Troelf", "FooTroBar”. 

***Поиск по году выпуска***

Осуществляется с помощью сортировки без притягивания бэкенда. Пользователь может сортировать треки двумя способами: от старых к новым и от новых к старым. 

***Поиск по исполнителю***

Осуществляется с помощью бэкенда. При нажатии на “исполнителю” пользователь видит выпадающее меню, в котором показываются только первые пять элементов (остальные нужно скроллить)

Пользователь может выбрать несколько исполнителей одновременно. 

***Поиск по жанру***

Осуществляется с помощью бэкенда. При нажатии на “жанру” пользователь видит выпадающее меню, в котором показываются только первые пять элементов (остальные нужно скроллить)

Пользователь может выбрать несколько жанров одновременно.

### Экраны подборок: “Плейлист дня”, “100 танцевальных хитов”, “Инди заряд”

В каждой подборке отображается список треков, которые в нее входят.

Поиск по исполнителю, жанру, году выпуска не осуществляется.

### Экран “Мои треки”

Экран с подборкой треков, которые пользователь добавил в избранное. 

### Плеер

Можно проиграть трек, закольцевать проигрывание, включить режим шаффл. Достпуна регулировка громкости. Можно добавить в избранное или убрать из избранного.

# Запуск проекта

1. Склонируйте репозиторий:

```
$ $ git clone https://github.com/Yarengina/Music-app.git
```

2. Установите зависимости:

```
$ npm i
```

3. Запустите проект:

```
$ npm start
```

