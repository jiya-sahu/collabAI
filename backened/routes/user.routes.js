import {Router} from 'express'
import * as userController from '../controllers/user.controller.js'
import {body} from 'express-validator'
import * as authmiddleware from '../middleware/auth.middleware.js'
const router = Router()

router.post('/signup',
    body('email').isEmail().withMessage('Email must be a valid email address'),
    body('password').isLength({min:3}).withMessage('Password must be atleast 3 characters long'),
    userController.createUserController)

router.post('/login',
        body('email').isEmail().withMessage('Email must be a valid email address'),
        body('password').isLength({min:3}).withMessage('Password must be atleast 3 characters long'),
        userController.loginUserController
    )

router.get('/profile',authmiddleware.authUser ,userController.profileController)
router.get('/logout',authmiddleware.authUser,userController.logoutController)

export default router;
