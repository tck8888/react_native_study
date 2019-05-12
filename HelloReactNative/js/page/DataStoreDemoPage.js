import React, {Component} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    TextInput,
    AsyncStorage
} from 'react-native';
import DataStore from '../expand/dao/DataStore';

type Props = {};
const KEY = 'save_key';

export default class DataStoreDemoPage extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            showText: ""
        }
        this.dataStore = new DataStore();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>离线缓存框架使用</Text>

                <TextInput style={styles.input}
                           onChangeText={text => {
                               this.value = text;
                           }}
                />
                <Text onPress={() => {
                    this.loadData();
                }}>获取数据</Text>
                <Text>{this.state.showText}</Text>
            </View>
        );
    }

    loadData() {
        let url = `https://api.github.com/search/repositories?q=${this.searchKey}`;
        this.dataStore.fetchData(url)
            .then(data => {
                let showData = `初次加载时间:${new Date(data.timeStamp)}\n${JSON.stringify(data.data)}`;
                this.setState({
                    showText: showData
                })
            })
            .catch(error=>{
                error&&console.log(error.toString())
            })

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
