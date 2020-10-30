db.products.drop()

db.products.insertMany([
    { "_id" : 100, "sku" : "abc123", "description" : "Single line description." },
    { "_id" : 101, "sku" : "abc789", "description" : "First line\nSecond line" },
    { "_id" : 102, "sku" : "xyz456", "description" : "Many spaces before     line" },
    { "_id" : 103, "sku" : "xyz789", "description" : "Multiple\nline description" }
])

db.products.insertMany([
    { "_id" : 104, "sku" : "xyz789", "description" : "Primera línea\nsegunda línea" },
    { "_id" : 105, "sku" : "xyz789", "description" : "Información\ninteresante" },
    { "_id" : 106, "sku" : "xyz789", "description" : "mline" },
])