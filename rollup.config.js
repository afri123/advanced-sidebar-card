import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/advanced-sidebar-card.ts',
  output: {
    file: 'advanced-sidebar-card.js',
    format: 'es'
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript()
  ]
};
