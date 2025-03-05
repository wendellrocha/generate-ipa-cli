# generate-ipa

This project provides a command-line interface (CLI) tool for generating iOS application packages (.ipa files).

## Installation

_soon_

## Usage

```bash
generate-ipa --help
```

### Commands

```bash
  generate-ipa --settings ./settings.json
```

- `--settings`: path to settings.json file.

### Example settings file

```json
{
  "archiveLocation": "YourProject.xcarchive",
  "adhocExportOptions": "AdHocExportOptions.plist",
  "storeExportOptions": "StoreExportOptions.plist",
  "projectFilePath": "ios/YourProject.xcodeproj/project.pbxproj",
  "devConfiguration": "Development.Release",
  "prodConfiguration": "Production.Release",
  "workspaceFilePath": "ios/YourProject.xcworkspace",
  "outputDirectory": "scripts/output",
  "flavors": ["dev", "stg", "prod"]
}
```

- `archiveLocation`: path to the .xcarchive file.
- `adhocExportOptions`: path to the AdHocExportOptions.plist file.
- `storeExportOptions`: path to the StoreExportOptions.plist file.
- `projectFilePath`: path to the project file.
- `devConfiguration`: name of the development configuration.
- `prodConfiguration`: name of the production configuration.
- `workspaceFilePath`: path to the workspace file.
- `outputDirectory`: path to the output directory for the .ipa file.
- `flavors`: array of flavors. Defaults to `["dev","prod"]`.

### Flavors

The flavors are used to specify the configurations for different environments. For example, you might have a development environment and a production environment. Each environment has its own configuration, and you can specify which configuration to use for each environment

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
