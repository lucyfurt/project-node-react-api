import {Router} from 'express';
export const router = Router();


// List categories
router.get('/categories', (req, res)=>{
    res.send('OK');
});


//Create Category
router.post('/categories', (req, res)=>{
    res.send('OK');
});

//List products
router.get('/products', (req, res)=>{
    res.send('OK');
});
//Create product
router.post('/products', (req, res)=>{
    res.send('OK');
});
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
