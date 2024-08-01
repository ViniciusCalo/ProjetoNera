import { View, StyleSheet, Text } from "react-native";
import BottomMenuStudent from '../../components/MenuStudent';
import HeaderTeacher from '../../components/teacher/HeaderTeacher';

const JoinClassroom = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderTeacher />
            </View>

            <Text style={styles.titulo} >Join Classroom</Text>

            <BottomMenuStudent />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: '12%',
    },
    titulo: {
        fontSize: 25,
        marginVertical: 10,
        textAlign: 'center',
    },


})

export default JoinClassroom;