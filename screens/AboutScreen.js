import React from 'react';
import { Image } from 'react-native';
import { View,Dimensions, Text, StyleSheet,StatusBar,ScrollView } from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container,Content } from 'native-base';
import styles from './styles';


const AboutScreen = ({navigation}) => {
    return (
      <Container>
        <StatusBar backgroundColor='#242c62'  />
            <Content padder>
              <View style={styles.textContainer}>
                    <Text>
                        Excelencia Assurances est un Agent Général de la Compagnie NSIA Assurances au Congo Brazzaville.
                    </Text>
                    <Text>
                    Le cabinet EXECELENCIA ASSURANCES trouve naissance par la volonté de son promoteur avec l’appui de la compagnie NSIA ASSURANCES de continuer de servir  des prestations de qualité supérieure en matière de conseils et de gestion des polices d’assurance des assurés.
                    </Text>
                    <Image
                    style={styles.image}
                        source={{
                            uri:
                            'https://excel-assurance.com/wp-content/uploads/2019/09/image2-1024x466.jpg',
                        }}
                    /> 
              </View>

              </Content>
           
           </Container>
    );
};

export default AboutScreen;
