import faker from 'faker';
import { generate } from 'gerador-validador-cpf'

export default {

    deliver: function() {

        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();

        let data = {
             name : `${firstName} ${lastName}`,
                 cpf : generate(),
                 email : faker.internet.email(firstName),
                 whatsapp : '81999999999',
                 address : {
                     postalcode : '53030060',
                     street : 'Rua Pereira Simões',
                     number : '1000',
                     details : 'Ap 101',
                     district : 'Bairro Novo',
                     city_state : 'Olinda/PE'
                },
                 delivery_method : 'Moto',
                 cnh :  'cnh-digital.jpg' 
        }

        return data;
    }

}