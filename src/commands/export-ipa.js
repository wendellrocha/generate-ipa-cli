import chalk from 'chalk';
import shell from 'shelljs';

export function exportIpa(archiveLocation, exportOptions) {
  console.log(chalk.green('Exporting IPA...'));
  const outputPath = "./ipa/$(date '+%d-%m-%Y-%H-%M-%S')";
  shell.exec('mkdir -p {outputPath}'.replaceAll('{outputPath}', outputPath));
  shell.exec(
    `xcodebuild -exportArchive -archivePath ${archiveLocation} -exportPath ${outputPath} -exportOptionsPlist ${exportOptions} -quiet `,
  );
}
