import express from 'express';
import cors from 'cors';
import pastRouter from './src/routes/past.router.js';
import futureRouter from './src/routes/future.router.js';

//Server configuration
const app = express();
const PORT = 9000;

//middleware
app.use(cors({
    origin: 'https://codicon-2024.vercel.app/', // URl front-end
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',//metodos permitidos
	credentials: true,//crendenciales correctas 
	optionsSuccessStatus: 204,//codigo de estado sin contenido
}));

//routes
app.use('/api/past/', pastRouter);
app.use('/api/future/', futureRouter);

// index route
app.get('/api', (req, res) => {
    res.json({ message: 'Wellcome to Pandemission' });
});


app.listen(PORT, (req, res) => {
    console.log(`Server listening on http://localhost:${PORT}/api`);
});
