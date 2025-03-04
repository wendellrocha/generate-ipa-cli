# generate-ipa

This project provides a command-line interface (CLI) tool for generating iOS application packages (.ipa files).

## Installation

_soon_

## Usage

```bash
generate-ipa --help
```

### Commands

*   **generate**: Generates an .ipa file.

    ```bash
    generate-ipa --settings ./settings.json
    ```

    *   `--settings`: path to settings.json file.

### Example settings file
```json
{
  "archiveLocation": "YourProject.xcarchive",
  "adhocExportOptions": "AdHocExportOptions.plist",
  "storeExportOptions": "StoreExportOptions.plist",
  "projectFilePath": "ios/YourProject.xcodeproj/project.pbxproj",
  "devConfiguration": "Development.Release",
  "prodConfiguration": "Production.Release",
  "workspaceFilePath": "ios/YourProject.xcworkspace"
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
