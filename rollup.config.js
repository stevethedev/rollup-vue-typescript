import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';

export default {
  input: 'with-script-typescript.vue',
  output: {
    name: 'Test',
    format: 'iife',
    file: './dist/with-script-typescript.js',
    sourcemap: true,
  },
  plugins: [
    typescript(),
    vue(),
    commonjs(),
  ],
}
