import express from 'express';
import pastRouter from './src/routes/past.router.js';
import futureRouter from './src/routes/future.router.js';

//Server configuration
const app = express();
const PORT = 9000;

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
