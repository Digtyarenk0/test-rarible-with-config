module.exports = {
  mode: 'jit',
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      white: {
        DEFAULT: '#fff',
        two: '#23375a',
        light: '#eaf9ff',
      },
      grey: {
        DEFAULT: '#6e788c',
        two: '#f4f5f6',
        light: '#f7f8f9',
        'opacity-50': 'rgba(110, 120, 140, 0.5)',
        'opacity-64': 'rgba(110, 120, 140, 0.64)',
      },
      accent: {
        DEFAULT: '#ff4650',
      },
      blue: {
        DEFAULT: '#3d83f3',
        light: '#63d3fd',
      },
      primary: {
        DEFAULT: '#23375a',
        light: '#eaf9ff',
      },
      green: {
        DEFAULT: '#45b26b',
        alert: '#3cd399',
      },
      yellow: {
        DEFAULT: '#ffc700',
      },
      brown: {
        DEFAULT: '#763d16',
      },
    },
    fontFamily: {
      'pt-regular': ['PT Mono Regular'],
      'pt-bold': ['PT Mono Bold'],
      'inter-regular': ['Inter Regular'],
      'inter-Medium': ['Inter Medium'],
      'inter-semi-bold': ['Inter Semi Bold'],
      'inter-bold': ['Inter Bold'],
    },
  },
  plugins: [],
};
