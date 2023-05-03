const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
        colors: {
            'white': '#FAFAFA',
            'black' : '#0A0A0A',
            'gray' : '#676767',
            'gray-light' : '#DDDDDD',
            'gray-dark' : '#303030',
        },
        fontFamily: {
            'sans': ['Inter', 'sans-serif'],
        },

		extend: {
            screens: {
                'xs': '375px',
            }
        }
	},

	plugins: []
};

module.exports = config;
