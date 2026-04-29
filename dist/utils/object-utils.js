"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFields = deleteFields;
function deleteFields(data, fields) {
    for (const field of fields) {
        delete data[field];
    }
    return data;
}
//# sourceMappingURL=object-utils.js.map