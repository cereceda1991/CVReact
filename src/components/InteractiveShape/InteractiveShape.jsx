import React from 'react';
import Draggable from 'react-draggable';

const CertificateComponent = () => {
  const [name, setName] = React.useState('John Doe');
  const [organization, setOrganization] = React.useState('Acme Corporation');
  const [date, setDate] = React.useState('28 de junio de 2023');
  const [certificateNumber, setCertificateNumber] = React.useState('1234567890');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleOrganizationChange = (event) => {
    setOrganization(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleCertificateNumberChange = (event) => {
    setCertificateNumber(event.target.value);
  };

  return (
    <div>
        <div className="certificate">
        <Draggable>
          <h2>Certificado</h2>
          </Draggable>

          <Draggable>
            <div>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
          </Draggable>

          <Draggable>
            <div>
              <label htmlFor="organization">Organización:</label>
              <input
                type="text"
                id="organization"
                value={organization}
                onChange={handleOrganizationChange}
              />
            </div>
          </Draggable>

          <Draggable>
            <div>
              <label htmlFor="date">Fecha:</label>
              <input
                type="text"
                id="date"
                value={date}
                onChange={handleDateChange}
              />
            </div>
          </Draggable>

          <Draggable>
            <div>
              <label htmlFor="certificateNumber">Número de Certificado:</label>
              <input
                type="text"
                id="certificateNumber"
                value={certificateNumber}
                onChange={handleCertificateNumberChange}
              />
            </div>
          </Draggable>
        </div>
    </div>
  );
};

export default CertificateComponent;
