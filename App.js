import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Doctor from './screens/Doctor';
import Patient from './screens/Patient';
import Pharmacy from './screens/Pharmacy';
import AddData from './screens/AddData';

const App = createStackNavigator({
  // Home: { screen: Home },
  // Doctor: { screen: Doctor },
  Patient: { screen: Patient },
  Pharmacy: { screen: Pharmacy },
  AddData: { screen: AddData },
});

export default createAppContainer(App);