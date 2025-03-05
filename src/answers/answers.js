import { input, select } from '@inquirer/prompts';
import chalk from 'chalk';

export async function getAnswers(settings) {
  try {
    let flavors = ['dev', 'prod'];

    if (settings.flavors?.length > 0) {
      flavors = settings.flavors;
    }

    const answers = {
      target: await select({
        message: "What's the target?",
        choices: ['store', 'adhoc'],
      }),
      flavor: await select({
        message: "What's the flavor?",
        choices: flavors,
      }),
      versionNumber: await input({
        message: "What's the version number?",
        validate: (value) => {
          if (value.match(/^\d+\.\d+\.\d+$/) === null) {
            return chalk.red('Invalid version number. Must be in format x.x.x');
          }

          return true;
        },
      }),
      buildNumber: await input({
        message: "What's the build number?",
        validate: (value) => {
          if (value.match(/^\d+$/) === null) {
            return chalk.red('Invalid build number. Must be a number');
          }

          if (parseInt(value) <= 0) {
            return chalk.red('Invalid build number. Must be greater than 0');
          }

          return true;
        },
      }),
    };

    return answers;
  } catch (error) {
    if (error.name === 'ExitPromptError') {
      console.log(chalk.yellow('See you later 👋'));
      process.exit(0);
    } else {
      console.error(chalk.red('Unexpected error: '), error);
      process.exit(1);
    }
  }
}
