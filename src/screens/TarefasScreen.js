import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TarefasScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Tarefas Pendentes</Text>

      <View style={styles.taskCard}>
        <Text style={styles.taskTitle}>📝 Entregar atividade de projetos</Text>
        <Text style={styles.taskDesc}>Fazer 7 templates de varias coisas ai porque o Thiago pediu</Text>
        <Text style={styles.taskDate}>Prazo: Amanhã</Text>
      </View>

      <View style={styles.taskCard}>
        <Text style={styles.taskTitle}>📱 Revisar JS</Text>
        <Text style={styles.taskDesc}>Estudar todos os metodos que existem em JS</Text>
        <Text style={styles.taskDate}>Prazo: Sexta-feira</Text>
      </View>

      <View style={styles.taskCard}>
        <Text style={styles.taskTitle}>📚 Ver a Aula do Eduardo</Text>
        <Text style={styles.taskDesc}>EU AMO A AULA DO EDU.</Text>
        <Text style={styles.taskDate}>Prazo: Próxima Segunda</Text>
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
  taskCard: {
    backgroundColor: '#fff',
    borderLeftWidth: 6,
    borderLeftColor: '#ef4444', 
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 3,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 6,
  },
  taskDesc: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 8,
  },
  taskDate: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ef4444',
  },
});