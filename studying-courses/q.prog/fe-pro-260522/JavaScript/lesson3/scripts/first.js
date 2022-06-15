let styles = ['Джаз', 'Блюз'];
document.write(styles + "<br>");
styles.push('Рок-н-ролл');
document.write(styles + "<br>");
styles[1] = 'Классика';
document.write(styles + "<br>");

document.write("Удалили элемент: " + styles.shift() + "<br>");
document.write("Текущий массив: " + styles + "<br>");
styles.unshift('Рэп','Регги')
document.write("Добавили элементы: " + styles[0] + "," + styles[1] + "<br>");
document.write("Текущий массив: " + styles + "<br>");