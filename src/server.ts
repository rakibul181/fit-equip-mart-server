import mongoose from "mongoose"
import app from "./app"
import config from "./app/config"
 
async function main() {
  try {
    await mongoose.connect(config.database_url as string)

    console.log("Connected to MongoDB")

    app.listen(config.port, () => {
      console.log(`E-commerce Backend Running on port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

main()