function RegisterInputHandler(input){
        const email=input.email
        const lastName=input.lastName
        const FirstName=input.FirstName
        const DateB=input.DateB
        const PhoneNumber=input.PhoneNumber;
        const Address=input.Address;
        const City=input.City
        const password=input.password
        const conpassword=input.conpassword
        const country=input.password

        let message=[]

        if(!email||!lastName||!FirstName||!DateB ||!PhoneNumber||!Address||!password||!City||!conpassword||!country){
            message.push('all fields are required');
        }
        else{
            if(conpassword!==password){
                message.push('confirm password and password must be equal');
            }
            else{
                
            }
        }
}