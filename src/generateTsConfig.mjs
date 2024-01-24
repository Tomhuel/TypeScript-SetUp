export const TsConfigTemplate = () => {
    const tsConfig = {
        "exclude": ["node_modules", "dist", "tests", "jest.config.ts"],
        "compilerOptions": {
            "target": "es2016",
            "module": "commonjs",
            "rootDir": "src",
            "outDir": "dist/",
            "esModuleInterop": true,
            "forceConsistentCasingInFileNames": true,
            "strict": true,
            "skipLibCheck": true
        }
    }
    return JSON.stringify(tsConfig, null, '\t');
}
