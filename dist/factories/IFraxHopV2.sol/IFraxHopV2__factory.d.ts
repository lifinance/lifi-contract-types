import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFraxHopV2, IFraxHopV2Interface } from "../../IFraxHopV2.sol/IFraxHopV2";
export declare class IFraxHopV2__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "quote";
        readonly inputs: readonly [{
            readonly name: "oft";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "dstEid";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "recipient";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "dstGas";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "fee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "quoteStatic";
        readonly inputs: readonly [{
            readonly name: "oft";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "dstEid";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "recipient";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "dstGas";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "userToken";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "fee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "removeDust";
        readonly inputs: readonly [{
            readonly name: "oft";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amountLD";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "flooredAmountLD";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "sendOFT";
        readonly inputs: readonly [{
            readonly name: "oft";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "dstEid";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "recipient";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "amountLD";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "dstGas";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IFraxHopV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFraxHopV2;
}
