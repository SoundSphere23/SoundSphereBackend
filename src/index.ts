import express from 'express';
import userRoutes from './routes/user.routes';
import config from './config/config';
import app from './server'

const PORT = config.app.PORT

app.use("/user", userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
