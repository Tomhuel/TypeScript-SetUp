# TypeScript-SetUp

TypeScript-Setup is a little package just for create a base structure for my proyects.

## How to use it?

That's easy, even we don't need install the package.

```bash
npx @tomhuel/typescript-setup
```

We have 4 ways to create our project.

### Option 1 - In the actual directory without Jest Testing:

```bash
npx @tomhuel/typescript-setup
```

The output should look like this one:

```
user@machine:~/Project$ npx @tomhuel/typescript-setup
Generating Package Json...
{
  "name": "project",
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
}
Generating .gitignore...
Installing Dependencies...
Creating tsconfig.json
No testing setup
Proyect generated succesfully!
```

And the project structure is this:

```
user@machine:~/Project$ tree
.
├── node_modules
│   └── packages...
├── package.json
├── package-lock.json
├── src
│   └── app.ts
└── tsconfig.json
```

### Option 2 - In the actual directory with Jest Testing:

```bash
npx @tomhuel/typescript-setup --test
```

The output should look like this one:

```
user@machine:~/Project$ npx @tomhuel/typescript-setup
Generating Package Json...
{
  "name": "project",
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
}
Generating .gitignore...
Installing Dependencies...
Creating tsconfig.json
Configuring Jest...
Proyect generated succesfully!
```

And the project structure is this:

```
user@machine:~/Project$ tree
.
├── node_modules
│   └── packages...
├── package.json
├── package-lock.json
├── src
│   └── app.ts
├── tests
│   └── app.test.ts
└── tsconfig.json
```

### Option 3 - In a new directory without Jest Testing:

```bash
npx @tomhuel/typescript-setup My-Project-Name
```

The output should look like this one:

```
user@machine:~/Project$ npx @tomhuel/typescript-setup My-Project-Name
Generating Package Json...
{
  "name": "my-project-name",
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
}
Generating .gitignore...
Installing Dependencies...
Creating tsconfig.json
No testing setup
Proyect generated succesfully!
```

And the project structure is this:

```
user@machine:~/Project$ tree My-Project-Name
.
├── node_modules
│   └── packages...
├── package.json
├── package-lock.json
├── src
│   └── app.ts
└── tsconfig.json
```

### Option 4 - In a new directory with Jest Testing:

```bash
npx @tomhuel/typescript-setup My-Project-Name --test
```

The output should look like this one:

```
user@machine:~/Project$ npx @tomhuel/typescript-setup
Generating Package Json...
{
  "name": "my-project-name",
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
}
Generating .gitignore...
Installing Dependencies...
Creating tsconfig.json
Configuring Jest...
Proyect generated succesfully!
```

And the project structure is this:

```
user@machine:~/Project$ tree My-Project-Name
.
├── node_modules
│   └── packages...
├── package.json
├── package-lock.json
├── src
│   └── app.ts
├── tests
│   └── app.test.ts
└── tsconfig.json
```