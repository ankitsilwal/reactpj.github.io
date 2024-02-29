import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./api.schema";
import { Model } from "mongoose";

@Injectable()

export class ApiService{
    constructor(@InjectModel(User.name) private userModel:Model<User>){}


    async createUser(dto:any){
        const usercreation = await this.userModel.create(dto);
        if(!usercreation){
            throw new BadRequestException(`Error`)
        }
        return usercreation;
    }
}