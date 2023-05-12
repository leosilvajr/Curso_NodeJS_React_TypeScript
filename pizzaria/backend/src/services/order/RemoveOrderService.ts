import primasClient from "../../prisma";

//Criando tipagem, innterface para receber ID
interface OrderRequest{
    order_id: string;
}

class RemoveOrderService{
    async execute({order_id}: OrderRequest){

        const order = await primasClient.order.delete({
            where:{
                id: order_id
            }
        }); 
        return order;
    }
}

export {RemoveOrderService}