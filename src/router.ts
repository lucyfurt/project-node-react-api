import path from 'path';
import multer from 'multer';

import {Router} from 'express';
import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';

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
router.get('/categories/:categoryId/products', (req, res)=>{
    res.send('OK');
});
//list orders
router.get('/orders', (req, res)=>{
    res.send('OK');
});
//create order
router.post('/orders', (req, res)=>{
    res.send('OK');
});
//change order status
router.patch('/orders/:orderId', (req, res)=>{
    res.send('OK');
});
//delete/cancel order
router.delete('/orders/:orderId', (req, res)=>{
    res.send('OK');
});
