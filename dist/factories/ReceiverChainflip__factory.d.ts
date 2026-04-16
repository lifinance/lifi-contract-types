import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ReceiverChainflip, ReceiverChainflipInterface } from "../ReceiverChainflip";
type ReceiverChainflipConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161149438038061149483398101604081905261002e916100c1565b5f80546001600160a01b0319166001600160a01b038516908117909155158061005e57506001600160a01b038216155b8061007057506001600160a01b038116155b1561008e576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b039182166080521660a05250610101565b80516001600160a01b03811681146100bc575f5ffd5b919050565b5f5f5f606084860312156100d3575f5ffd5b6100dc846100a6565b92506100ea602085016100a6565b91506100f8604085016100a6565b90509250925092565b60805160a05161134f6101455f395f818161010e01526103d401525f818161019501528181610743015281816107a5015281816108b5015261091c015261134f5ff3fe608060405260043610610096575f3560e01c80637766d1ed11610066578063c34c08e51161004c578063c34c08e514610184578063e30c3978146101b7578063f2fde38b146101e3575f5ffd5b80637766d1ed146100fd5780638da5cb5b14610159575f5ffd5b806301e33667146100a157806323452b9c146100c25780634904ac5f146100d65780637200b829146100e9575f5ffd5b3661009d57005b5f5ffd5b3480156100ac575f5ffd5b506100c06100bb366004610d21565b610202565b005b3480156100cd575f5ffd5b506100c06102f3565b6100c06100e4366004610da4565b6103bc565b3480156100f4575f5ffd5b506100c0610459565b348015610108575f5ffd5b506101307f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b348015610164575f5ffd5b505f546101309073ffffffffffffffffffffffffffffffffffffffff1681565b34801561018f575f5ffd5b506101307f000000000000000000000000000000000000000000000000000000000000000081565b3480156101c2575f5ffd5b506001546101309073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101ee575f5ffd5b506100c06101fd366004610e4b565b61053d565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610252576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805f0361028b576040517f1f2a200500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610296838383610699565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610343576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610392576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461042b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f808061043a86880188610fb4565b92509250925061044d83838784886106ce565b50505050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146104ab576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461058d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166105da576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610629576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b73ffffffffffffffffffffffffffffffffffffffff83166106c3576106be8282610a11565b505050565b6106be838383610a82565b5f73ffffffffffffffffffffffffffffffffffffffff841673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee146107065783610708565b5f5b905073ffffffffffffffffffffffffffffffffffffffff811615806108df5761076873ffffffffffffffffffffffffffffffffffffffff83167f000000000000000000000000000000000000000000000000000000000000000085610bcd565b6040517f4f91bc2b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690634f91bc2b906107e0908a908a9087908a9060040161119d565b5f604051808303815f87803b1580156107f7575f5ffd5b505af1925050508015610808575060015b6108925761082d73ffffffffffffffffffffffffffffffffffffffff83168585610c54565b6040805173ffffffffffffffffffffffffffffffffffffffff80851682528616602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a2610899565b5050610a0a565b6108da73ffffffffffffffffffffffffffffffffffffffff83167f00000000000000000000000000000000000000000000000000000000000000005f610c94565b610a07565b6040517f4f91bc2b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690634f91bc2b908590610959908b908b9088908b9060040161119d565b5f604051808303818588803b158015610970575f5ffd5b505af193505050508015610982575060015b610892576109a673ffffffffffffffffffffffffffffffffffffffff851684610cd4565b6040805173ffffffffffffffffffffffffffffffffffffffff80851682528616602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b50505b5050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610a5e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a7e73ffffffffffffffffffffffffffffffffffffffff831682610cd4565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216610acf576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b632b6653dc46148015610b0b575073ffffffffffffffffffffffffffffffffffffffff831673a614f803b6fd780986a42c78ec9c7f77e6ded13c145b15610bac576040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af1158015610b82573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ba691906112fe565b50505050565b6106be73ffffffffffffffffffffffffffffffffffffffff84168383610c54565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610c4b575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610c4b57633e3f8f735f526004601cfd5b5f603452505050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610c4b576390b8ec185f526004601cfd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610c4b57633e3f8f735f526004601cfd5b5f385f3884865af1610a7e5763b12d13eb5f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff81168114610d0e575f5ffd5b50565b8035610d1c81610ced565b919050565b5f5f5f60608486031215610d33575f5ffd5b8335610d3e81610ced565b92506020840135610d4e81610ced565b929592945050506040919091013590565b5f5f83601f840112610d6f575f5ffd5b50813567ffffffffffffffff811115610d86575f5ffd5b602083019150836020828501011115610d9d575f5ffd5b9250929050565b5f5f5f5f5f5f5f60a0888a031215610dba575f5ffd5b873563ffffffff81168114610dcd575f5ffd5b9650602088013567ffffffffffffffff811115610de8575f5ffd5b610df48a828b01610d5f565b909750955050604088013567ffffffffffffffff811115610e13575f5ffd5b610e1f8a828b01610d5f565b9095509350506060880135610e3381610ced565b96999598509396929591949193505060809091013590565b5f60208284031215610e5b575f5ffd5b8135610e6681610ced565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b60405160e0810167ffffffffffffffff81118282101715610ebd57610ebd610e6d565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610f0a57610f0a610e6d565b604052919050565b5f82601f830112610f21575f5ffd5b813567ffffffffffffffff811115610f3b57610f3b610e6d565b610f6c60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610ec3565b818152846020838601011115610f80575f5ffd5b816020850160208301375f918101602001919091529392505050565b8015158114610d0e575f5ffd5b8035610d1c81610f9c565b5f5f5f60608486031215610fc6575f5ffd5b83359250602084013567ffffffffffffffff811115610fe3575f5ffd5b8401601f81018613610ff3575f5ffd5b803567ffffffffffffffff81111561100d5761100d610e6d565b8060051b61101d60208201610ec3565b91825260208184018101929081019089841115611038575f5ffd5b6020850192505b8383101561113457823567ffffffffffffffff81111561105d575f5ffd5b850160e0818c037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0011215611090575f5ffd5b611098610e9a565b6110a460208301610d11565b81526110b260408301610d11565b60208201526110c360608301610d11565b60408201526110d460808301610d11565b606082015260a0820135608082015260c082013567ffffffffffffffff8111156110fc575f5ffd5b61110b8d602083860101610f12565b60a08301525061111d60e08301610fa9565b60c08201528352506020928301929091019061103f565b809650505050505061114860408501610d11565b90509250925092565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b5f608082018683526080602084015280865180835260a08501915060a08160051b8601019250602088015f5b828110156112cc577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60878603018452815173ffffffffffffffffffffffffffffffffffffffff815116865273ffffffffffffffffffffffffffffffffffffffff602082015116602087015273ffffffffffffffffffffffffffffffffffffffff6040820151166040870152606081015161127b606088018273ffffffffffffffffffffffffffffffffffffffff169052565b506080810151608087015260a081015160e060a088015261129f60e0880182611151565b905060c082015191506112b660c088018315159052565b95505060209384019391909101906001016111c9565b5050505073ffffffffffffffffffffffffffffffffffffffff9485166040840152929093166060909101529392505050565b5f6020828403121561130e575f5ffd5b8151610e6681610f9c56fea26469706673582212202fde367a2b66607d177cea723bde9d91e0a3a04cdefeb9763eed6c1fe888ec4964736f6c634300081d0033";
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
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
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
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
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
    }, {
        readonly type: "error";
        readonly name: "ZeroAmount";
        readonly inputs: readonly [];
    }];
    static createInterface(): ReceiverChainflipInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReceiverChainflip;
}
export {};
