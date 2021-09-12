const normalize = (value) => {
    while (value > 255) value /= 1.5;
    while (value < 150) value *= 1.5;

    const fill = Math.floor(value).toString(16);
    const border = Math.floor(value * .9).toString(16);
    return [fill, border];
};
export default (text) => {
    let r = 1, g = 1, b = 1;
    Array
        .from(text)
        .map(c => c.charCodeAt())
        .forEach((v, i) => {
            if (i % 3 === 0)
                b += v;
            else if (i % 2 === 0)
                g += v;
            else
                r += v;
        });

    r = normalize(r);
    g = normalize(g);
    b = normalize(b);

    const fill = `#${r[0]}${g[0]}${b[0]}dd`;
    const border = `#${r[1]}${g[1]}${b[1]}dd`;
    return [fill, border];
};