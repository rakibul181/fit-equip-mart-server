import express, { Application, Request, Response } from "express"
import cors from "cors"
import router from "./app/router"
import notFound from "./app/middleware/notFound"
const app: Application = express()

app.use(cors())
app.use(express.json())


app.use('/api/v1', router)


 

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: "Ok",
  })
})


// app.use(globalErrorHandler)
app.use(notFound)
 
export default app