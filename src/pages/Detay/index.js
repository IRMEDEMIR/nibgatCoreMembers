import React, {
    useEffect,
    useState
} from "react";

import {
    Text,
    View,
    Image,
} from 'react-native';

const Detay = ({
    route
}) => {
    const [sucuk, setSucuk] = useState([]);
    const {
        id
    } = route.params;
    //const id= route.params.id;
    useEffect(() => {
        fetch(`http://nibgat.space:6868/member?id=${id}`, {
            method: "GET"
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setSucuk(res);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <View
            style={{
                backgroundColor: "white",
                flexDirection: "row",
                borderRadius: 10,
                marginBottom: 20,
                display: "flex",
                padding: 20
            }}
        >
            <View
                style={{
                    justifyContent: "space-between",
                    flexDirection: "column",
                    display: "flex",
                }}
            >
                <View
                    style={{
                        flexDirection: "column",
                        display: "flex"
                    }}
                >
                    {
                        sucuk.profilePhotoURL ? <Image
                            source={{
                                uri: sucuk.profilePhotoURL
                            }}
                            width={150}
                            height={150}
                            alt="Sanane ayol"
                            style={{
                                borderRadius: 75,
                                marginRight: 20
                            }}
                        /> : null
                    }
                    <Text
                        style={{
                            fontWeight: "bold",
                            marginBottom: 4,
                            fontSize: 30
                        }}
                    >
                        {sucuk.fullName}
                    </Text>
                </View>
                <Text
                    style={{
                        color: "orange",
                        fontSize: 24
                    }}
                >
                    {sucuk.age}
                </Text>
                <Text
                    style={{
                        color: "lime",
                        fontSize: 22
                    }}
                >
                    {sucuk.createdAt}
                </Text>
            </View>
        </View>
    )
};

export default Detay