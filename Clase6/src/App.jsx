import React, { useState } from 'react';

const RegistroPagina = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const manejarRegistro = () => {
    if (!nombre || !apellido || !email || !telefono || !contrasena || !confirmarContrasena) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    if (!/^\d+$/.test(telefono)) {
      alert('Por favor, ingrese solo caracteres numéricos en el campo de teléfono.');
      return;
    }

    if (!email.includes('@')) {
      alert('Por favor, ingrese un correo electrónico válido. (debe tener el @)');
      return;
    }

    if (contrasena !== confirmarContrasena) {
      alert('Las contraseñas no son iguales.');
      return;
    }

    console.log({
      nombre,
      apellido,
      email,
      telefono,
      contrasena,
      confirmarContrasena,
    });

    alert('¡Registro exitoso!');

    setNombre('');
    setApellido('');
    setEmail('');
    setTelefono('');
    setContrasena('');
    setConfirmarContrasena('');
  };

  return (
    <div>
      <h2>Registro</h2>
      <form>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />

        <label>
          Apellido:
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </label>
        <br />

        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />

        <label>
          Teléfono:
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            pattern="[0-9]*"
          />
        </label>
        <br />

        <label>
          Contraseña:
          <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
        </label>
        <br />

        <label>
          Confirmar Contraseña:
          <input
            type="password"
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
          />
        </label>
        <br />

        <button type="button" onClick={manejarRegistro}>
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegistroPagina;
