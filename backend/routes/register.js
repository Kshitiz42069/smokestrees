import express from 'express'
import { getregister, register } from '../controller/register_controller.js';
const router = express.Router();

router.post('/register',register);
router.get('/register',getregister);

export default router;