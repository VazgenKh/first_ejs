
import express from 'express';
import path from 'path';

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('Public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Axperr',
        companyName: 'Axperr',
        companyDescription: 'Axperr is an innovative company specializing in software development and IT services.',
        services: [
            'Web Application Development',
            'Mobile Development',
            'IT Strategy Consulting',
            'Technical Support and Maintenance',
            'Data Analytics and Machine Learning'
        ],
        advantages: [
            'Personalized approach to each project',
            'Experienced team of professionals',
            'Use of cutting-edge technologies',
            'Flexibility and adaptability of solutions'
        ],
        contactEmail: 'info@axperr.com',
        contactPhone: '+1 (800) 123-4567',
        contactAddress: '1234 Main St, Tech City, TC 56789'
    });
});

app.get('/users', (req, res) => {
    res.render('users');
});

app.get('/users/:username', (req, res) => {
    let data = {
        username: req.params.username,
        hobbies: ['sport', 'reading', 'traveling']
    };
    res.render('users', data);
});

app.post('/check-user', (req, res) => {
    let username = req.body.username;
    if (username === 'Vazgen') {
        return res.redirect('/');
    } else {
        return res.redirect('/users/' + (username));
    }
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
