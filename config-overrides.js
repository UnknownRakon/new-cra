import { alias, aliasJest, configPaths } from 'react-app-rewire-alias'

const aliasMap = configPaths('./tsconfig.paths.json')

export default alias(aliasMap)
export const jest = aliasJest(aliasMap)