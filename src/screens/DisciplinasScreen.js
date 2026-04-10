import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DisciplinasScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Minhas Matérias</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📐 Matemática</Text>
        <Text style={styles.cardDesc}>Prof. Pereira - Sala 67</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📖 Português</Text>
        <Text style={styles.cardDesc}>Profa. Ivonete - Sala 67</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🗄️ Banco de Dados</Text>
        <Text style={styles.cardDesc}>Prof. Mamprim - Lab 67</Text>
      </View>

      <View style={[styles.card, styles.favoriteCard]}>
        <Text style={styles.favoriteTitle}>⭐ React Native (Favorita)</Text>
        <Text style={styles.favoriteDesc}>Prof. Eduardo - Lab 67</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8fafc',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  cardDesc: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  favoriteCard: {
    backgroundColor: '#fef3c7',
    borderColor: '#f59e0b',
    borderWidth: 2,
  },
  favoriteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#b45309',
  },
  favoriteDesc: {
    fontSize: 14,
    color: '#d97706',
    marginTop: 4,
  },
});