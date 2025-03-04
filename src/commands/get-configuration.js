import fs from 'fs';

export function getConfiguration(settingsPath, flavor, target) {
  const settings = fs.readFileSync(settingsPath, 'utf8');
  const settingsJson = JSON.parse(settings);

  if (target === 'store' && flavor === 'prod') {
    return {
      configuration: settingsJson.prodConfiguration,
      exportOptions: settingsJson.storeExportOptions,
      archiveLocation: settingsJson.archiveLocation,
      projectFilePath: settingsJson.projectFilePath,
      workspaceFilePath: settingsJson.workspaceFilePath,
    };
  }

  if (target === 'store' && flavor === 'dev') {
    return {
      configuration: settingsJson.devConfiguration,
      exportOptions: settingsJson.storeExportOptions,
      archiveLocation: settingsJson.archiveLocation,
      projectFilePath: settingsJson.projectFilePath,
      workspaceFilePath: settingsJson.workspaceFilePath,
    };
  }

  if (target === 'adhoc' && flavor === 'prod') {
    return {
      configuration: settingsJson.prodConfiguration,
      exportOptions: settingsJson.adhocExportOptions,
      archiveLocation: settingsJson.archiveLocation,
      projectFilePath: settingsJson.projectFilePath,
      workspaceFilePath: settingsJson.workspaceFilePath,
    };
  }

  if (target === 'adhoc' && flavor === 'dev') {
    return {
      configuration: settingsJson.devConfiguration,
      exportOptions: settingsJson.adhocExportOptions,
      archiveLocation: settingsJson.archiveLocation,
      projectFilePath: settingsJson.projectFilePath,
      workspaceFilePath: settingsJson.workspaceFilePath,
    };
  }
}
