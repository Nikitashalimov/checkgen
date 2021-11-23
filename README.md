[![Build status](https://ci.appveyor.com/api/projects/status/02oh56u4wjmwqmva/branch/main?svg=true)](https://ci.appveyor.com/project/Nikitashalimov/checkgen/branch/master)

# Домашнее задание к лекции «Символы, итераторы, генераторы»

**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

**Важно**: код должен проходить ESLint без ошибок.

**Важно**: на задачи данного раздела писать авто-тесты не нужно.

**Важно**: решения должны быть построены на базе [шаблона Webpack](/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылки на ваши GitHub-проекты.

---

---

## Генераторы (задача со звёздочкой)

**Важно**: данная задача не является обязательной 

### Легенда

Как вы знаете, объекты, позволяющие организовать итерирование, содержат метод с "именем" `Symbol.iterator`. Напишите функцию `canIterate`, которая определяет, соответствует ли объект протоколу итерирования, возвращая, соответственно, `true`/`false`.

Примеры использования:
```javascript
canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate("Netology"); // true
```
