import { Get, JsonController, Req, Res } from "routing-controllers";
import { Routes } from "../routes/constants.js";
import { Request, Response } from "express";
import { HttpStatusCode } from "axios";
import { Service } from "typedi";

@Service()
@JsonController()
export class DriverController {
  @Get(Routes.TEST)
  async test(@Req() req: Request, @Res() res: Response) {
    return res.status(HttpStatusCode.Ok).send("test");
  }
}
