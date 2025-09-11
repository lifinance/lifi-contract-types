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
                readonly name: "route";
                readonly type: "tuple";
                readonly internalType: "struct IEcoPortal.Route";
                readonly components: readonly [{
                    readonly name: "salt";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "source";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "destination";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "inbox";
                    readonly type: "address";
                    readonly internalType: "address";
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
                    readonly name: "creator";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "prover";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "deadline";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "nativeValue";
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
        }];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IEcoPortalInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IEcoPortal;
}
