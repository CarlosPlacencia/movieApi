import { Router } from 'express';
import {filter} from './movie.controllers';

const router = Router();

// /api/movies
router
    .route('/')
    .get(filter)



export default router;
