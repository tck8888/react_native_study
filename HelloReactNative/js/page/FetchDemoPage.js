import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';


type Props = {};

export default class FetchDemoPage extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            showText: ""
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Fetch的使用</Text>
                <View style={styles.input_container}>
                    <TextInput style={styles.input}
                               onChangeText={text => {
                                   this.searchKey = text;
                               }}
                    />
                    <Button
                        onPress={() => {
                            this.loadData();
                        }}
                        title="获取数据"
                    />
                </View>
                <Text>{this.state.showText}</Text>
            </View>
        );
    }

    loadData() {
        let url = `https://api.github.com/search/repositories?q=${this.searchKey}`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Network response was not ok.')
                }
            })
            .then(responseText => {
                this.setState({
                    showText: responseText
                })
            })
            .catch(e => {
                this.setState({
                    showText: e.toString()
                })
            })
    }

    loadData2() {
        let url = `https://api.github.com/search/repositories?q=${this.searchKey}`;
        fetch(url)
            .then(response => response.text())
            .then(responseText => {
                this.setState({
                    showText: responseText
                })
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
        alignItems: 'center'
    },
    input: {
        height: 50,
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        marginRight: 10
    }
});
