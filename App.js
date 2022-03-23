import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList, View, Button} from 'react-native';
import realm, {
    addContact,
    deteleContact,
    getAllContacts
} from "./Database";

const App = () => {
    const [contacts, setContact] = useState(getAllContacts());
    return (
        
            
            <SafeAreaView style={{padding: 1}}>
                
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.button}>
                    <Button
                            title={"add"}
                            onPress={()=>{
                                addContact(4,"Rahul","dravid","9064100695");
                                setContact(getAllContacts);
                            }}>

                    </Button>

                </View>
                <View style={styles.button}>
                        <Button
                        title={"delete"}
                        onPress={()=>{
                            deteleContact();
                            setContact(getAllContacts);
                        }}>

                        </Button>
                </View>
                </View>

        
                <Text style={{marginTop: 8, fontWeight: 'bold'}}>Contacts</Text>
                <FlatList
                    data={contacts}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return (
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text>{item.recordID}</Text>
                                <Text>{item.givenName}</Text>
                                <Text>{item.familyName}</Text>
                                <Text>{item.phoneNumber}</Text>
                            </View>
                        )
                    }} />


            </SafeAreaView>
        
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },button:{
      margin:20,
      width:100,
    },
  });
export default App;
