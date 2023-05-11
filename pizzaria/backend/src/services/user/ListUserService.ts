import prismaClient from "../../prisma";
// Para manipular o banco.

class ListUserService{
    async execute(){
        const category = await prismaClient.user.findMany({
            select:{
                id:true, name:true
            }
        })
        return category;
    }
}

export {ListUserService}