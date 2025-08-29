import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IEcoPortal, IEcoPortalInterface } from "../IEcoPortal";
export declare class IEcoPortal__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "publishAndFund";
        readonly inputs: readonly [{
            readonly name: "intent";
            readonly type: "tuple";
            readonly internalType: "struct IEcoPortal.Intent";
            readonly components: readonly [{
                readonly name: "destination";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "route";
                readonly type: "tuple";
                readonly internalType: "struct IEcoPortal.Route";
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
                    readonly name: "nativeAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "tokens";
                    readonly type: "tuple[]";
                    readonly internalType: "struct IEcoPortal.TokenAmount[]";
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
                    readonly internalType: "struct IEcoPortal.Call[]";
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
                readonly internalType: "struct IEcoPortal.Reward";
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
                    readonly internalType: "struct IEcoPortal.TokenAmount[]";
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
        }, {
            readonly name: "allowPartial";
            readonly type: "bool";
            readonly internalType: "bool";
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
        readonly stateMutability: "payable";
    }];
    static createInterface(): IEcoPortalInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IEcoPortal;
}
