export function range(minInclusive: number, maxExcusive: number){
    const res: number[] = [];
    for(let i = minInclusive; i < maxExcusive; i++){
        res.push(i);
    }
    return res;
}
export function getMaxMinAvgByField(array: any[], field: string):
{min: number, max:number, avg: number} {
    if(!array || array.length === 0 || !array[0][field] || typeof (array[0][field]) !== 'number')
return {min: 0, max: 0, avg: 0};
    const resObj: {min: number, max: number, avg: number} = 
    array.reduce((res, cur) => (
        {min: res.min < cur[field] ? res.min : cur[field], 
         max: res.max > cur[field] ? res.max : cur[field], 
         avg: res.avg + cur[field] }
        ),{min: array[0].field, max: array[0].field, avg: 0});
    resObj.avg = Math.round(resObj.avg / array.length)
    return  resObj;
    }   
                                