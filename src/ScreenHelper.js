const { dirname } = require('path');
class ScreenHelper {
  static async alertError(context, message) {
    return await context.app.alert('Erro!', message);
  }

  static async askRepoPath(context, options={}) {
    await context.app.alert(
      'Select repository',
      `Choose the repository to synchronize your workspace\nCurrent path: ${options.currentPath}`
    );
    const path = await context.app.showSaveDialog({defaultPath: options.workspaceName});

    return dirname(path);
  }
}

module.exports = ScreenHelper;
