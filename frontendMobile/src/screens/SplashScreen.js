import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, Easing, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    const rotation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const rotateAnimation = Animated.timing(rotation, {
            toValue: 1,
            duration: 3000, // Duração da animação de rotação (milisegundos)
            easing: Easing.linear,
            useNativeDriver: true,
        });

        rotateAnimation.start(() => {
            // Navega para a próxima tela após o término da animação
            navigation.replace('LoginScreen');
        });

        return () => {
            rotateAnimation.stop();
        };
    }, [navigation, rotation]);

    const rotateInterpolate = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-360deg'], // Girar para a esquerda
    });

    const animatedStyle = {
        transform: [{ rotate: rotateInterpolate }],
    };

    return (
        <View style={[styles.container, styles.whiteBackground]}>
            <Animated.Image
                source={require('../assets/Icone.png')} 
                style={[styles.image, animatedStyle]}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    whiteBackground: {
        backgroundColor: 'white',
    },
    image: {
        width: 200, 
        height: 200, 
    },
});

export default SplashScreen;
