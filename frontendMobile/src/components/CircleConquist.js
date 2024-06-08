import { Image, Text, View, StyleSheet} from "react-native";


const CircleConquist = ({img, txt}) => {
    return (
        <View style={styles.view_conquistCircle}>
            <View style={styles.CircleConquist}>
                <Image source={img} style={styles.img_icone2} resizeMode="contain"></Image>
            </View>
            <Text style={[{ fontSize: 15 }, { fontWeight: 'bold' }, {color: 'grey'}]}>{txt}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    view_conquistCircle: {
        width: "35%",
        height: '100%',
        alignItems: 'center',
        padding: 5,
        gap: 15
    },


    CircleConquist: {
        width: '75%',
        height: '60%',
        backgroundColor: '#F20574',
        borderRadius: 100,
        alignItems: 'center'
    },

    img_icone2: {
        width: '70%',
        height: '70%',
        margin: 15
    },
})


export default CircleConquist;