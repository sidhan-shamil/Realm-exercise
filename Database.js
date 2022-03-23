import Realm from "realm";

class ContactSchema extends Realm.Object {}
ContactSchema.schema = {
    name: "Contact",
   // primaryKey:"recordID",
    properties:{
        recordID:"int",
        givenName:"string",
        familyName:"string",
        phoneNumber:"string"
    }
};

let realm = new Realm({schema: [ContactSchema], schemaVersion: 4});

let getAllContacts = () => {
    return realm.objects('Contact');
};

let addContact = (_recordID,_givenName,_familyName,_phoneNumber) => {
    realm.write(() => {
        const contact = realm.create('Contact', {
            recordID: _recordID,
            givenName: _givenName,
            familyName: _familyName,
            phoneNumber: _phoneNumber
        });
    });
}

let deteleContact = () => {
    realm.write(() => {
        realm.delete(getAllContacts());
    });
};

export default realm;

export {
    addContact,
    deteleContact,
    getAllContacts
}