import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import InicioScreen from './src/screens/InicioScreen';
import DisciplinasScreen from './src/screens/DisciplinasScreen';
import TarefasScreen from './src/screens/TarefasScreen';
import PerfilScreen from './src/screens/PerfilScreen';
import ConfiguracoesScreen from './src/screens/ConfiguracoesScreen'; // Desafio Extra

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Início"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#4f46e5', // Personalização: Cor do cabeçalho
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            drawerActiveTintColor: '#4f46e5', // Personalização: Cor do texto ativo
            drawerActiveBackgroundColor: '#e0e7ff', // Personalização: Fundo do item ativo
            drawerInactiveTintColor: '#475569',
            drawerStyle: {
              backgroundColor: '#f8fafc',
              width: 280,
            },
          }}
        >
          <Drawer.Screen name="Início" component={InicioScreen} options={{ title: '🏠 Início' }} />
          <Drawer.Screen name="Disciplinas" component={DisciplinasScreen} options={{ title: '📚 Disciplinas' }} />
          <Drawer.Screen name="Tarefas" component={TarefasScreen} options={{ title: '📝 Tarefas' }} />
          <Drawer.Screen name="Perfil" component={PerfilScreen} options={{ title: '👤 Perfil' }} />
          <Drawer.Screen name="Configurações" component={ConfiguracoesScreen} options={{ title: '⚙️ Configurações' }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}