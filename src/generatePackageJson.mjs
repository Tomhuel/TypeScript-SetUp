const generagePackageJson = (projectName, jest = false) => {
  if (jest) {
    return `{
  "name": "${projectName.toLowerCase()}",
  "version": "1.0.0",
  "description": "",
  "main": "src/app.ts",
  "scripts": {
    "dev": "tsnd --respawn --clear src/app.ts",
    "build": "rimraf ./dist && tsc",
    "start": "npm run build && node dist/app.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^16.4.1"
  },
  "devDependencies": {
    "@types/jest": "^29.5.11",
    "@types/node": "^20.10.4",
    "jest": "^29.7.0",
    "rimraf": "^5.0.5",
    "ts-jest": "^29.1.1",
    "ts-node": "^10.9.2",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.3.3"
  }
}`
  }
  return `{
  "name": "${projectName.toLowerCase()}",
  "version": "1.0.0",
  "description": "",
  "main": "src/app.ts",
  "scripts": {
    "dev": "tsnd --respawn --clear src/app.ts",
    "build": "rimraf ./dist && tsc",
    "start": "npm run build && node dist/app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^20.10.6",
    "rimraf": "^5.0.5",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.3.3"
  }
}`
}

export { generagePackageJson };