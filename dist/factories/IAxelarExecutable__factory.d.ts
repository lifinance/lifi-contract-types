import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAxelarExecutable, IAxelarExecutableInterface } from "../IAxelarExecutable";
export declare class IAxelarExecutable__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "NotApprovedByGateway";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "commandId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "sourceChain";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "sourceAddress";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "payload";
            readonly type: "bytes";
        }];
        readonly name: "execute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "commandId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "sourceChain";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "sourceAddress";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "payload";
            readonly type: "bytes";
        }, {
            readonly internalType: "string";
            readonly name: "tokenSymbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "executeWithToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "gateway";
        readonly outputs: readonly [{
            readonly internalType: "contract IAxelarGateway";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IAxelarExecutableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAxelarExecutable;
}
