import { View, Text, TouchableOpacity } from "react-native";

function RadioButton({ txt, onpress }) {
    return (
        <TouchableOpacity onPress={onpress}>
            <View style={[{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }]}>
                <View style={[{ height: 24, width: 24, borderRadius: 12, borderWidth: 2, borderColor: 'white', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }]}></View>
                <Text style={{ fontSize: 18 }}>{txt}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default RadioButton;