export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    let mid;
    let value;

    do {
        // We could also do (high + low)/2 but that might result in integer overflow as the sum might exceed the max integer limit in case of very large values
        mid = Math.floor(low + (high - low) / 2);
        value = haystack[mid]

        if (value === needle) {
            return true; // return mid for index
        } else if (value < needle) {
            low = mid + 1;
        } else {
            high = mid;
        }
    } while (low < high);
    return false; // return -1 in case of index
}
