import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';

// Page
import Home from './Home';
import Browse from './Browse';
import Summary from './Summary';
import ListProduk from './ListProduk';
import ProdukDetail from './ProdukDetail';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const BrowseStack = createNativeStackNavigator();
const SummaryStack = createNativeStackNavigator();

function HomeRoot() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="A"
        component={Home}
        options={{title: 'Halaman Utama'}}
      />
      <HomeStack.Screen
        name="B"
        component={Browse}
        options={{title: 'Cari Produk atau Mulai Beli'}}
      />
    </HomeStack.Navigator>
  );
}

function BrowseRoot() {
  return (
    <BrowseStack.Navigator>
      <BrowseStack.Screen
        name="B"
        component={Browse}
        options={{
          title: 'Cari Produk atau Mulai Beli',
          headerRight: () => (
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Ionicons name="ios-cart" size={26} color="black" />
              <Text style={{fontSize: 20}}>1</Text>
            </View>
          ),
          headerRightContainerStyle: {
            marginRight: 25,
          },
        }}
      />
      <BrowseStack.Screen
        name="ListProduk"
        component={ListProduk}
        options={{
          title: 'List Produk',
          headerRight: () => (
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Ionicons name="ios-cart" size={26} color="black" />
              <Text style={{fontSize: 20}}>1</Text>
            </View>
          ),
          headerRightContainerStyle: {
            marginRight: 25,
          },
        }}
      />
      <BrowseStack.Screen
        name="ProdukDetail"
        component={ProdukDetail}
        options={{
          title: 'Produk Detail',
        }}
      />
    </BrowseStack.Navigator>
  );
}

function SummaryRoot() {
  return (
    <SummaryStack.Navigator>
      <SummaryStack.Screen
        name="C"
        component={Summary}
        options={{title: 'Summary'}}
      />
    </SummaryStack.Navigator>
  );
}

const RootApp = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Browse') {
              iconName = focused ? 'compass' : 'compass-outline';
            } else if (route.name === 'Summary') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF5F00',
          tabBarInactiveTintColor: '#a1aab8',
          tabBarStyle: {
            backgroundColor: '#fff',
            padding: 10,
            height: 70,
          },
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 13,
          },
        })}>
        <Tab.Screen
          name="Home"
          component={HomeRoot}
          options={{
            tabBarLabel: 'Home',
            headerTitle: 'Halaman Utama',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Browse"
          component={BrowseRoot}
          options={{
            tabBarLabel: 'Browse',
            headerTitle: 'Cari Produk atau Mulai Beli',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Summary"
          component={SummaryRoot}
          options={{
            tabBarLabel: 'Summary',
            headerTitle: 'Summary',
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootApp;
