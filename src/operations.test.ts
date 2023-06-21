import Operations from "./Operations";

const operations = new Operations();
test ('sum test', () => {
    expect(operations.sum(2,4)).toBe(6);
})
test ('divide test', () => {
    expect(operations.divide(1, 3)).toBeCloseTo(.33);
})
test('division exception', () => {
    expect(() => operations.divide(5,0)).toThrowError();// ()=> means that we are looking for 
                                                        // what will function return (i.e. error)
})
test('conversion test', () => {
    const ar = [2, 4];
    const expected = [10, 20];
    expect(operations.convert(ar, cur => cur*5)).toEqual(expected);
})
test('predicate test', () => {
    expect(operations.checkPredicate((n1, n2) => n1 > n2, 5,2)).toBeTruthy();
})
test ('concatination test', () => {
    expect(operations.concat('this', ' is')).toContain('this is');    
})
test('get object test', () => {
    const expectedObject = {field: 5};
    expect(operations.getObjects(5)).toEqual(expectedObject);
})