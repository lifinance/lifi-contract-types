import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { VmSafe, VmSafeInterface } from "../../Vm.sol/VmSafe";
export declare class VmSafe__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "accesses";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "readSlots";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "writeSlots";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "addr";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "keyAddr";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assume";
        readonly inputs: readonly [{
            readonly name: "condition";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "breakpoint";
        readonly inputs: readonly [{
            readonly name: "char";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "breakpoint";
        readonly inputs: readonly [{
            readonly name: "char";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "broadcast";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "broadcast";
        readonly inputs: readonly [{
            readonly name: "signer";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "broadcast";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "closeFile";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "recursive";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deriveKey";
        readonly inputs: readonly [{
            readonly name: "mnemonic";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "index";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "deriveKey";
        readonly inputs: readonly [{
            readonly name: "mnemonic";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "derivationPath";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "index";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "envAddress";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envAddress";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBool";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBool";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBytes";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBytes";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBytes32";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBytes32";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envInt";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envInt";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "envString";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envString";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envUint";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envUint";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "ffi";
        readonly inputs: readonly [{
            readonly name: "commandInput";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "fsMetadata";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "metadata";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.FsMetadata";
            readonly components: readonly [{
                readonly name: "isDir";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isSymlink";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "length";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "readOnly";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "modified";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "accessed";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "created";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getCode";
        readonly inputs: readonly [{
            readonly name: "artifactPath";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "creationBytecode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDeployedCode";
        readonly inputs: readonly [{
            readonly name: "artifactPath";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "runtimeBytecode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getLabel";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "label";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getNonce";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getRecordedLogs";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "logs";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.Log[]";
            readonly components: readonly [{
                readonly name: "topics";
                readonly type: "bytes32[]";
                readonly internalType: "bytes32[]";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "emitter";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "label";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "newLabel";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "load";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "slot";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "data";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "parseAddress";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseBool";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseBytes";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseBytes32";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseInt";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJson";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "abiEncodedData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJson";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "abiEncodedData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonAddress";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonAddressArray";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBool";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBoolArray";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBytes";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBytes32";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBytes32Array";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBytesArray";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonInt";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonIntArray";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonString";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonStringArray";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonUint";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseJsonUintArray";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "parseUint";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "pauseGasMetering";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "projectRoot";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "maxDepth";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [{
            readonly name: "entries";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.DirEntry[]";
            readonly components: readonly [{
                readonly name: "errorMessage";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "path";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "depth";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "isDir";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isSymlink";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "maxDepth";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "followLinks";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "entries";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.DirEntry[]";
            readonly components: readonly [{
                readonly name: "errorMessage";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "path";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "depth";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "isDir";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isSymlink";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "entries";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.DirEntry[]";
            readonly components: readonly [{
                readonly name: "errorMessage";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "path";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "depth";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "isDir";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isSymlink";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readFile";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "data";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readFileBinary";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readLine";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "line";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readLink";
        readonly inputs: readonly [{
            readonly name: "linkPath";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "targetPath";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "record";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "recordLogs";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rememberKey";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "keyAddr";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "recursive";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeFile";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "resumeGasMetering";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rpcUrl";
        readonly inputs: readonly [{
            readonly name: "rpcAlias";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "rpcUrlStructs";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "urls";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.Rpc[]";
            readonly components: readonly [{
                readonly name: "key";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "url";
                readonly type: "string";
                readonly internalType: "string";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "rpcUrls";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "urls";
            readonly type: "string[2][]";
            readonly internalType: "string[2][]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "serializeAddress";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeAddress";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBool";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBool";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBytes";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBytes";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBytes32";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBytes32";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeInt";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeInt";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeString";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeString";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeUint";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeUint";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setEnv";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "sign";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "digest";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "startBroadcast";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBroadcast";
        readonly inputs: readonly [{
            readonly name: "signer";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBroadcast";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "stopBroadcast";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "writeFile";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "data";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeFileBinary";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeJson";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeJson";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeLine";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "data";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): VmSafeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): VmSafe;
}
