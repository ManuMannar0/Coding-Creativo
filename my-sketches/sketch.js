const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [600, 600],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    const quadratiCheVoglio = 5;
    const w = 100;
    const h = 100;

    const rettangolo = (x, y, gap, size) => {
      context.beginPath();
      context.rect(gap + w * x, gap + h * y, size, size);
      context.stroke();
    };

    for (var contatore1 = 1; contatore1 <= quadratiCheVoglio; contatore1++) {
      for (var contatore2 = 1; contatore2 <= quadratiCheVoglio; contatore2++) {
        if (Math.random() > 0.5) {
          rettangolo(contatore1, contatore2, 10, 30);
        }
        if (Math.random() > 0.5) {
          rettangolo(contatore1, contatore2, 0, 50);
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
