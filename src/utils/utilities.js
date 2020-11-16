import {images} from "../images";

const matrixGrid = (arr, cols, cards) => {
    for(let i = 0; i < arr.length; i += cols){
        cards.push(arr.slice(i, cols + i));
    }
    return cards;
};

export const initializeGird = (rows, cols) => {
    let uniqueId = 0;
    let totalSize = rows * cols;
    const items = images.reduce((acc, curr) => {
        acc.push({
            id: uniqueId++,
            ...curr
        });
        acc.push({
            id: uniqueId++,
            ...curr
        });
        return acc;
    }, []);

    const trimmedItems = items.slice(0, totalSize).sort(() => Math.random() - 0.5);
    return matrixGrid(trimmedItems, cols, []);
};

export const findInCards = (id, arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j].id === id){
                return arr[i][j];
            }
        }
    }
};