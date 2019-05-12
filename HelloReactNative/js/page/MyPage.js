

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View,} from 'react-native';



type Props = {};
export default class MyPage extends Component<Props> {
    render() {
        const {navigation} =this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>MyPage</Text>
                <Button onPress={() => {
                    navigation.setParams({
                        theme: {
                            tintColor: 'blue',
                            updateTime: new Date().getTime()
                        }
                    })
                }}
                        title="改变主题颜色"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
