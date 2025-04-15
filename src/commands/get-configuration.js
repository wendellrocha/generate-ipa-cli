export function getConfiguration(settings, flavor, target) {
  if (target === 'store' && flavor === 'prod') {
    return {
      configuration: settings.prodConfiguration,
      exportOptions: settings.storeExportOptions,
      archiveLocation: settings.archiveLocation,
      projectFilePath: settings.projectFilePath,
      workspaceFilePath: settings.workspaceFilePath,
    };
  }

  if (target === 'store' && flavor === 'dev') {
    return {
      configuration: settings.devConfiguration,
      exportOptions: settings.storeExportOptions,
      archiveLocation: settings.archiveLocation,
      projectFilePath: settings.projectFilePath,
      workspaceFilePath: settings.workspaceFilePath,
    };
  }

  if (target === 'store' && flavor === 'staging') {
    return {
      configuration: settings.stagingConfiguration,
      exportOptions: settings.storeExportOptions,
      archiveLocation: settings.archiveLocation,
      projectFilePath: settings.projectFilePath,
      workspaceFilePath: settings.workspaceFilePath,
    };
  }

  if (target === 'adhoc' && flavor === 'prod') {
    return {
      configuration: settings.prodConfiguration,
      exportOptions: settings.adhocExportOptions,
      archiveLocation: settings.archiveLocation,
      projectFilePath: settings.projectFilePath,
      workspaceFilePath: settings.workspaceFilePath,
    };
  }

  if (target === 'adhoc' && flavor === 'dev') {
    return {
      configuration: settings.devConfiguration,
      exportOptions: settings.adhocExportOptions,
      archiveLocation: settings.archiveLocation,
      projectFilePath: settings.projectFilePath,
      workspaceFilePath: settings.workspaceFilePath,
    };
  }

  if (target === 'adhoc' && flavor === 'staging') {
    return {
      configuration: settings.stagingConfiguration,
      exportOptions: settings.adhocExportOptions,
      archiveLocation: settings.archiveLocation,
      projectFilePath: settings.projectFilePath,
      workspaceFilePath: settings.workspaceFilePath,
    };
  }
}
