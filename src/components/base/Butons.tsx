import React from 'react';
import { IonIcon } from '@ionic/react';
import { logoFacebook, logoInstagram, logoTiktok } from 'ionicons/icons';

interface ButtonsProps {
  height: number;
  width: number;
}

const Buttons: React.FC<ButtonsProps> = ({ height, width }) => {
  return (
    <div style={{ height: `${height}px`, width: `${width}px` }} className="col">
      <div className="d-flex align-items-center">
        <p className="me-3" style={{ marginBottom: 0 }}>Síguenos en:</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IonIcon icon={logoFacebook} className="me-3" style={{ fontSize: '24px' }} />
          <IonIcon icon={logoInstagram} className="me-3" style={{ fontSize: '24px' }} />
          <IonIcon icon={logoTiktok} style={{ fontSize: '24px' }} />
        </div>
      </div>
    </div>
  );
};

export default Buttons;
