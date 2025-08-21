import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IEco, IEcoInterface } from "../IEco";
export declare class IEco__factory {
    static readonly abi: readonly [{
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
    }];
    static createInterface(): IEcoInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IEco;
}
