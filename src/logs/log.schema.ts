import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes } from "mongoose";

@Schema({
    timestamps: true
})
export class Log {
    @Prop({
        trim: true,
    })
    user_id: string;

    @Prop({
        trim: true,
        default: 'client',
    })
    user_rol: string;

    @Prop({
        trim: true,
    })
    user_email: string;

    @Prop({
        required: true,
        trim: true,
    })
    module: string;

    @Prop({
        required: true,
        trim: true,
    })
    entity: string;

    @Prop({
        trim: true,
        default: 'INFO'
    })
    severity: string;

    @Prop({
        required: true,
        trim: true,
    })
    ip_address: string;

    @Prop({
        required: true,
        trim: true,
    })
    user_agent: string;

    @Prop({
        trim: true,
    })
    status: string;

    @Prop({
        trim: true,
        type: SchemaTypes.Mixed
    })
    req_body: any[]

    @Prop({
        required: true,
        trim: true,
    })
    url: string

    @Prop({
        required: true,
        trim: true,
    })
    method: string

    @Prop({
        required: true,
        trim: true,
    })
    hostname: string

    @Prop({
        trim: true,
        type: SchemaTypes.Mixed
    })
    res_content: any[]
    // @Prop({
    //     required: true,
    //     trim: true,
    // })
    // response_time: string;
}

export const LogSchema = SchemaFactory.createForClass(Log);