import prismaClient from "../../prisma";
// Para manipular o banco.

interface CategoryRequest{ //Criando interface para tipagem
    name: string;

}

class CreateCategoryService{
    async execute({name}: CategoryRequest){

        if(name === ''){
            throw new Error('Nome Inválido.')
        }
        const category = await prismaClient.category.create({
            data:{
                name:name,
            },
            select:{
                id: true, name: true
            }
        })
        return category;
    }
}

export {CreateCategoryService}