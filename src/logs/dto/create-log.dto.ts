import { ArrayNotEmpty, IsArray, IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Date } from "mongoose";

export class CreateLogDto {

    @IsString()
    @IsNotEmpty()
    user_id: string;

    @IsEmail()
    @IsNotEmpty()
    user_email: string;

    @IsString()
    @IsNotEmpty()
    user_name: string;

    @IsDate()
    @IsNotEmpty()
    user_created_date: Date;

    @IsDate()
    @IsNotEmpty()
    user_updated_date: Date;

    @IsArray()
    @ArrayNotEmpty()
    user_logs: any[];

    constructor(user: any, userLogs: any[]){
        this.user_id = user.user_id;
        this.user_name = user.user_nickname;
        this.user_email = user.user_email;
        this.user_created_date = user.created_at;
        this.user_updated_date = user.update_at;
        this.user_logs = userLogs;
    }

}