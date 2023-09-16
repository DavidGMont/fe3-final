const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
};

export function shoot() {
    // eslint-disable-next-line no-undef
    confetti({
        ...defaults,
        particleCount: 30,
        scalar: 1.2,
        shapes: ['circle', 'square'],
        colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
    });
    // eslint-disable-next-line no-undef
    confetti({
        ...defaults,
        particleCount: 20,
        scalar: 2,
        shapes: ['text'],
        shapeOptions: {
            text: {
                value: ['🦷', '😀', '✨'],
            },
        },
    });
}
