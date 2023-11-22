import express, {Request, Response} from 'express';
import userRoutes from './routes/user.routes';

const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

app.use("/user", userRoutes)



export default app