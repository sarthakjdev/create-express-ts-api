import express from 'express'

// contollers for basic route:
import controller from '@controllers/basic/index'

const router = express.Router() // creating router

/// setting up further route for basic route
router.get('/', controller.getBasic)

export default router
