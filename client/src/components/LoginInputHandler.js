export default function RegisterInputHandler(input){
    console.log(input);
    const email=input.email;
    const password=input.password;
    const defaultValue={
        email:"meseretkifle2@gmail.com",
        password:"mesi"
    }

    let message=[]

    if(!email||!password){
        message.push('all fields are required');
    }
    else{
        if(email!==defaultValue.email && password!==defaultValue.password){
            message.push('incorrect email or password');
        }else{
            message.push('success');
        }
    }
    return message;
}