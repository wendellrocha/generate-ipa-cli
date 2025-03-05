import chalk from 'chalk';
import shell from 'shelljs';

export function exportIpa(archiveLocation, outputDirectory, exportOptions) {
  console.log(chalk.green('Exporting IPA...'));
  const date = "$(date '+%d-%m-%Y-%H-%M-%S')";

  const outputPath = outputDirectory
    ? `${outputDirectory}/${date}`
    : `./ipa/${date}`;

  console.log(chalk.green(`Output directtory: ${outputPath}`));

  shell.exec('mkdir -p {outputPath}'.replaceAll('{outputPath}', outputPath));
  shell.exec(
    `xcodebuild -exportArchive -archivePath ${archiveLocation} -exportPath ${outputPath} -exportOptionsPlist ${exportOptions} -quiet `,
  );
}
