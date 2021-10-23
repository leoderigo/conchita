import { Injectable } from '@nestjs/common';

import { Command } from '../models/command';

@Injectable()
export class CommandService {

    ImOkAndYou(): string {
        return 'Very weel, Leo. And you?'
    }

    /**
     * Execute the commands targeting the right function
     */
    execute(commands: Command[]): any[] {
        const errors = []
        commands.forEach(command => {
            try {
                if(command.name === 'Hi') {
                    this.hi()
                } else throw 'Command not recognized'
            } catch(err) {
                errors.push(err)
            }
        })

        return errors
    }

    hi(): void {
        try {
            console.log('Hello, Leo.')
        } catch(err) {
            console.log(err)
            throw "I couldn't say Hello"
        }
    }
}
