import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import html from 'rollup-plugin-html';
import postcss from 'rollup-plugin-postcss';
import stylelint from 'stylelint';
import image from '@rollup/plugin-image';
import typescript from 'rollup-plugin-typescript2';
import { eslint } from 'rollup-plugin-eslint';
import tailwind from 'rollup-plugin-tailwind';
import autoprefixer from 'autoprefixer';

export default {
  input: 'src/index.tsx',
  output: {
    file: 'build/bundle.js',
    format: 'iife',
    sourcemap: 'inline',
  },
  plugins: [
    html({
      include: '**/*.html',
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    image(),
    resolve({
      jsnext: true,
      module: true,
      browser: true,
      extensions: ['.js', '.ts', '.tsx', '.css', '.scss'],
    }),
    eslint(),
    stylelint(),
    postcss({
      extract: false,
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        localsConvention: 'camelCaseOnly',
      },
      use: ['sass'],
      plugins: [autoprefixer, tailwind],
    }),
    commonjs({
      exclude: 'src/**',
    }),
    typescript({
      declarations: true,
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: ['', 'public'],
      host: 'localhost',
      port: 3000,
    }),
    livereload({ watch: 'build' }),
  ],
};
