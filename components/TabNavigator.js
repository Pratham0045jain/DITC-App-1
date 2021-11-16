import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
} from 'react-native';


import HomeScreen from '../Screens/HomeScreen';
import Estimate from '../Screens/Estimate';
import TmtBarsScreen from '../Screens/TmtBarsScreen';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { createAppContainer } from 'react-navigation';

import { Icon } from 'react-native-elements';


const AppTabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'home'} />
                    </View>
                ),
            }
        },
        Estimate: {
            screen: Estimate,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'add-circle'} />
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#a3c2fa',
                barStyle: { backgroundColor: '#2163f6' },
            }
        },
        TmtBarsScreen: {
            screen: TmtBarsScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'shopping-cart'} />
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#a3c2fa',
                barStyle: { backgroundColor: '#2163f6' },
            }
        },
    },

    {
        initialRouteName: 'Home',
        activeColor: '#ffffff',
        inactiveColor: '#bda1f7',
        barStyle: { backgroundColor: '#6948f4' },
    }
);

export default createAppContainer(AppTabNavigator);
