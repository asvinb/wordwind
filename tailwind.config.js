module.exports = {
	content: [ './src/**/*.{js,jsx,ts,tsx}' ],
	darkMode: 'class',
	mode: 'jit',
	theme: {
		animation: {
			'pop-in': 'pop-in 100ms',
			'flip-in': 'flip-in',
			'slide-in': 'slide-in 100ms linear',
			'slide-out': 'slide-out 100ms linear',
		},
		fontFamily: {
			sans: [ 'Clear Sans', 'Helvetica Neue', 'Arial', 'sans-serif' ],
		},
		keyframes: {
			'pop-in': {
				'0%': {
					transform: 'scale( 0.8 )',
					opacity: 0,
				},
				'40%': {
					transform: 'scale( 1.1 )',
					opacity: 1,
				},
			},
			'flip-in': {
				'0%, 100%': {
					transform: 'rotateX( 0 )',
				},
				'100%, 0%': {
					transform: 'rotateX( -90deg )',
				},
			},
			'flip-out': {
				'0%': {
					transform: 'rotateX( -90deg )',
				},
				'100%': {
					transform: 'rotateX( 0 )',
				},
			},
			'slide-in': {
				'0%': {
					transform: 'translateY( 30px )',
					opacity: 0,
				},
				'100%': {
					transform: 'translateY( 0 )',
					opacity: 1,
				},
			},
			'slide-out': {
				'0%': {
					transform: 'translateY( 0 )',
					opacity: 1,
				},
				'90%': {
					opacity: 0,
				},
				'100%': {
					transform: 'translateY( 60px )',
					opacity: 0,
				},
			},
		},
		extend: {
			colors: {
				wordle: {
					green: '#6aaa64',
					darkendGreen: '#538d4e',
					yellow: '#c9b458',
					darkendYellow: '#b59f3b',
					lightGray: '#d8d8d8',
					gray: '#86888a',
					darkGray: '#939598',
					white: '#fff',
					black: '#212121',
					orange: '#f5793a',
					blue: '#85c0f9',
					'color-tone-1': '#1a1a1b',
					'color-tone-2': '#787c7e',
					'color-tone-3': '#878a8c',
					'color-tone-4': '#d3d6da',
					'color-tone-5': '#edeff1',
					'color-tone-6': '#f6f7f8',
					'color-tone-7': '#ffffff',
				},
			},
			transitionDelay: {
				250: '250ms',
			},
			transitionDuration: {
				250: '250ms',
			},
		},
	},
	plugins: [],
};
