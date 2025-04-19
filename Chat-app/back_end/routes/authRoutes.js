import { Router } from 'express';
import { register} from '../controllers/authcontroller.js';
import { login} from '../controllers/authcontroller.js';
const router = Router();


router.post('/register', register);
router.post('/login', login);


export default router;