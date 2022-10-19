import express from 'express'
import basicRouter from '@routes/basic'

const router = express.Router()

router.use('/basic', basicRouter)

export default router
