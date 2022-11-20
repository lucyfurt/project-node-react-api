import path from 'path';
import multer from 'multer';

import {Router} from 'express';
import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback){

            callback(null, path.join(__dirname, '..', '/uploads'));


        },
        filename(req, file, callback){
            callback(null, `${Date.now()}-${file.originalname}`);

        },

    }),

});

// List categories
router.get('/categories', listCategories);


//Create Category
router.post('/categories', createCategory);

//List products
router.get('/products', listProducts);
//Create product

router.post('/products', upload.single('image'), createProduct);

//get products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

//list orders
router.get('/orders', listOrders);

//create order
router.post('/orders', createOrder);

//change order status
router.patch('/orders/:orderId', (req, res)=>{
    res.send('OK');
});
//delete/cancel order
router.delete('/orders/:orderId', (req, res)=>{
    res.send('OK');
});
