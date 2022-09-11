function findTitleInNestedManifest(path: string, r: any): string {
  for (const route of r) {
    if(route.path === path) {
      return route.title;
    }
    if(route.children) {
      const next = findTitleInNestedManifest(path, route.children);
      if(next) return next;
    } else {
      if(route.path === path) {
        return route.title;
      }
    }
  }
  return '';
}

export default findTitleInNestedManifest;
