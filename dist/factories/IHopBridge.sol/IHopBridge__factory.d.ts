import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IHopBridge, IHopBridgeInterface } from "../../IHopBridge.sol/IHopBridge";
export declare class IHopBridge__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bonderFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "send";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "relayerFee";
            readonly type: "uint256";
        }];
        readonly name: "sendToL2";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bonderFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationAmountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationDeadline";
            readonly type: "uint256";
        }];
        readonly name: "swapAndSend";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IHopBridgeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IHopBridge;
}
