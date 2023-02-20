import React, {
    useEffect,
    useState
} from "react";

import PersonCard from "../../components/personCard";

import {
    View,
    ScrollView,
} from 'react-native';

const Home = ({
    navigation
}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://nibgat.space:6868/members", {
            method: "GET"
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setData(res);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <View
            style={{
                backgroundColor: "#e3e3e3",
                padding: 20
            }}
        >
            <ScrollView>
                {data.map((item) => {
                    return <PersonCard
                        key={item.id}
                        {...item}
                        onPress={() => {
                            navigation.navigate('Detay', item);
                        }}
                    />;
                })}
            </ScrollView>
        </View>
    );
};

export default Home