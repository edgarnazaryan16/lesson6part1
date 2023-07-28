export const totalCounter = (arr) => {
    return arr.reduce((total, item) => (parseFloat(item.price) * item.amount) + total, 0);
}