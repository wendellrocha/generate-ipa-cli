import chalk from 'chalk';
import shell from 'shelljs';

export function generateArchive(workspace, configuration, archiveLocation) {
  console.log(chalk.green('Generating archive...'));
  shell.exec(
    `xcodebuild -workspace ${workspace} -configuration ${configuration} -scheme ${configuration} -archivePath ${archiveLocation} archive -quiet`,
  );
}
