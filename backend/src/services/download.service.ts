export class DownloadService {
  async getSprite(id: string) {
    // TODO: Implement
    return {
      path: '/tmp/sprite.png',
      filename: `sprite_${id}.png`
    };
  }

  async getAllVersions(id: string) {
    // TODO: Implement ZIP creation
    return {
      path: '/tmp/sprite_versions.zip',
      filename: `sprite_${id}_all_versions.zip`
    };
  }

  async getProject(id: string) {
    // TODO: Implement ZIP creation
    return {
      path: '/tmp/project.zip',
      filename: `project_${id}.zip`
    };
  }
}
