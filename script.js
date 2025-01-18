function calculateRate() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const thickness = parseFloat(document.getElementById('thickness').value);

    const framePrices = {
        0.5: 6,
        1: 8,
        1.5: 13,
        2: 20
    }

    const boardPrice = 10;
    const glassPrice = 23;

    const framePrice = framePrices[thickness];
    const perimeter = 2 * (length + width);
    const area = length * width;

    const totalFramePrice = perimeter * framePrice;
    const totalBoardPrice = area * boardPrice;
    const totalGlassPrice = area * glassPrice;

    const totalPrice = totalFramePrice + totalBoardPrice + totalGlassPrice;

    document.getElementById('result').textContent = `The rate is: ${totalPrice.toFixed(2)}`;
}