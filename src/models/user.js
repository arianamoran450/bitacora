var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
  values: ["ADMIN", "USER"],
  message: '{VALUE} no es un rol válido'
}

let Schema1 = mongoose.Schema;

let usuarioSchema = new Schema1({
  nombre: {
      type: String,
      required: [true, 'El nombre es necesario'],
  },
  apellido: {
    type: String,
    required: [true, 'El apellido es necesario'],
},
  email: {
      type: String,
      unique: true,
      required: [true, "El correo es obligatorio"],
  },
  password: {
      type: String,
      required: [true, "Le contraseña es obligatoria"],
  },
  role: {
      type: String,
      default: 'USER',
      required: [true],
      enum: rolesValidos,
  },
});

// elimina la key password del objeto que retorna al momento de crear un usuario
usuarioSchema.methods.toJSON = function() {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;

  return userObject;
}

usuarioSchema.plugin(uniqueValidator, {
  message: '{PATH} debe de ser único'
})

module.exports = mongoose.model('user', usuarioSchema)