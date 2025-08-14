import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IEco, IEcoInterface } from "../IEco";
export declare class IEco__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "fulfill";
        readonly inputs: readonly [{
            readonly name: "intentHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "route";
            readonly type: "tuple";
            readonly internalType: "struct IEco.Route";
            readonly components: readonly [{
                readonly name: "salt";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "deadline";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "portal";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokens";
                readonly type: "tuple[]";
                readonly internalType: "struct IEco.TokenAmount[]";
                readonly components: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "calls";
                readonly type: "tuple[]";
                readonly internalType: "struct IEco.Call[]";
                readonly components: readonly [{
                    readonly name: "target";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "data";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }, {
            readonly name: "rewardHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "claimant";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "results";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "fund";
        readonly inputs: readonly [{
            readonly name: "destination";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "routeHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "reward";
            readonly type: "tuple";
            readonly internalType: "struct IEco.Reward";
            readonly components: readonly [{
                readonly name: "deadline";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "creator";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "prover";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nativeAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "tokens";
                readonly type: "tuple[]";
                readonly internalType: "struct IEco.TokenAmount[]";
                readonly components: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }, {
            readonly name: "allowPartial";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "intentHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "prove";
        readonly inputs: readonly [{
            readonly name: "prover";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "sourceChainDomainID";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "intentHashes";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "publish";
        readonly inputs: readonly [{
            readonly name: "destination";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "route";
            readonly type: "tuple";
            readonly internalType: "struct IEco.Route";
            readonly components: readonly [{
                readonly name: "salt";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "deadline";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "portal";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokens";
                readonly type: "tuple[]";
                readonly internalType: "struct IEco.TokenAmount[]";
                readonly components: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "calls";
                readonly type: "tuple[]";
                readonly internalType: "struct IEco.Call[]";
                readonly components: readonly [{
                    readonly name: "target";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "data";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }, {
            readonly name: "reward";
            readonly type: "tuple";
            readonly internalType: "struct IEco.Reward";
            readonly components: readonly [{
                readonly name: "deadline";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "creator";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "prover";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nativeAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "tokens";
                readonly type: "tuple[]";
                readonly internalType: "struct IEco.TokenAmount[]";
                readonly components: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "intentHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "vault";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "refund";
        readonly inputs: readonly [{
            readonly name: "destination";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "routeHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "reward";
            readonly type: "tuple";
            readonly internalType: "struct IEco.Reward";
            readonly components: readonly [{
                readonly name: "deadline";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "creator";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "prover";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nativeAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "tokens";
                readonly type: "tuple[]";
                readonly internalType: "struct IEco.TokenAmount[]";
                readonly components: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "destination";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "routeHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "reward";
            readonly type: "tuple";
            readonly internalType: "struct IEco.Reward";
            readonly components: readonly [{
                readonly name: "deadline";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "creator";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "prover";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nativeAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "tokens";
                readonly type: "tuple[]";
                readonly internalType: "struct IEco.TokenAmount[]";
                readonly components: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IEcoInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IEco;
}
