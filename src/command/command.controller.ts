import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { StandardResponse } from '../models/system/standard-response';
import { CommandService } from './command.service';
import { Command } from '../models/command';

@Controller('command')
export class CommandController {
    constructor(
        private commandService: CommandService
    ) { }

    @Get()
    howAreYouConchita(): string {
        return this.commandService.ImOkAndYou()
    }

    @Post()
    do(
        @Body('commands') commands: Command[]
    ): StandardResponse {
        const response = new StandardResponse({
            code: 200
        })

        if(!(commands && Array.isArray(commands))) {
            response.code = 204 // BAD REQUEST
            response.errors.push('Invalid request body')
            response.data = "I couldn't help you"
            return response
        }

        response.data = this.commandService.execute(commands)
        return response
    }
}
