import * as core from '@actions/core'
import * as parser from 'github-action-input-parser';
import { wait } from './wait'

async function run(): Promise<void> {
  try {
    const ms = parser.getInput({ input: 'milliseconds', type: Number, required: true });
    core.debug(`Waiting ${ms} milliseconds ...`); // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    core.debug(new Date().toTimeString());
    await wait(ms);
    core.debug(new Date().toTimeString());

    core.setOutput('time', new Date().toTimeString());
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
