import { defineConfig } from 'tsdown';
import { replacePlugin } from 'rolldown/plugins';
import pathe from 'pathe';

const packageJSON = await import(`file://${pathe.join(process.cwd(), 'package.json')}`, { with: { type: 'json' } }).then(m => m.default ?? m);

export default defineConfig({
    entry: 'src/**/*',
    outDir: 'dist',
    tsconfig: 'tsconfig.json',
    target: 'esNext',
    format: ['esm', 'cjs'],
    platform: 'neutral',
    nodeProtocol: true,
    dts: true,
    sourcemap: true,
    clean: true,
    unbundle: true,
    skipNodeModulesBundle: true,
    noExternal: [
        'pathe'
    ],
    plugins: [
        replacePlugin({
            'process.env.__VERSION__': `"${packageJSON.version}"`
        })
    ]
});