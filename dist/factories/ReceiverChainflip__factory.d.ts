import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ReceiverChainflip, ReceiverChainflipInterface } from "../ReceiverChainflip";
declare type ReceiverChainflipConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ReceiverChainflip__factory extends ContractFactory {
    constructor(...args: ReceiverChainflipConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _chainflipVault: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ReceiverChainflip>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _executor: PromiseOrValue<string>, _chainflipVault: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ReceiverChainflip;
    connect(signer: Signer): ReceiverChainflip__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161131738038061131783398101604081905261002e916100c1565b5f80546001600160a01b0319166001600160a01b038516908117909155158061005e57506001600160a01b038216155b8061007057506001600160a01b038116155b1561008e576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b039182166080521660a05250610101565b80516001600160a01b03811681146100bc575f5ffd5b919050565b5f5f5f606084860312156100d3575f5ffd5b6100dc846100a6565b92506100ea602085016100a6565b91506100f8604085016100a6565b90509250925092565b60805160a0516111d26101455f395f818161010e015261046801525f8181610195015281816107eb0152818161084d0152818161095d01526109c401526111d25ff3fe608060405260043610610096575f3560e01c80637766d1ed11610066578063c34c08e51161004c578063c34c08e514610184578063e30c3978146101b7578063f2fde38b146101e3575f5ffd5b80637766d1ed146100fd5780638da5cb5b14610159575f5ffd5b806301e33667146100a157806323452b9c146100c25780634904ac5f146100d65780637200b829146100e9575f5ffd5b3661009d57005b5f5ffd5b3480156100ac575f5ffd5b506100c06100bb366004610bc8565b610202565b005b3480156100cd575f5ffd5b506100c0610387565b6100c06100e4366004610c4b565b610450565b3480156100f4575f5ffd5b506100c06104ed565b348015610108575f5ffd5b506101307f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b348015610164575f5ffd5b505f546101309073ffffffffffffffffffffffffffffffffffffffff1681565b34801561018f575f5ffd5b506101307f000000000000000000000000000000000000000000000000000000000000000081565b3480156101c2575f5ffd5b506001546101309073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101ee575f5ffd5b506100c06101fd366004610cf2565b6105d1565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610252576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316610309575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146102c3576040519150601f19603f3d011682016040523d82523d5f602084013e6102c8565b606091505b5050905080610303576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5061032a565b61032a73ffffffffffffffffffffffffffffffffffffffff8416838361072d565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146103d7576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610426576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146104bf576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f80806104ce86880188610e52565b9250925092506104e18383878488610776565b50505050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461053f576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610621576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661066e576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036106bd576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661076d576390b8ec185f526004601cfd5b5f603452505050565b5f73ffffffffffffffffffffffffffffffffffffffff841673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee146107ae57836107b0565b5f5b905073ffffffffffffffffffffffffffffffffffffffff811615806109875761081073ffffffffffffffffffffffffffffffffffffffff83167f000000000000000000000000000000000000000000000000000000000000000085610ab9565b6040517f4f91bc2b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690634f91bc2b90610888908a908a9087908a9060040161103b565b5f604051808303815f87803b15801561089f575f5ffd5b505af19250505080156108b0575060015b61093a576108d573ffffffffffffffffffffffffffffffffffffffff8316858561072d565b6040805173ffffffffffffffffffffffffffffffffffffffff80851682528616602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2610941565b5050610ab2565b61098273ffffffffffffffffffffffffffffffffffffffff83167f00000000000000000000000000000000000000000000000000000000000000005f610b37565b610aaf565b6040517f4f91bc2b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690634f91bc2b908590610a01908b908b9088908b9060040161103b565b5f604051808303818588803b158015610a18575f5ffd5b505af193505050508015610a2a575060015b61093a57610a4e73ffffffffffffffffffffffffffffffffffffffff851684610b77565b6040805173ffffffffffffffffffffffffffffffffffffffff80851682528616602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b50505b5050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661076d575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661076d57633e3f8f735f526004601cfd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661076d57633e3f8f735f526004601cfd5b5f385f3884865af1610b905763b12d13eb5f526004601cfd5b5050565b73ffffffffffffffffffffffffffffffffffffffff81168114610bb5575f5ffd5b50565b8035610bc381610b94565b919050565b5f5f5f60608486031215610bda575f5ffd5b8335610be581610b94565b92506020840135610bf581610b94565b929592945050506040919091013590565b5f5f83601f840112610c16575f5ffd5b50813567ffffffffffffffff811115610c2d575f5ffd5b602083019150836020828501011115610c44575f5ffd5b9250929050565b5f5f5f5f5f5f5f60a0888a031215610c61575f5ffd5b873563ffffffff81168114610c74575f5ffd5b9650602088013567ffffffffffffffff811115610c8f575f5ffd5b610c9b8a828b01610c06565b909750955050604088013567ffffffffffffffff811115610cba575f5ffd5b610cc68a828b01610c06565b9095509350506060880135610cda81610b94565b96999598509396929591949193505060809091013590565b5f60208284031215610d02575f5ffd5b8135610d0d81610b94565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b60405160e0810167ffffffffffffffff81118282101715610d6457610d64610d14565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610db157610db1610d14565b604052919050565b5f82601f830112610dc8575f5ffd5b813567ffffffffffffffff811115610de257610de2610d14565b610e1360207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610d6a565b818152846020838601011115610e27575f5ffd5b816020850160208301375f918101602001919091529392505050565b80358015158114610bc3575f5ffd5b5f5f5f60608486031215610e64575f5ffd5b83359250602084013567ffffffffffffffff811115610e81575f5ffd5b8401601f81018613610e91575f5ffd5b803567ffffffffffffffff811115610eab57610eab610d14565b8060051b610ebb60208201610d6a565b91825260208184018101929081019089841115610ed6575f5ffd5b6020850192505b83831015610fd257823567ffffffffffffffff811115610efb575f5ffd5b850160e0818c037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0011215610f2e575f5ffd5b610f36610d41565b610f4260208301610bb8565b8152610f5060408301610bb8565b6020820152610f6160608301610bb8565b6040820152610f7260808301610bb8565b606082015260a0820135608082015260c082013567ffffffffffffffff811115610f9a575f5ffd5b610fa98d602083860101610db9565b60a083015250610fbb60e08301610e43565b60c082015283525060209283019290910190610edd565b8096505050505050610fe660408501610bb8565b90509250925092565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b5f608082018683526080602084015280865180835260a08501915060a08160051b8601019250602088015f5b8281101561116a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60878603018452815173ffffffffffffffffffffffffffffffffffffffff815116865273ffffffffffffffffffffffffffffffffffffffff602082015116602087015273ffffffffffffffffffffffffffffffffffffffff60408201511660408701526060810151611119606088018273ffffffffffffffffffffffffffffffffffffffff169052565b506080810151608087015260a081015160e060a088015261113d60e0880182610fef565b905060c0820151915061115460c088018315159052565b9550506020938401939190910190600101611067565b5050505073ffffffffffffffffffffffffffffffffffffffff948516604084015292909316606090910152939250505056fea2646970667358221220deb666f19e59d173cb7df9a5e846ea6a54b43ea539c34aaa5d1863fcfe73a7a064736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_executor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_chainflipVault";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "cfReceive";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "chainflipVault";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "executor";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IExecutor";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdrawToken";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "TokensWithdrawn";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address payable";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "ExternalCallFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): ReceiverChainflipInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReceiverChainflip;
}
export {};
