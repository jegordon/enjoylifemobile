db.clientes.insert({
	"usuario":"jegordon",
	"nombre":"Juan Gordon",
	"password":"123456",
	"email":"jgordon87@gmail.com",
	"fechaRegistro":"2013-06-25",
	"peso":"99",
	"talla":"100",
	"planActual":"plan1"

})

db.mensajes.insert({
	"mensaje":"Hola como estas , estuvo buena la #cena",
	"remitente":"jegordon",
	"status":"noLeido",
	"Fecha":"2013-06-25",
	"hashtags":["cena"]
})

db.hashtags.insert({
	"hashtag" : "desayuno"
})

db.hashtags.insert({
	"hashtag" : "cena"
})

db.especialistas.insert({
	"username":"@jgordon",
	"nombre":"Juan Gordon",
	"bio":"Desarrollador web",
	"type":"contact",
	"FechaRegistro":"2013-06-25"
})

db.especialistas.insert({
	"username":"@atrevino",
	"nombre":"Alejandro Treviño",
	"bio":"Mafioso ruso",
	"type":"contact",
	"FechaRegistro":"2013-07-25"
})