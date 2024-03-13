const loading = document.querySelector('#loading');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
    loading.animate(
        {
            backdropFilter: ['blur(1px)', 'blur(0)'],
            background: ['rgba(238, 221, 136, 1)', 'rgba(238, 221, 136, 0)'],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',
        },
    );

    loadingText.animate(
        [
            {
                opacity: 1,
                offset: .8,
            },
            {
                opacity: 0,
                offset: 1,
            },
        ],   
        {
            duration: 1200,
            easing: 'ease',
            fill: 'forwards',
        },
    )
})
