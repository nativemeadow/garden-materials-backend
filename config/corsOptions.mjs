import allowedOrigins from './allowedOrigins.mjs';

const corsOptions = {
    // origin: (origin, callback) => {
    //     if (allowedOrigins.includes(origin) || !origin) {
    //         callback(null, true)
    //     } else {
    //         callback(new Error('Not allowed by CORS'));
    //     }
    // },
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
    //allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
    // optionsSuccessStatus: 200,
    credentials: true,
    exposedHeaders: ['*', 'Authorization']
}

export default corsOptions;