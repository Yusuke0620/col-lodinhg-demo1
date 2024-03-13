const loading = document.querySelector('#loading');
const loadingScreen = document.querySelector('#loading-screen');
const loadingP = document.querySelector('#loading p');

window.addEventListener('load', () => {
    loading.animate(
        {
            opacity: [1, 0],
            visibility:'hidden',
        },        
        {
            duration: 2000,
            delay: 1000,
            fill: 'forwards',
        },
    );

    loadingScreen.animate(
        {
            translate: ['100vw 0', '0 0', '-100vw 0'],
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
        }
    );

    loadingP.animate(
        [
            {
                opacity: 1,
                offset: .5,
            },
            {
                opacity: 0,
                offset: 1,
            },
        ],
        {
            duration: 1000,
            fill: 'forwards',
        },
    );
});
