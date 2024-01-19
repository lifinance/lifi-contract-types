import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMulticall3, IMulticall3Interface } from "../IMulticall3";
export declare class IMulticall3__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "aggregate";
        readonly inputs: readonly [{
            readonly name: "calls";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Call[]";
            readonly components: readonly [{
                readonly name: "target";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "blockNumber";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "returnData";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "aggregate3";
        readonly inputs: readonly [{
            readonly name: "calls";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Call3[]";
            readonly components: readonly [{
                readonly name: "target";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "allowFailure";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "returnData";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Result[]";
            readonly components: readonly [{
                readonly name: "success";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "returnData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "aggregate3Value";
        readonly inputs: readonly [{
            readonly name: "calls";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Call3Value[]";
            readonly components: readonly [{
                readonly name: "target";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "allowFailure";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "returnData";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Result[]";
            readonly components: readonly [{
                readonly name: "success";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "returnData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "blockAndAggregate";
        readonly inputs: readonly [{
            readonly name: "calls";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Call[]";
            readonly components: readonly [{
                readonly name: "target";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "blockNumber";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "blockHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "returnData";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Result[]";
            readonly components: readonly [{
                readonly name: "success";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "returnData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "getBasefee";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "basefee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBlockHash";
        readonly inputs: readonly [{
            readonly name: "blockNumber";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "blockHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBlockNumber";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "blockNumber";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getChainId";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "chainid";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getCurrentBlockCoinbase";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "coinbase";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getCurrentBlockDifficulty";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "difficulty";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getCurrentBlockGasLimit";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "gaslimit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getCurrentBlockTimestamp";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getEthBalance";
        readonly inputs: readonly [{
            readonly name: "addr";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getLastBlockHash";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "blockHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "tryAggregate";
        readonly inputs: readonly [{
            readonly name: "requireSuccess";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "calls";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Call[]";
            readonly components: readonly [{
                readonly name: "target";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "returnData";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Result[]";
            readonly components: readonly [{
                readonly name: "success";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "returnData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "tryBlockAndAggregate";
        readonly inputs: readonly [{
            readonly name: "requireSuccess";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "calls";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Call[]";
            readonly components: readonly [{
                readonly name: "target";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "blockNumber";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "blockHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "returnData";
            readonly type: "tuple[]";
            readonly internalType: "struct IMulticall3.Result[]";
            readonly components: readonly [{
                readonly name: "success";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "returnData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IMulticall3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMulticall3;
}
