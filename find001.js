
// El campo sku termina en 789
db.products.find( { sku: { $regex: /789$/ } } )

// El campo sky comienza con ABC sin distinguir mayúsculas/minúsculas
db.products.find( { sku: { $regex: /^ABC/i } } )


// El campo description comienza con s
// si comienza con s una nueva línea también lo quiero option 'm'
// si no quiero disinguir mayúsculas de minúsculas también lo quiero option 'i'
db.products.find( { description: { $regex: /^S/, $options: 'm' } } )
db.products.find( { description: { $regex: /^S/m } } )
// las tres siguientes con equivalentes
db.products.find( { description: { $regex: /^S/mi } } )
db.products.find( { description: { $regex: /^S/, $options: 'mi' } } )
db.products.find( { description: /^S/mi} )

// Los que tengan una S en cualquier posición
db.products.find( { description: { $regex: /S/} } )
// si no quiero disinguir mayúsculas de minúsculas también lo quiero option 'i'
db.products.find( { description: { $regex: /S/i} } )

// el caracter especial '.' se sustituye por un caracter cualquiera
// el caracter especial '*' se sustituye por un grupo de carácteres
// La opción s permite que '.' sustituya también al caracter \n nueva línea
db.products.find( { description: { $regex: /m.*line/, $options: 'si' } } )
db.products.find( { description: { $regex: /m..*line/, $options: 'i' } } )

