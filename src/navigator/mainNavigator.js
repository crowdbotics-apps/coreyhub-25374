import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import ArticleList220205Navigator from '../features/ArticleList220205/navigator';
import ArticleList220204Navigator from '../features/ArticleList220204/navigator';
import UserProfile20220194Navigator from '../features/UserProfile20220194/navigator';
import ArticleList220177Navigator from '../features/ArticleList220177/navigator';
import ArticleList220176Navigator from '../features/ArticleList220176/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
ArticleList220205: { screen: ArticleList220205Navigator },
ArticleList220204: { screen: ArticleList220204Navigator },
UserProfile20220194: { screen: UserProfile20220194Navigator },
ArticleList220177: { screen: ArticleList220177Navigator },
ArticleList220176: { screen: ArticleList220176Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
