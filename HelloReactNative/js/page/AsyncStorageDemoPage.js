import React, {Component} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    TextInput,
    AsyncStorage
} from 'react-native';


type Props = {};
const KEY = 'save_key';

export default class AsyncStorageDemoPage extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            showText: ""
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>AsyncStorage使用</Text>

                <TextInput style={styles.input}
                           onChangeText={text => {
                               this.value = text;
                           }}
                />
                <View style={styles.input_container}>
                    <Text onPress={() => {
                        this.doSave();
                    }}>存储</Text>
                    <Text onPress={() => {
                        this.doRemove();
                    }}>删除</Text>
                    <Text onPress={() => {
                        this.doGet();
                    }}>获取</Text>
                </View>

                <Text>{this.state.showText}</Text>
            </View>
        );
    }

    doSave() {
        //用法一
        AsyncStorage.setItem(KEY, this.value, error => {
            error && console.log(error.toString());
        });
        // //用法二
        // AsyncStorage.setItem(KEY, this.value)
        //     .catch(e => {
        //         error && console.log(error.toString());
        //     });
        // //用法三
        // try {
        //     await AsyncStorage.setItem(KEY, this.value);
        // } catch (e) {
        //     error && console.log(error.toString());
        // }

    }

    doRemove() {
        AsyncStorage.removeItem(KEY, error => {
            error && console.log(error.toString());
        });
    }

    doGet() {
        AsyncStorage.getItem(KEY, (error, value) => {
            this.setState({
                showText: value
            });
            console.log(value);
            error && console.log(error.toString());
        });


    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input_container: {
        marginLeft: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    input: {
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        marginRight: 10
    }
});
