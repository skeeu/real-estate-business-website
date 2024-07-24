export const priceFormatter = new Intl.NumberFormat();

export const getCircularSlice = <T>(
    arr: T[],
    startIndex: number,
    length: number
): T[] => {
    const result: T[] = [];
    const arrLength = arr.length;

    for (let i = 0; i < length; i++) {
        result.push(arr[(startIndex + i) % arrLength]);
    }

    return result;
};
