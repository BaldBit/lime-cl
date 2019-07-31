import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

const config = {
  input: './src/components/index.js',
  external: ['react', 'styled-components', 'prop-types', 'react-dom'],
  output: {
    format: 'umd',
    name: 'countdown',
    globals: {
      react: 'React',
    },
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react'],
    }),
    uglify(),
  ],
};

export default config;
