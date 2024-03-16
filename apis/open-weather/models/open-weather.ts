import { Clouds } from "./clouds";
import { Coord } from "./coord";
import { Main } from "./main";
import { Sys } from "./sys";
import { Weather } from "./weather";
import { Wind } from "./wind";

export class OpenWeather {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: string;
    wind: Wind;
    clouds: Clouds
    dt: string;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    code: number;
}