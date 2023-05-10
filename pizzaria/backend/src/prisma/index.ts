import { PrismaClient } from '@prisma/client'

const primaClient = new PrismaClient();
//Expostar para usar no projeto
export default primaClient; 