import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, useIonPicker } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const [presentPicker] = useIonPicker();

  const openPicker = async () => {
    return presentPicker({
      columns: [{
        name: 'test',
        options: [
          { text: 'Value 1', value: 1 },
          { text: 'Value 2', value: 2 }
        ]
      }],
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        { text: 'Confirm', handler: handleConfirm }
      ]
    })
  };

  const handleConfirm = (pickerValue: any) => {
    console.log('Picker confirm result: ', pickerValue);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={openPicker}>
          Open Picker
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
