import test from 'ava';
import decrypt from './decrypt';
import digest from './digest';
import encrypt from './encrypt';
import exportKey from './exportKey';
import getKeyFromDerivedPassword from './getKeyFromDerivedPassword';
import {
  arrayBufferToString,
  base64ToString,
  base64ToUint8Array,
  generateNonce,
  generateSalt,
  stringToArrayBuffer,
  stringToBase64,
  uint8ArrayToBase64,
} from './utils';

const PASSWORD = '$ome_sTr0ng-p4ssw0rd_1234';

test('password-based key with salt', async (t) => {
  const randomSalt = generateSalt();
  const passwordKey = await getKeyFromDerivedPassword(PASSWORD, randomSalt);

  t.truthy(passwordKey);
});

test('convert uint8array to base64', (t) => {
  const from = generateSalt();
  const to = uint8ArrayToBase64(from);

  t.deepEqual(from, base64ToUint8Array(to));
});

test('encode/decode base64', (t) => {
  const data = 'abc123';
  const encoded = stringToBase64(data);
  t.truthy(encoded);

  const decoded = base64ToString(encoded);
  t.deepEqual(decoded, 'abc123');
});

test('encrypt/descrypt JSON data', async (t) => {
  const data = {
    some: 'data',
  };

  const randomSalt = generateSalt();
  const passwordKeyEncrypt = await getKeyFromDerivedPassword(PASSWORD, randomSalt);
  const json = JSON.stringify(data);
  const nonce = generateNonce();
  const encryptedBuffer = await encrypt(passwordKeyEncrypt, nonce, stringToArrayBuffer(json));

  const passwordKeyFull = await getKeyFromDerivedPassword(PASSWORD, randomSalt, true);
  const decryptedData = await decrypt(passwordKeyFull, nonce, encryptedBuffer);
  const decryptedJson = arrayBufferToString(decryptedData);

  t.deepEqual(data, JSON.parse(decryptedJson));
});

test('hash message', async (t) => {
  const message = 'This is a random message to be hashes';
  const hash = await digest(message);

  t.truthy(hash);
});

test('export key', async (t) => {
  const password = 'abc123';
  const salt = generateSalt();

  const passKey = await getKeyFromDerivedPassword(password, salt, false, 1, true);
  const extractedKey = await exportKey(passKey);

  t.truthy(typeof extractedKey === 'string');
});
