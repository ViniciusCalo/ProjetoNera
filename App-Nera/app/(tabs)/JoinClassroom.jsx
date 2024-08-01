import { View, StyleSheet, Text} from "react-native";
import BottomMenuStudent from '../../components/MenuStudent';

const JoinClassroom = () => {

    return (
        <View style={styles.div_main}>
            <Text>Join Classroom</Text>

            <BottomMenuStudent />
        </View>
    )
}

const styles = StyleSheet.create({
    div_main: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    }


})

export default JoinClassroom;