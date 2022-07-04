import React, { useState, useEffect } from "react";
import { Dimensions, View } from 'react-native';
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";

import { Text } from 'react-native-paper';

function Grafico(props) {
    
    const arreglo =[];

    props.informacion.map((item,index) =>{

        arreglo.push({
            value: parseInt(item.Valor),
            label: item.Fecha
        })
    });

    
    return (

        <View>

            <BarChart
                barWidth={100}
                noOfSections={3}
                barBorderRadius={4}
                frontColor="#177AD5"
                data={arreglo}
                yAxisThickness={0}
                xAxisThickness={0}
            />


        </View>
    )

}
export default Grafico;
