import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMayan, IMayanInterface } from "../IMayan.js";
export declare class IMayan__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "forwardERC20";
        readonly inputs: readonly [{
            readonly name: "tokenIn";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "permitParams";
            readonly type: "tuple";
            readonly internalType: "struct IMayan.PermitParams";
            readonly components: readonly [{
                readonly name: "value";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "v";
                readonly type: "uint8";
                readonly internalType: "uint8";
            }, {
                readonly name: "r";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "s";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }];
        }, {
            readonly name: "mayanProtocol";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "protocolData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "forwardEth";
        readonly inputs: readonly [{
            readonly name: "mayanProtocol";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "protocolData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IMayanInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMayan;
}
//# sourceMappingURL=IMayan__factory.d.ts.map