import chalk from 'chalk';
import shell from 'shelljs';

export function setBuildAndVersion(
  versionNumber,
  buildNumber,
  projectFilePath,
) {
  console.log(
    chalk.green(
      `Updating version to ${chalk.yellow(versionNumber)} and build number to ${chalk.yellow(buildNumber)}`,
    ),
  );
  shell.exec(
    'sed -i "" "s/MARKETING_VERSION = .*/MARKETING_VERSION = {versionNumber};/g" "{projectFile}"'
      .replaceAll('{versionNumber}', versionNumber)
      .replaceAll('{projectFile}', projectFilePath),
  );
  shell.exec(
    'sed -i "" "s/CURRENT_PROJECT_VERSION = .*/CURRENT_PROJECT_VERSION = {buildNumber};/g" "{projectFile}"'
      .replaceAll('{buildNumber}', buildNumber)
      .replaceAll('{projectFile}', projectFilePath),
  );
}
