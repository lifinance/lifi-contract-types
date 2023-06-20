import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { VmSafe, VmSafeInterface } from "../../Vm.sol/VmSafe";
export declare class VmSafe__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "accesses";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "readSlots";
            readonly type: "bytes32[]";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "writeSlots";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "privateKey";
            readonly type: "uint256";
        }];
        readonly name: "addr";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "keyAddr";
            readonly type: "address";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "condition";
            readonly type: "bool";
        }];
        readonly name: "assume";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "char";
            readonly type: "string";
        }];
        readonly name: "breakpoint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "char";
            readonly type: "string";
        }, {
            readonly internalType: "bool";
            readonly name: "value";
            readonly type: "bool";
        }];
        readonly name: "breakpoint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "broadcast";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "signer";
            readonly type: "address";
        }];
        readonly name: "broadcast";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "privateKey";
            readonly type: "uint256";
        }];
        readonly name: "broadcast";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }];
        readonly name: "closeFile";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }, {
            readonly internalType: "bool";
            readonly name: "recursive";
            readonly type: "bool";
        }];
        readonly name: "createDir";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "mnemonic";
            readonly type: "string";
        }, {
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }];
        readonly name: "deriveKey";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "privateKey";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "mnemonic";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "derivationPath";
            readonly type: "string";
        }, {
            readonly internalType: "uint32";
            readonly name: "index";
            readonly type: "uint32";
        }];
        readonly name: "deriveKey";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "privateKey";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "envAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "value";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }];
        readonly name: "envAddress";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "value";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "envBool";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "value";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }];
        readonly name: "envBool";
        readonly outputs: readonly [{
            readonly internalType: "bool[]";
            readonly name: "value";
            readonly type: "bool[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "envBytes";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "value";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }];
        readonly name: "envBytes";
        readonly outputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "value";
            readonly type: "bytes[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }];
        readonly name: "envBytes32";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "value";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "envBytes32";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "value";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }];
        readonly name: "envInt";
        readonly outputs: readonly [{
            readonly internalType: "int256[]";
            readonly name: "value";
            readonly type: "int256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "envInt";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "value";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "defaultValue";
            readonly type: "bytes32[]";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "value";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }, {
            readonly internalType: "int256[]";
            readonly name: "defaultValue";
            readonly type: "int256[]";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "int256[]";
            readonly name: "value";
            readonly type: "int256[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "bool";
            readonly name: "defaultValue";
            readonly type: "bool";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "value";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "defaultValue";
            readonly type: "address";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "value";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "defaultValue";
            readonly type: "uint256";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "defaultValue";
            readonly type: "bytes[]";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "value";
            readonly type: "bytes[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "defaultValue";
            readonly type: "uint256[]";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "value";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }, {
            readonly internalType: "string[]";
            readonly name: "defaultValue";
            readonly type: "string[]";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "value";
            readonly type: "string[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "defaultValue";
            readonly type: "bytes";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "value";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "bytes32";
            readonly name: "defaultValue";
            readonly type: "bytes32";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "value";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "int256";
            readonly name: "defaultValue";
            readonly type: "int256";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "value";
            readonly type: "int256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }, {
            readonly internalType: "address[]";
            readonly name: "defaultValue";
            readonly type: "address[]";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "value";
            readonly type: "address[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "defaultValue";
            readonly type: "string";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "value";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }, {
            readonly internalType: "bool[]";
            readonly name: "defaultValue";
            readonly type: "bool[]";
        }];
        readonly name: "envOr";
        readonly outputs: readonly [{
            readonly internalType: "bool[]";
            readonly name: "value";
            readonly type: "bool[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }];
        readonly name: "envString";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "value";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "envString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "value";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }];
        readonly name: "envUint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "delim";
            readonly type: "string";
        }];
        readonly name: "envUint";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "value";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "commandInput";
            readonly type: "string[]";
        }];
        readonly name: "ffi";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "result";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }];
        readonly name: "fsMetadata";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "isDir";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isSymlink";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "length";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "readOnly";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "modified";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "accessed";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "created";
                readonly type: "uint256";
            }];
            readonly internalType: "struct VmSafe.FsMetadata";
            readonly name: "metadata";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "artifactPath";
            readonly type: "string";
        }];
        readonly name: "getCode";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "creationBytecode";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "artifactPath";
            readonly type: "string";
        }];
        readonly name: "getDeployedCode";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "runtimeBytecode";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getLabel";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "label";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getNonce";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getRecordedLogs";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32[]";
                readonly name: "topics";
                readonly type: "bytes32[]";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "emitter";
                readonly type: "address";
            }];
            readonly internalType: "struct VmSafe.Log[]";
            readonly name: "logs";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "newLabel";
            readonly type: "string";
        }];
        readonly name: "label";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "slot";
            readonly type: "bytes32";
        }];
        readonly name: "load";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "data";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly name: "parseAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "parsedValue";
            readonly type: "address";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly name: "parseBool";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "parsedValue";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly name: "parseBytes";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "parsedValue";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly name: "parseBytes32";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "parsedValue";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly name: "parseInt";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "parsedValue";
            readonly type: "int256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly name: "parseJson";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "abiEncodedData";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }];
        readonly name: "parseJson";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "abiEncodedData";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonAddressArray";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonBool";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonBoolArray";
        readonly outputs: readonly [{
            readonly internalType: "bool[]";
            readonly name: "";
            readonly type: "bool[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonBytes";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonBytes32";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonBytes32Array";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonBytesArray";
        readonly outputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "";
            readonly type: "bytes[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonInt";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonIntArray";
        readonly outputs: readonly [{
            readonly internalType: "int256[]";
            readonly name: "";
            readonly type: "int256[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonStringArray";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "";
            readonly type: "string[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonUint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "parseJsonUintArray";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly name: "parseUint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "parsedValue";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pauseGasMetering";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "projectRoot";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }, {
            readonly internalType: "uint64";
            readonly name: "maxDepth";
            readonly type: "uint64";
        }];
        readonly name: "readDir";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "errorMessage";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "path";
                readonly type: "string";
            }, {
                readonly internalType: "uint64";
                readonly name: "depth";
                readonly type: "uint64";
            }, {
                readonly internalType: "bool";
                readonly name: "isDir";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isSymlink";
                readonly type: "bool";
            }];
            readonly internalType: "struct VmSafe.DirEntry[]";
            readonly name: "entries";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }, {
            readonly internalType: "uint64";
            readonly name: "maxDepth";
            readonly type: "uint64";
        }, {
            readonly internalType: "bool";
            readonly name: "followLinks";
            readonly type: "bool";
        }];
        readonly name: "readDir";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "errorMessage";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "path";
                readonly type: "string";
            }, {
                readonly internalType: "uint64";
                readonly name: "depth";
                readonly type: "uint64";
            }, {
                readonly internalType: "bool";
                readonly name: "isDir";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isSymlink";
                readonly type: "bool";
            }];
            readonly internalType: "struct VmSafe.DirEntry[]";
            readonly name: "entries";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }];
        readonly name: "readDir";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "errorMessage";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "path";
                readonly type: "string";
            }, {
                readonly internalType: "uint64";
                readonly name: "depth";
                readonly type: "uint64";
            }, {
                readonly internalType: "bool";
                readonly name: "isDir";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isSymlink";
                readonly type: "bool";
            }];
            readonly internalType: "struct VmSafe.DirEntry[]";
            readonly name: "entries";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }];
        readonly name: "readFile";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "data";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }];
        readonly name: "readFileBinary";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }];
        readonly name: "readLine";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "line";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "linkPath";
            readonly type: "string";
        }];
        readonly name: "readLink";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "targetPath";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "record";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "recordLogs";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "privateKey";
            readonly type: "uint256";
        }];
        readonly name: "rememberKey";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "keyAddr";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }, {
            readonly internalType: "bool";
            readonly name: "recursive";
            readonly type: "bool";
        }];
        readonly name: "removeDir";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }];
        readonly name: "removeFile";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "resumeGasMetering";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "rpcAlias";
            readonly type: "string";
        }];
        readonly name: "rpcUrl";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "rpcUrlStructs";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "key";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "url";
                readonly type: "string";
            }];
            readonly internalType: "struct VmSafe.Rpc[]";
            readonly name: "urls";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "rpcUrls";
        readonly outputs: readonly [{
            readonly internalType: "string[2][]";
            readonly name: "urls";
            readonly type: "string[2][]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "address[]";
            readonly name: "values";
            readonly type: "address[]";
        }];
        readonly name: "serializeAddress";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "value";
            readonly type: "address";
        }];
        readonly name: "serializeAddress";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "bool[]";
            readonly name: "values";
            readonly type: "bool[]";
        }];
        readonly name: "serializeBool";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "bool";
            readonly name: "value";
            readonly type: "bool";
        }];
        readonly name: "serializeBool";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "values";
            readonly type: "bytes[]";
        }];
        readonly name: "serializeBytes";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "value";
            readonly type: "bytes";
        }];
        readonly name: "serializeBytes";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "values";
            readonly type: "bytes32[]";
        }];
        readonly name: "serializeBytes32";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "bytes32";
            readonly name: "value";
            readonly type: "bytes32";
        }];
        readonly name: "serializeBytes32";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "int256";
            readonly name: "value";
            readonly type: "int256";
        }];
        readonly name: "serializeInt";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "int256[]";
            readonly name: "values";
            readonly type: "int256[]";
        }];
        readonly name: "serializeInt";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "string[]";
            readonly name: "values";
            readonly type: "string[]";
        }];
        readonly name: "serializeString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "value";
            readonly type: "string";
        }];
        readonly name: "serializeString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "serializeUint";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "objectKey";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }];
        readonly name: "serializeUint";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "value";
            readonly type: "string";
        }];
        readonly name: "setEnv";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "privateKey";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "digest";
            readonly type: "bytes32";
        }];
        readonly name: "sign";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "startBroadcast";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "signer";
            readonly type: "address";
        }];
        readonly name: "startBroadcast";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "privateKey";
            readonly type: "uint256";
        }];
        readonly name: "startBroadcast";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stopBroadcast";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "value";
            readonly type: "address";
        }];
        readonly name: "toString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "toString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "value";
            readonly type: "bytes";
        }];
        readonly name: "toString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "value";
            readonly type: "bool";
        }];
        readonly name: "toString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "int256";
            readonly name: "value";
            readonly type: "int256";
        }];
        readonly name: "toString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "value";
            readonly type: "bytes32";
        }];
        readonly name: "toString";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "stringifiedValue";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "data";
            readonly type: "string";
        }];
        readonly name: "writeFile";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "writeFileBinary";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "valueKey";
            readonly type: "string";
        }];
        readonly name: "writeJson";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "json";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }];
        readonly name: "writeJson";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "path";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "data";
            readonly type: "string";
        }];
        readonly name: "writeLine";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): VmSafeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): VmSafe;
}
