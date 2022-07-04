import React, { useState, useEffect } from "react";
import { Button, View, Text, ScrollView, Alert } from 'react-native';
import { List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

import axios from 'axios';
const baseUrl = 'https://api.sbif.cl/api-sbifv3/recursos_api/';
const apikey = 'd9c9861cdd46f21202f33eb9e91e20145f3c80f5';



function DetalleValores({ route, navigation }) {
  const [tipo, setTipo] = useState(null);
  const { info } = route.params;


  if (info.id == 1) {
    // Dolar
    try {
      axios({
        method: 'get',
        url: `${baseUrl}dolar/2022/06?apikey=${apikey}&formato=json`,
      }).then((response) => {
        setTipo(response.data.Dolares);
      });
    } catch (e) {
      Alert.alert("Error");
    }

    if (tipo) {

      return <ScrollView style={{ flex: 1, paddingTop: 1, backgroundColor: 'white' }}>
        {
          tipo.map((item, index) => {


            return <List.Item
              style={{ borderWidth: 0.3, borderColor: '#757575' }}
              title={item.Fecha}
              descriptionStyle={{ color: 'blue', fontSize: 12 }}
              description={'$' + item.Valor}
              key={index}
              right={() => <Icon.Button
                name="doubleright"
                backgroundColor="white"
                color='black'
                onPress={() => {
                  navigation.navigate('DetalleValores', {
                    info: item,
                    tipo: 1
                  })
                }}
              >

              </Icon.Button>}

            />
              ;
          })
        }
      </ScrollView>
    }

  } else {
    if (info.id == 2) {
      // euro
      try {
        axios({
          method: 'get',
          url: `${baseUrl}euro/2022/06?apikey=${apikey}&formato=json`,
        }).then((response) => {
          setTipo(response.data.Euros);
        });
      } catch (e) {
        Alert.alert("Error");

      }
      if (tipo) {

        return <ScrollView style={{ flex: 1, paddingTop: 1, backgroundColor: 'white' }}>
          {
            tipo.map((item, index) => {


              return <List.Item
                style={{ borderWidth: 0.3, borderColor: '#757575' }}
                title={item.Fecha}
                descriptionStyle={{ color: 'blue', fontSize: 12 }}
                description={'$' + item.Valor}
                key={index}
                right={() => <Icon.Button
                  name="doubleright"
                  backgroundColor="white"
                  color='black'
                  onPress={() => {
                    navigation.navigate('DetalleValores', {
                      info: item,
                      tipo: 2
                    })
                  }}
                >

                </Icon.Button>}
              />
                ;
            })
          }
        </ScrollView>
      }

    } else {
      if (info.id == 3) {

        // ipc


        try {
          axios({
            method: 'get',
            url: `${baseUrl}ipc/2022?apikey=${apikey}&formato=json`,
          }).then((response) => {
            setTipo(response.data.IPCs);
          });
        }
        catch (e) {
          Alert.alert("Error");

        }
        if (tipo) {

          return <ScrollView style={{ flex: 1, paddingTop: 1, backgroundColor: 'white' }}>
            {
              tipo.map((item, index) => {


                return <List.Item
                  style={{ borderWidth: 0.3, borderColor: '#757575' }}
                  title={item.Fecha}
                  descriptionStyle={{ color: 'blue', fontSize: 12 }}
                  description={'%' + item.Valor}
                  key={index}
                  right={() => <Icon.Button
                    name="doubleright"
                    backgroundColor="white"
                    color='black'
                    onPress={() => {
                      navigation.navigate('DetalleValores', {
                        info: item,
                        tipo: 3
                      })
                    }}
                  >

                  </Icon.Button>}
                />
                  ;
              })
            }
          </ScrollView>
        }


      } else {
        if (info.id == 4) {
          // uf
          try {
            axios({
              method: 'get',
              url: `${baseUrl}uf/2022/06?apikey=${apikey}&formato=json`,
            }).then((response) => {
              setTipo(response.data.UFs);
            });
          }
          catch (e) {
            Alert.alert("Error");

          }

          if (tipo) {

            return <ScrollView style={{ flex: 1, paddingTop: 1, backgroundColor: 'white' }}>
              {
                tipo.map((item, index) => {


                  return <List.Item
                    style={{ borderWidth: 0.3, borderColor: '#757575' }}
                    title={item.Fecha}
                    descriptionStyle={{ color: 'blue', fontSize: 12 }}
                    description={'$' + item.Valor}
                    key={index}
                    right={() => <Icon.Button
                      name="doubleright"
                      backgroundColor="white"
                      color='black'
                      onPress={() => {
                        navigation.navigate('DetalleValores', {
                          info: item,
                          tipo: 4
                        })
                      }}
                    >

                    </Icon.Button>}
                  />
                    ;
                })
              }
            </ScrollView>
          }
        } else {
          // utm
          try {
            axios({
              method: 'get',
              url: `${baseUrl}utm/2022?apikey=${apikey}&formato=json`,
            }).then((response) => {
              setTipo(response.data.UTMs);
            });
          } catch (e) {
            Alert.alert("Error");

          }

          if (tipo) {

            return <ScrollView style={{ flex: 1, paddingTop: 1, backgroundColor: 'white' }}>
              {
                tipo.map((item, index) => {


                  return <List.Item
                    style={{ borderWidth: 0.3, borderColor: '#757575' }}
                    title={item.Fecha}
                    descriptionStyle={{ color: 'blue', fontSize: 12 }}
                    description={'$' + item.Valor}
                    key={index}
                    right={() => <Icon.Button
                      name="doubleright"
                      backgroundColor="white"
                      color='black'
                      onPress={() => {
                        navigation.navigate('DetalleValores', {
                          info: item,
                          tipo: 5
                        })
                      }}
                    >

                    </Icon.Button>}
                  />
                    ;
                })
              }
            </ScrollView>
          }
        }
      }
    }
  }



}

export default DetalleValores;
