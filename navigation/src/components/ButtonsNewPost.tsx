import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ButtonAdd() { 
    return (
        <TouchableOpacity style={[styles.button, styles.buttonAdd]}>
            <Text>Enviar</Text>
        </TouchableOpacity>
    );
}

export function ButtonCancel() { 
    return (
        <TouchableOpacity style={[styles.button, styles.buttonCancel]}>
            <Text>Cancelar</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  button: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 8,
  },
  buttonAdd: {
    backgroundColor: '#FBDF4B', 
  },
  buttonCancel: {
    backgroundColor: '#484646', 
  },
});
