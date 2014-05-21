/*!
 * @license RequireJS Import Plugin, Copyright (c) 2014 Erich Eichinger
 * @version 0.0.1
 *
 * Imports modules from one requirejs context into another, respecting load order dependencies. Requires named contexts.
 */
/*global define: false, require: false */
define(function () {
    'use strict';

    /**
     * Split a name "<contextname>:<modulename>"
     *
     * @param {String} name
     * @returns {Object} with properties "contextName", "moduleName"
     */
    function parseContextName(name) {
        var index = name.indexOf(":");
        var contextName = '', moduleName = name;

        if (index >= 0) {
            contextName = name.substring(0, index);
            moduleName = name.substring(index + 1, name.length);
        }

        return {
            contextName: contextName,
            moduleName: moduleName
        };
    }

    /**
     * Parses a resource name into its component parts. Resource names
     * look like: module/name.ext!strip, where the !strip part is
     * optional.
     * @param {String} name the resource name
     * @returns {Object} with properties "moduleName", "ext" and "strip"
     * where strip is a boolean.
     */
    function parseName(name) {
        var modName, ext, temp,
            strip = false,
            index = name.indexOf("."),
            isRelative = name.indexOf('./') === 0 ||
                name.indexOf('../') === 0;

        if (index !== -1 && (!isRelative || index > 1)) {
            modName = name.substring(0, index);
            ext = name.substring(index + 1, name.length);
        } else {
            modName = name;
        }

        temp = ext || modName;
        index = temp.indexOf("!");
        if (index !== -1) {
            //Pull off the strip arg.
            strip = temp.substring(index + 1) === "strip";
            temp = temp.substring(0, index);
            if (ext) {
                ext = temp;
            } else {
                modName = temp;
            }
        }

        var parsedContextName = parseContextName(modName);

        return {
            contextName: parsedContextName.contextName,
            moduleName: parsedContextName.moduleName,
            ext: ext,
            strip: strip
        };
    }

    return {
        load: function(name, req, onload, config) {
            var parsedName = parseContextName(name);

            var contextConfig = parsedName.contextName.length > 0
                ? { context: parsedName.contextName }
                : { };

            var contextrequire = require.config(contextConfig);

            contextrequire([parsedName.moduleName], function(mod) {
                onload(mod);
            });
        }
    };
});
