import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAxelarGasService, IAxelarGasServiceInterface } from "../IAxelarGasService";
export declare class IAxelarGasService__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "InvalidAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAmounts";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCodeHash";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidImplementation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotCollector";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotProxy";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NothingReceived";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SetupFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TransferFailed";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "logIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "gasToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "gasFeeAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "refundAddress";
            readonly type: "address";
        }];
        readonly name: "GasAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sourceAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "destinationChain";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "destinationAddress";
            readonly type: "string";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "payloadHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "gasToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "gasFeeAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "refundAddress";
            readonly type: "address";
        }];
        readonly name: "GasPaidForContractCall";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sourceAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "destinationChain";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "destinationAddress";
            readonly type: "string";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "payloadHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "gasToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "gasFeeAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "refundAddress";
            readonly type: "address";
        }];
        readonly name: "GasPaidForContractCallWithToken";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "logIndex";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "gasFeeAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "refundAddress";
            readonly type: "address";
        }];
        readonly name: "NativeGasAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sourceAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "destinationChain";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "destinationAddress";
            readonly type: "string";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "payloadHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "gasFeeAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "refundAddress";
            readonly type: "address";
        }];
        readonly name: "NativeGasPaidForContractCall";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sourceAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "destinationChain";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "destinationAddress";
            readonly type: "string";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "payloadHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "gasFeeAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "refundAddress";
            readonly type: "address";
        }];
        readonly name: "NativeGasPaidForContractCallWithToken";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "txIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "gasToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "gasFeeAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "refundAddress";
            readonly type: "address";
        }];
        readonly name: "addGas";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "txHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "logIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "refundAddress";
            readonly type: "address";
        }];
        readonly name: "addNativeGas";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "address[]";
            readonly name: "tokens";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "amounts";
            readonly type: "uint256[]";
        }];
        readonly name: "collectFees";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "contractId";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "gasCollector";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "implementation";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "destinationChain";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "destinationAddress";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "payload";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "gasToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "gasFeeAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "refundAddress";
            readonly type: "address";
        }];
        readonly name: "payGasForContractCall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "destinationChain";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "destinationAddress";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "payload";
            readonly type: "bytes";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "gasToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "gasFeeAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "refundAddress";
            readonly type: "address";
        }];
        readonly name: "payGasForContractCallWithToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "destinationChain";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "destinationAddress";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "payload";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "refundAddress";
            readonly type: "address";
        }];
        readonly name: "payNativeGasForContractCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "destinationChain";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "destinationAddress";
            readonly type: "string";
        }, {
            readonly internalType: "bytes";
            readonly name: "payload";
            readonly type: "bytes";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "refundAddress";
            readonly type: "address";
        }];
        readonly name: "payNativeGasForContractCallWithToken";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "refund";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "setup";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "newImplementationCodeHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "params";
            readonly type: "bytes";
        }];
        readonly name: "upgrade";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IAxelarGasServiceInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAxelarGasService;
}
