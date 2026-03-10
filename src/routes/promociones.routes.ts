import { Router, Request, Response} from "express";
import { literal, Op } from "sequelize";
import { Promocion, Tienda, TiendaPromocion } from "../models";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    const dia = Number(req.query.dia);
    console.log('dia---------->', dia)

    const hoy = new Date().toISOString().slice(0, 10);

    const promociones = await Promocion.findAll({
        where: literal(`SUBSTRING(dias_semana, ${dia}, 1) = '1'`),

        include: [
            {
                model: TiendaPromocion,
                required: true,
                where: {
                    inicio: { [Op.lte]: hoy },
                    fin: { [Op.gte]: hoy }
                },
                include: [
                    {
                        model: Tienda
                    }
                ]
            }
        ]
    });

    res.json(promociones);
});

export default router;