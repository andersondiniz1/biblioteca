> npm init -y

> npm install typeorm reflect-metadata mysql2 @types/node @types/express typescript ts-node ts-node-dev

> tsconfig.json

{
"compilerOptions": {

    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true

},
"include": ["src/**/*.ts"],
"exclude": ["node_modules"]
}

> ormconfig.json

{
"type": "mysql",
"host": "localhost",
"port": 3306,
"username": "seu_usuario",
"password": "sua_senha",
"database": "seu_banco_de_dados",
"synchronize": true,
"logging": true,
"entities": ["src/entities/**/*.ts"],
"migrations": ["src/migrations/**/*.ts"],
"subscribers": ["src/subscribers/**/*.ts"],
"cli": {
"entitiesDir": "src/entities",
"migrationsDir": "src/migrations",
"subscribersDir": "src/subscribers"
}
}
