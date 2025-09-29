import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOriginSettler, IOriginSettlerInterface } from "../IOriginSettler";
export declare class IOriginSettler__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "open";
        readonly inputs: readonly [{
            readonly name: "order";
            readonly type: "tuple";
            readonly internalType: "struct StandardOrder";
            readonly components: readonly [{
                readonly name: "user";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "originChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "expires";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "inputOracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "inputs";
                readonly type: "uint256[2][]";
                readonly internalType: "uint256[2][]";
            }, {
                readonly name: "outputs";
                readonly type: "tuple[]";
                readonly internalType: "struct MandateOutput[]";
                readonly components: readonly [{
                    readonly name: "oracle";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "settler";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "chainId";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "token";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "recipient";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "call";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "context";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "openFor";
        readonly inputs: readonly [{
            readonly name: "order";
            readonly type: "tuple";
            readonly internalType: "struct StandardOrder";
            readonly components: readonly [{
                readonly name: "user";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "originChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "expires";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "inputOracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "inputs";
                readonly type: "uint256[2][]";
                readonly internalType: "uint256[2][]";
            }, {
                readonly name: "outputs";
                readonly type: "tuple[]";
                readonly internalType: "struct MandateOutput[]";
                readonly components: readonly [{
                    readonly name: "oracle";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "settler";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "chainId";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "token";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "recipient";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "call";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "context";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }];
        }, {
            readonly name: "sponsor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IOriginSettlerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOriginSettler;
}
