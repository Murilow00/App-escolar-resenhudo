import { View, Text, StyleSheet } from 'react-native';

export default function InicioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>😎</Text>
      <Text style={styles.title}>Portal do Aluno</Text>
      <Text style={styles.welcome}>Bem-vindo(a) de volta!</Text>
      <Text style={styles.description}>
        Esse aplicativo foi feito para que todos os alunos do SESI e SENAI possam fazer suas resenhas de maneira organizada durante as aulas
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f0fdf4', 
  },
  emoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff4848',
    marginBottom: 8,
  },
  welcome: {
    fontSize: 20,
    color: '#ff4848',
    marginBottom: 24,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 24,
  },
});