#!/usr/bin/env node

import chalk from 'chalk';
import { program } from 'commander';
import figlet from 'figlet';
import pkg from '../package.json' with { type: 'json' };
import { getAnswers } from '../src/answers/answers.js';
import { exportIpa } from '../src/commands/export-ipa.js';
import { generateArchive } from '../src/commands/generate-archive.js';
import { getConfiguration } from '../src/commands/get-configuration.js';
import { setBuildAndVersion } from '../src/commands/set-version-and-build.js';

let settings;

program
  .version(pkg.version)
  .description('generate-ipa')
  .option('--settings <path>', 'Settings file path')
  .action((options) => {
    if (options.settings === undefined) {
      console.log(chalk.red('Settings file path is required'));
    }

    settings = options.settings;
  });

program.parse(process.argv);

console.log(
  chalk.yellow(
    figlet.textSync('Generate IPA CLI', { horizontalLayout: 'full' }),
  ),
);

const { flavor, target, versionNumber, buildNumber } = await getAnswers();

const {
  configuration,
  exportOptions,
  archiveLocation,
  projectFilePath,
  workspaceFilePath,
} = getConfiguration(settings, flavor, target);

setBuildAndVersion(versionNumber, buildNumber, projectFilePath);
generateArchive(workspaceFilePath, configuration, archiveLocation);
exportIpa(archiveLocation, exportOptions);
