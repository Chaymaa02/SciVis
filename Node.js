class Node {
    constructor(r, g, b, position, opacity) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.position = position;
      this.opacity = opacity;
    }

    getCSSColor(alpha) {
        if (alpha !== null) return d3.rgb(this.r, this.g, this.b, alpha);
        else return d3.rgb(this.r, this.g, this.b);
      }
}

//convert hex color to rgb color
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}