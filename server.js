const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();
app.engine('.hbs', hbs());  //pozwala zdefiniować nam, że dane pliki powinny być renderowane przez dany silnik. informujemy Express o tym, że pliki o rozszerzeniu .hbs powinny być obsługiwane przez silnik hbs (czyli nasz załadowany Handlebars)
app.set('view engine', '.hbs');  //Ten fragment mówi, że w aplikacji używamy widoków właśnie o tym rozszerzeniu. Dzięki temu, przy kompilacji, będziemy mogli wskazywać tylko jego nazwę, a Express sam domyśli się, że ma szukać pliku z odpowiednią końcówką

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { layout: false, name: req.params.name });  //res.render('template-file', placeholderValuesObj);
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact', { layout: 'dark' });
});

app.get('/info', (req, res) => {
  res.render('info');
});

app.get('/history', (req, res) => {
  res.render('history');
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
})

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
