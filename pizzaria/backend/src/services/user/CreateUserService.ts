//Interface do Typescript
interface UserRequest{
    //Tipagem dos parametros que eu quero receber
    name: string;
    email: string;
    password: string
}

class CreateUserService{
    async execute({name,email,password}: UserRequest){

        console.log(name);

        return {name: name, email:email}
        }
}

export {CreateUserService}