import { Router} from 'express';
import { 
    getProducts,
    getProduct,
    createProduct, 
    updateProduct, 
    deleteProduct
 } from '../controllers/product.js';
import { authorize, protect } from '../middleware/authMiddleware.js';


const router = Router();

router.route("/")
.get(getProducts)
.post(protect, authorize("admin"), createProduct);

router.route('/:id')
.get(protect, getProduct)
.put(protect, authorize("admin"), updateProduct)
.delete(protect, authorize("admin"), deleteProduct);

export default router;


