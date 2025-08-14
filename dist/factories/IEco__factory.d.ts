import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IEco, IEcoInterface } from "../IEco";
export declare class IEco__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "fund";
        readonly inputs: readonly [{
            readonly name: "routeHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "reward";
            readonly type: "tuple";
            readonly internalType: "struct IEco.Reward";
            readonly components: readonly [{
                readonly name: "prover";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokens";
                readonly type: "address[]";
                readonly internalType: "address[]";
            }, {
                readonly name: "amounts";
                readonly type: "uint256[]";
                readonly internalType: "uint256[]";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
        readonly name: "publish";
        readonly inputs: readonly [{
            readonly name: "intent";
            readonly type: "tuple";
            readonly internalType: "struct IEco.Intent";
            readonly components: readonly [{
                readonly name: "route";
                readonly type: "tuple";
                readonly internalType: "struct IEco.Route";
                readonly components: readonly [{
                    readonly name: "source";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "destination";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "data";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "reward";
                readonly type: "tuple";
                readonly internalType: "struct IEco.Reward";
                readonly components: readonly [{
                    readonly name: "prover";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "tokens";
                    readonly type: "address[]";
                    readonly internalType: "address[]";
                }, {
                    readonly name: "amounts";
                    readonly type: "uint256[]";
                    readonly internalType: "uint256[]";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "nonce";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "intentHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "publishAndFund";
        readonly inputs: readonly [{
            readonly name: "intent";
            readonly type: "tuple";
            readonly internalType: "struct IEco.Intent";
            readonly components: readonly [{
                readonly name: "route";
                readonly type: "tuple";
                readonly internalType: "struct IEco.Route";
                readonly components: readonly [{
                    readonly name: "source";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "destination";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "data";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "reward";
                readonly type: "tuple";
                readonly internalType: "struct IEco.Reward";
                readonly components: readonly [{
                    readonly name: "prover";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "tokens";
                    readonly type: "address[]";
                    readonly internalType: "address[]";
                }, {
                    readonly name: "amounts";
                    readonly type: "uint256[]";
                    readonly internalType: "uint256[]";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "nonce";
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
    }];
    static createInterface(): IEcoInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IEco;
}
