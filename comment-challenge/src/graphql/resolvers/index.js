import  path from "path";
import {mergeResolvers} from "@graphql-tools/merge";
import {loadFilesSync} from "@graphql-tools/load-files";


const resolversArray = loadFilesSync(path.join(__dirname), {
    extensions: ['js'],
    extractExports: fileExport => {
        if (typeof fileExport === 'function') {
            return fileExport('query_root')
        }
        return fileExport
    }})

module.exports = mergeResolvers(resolversArray)
