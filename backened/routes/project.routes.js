import {Router} from 'express'
import {body} from 'express-validator'
import * as projectController from '../controllers/project_controllers.js'
import * as authmiddleware from '../middleware/auth.middleware.js'

const router = Router();


router.post('/create',
    authmiddleware.authUser,
    body('name').isString().withMessage('Name is required'),
    projectController.createProject
)

router.get('/getProjects',
    authmiddleware.authUser,
    projectController.getAllproject
)
router.put('/add-user',
    authmiddleware.authUser,
    body('projectId').isString().withMessage('Project ID is required'),
    body('users').isArray({ min: 1 }).withMessage('Users must be an array of strings').bail()
        .custom((users) => users.every(user => typeof user === 'string')).withMessage('Each user must be a string'),
    projectController.addUserToProject
)
export default router;