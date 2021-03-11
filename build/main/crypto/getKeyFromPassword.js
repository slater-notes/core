"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_webcrypto_1 = __importDefault(require("isomorphic-webcrypto"));
const utils_1 = require("./utils");
const getKeyFromPassword = async (password) => {
    return await isomorphic_webcrypto_1.default.subtle.importKey('raw', utils_1.stringToBuffer(password), { name: 'PBKDF2' }, false, [
        'deriveKey',
        'deriveBits',
    ]);
};
exports.default = getKeyFromPassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0S2V5RnJvbVBhc3N3b3JkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NyeXB0by9nZXRLZXlGcm9tUGFzc3dvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnRkFBMEM7QUFDMUMsbUNBQXlDO0FBRXpDLE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxFQUFFLFFBQWdCLEVBQUUsRUFBRTtJQUNwRCxPQUFPLE1BQU0sOEJBQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxzQkFBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRTtRQUMvRixXQUFXO1FBQ1gsWUFBWTtLQUNiLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLGtCQUFlLGtCQUFrQixDQUFDIn0=