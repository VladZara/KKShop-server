import { Router} from 'express';
import { 
    getProducts,
    getProduct,
    createProduct, 
    updateProduct, 
    deleteProduct,
    productPhotoUpload
 } from '../controllers/product.js';


const router = Router();

router.route('/:id/photo').put(productPhotoUpload);


router.route("/").get(getProducts).post(createProduct);
router.route('/:id')
.get(getProduct)
.put(updateProduct)
.delete(deleteProduct);

export default router;


