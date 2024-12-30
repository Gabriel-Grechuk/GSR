import type { BuildConfig } from 'bun';

const output = await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  minify: true,
  target: 'browser',
  format: 'esm',
  env: 'inline',
  sourcemap: 'linked',
} as BuildConfig);

if (!output.success) {
  console.log(
    '(build.ts)[ ERR ] - Seems that we have some problems at the build...'
  );
  for (const log of output.logs) console.log('Error: ', log);
  process.exit(1);
} else {
  console.log('(build.ts)[ OK ] - Success!');
}
