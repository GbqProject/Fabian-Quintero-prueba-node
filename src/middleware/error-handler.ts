import { Request, Response, NextFunction } from "express";

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = err.status || 500;
    console.log('error---------->', err)

    res.status(status).json({
        message: err.message || "Internal server error",
        data: null
    });
};