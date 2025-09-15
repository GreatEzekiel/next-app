import { z } from "zod";

export const schema = z.object({
    name: z.string().min(3),
    price: z.number().min(1).max(100)
});


export default schema;
