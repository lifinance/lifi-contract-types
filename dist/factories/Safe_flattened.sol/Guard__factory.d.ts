import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Guard, GuardInterface } from "../../Safe_flattened.sol/Guard";
export declare class Guard__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "checkAfterExecution";
        readonly inputs: readonly [{
            readonly name: "txHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "success";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "checkTransaction";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "operation";
            readonly type: "uint8";
            readonly internalType: "enum Enum.Operation";
        }, {
            readonly name: "safeTxGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "baseGas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gasPrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "gasToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "refundReceiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "signatures";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "msgSender";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "supportsInterface";
        readonly inputs: readonly [{
            readonly name: "interfaceId";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): GuardInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Guard;
}
