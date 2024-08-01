import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CheckBox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <TouchableOpacity onPress={handleToggle}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <View
                    style={{
                        width: 20,
                        height: 20,
                        borderRadius: 5,
                        borderWidth: 2,
                        borderColor: isChecked ? 'green' : '#6296C4',
                        marginRight: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {isChecked && (
                        <View
                            style={{
                                width: 12,
                                height: 12,
                                borderRadius: 3,
                                backgroundColor: 'green',
                            }}
                        />
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CheckBox;