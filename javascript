// Insert a product document into the 'products' collection
db.products.insert({
   name: "Product 1",
   description: "A great product",
   price: 29.99,
   image_url: "/images/product1.jpg"
});

// Insert a user into the 'users' collection
db.users.insert({
   name: "Khaya MAnoto",
   email: "9slidevibe_tech.co.za",
   shipping_address: {
       street: "123 Main St",
       city: "johanesburg",
       state: "gauteng",
       zip_code: "10001",
       country: "USA"
   }
});

// Insert a cart for a user
db.carts.insert({
   user_id: ObjectId("user_object_id_here"),
   items: [
       {
           product_id: ObjectId("product_object_id_here"),
           quantity: 2
       }
   ]
});

// Insert an order for a user
db.orders.insert({
   user_id: ObjectId("user_object_id_here"),
   items: [
       {
           product_id: ObjectId("product_object_id_here"),
           quantity: 2
       }
   ],
   shipping_address: {
       street: "123 Main St",
       city: "johanesburg",
       state: "Gauteng",
       zip_code: "2000",
       country: "South africa"
   },
   status: "Shipped",
   total_price: 89.97
});

// Insert a contact form submission
db.contacts.insert({
   name: "Khaya Manoto",
   email: "9slivibe_tech.co.za",
   message: "I have a question about my order."
});

