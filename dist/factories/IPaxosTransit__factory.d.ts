import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPaxosTransit, IPaxosTransitInterface } from "../IPaxosTransit";
export declare class IPaxosTransit__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "submitOrder";
        readonly inputs: readonly [{
            readonly name: "quote";
            readonly type: "tuple";
            readonly internalType: "struct IPaxosTransit.Quote";
            readonly components: readonly [{
                readonly name: "route";
                readonly type: "tuple";
                readonly internalType: "struct IPaxosTransit.Route";
                readonly components: readonly [{
                    readonly name: "destEID";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "offerAsset";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "wantAsset";
                    readonly type: "address";
                    readonly internalType: "address";
                }];
            }, {
                readonly name: "offerAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "protocolFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "integratorFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "integratorFeeReceiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "distributorCode";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "salt";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }];
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "uuid";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IPaxosTransitInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPaxosTransit;
}
