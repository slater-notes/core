import crypto from 'isomorphic-webcrypto';
import getKeyFromPassword from './getKeyFromPassword';
const getKeyFromDerivedPassword = async (password, salt, fullUsage = false, iterations = 500000, extractable = false) => {
    const passwordKey = await getKeyFromPassword(password);
    return await crypto.subtle.deriveKey({
        name: 'PBKDF2',
        salt,
        iterations,
        hash: { name: 'SHA-256' },
    }, passwordKey, { name: 'AES-GCM', length: 256 }, extractable, fullUsage ? ['encrypt', 'decrypt'] : ['encrypt']);
};
export default getKeyFromDerivedPassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0S2V5RnJvbURlcml2ZWRQYXNzd29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcnlwdG8vZ2V0S2V5RnJvbURlcml2ZWRQYXNzd29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxzQkFBc0IsQ0FBQztBQUMxQyxPQUFPLGtCQUFrQixNQUFNLHNCQUFzQixDQUFDO0FBRXRELE1BQU0seUJBQXlCLEdBQUcsS0FBSyxFQUNyQyxRQUFnQixFQUNoQixJQUFnQixFQUNoQixTQUFTLEdBQUcsS0FBSyxFQUNqQixVQUFVLEdBQUcsTUFBTSxFQUNuQixXQUFXLEdBQUcsS0FBSyxFQUNuQixFQUFFO0lBQ0YsTUFBTSxXQUFXLEdBQUcsTUFBTSxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV2RCxPQUFPLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ2xDO1FBQ0UsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJO1FBQ0osVUFBVTtRQUNWLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7S0FDMUIsRUFDRCxXQUFXLEVBQ1gsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFDaEMsV0FBVyxFQUNYLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQ2pELENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixlQUFlLHlCQUF5QixDQUFDIn0=