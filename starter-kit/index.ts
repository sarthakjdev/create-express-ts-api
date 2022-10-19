import express from 'express'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dotenv from 'dotenv/config'
import config from '@configs/config'
import logger from '@utils/logger'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import cors from 'cors'

import ready from '@controllers/ready'
// requiring routes files :
import serverRoute from '@routes/index'

const port = config.PORT || 5000

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', serverRoute)
app.get('/', ready)

app.listen(port, () => {
    logger.info(`Server is listenning on ${port}`)
})
