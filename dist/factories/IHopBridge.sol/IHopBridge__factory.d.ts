import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IHopBridge, IHopBridgeInterface } from "../../IHopBridge.sol/IHopBridge.js";
export declare class IHopBridge__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "send";
        readonly inputs: readonly [{
            readonly name: "chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "bonderFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "sendToL2";
        readonly inputs: readonly [{
            readonly name: "chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "relayer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "relayerFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndSend";
        readonly inputs: readonly [{
            readonly name: "chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "bonderFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "destinationAmountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "destinationDeadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IHopBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IHopBridge;
}
