import { ISignJwtTokenPayload } from "@/shared/utils/interfaces";
import jwt, { SignOptions } from "jsonwebtoken";

export function signToken(
    payload: ISignJwtTokenPayload,
    options?: SignOptions,
) {
    return jwt.sign(payload, String(process.env.JWT_SECRET), options);
}

export function verifyToken(token: string) {
    return jwt.verify(token, String(process.env.JWT_SECRET));
}

export function signRefreshToken(payload: ISignJwtTokenPayload) {
    return signToken(payload, {
        expiresIn: "1d",
    });
}
