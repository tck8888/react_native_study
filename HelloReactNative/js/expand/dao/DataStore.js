import {AsyncStorage} from 'react-native';

export default class DataStore {

    //保存数据
    saveData(url, data, callback) {
        if (!data || !url) return;

        AsyncStorage.setItem(url, JSON.stringify(this._wrapData(data)), callback);
    }

    _wrapData(data) {
        return {data: data, timeStamp: new Date().getTime()};
    }

    fetchData(url) {
        return new Promise((resolve, reject) => {
            this.fetchLocalData(url)
                .then((wrapData) => {
                    if (wrapData && DataStore.checkTimeStampValid(wrapData.timeStamp)) {
                        resolve(wrapData);
                    } else {
                        this.fetchNetData(url).then((data) => {
                            resolve(this._wrapData(data));
                        }).catch((error) => {
                            reject(error);
                        })
                    }
                }).catch((error) => {
                this.fetchNetData(url).then((data) => {
                    resolve(this._wrapData(data));
                }).catch((error) => {
                    reject(error);
                })
            })
        });
    }

    /**
     * 检查时间是否在有效期内
     * @param timeStamp
     * @returns {boolean}
     */
    static checkTimeStampValid(timeStamp) {
        const currentDate = new Date();
        const targetDate = new Date();
        targetDate.setTime(timeStamp);

        if (currentDate.getMonth() !== targetDate.getMonth()) return false;
        if (currentDate.getDate() !== targetDate.getDate()) return false;
        //有效期4小时
        if (currentDate.getHours() - targetDate.getHours() > 4) return false;

        return true;
    }

    /**
     * 读取本地数据
     * @param url
     * @returns {Promise<any> | Promise<*>}
     */
    fetchLocalData(url) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(url, (error, result) => {
                if (!error) {
                    try {
                        resolve(JSON.parse(result));
                    } catch (e) {
                        reject(e);
                        console.error(e);
                    }
                } else {
                    reject(error);
                    console.error(error);
                }
            })
        });
    }

    /**
     * 获取网络数据
     * @param url
     * @returns {Promise<any> | Promise<*>}
     */
    fetchNetData(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Network response was not ok.");
                    }
                }).then((responseData) => {
                this.saveData(url, responseData);
                resolve(responseData);
            }).catch((error) => {
                reject(error);
            })
        });
    }
}