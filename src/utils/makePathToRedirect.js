const makePathToRedirect = (path, toRemove) => toRemove ? path.slice(3) : `/de${path}`;

export default makePathToRedirect
