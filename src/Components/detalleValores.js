import React, { useState, useEffect } from "react";
import { Button, View, Text, StyleSheet } from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';
import Grafico from './grafico';
import moment from "moment";
import axios from 'axios';
const baseUrl = 'https://api.sbif.cl/api-sbifv3/recursos_api/';
const apikey = 'd9c9861cdd46f21202f33eb9e91e20145f3c80f5';

function DetalleValores({ route, navigation }) {
    const [dolar, setDolar] = useState(0);

    const { info, tipo } = route.params;
    console.log(tipo);
    const styles = StyleSheet.create({
        Views: {
            padding: 20
        },
        Texto: {
            fontSize: 20
        }

    });

    if (tipo == 1) {

        const data = info.Fecha.split('-');
        var a = moment(info.Fecha);
        const b = moment(a).subtract(13, 'days');
        const c = moment(b).format("DD-MM-YYYY");
        const inicio = c.split('-');

        if (dolar == 0) {
            axios.get(`${baseUrl}dolar/periodo/${inicio[2]}/${inicio[1]}/dias_i/${inicio[0]}/${data[0]}/${data[1]}/dias_f/${data[2]}?apikey=${apikey}&formato=json`)
                .then(resp => {

                    setDolar(resp.data.Dolares);
                });
        }
        return (
            <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>



                <Card.Title
                    style={{ paddingTop: 20 }}
                    title={"$ " + info.Valor}
                    titleStyle={{ fontSize: 50, paddingTop: 20 }}
                    left={(props) => <Avatar.Icon {...props} icon="home" />}
                />
                <View style={styles.Views}>
                    <Text style={styles.Texto}>Nombre: Dolar</Text>
                    <Text style={styles.Texto}>Fecha: {`Fecha: ${info.Fecha}`}</Text>
                    <Text style={styles.Texto}>Unidad de Medida: Pesos</Text>

                </View>

                <View style={{ backgroundColor: "#E5E7E9", borderRadius: 10, paddingBottom: 35 }}>
                    {
                        dolar ? <Grafico informacion={dolar} /> : null
                    }

                </View>


            </View>
        );
    } else {
        if (tipo == 2) {
            const data = info.Fecha.split('-');
            var a = moment(info.Fecha);
            const b = moment(a).subtract(13, 'days');
            const c = moment(b).format("DD-MM-YYYY");
            const inicio = c.split('-');

            if (dolar == 0) {
                axios.get(`${baseUrl}euro/periodo/${inicio[2]}/${inicio[1]}/dias_i/${inicio[0]}/${data[0]}/${data[1]}/dias_f/${data[2]}?apikey=${apikey}&formato=json`)
                    .then(resp => {

                        setDolar(resp.data.Euros);
                        console.log("----");
                        console.log(resp.data.Euros);
                    });
            }
            return (
                <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>



                    <Card.Title
                        style={{ paddingTop: 20 }}
                        title={"$ " + info.Valor}
                        titleStyle={{ fontSize: 50, paddingTop: 20 }}
                        left={(props) => <Avatar.Icon {...props} icon="home" />}
                    />
                    <View style={styles.Views}>
                        <Text style={styles.Texto}>Nombre: Euro</Text>
                        <Text style={styles.Texto}>Fecha: {`Fecha: ${info.Fecha}`}</Text>
                        <Text style={styles.Texto}>Unidad de Medida: Pesos</Text>

                    </View>

                    <View style={{ backgroundColor: "#E5E7E9", borderRadius: 10, paddingBottom: 35 }}>
                        {
                            dolar ? <Grafico informacion={dolar} /> : null
                        }

                    </View>


                </View>
            );
        } else {
            if (tipo == 3) {
              
                
                if (dolar == 0) {
                    console.log(`${baseUrl}ipc/2022?apikey=${apikey}&formato=json`);
                    axios.get(`${baseUrl}ipc/2022?apikey=${apikey}&formato=json`)
                        .then(resp => {

                            setDolar(resp.data.IPCs);
                            console.log("----");
                            console.log(resp.data.IPCs);
                        });
                }
                return (
                    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>



                        <Card.Title
                            style={{ paddingTop: 20 }}
                            title={"$ " + info.Valor}
                            titleStyle={{ fontSize: 50, paddingTop: 20 }}
                            left={(props) => <Avatar.Icon {...props} icon="home" />}
                        />
                        <View style={styles.Views}>
                            <Text style={styles.Texto}>Nombre: IPC</Text>
                            <Text style={styles.Texto}>Fecha: {`Fecha: ${info.Fecha}`}</Text>
                            <Text style={styles.Texto}>Unidad de Medida: Porcentaje</Text>

                        </View>

                        <View style={{ backgroundColor: "#E5E7E9", borderRadius: 10, paddingBottom: 35 }}>
                            {
                                dolar ? <Grafico informacion={dolar} /> : null
                            }

                        </View>


                    </View>);
            } else {
                if (tipo == 4) {
                    // UF
                    const data = info.Fecha.split('-');
                    var a = moment(info.Fecha);
                    const b = moment(a).subtract(13, 'days');
                    const c = moment(b).format("DD-MM-YYYY");
                    const inicio = c.split('-');

                    if (dolar == 0) {
                        axios.get(`${baseUrl}uf/periodo/${inicio[2]}/${inicio[1]}/dias_i/${inicio[0]}/${data[0]}/${data[1]}/dias_f/${data[2]}?apikey=${apikey}&formato=json`)
                            .then(resp => {

                                setDolar(resp.data.UFs);
                                console.log("----");
                                console.log(resp.data.UFs);
                            });
                    }
                    return (
                        <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>



                            <Card.Title
                                style={{ paddingTop: 20 }}
                                title={"$ " + info.Valor}
                                titleStyle={{ fontSize: 50, paddingTop: 20 }}
                                left={(props) => <Avatar.Icon {...props} icon="home" />}
                            />
                            <View style={styles.Views}>
                                <Text style={styles.Texto}>Nombre: UF</Text>
                                <Text style={styles.Texto}>Fecha: {`Fecha: ${info.Fecha}`}</Text>
                                <Text style={styles.Texto}>Unidad de Medida: Pesos</Text>

                            </View>

                            <View style={{ backgroundColor: "#E5E7E9", borderRadius: 10, paddingBottom: 35 }}>
                                {
                                    dolar ? <Grafico informacion={dolar} /> : null
                                }

                            </View>


                        </View>);
                }else{
                    if (dolar == 0) {
                        console.log(`${baseUrl}utm/2022?apikey=${apikey}&formato=json`);
                        axios.get(`${baseUrl}utm/2022?apikey=${apikey}&formato=json`)
                            .then(resp => {
    
                                setDolar(resp.data.UTMs);
                                console.log("----");
                                console.log(resp.data.UTMs);
                            });
                    }
                    return (
                        <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
    
    
    
                            <Card.Title
                                style={{ paddingTop: 20 }}
                                title={"$ " + info.Valor}
                                titleStyle={{ fontSize: 50, paddingTop: 20 }}
                                left={(props) => <Avatar.Icon {...props} icon="home" />}
                            />
                            <View style={styles.Views}>
                                <Text style={styles.Texto}>Nombre: UTM</Text>
                                <Text style={styles.Texto}>Fecha: {`Fecha: ${info.Fecha}`}</Text>
                                <Text style={styles.Texto}>Unidad de Medida: Pesos</Text>
    
                            </View>
    
                            <View style={{ backgroundColor: "#E5E7E9", borderRadius: 10, paddingBottom: 35 }}>
                                {
                                    dolar ? <Grafico informacion={dolar} /> : null
                                }
    
                            </View>
    
    
                        </View>);
                }
            }
        }
    }


}

export default DetalleValores;
