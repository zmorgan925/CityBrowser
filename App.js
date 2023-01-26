import { StyleSheet, Text, View, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as WebBrowser from 'expo-web-browser';
import Button from './Button';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const artInstituteImage = require('./assets/images/art.png')
const magnificentMileImage = require('./assets/images/mile.png')
const navyPierImage = require('./assets/images/pier.png')
const waterTowerImage = require('./assets/images/water.png')
const willisTowerImage = require('./assets/images/willis.png')

function ArtInstitute() {
  return (
    <View style={styles.container}>
      <Image source={artInstituteImage} style={styles.image} />  
      <View>
        <Button info style={styles.button} onPress={() => WebBrowser.openBrowserAsync('https://www.artic.edu/')}>More Information</Button>
        </View>   
    </View>
  );
}

function MagnificentMile() {
  return (
    <View style={styles.container}>
      <Image source={magnificentMileImage} style={styles.image} /> 
      <View>
        <Button info style={styles.button} onPress={() => WebBrowser.openBrowserAsync('https://www.themagnificentmile.com/')}>More Information</Button>
        </View>     
    </View>
  );
}

function NavyPier() {
  return (
    <View style={styles.container}>
      <Image source={navyPierImage} style={styles.image} />
      <View>
        <Button info style={styles.button} onPress={() => WebBrowser.openBrowserAsync('https://navypier.org/')}>More Information</Button>
        </View>      
    </View>
  );
}

function WaterTower() {
  return (
    <View style={styles.container}>
      <Image source={waterTowerImage} style={styles.image} /> 
      <View>
        <Button info style={styles.button} onPress={() => WebBrowser.openBrowserAsync('https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html')}>More Information</Button>
        </View>     
    </View>
  );
}

function WillisTower() {
  return (
    <View style={styles.container}>
      <Image source={willisTowerImage} style={styles.image} /> 
      <View>
        <Button info style={styles.button} onPress={() => WebBrowser.openBrowserAsync('https://www.willistower.com/')}>More Information</Button>
        </View>     
    </View>
  );
}

const Drawer = createDrawerNavigator();

function drawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ArtInstitute">
        <Drawer.Screen name="ArtInstitute" component={ArtInstitute} options={{ title: 'Art Institute of Chicago',}} />
        <Drawer.Screen name="MagnificentMile" component={MagnificentMile} options={{ title: 'Magnificent Mile',}} />
        <Drawer.Screen name="NavyPier" component={NavyPier} options={{ title: 'Navy Pier',}} />
        <Drawer.Screen name="WaterTower" component={WaterTower} options={{ title: 'Water Tower',}} />
        <Drawer.Screen name="WillisTower" component={WillisTower} options={{ title: 'Willis Tower',}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
  
}
export default drawerNavigation;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 360,
    width: 240,
  },
  button: {
    margin: 10,
  },
});