import express from 'express';
import cors from 'cors';

//Server configuration
const app = express();
const PORT = 9000;

app.use(cors({
    /* port 4321*/
}));

// index route
app.get('/api', (req, res) => {
    res.json({ "users": ["John", "Nicolas", "Santiago"] });
});


app.listen(PORT, (req, res) => {
    console.log(`Server listening on http://localhost:${PORT}/api`);
});
