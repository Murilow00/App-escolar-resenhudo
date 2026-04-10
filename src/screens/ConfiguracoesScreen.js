import { View, Text, StyleSheet } from 'react-native';

export default function ConfiguracoesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>⚙️</Text>
      <Text style={styles.title}>Configurações</Text>
      <Text style={styles.subtitle}>Gerencie suas preferências de notificação e tema aqui.</Text>
      
      <View style={styles.settingOption}>
        <Text style={styles.settingText}>🔔 Notificações</Text>
        <Text style={styles.statusOn}>Ativado</Text>
      </View>

      <View style={styles.settingOption}>
        <Text style={styles.settingText}>🌙 Modo Escuro</Text>
        <Text style={styles.statusOff}>Desativado</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f8fafc',
  },
  emoji: {
    fontSize: 48,
    marginBottom: 16,
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 32,
  },
  settingOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 1,
  },
  settingText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#334155',
  },
  statusOn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#10b981',
  },
  statusOff: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ef4444',
  },
});