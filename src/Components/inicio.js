import React from 'react'
import { Button, View, Text } from 'react-native';
import { List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';




function Inicio({ navigation }) {

    const indicadores = [
        {
            id: 1,
            titulo: 'Dolar',
            medida: 'Medida en pesos'
        },
        {
            id: 2,
            titulo: 'Euro',
            medida: 'Medida en pesos'
        },
        {
            id: 3,
            titulo: 'IPC',
            medida: 'Medida en Porcentaje'
        },
        {
            id: 4,
            titulo: 'UF',
            medida: 'Medida en pesos'
        },
        {
            id: 5,
            titulo: 'UTM',
            medida: 'Medida en pesos'
        },
    ];


    return (
        <View style={{ flex: 1, paddingTop: 1, backgroundColor: 'white' }}>

            {
                indicadores.map((item, index) => {
                    return <List.Item
                        style={{ borderWidth: 0.3, borderColor: '#757575' }}
                        title={item.titulo}
                        descriptionStyle={{ color: 'blue', fontSize: 12 }}
                        description={item.medida}
                        key={item.id}
                        right={() => <Icon.Button
                            name="doubleright"
                            backgroundColor="white"
                            color='black'
                            onPress={() => {
                                console.log(item);
                                navigation.navigate('Detalle', {
                                    info: item
                                })
                            }}
                        >
                    
                        </Icon.Button>}

                    />
                })
            }



        </View>
    );
}

export default Inicio;
