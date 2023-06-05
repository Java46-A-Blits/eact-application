function getRandomNumber(min: number, max: number){
    if(min > max){
        [min, max] = [max, min];
    }
    return min + Math.round(Math.random()*(max - min))
}
export function getRandomMatrix(c-Array<number[]>()
    for (let i = 0; i < rows; i++){
        res[i] = [];
        for (let j = 0; j < columns; j++){
            res[i][j] = getRandomNumber(min, max);
        }
    }
    return res;
}