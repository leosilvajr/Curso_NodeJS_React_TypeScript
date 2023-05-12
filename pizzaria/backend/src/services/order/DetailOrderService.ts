import prismaClient from "../../prisma";

interface DetailRequest{
    order_id: string
}

class DetailOrderService{
    async execute({order_id}: DetailRequest){

        const orders = await prismaClient.item.findMany({
            where:{
                order_id: order_id
            },
            include:{ //Vai incluir tudo relacionado a produto e a order na nossa resposta.
                product:true,
                order:true
            }
        });

        return orders;

    }
}

export {DetailOrderService}