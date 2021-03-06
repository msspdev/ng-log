import { TestBed } from '@angular/core/testing';

import { LOGGER_PROVIDER, LoggerProvider } from '../../src/logger-provider';

import { CONSOLE_LOGGER_OPTIONS, ConsoleLoggerOptions } from '../src/console-logger';
import { ConsoleLoggerProvider } from '../src/console-logger-provider';
import { ConsoleLoggerModule } from '../src/console-logger.module';

describe('ConsoleLoggerModule', () => {
    it("should provide 'ConsoleLoggerProvider'", () => {
        TestBed.configureTestingModule({
            imports: [ConsoleLoggerModule]
        });

        const loggerProviders = TestBed.inject<LoggerProvider[]>(LOGGER_PROVIDER);

        void expect(loggerProviders[0] instanceof ConsoleLoggerProvider).toBeTruthy();
    });

    describe('withOptions', () => {
        it("should provide 'CONSOLE_LOGGER_OPTIONS' value", () => {
            TestBed.configureTestingModule({
                imports: [
                    ConsoleLoggerModule.withOptions({
                        enableDebug: true
                    })
                ]
            });

            const options = TestBed.inject<ConsoleLoggerOptions>(CONSOLE_LOGGER_OPTIONS);

            void expect(options.enableDebug).toBeTruthy();
        });
    });
});
