const sizes = {
	size1: '1px',
	size5: '5px'
}

const meliTheme = {
	colors: {
		main: '#FFF159',
		secondary: '#EBEBEB',
		black: '#333',
		grey: 'rgb(238, 238, 238)',
		error: 'red'
	},
	sizes: { ...sizes }
}

const mpTheme = {
	colors: {
		main: '#00B1EA',
		secondary: '#FFF',
		black: '#333',
		grey: 'rgb(238, 238, 238)',
		error: 'red'
	},
	sizes: { ...sizes }
}

export { meliTheme, mpTheme };