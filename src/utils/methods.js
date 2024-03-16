import fs from 'fs';

// method that receives a path and fetches the data from a json file
export const getDataFromJSON = (path) => {
    const json = fs.readFileSync(path, 'utf-8');
    const data = JSON.parse(json); // Converts JSON into an object.
    return data;
}


export const getPuzzleFromJSON = (path, id) => {
    const data = getDataFromJSON(path);
    const puzzle = data.acertijos[id - 1]; // select the id required
    return puzzle;
}