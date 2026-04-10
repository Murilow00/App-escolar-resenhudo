import { View, Text, StyleSheet } from 'react-native';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      {/* Desafio Extra: Avatar/Emoji Grande */}
      <View style={styles.avatarContainer}>
        <Text style={styles.avatar}>🤪</Text>
      </View>

      <Text style={styles.name}>Murilo M Brustolin</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>Curso:</Text>
        <Text style={styles.infoValue}>Desenvolvimento de Sistemas</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoLabel}>Turma:</Text>
        <Text style={styles.infoValue}>3º Ano - EM</Text>
      </View>

      <Text style={styles.bio}>
        "Transformando Resenha em codigo"
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f8fafc',
  },
  avatarContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#e2e8f0',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 20,
    elevation: 4,
  },
  avatar: {
    fontSize: 70,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 24,
  },
  infoBox: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 1,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#64748b',
    width: 70,
  },
  infoValue: {
    fontSize: 16,
    color: '#334155',
    flex: 1,
  },
  bio: {
    marginTop: 24,
    fontSize: 16,
    fontStyle: 'italic',
    color: '#475569',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});