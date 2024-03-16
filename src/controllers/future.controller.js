import { getDataFromJSON, getPuzzleFromJSON } from '../utils/methods.js';

//Get all the past puzzles
const getAllPuzzle = (req, res) => {
    try {
        const data = getDataFromJSON('src/data/future.json');
        const puzzles = data.acertijos; //select the acertijo atribute 
        res.json(puzzles);
    } catch (error) {
        res.status(500).json({ message: 'Server error', details: error });
    }
}

const getPuzzleById = (req, res) => {
    try {
        const { id } = req.params; // get the puzzle id
        //validates if the id is within the range
        if (id > 10 || id < 0) {
            res.status(400).json({ message: `id ${id} is below or exceeds existing ids in the data` });
        } else {
            const puzzle = getPuzzleFromJSON('src/data/future.json', id);
            res.json(puzzle);
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', details: error });
    }
}

export const methods = {
    getAllPuzzle,
    getPuzzleById,
}