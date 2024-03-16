import { StatusCodes } from "http-status-codes";

export class ErrorMessageWeather {
    cod: StatusCodes;
    message: string;
}